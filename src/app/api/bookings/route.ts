import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const DATABASE_URL =
  process.env.DATABASE_URL ||
  process.env.NEXT_PUBLIC_DATABASE_URL ||
  'postgresql://neondb_owner:npg_sV0ZnxMyFPX1@ep-tiny-shape-b4e4nht2-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const sql = neon(DATABASE_URL);

// Helper for CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// POST: Register a new quotation / booking lead from Web
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      customerName,
      company,
      companyName,
      length,
      productGrade,
      quantity,
      state,
      destinationState,
      city,
      destinationCity,
      pincode,
      phone,
      email,
      notes,
      deliveryTerms,
      urgency,
      estimatedValue,
    } = body;

    const contactName = (name || customerName || '').trim();
    const contactPhone = (phone || '').trim();

    if (!contactName || !contactPhone) {
      return NextResponse.json(
        { success: false, error: 'Contact Name and Phone number are required fields.' },
        { status: 400, headers: corsHeaders }
      );
    }

    const bookingId = `wb-${Date.now()}`;
    const bookingNumber = `CCF-BK-${Math.floor(1000 + Math.random() * 9000)}`;
    const grade =
      productGrade ||
      length ||
      '8" - 12" Standard Commercial Length (200-300mm) ⭐';
    const qty = quantity || '1 Truckload / 10 Tons';
    const finalCompany = company || companyName || '';
    const finalState = destinationState || state || 'Tamil Nadu';
    const finalCity = destinationCity || city || '';
    const finalPincode = pincode || '';
    const finalDeliveryTerms = deliveryTerms || 'Factory Direct / Godown Dispatch';
    const finalUrgency = urgency || 'Immediate Dispatch';

    // Calculate approximate estimated value based on tonnage if not explicitly provided
    let calculatedEstVal = parseFloat(estimatedValue || 0);
    if (!calculatedEstVal) {
      const matchTons = String(qty).match(/(\d+(\.\d+)?)/);
      if (matchTons) {
        const numVal = parseFloat(matchTons[1]);
        // Default base rate approx ₹45,000 / Ton
        calculatedEstVal = numVal > 0 ? numVal * 45000 : 450000;
      } else {
        calculatedEstVal = 450000;
      }
    }

    await sql`
      INSERT INTO web_bookings (
        id,
        booking_number,
        customer_name,
        company_name,
        phone,
        email,
        product_grade,
        quantity,
        destination_state,
        destination_city,
        pincode,
        delivery_terms,
        urgency,
        status,
        estimated_value,
        notes
      ) VALUES (
        ${bookingId},
        ${bookingNumber},
        ${contactName},
        ${finalCompany},
        ${contactPhone},
        ${email || ''},
        ${grade},
        ${qty},
        ${finalState},
        ${finalCity},
        ${finalPincode},
        ${finalDeliveryTerms},
        ${finalUrgency},
        'PENDING',
        ${calculatedEstVal},
        ${notes || ''}
      );
    `;

    return NextResponse.json(
      {
        success: true,
        bookingNumber,
        bookingId,
        estimatedValue: calculatedEstVal,
        message: 'Quotation request registered and pushed to CCF Admin Panel live database.',
      },
      { headers: corsHeaders }
    );
  } catch (error: any) {
    console.error('Error saving web booking in Neon PostgreSQL:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Database error occurred.' },
      { status: 500, headers: corsHeaders }
    );
  }
}

// GET: Retrieve bookings for API queries or external admin verification
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '100', 10);

    let rows;
    if (status && status !== 'ALL') {
      rows = await sql`
        SELECT * FROM web_bookings
        WHERE status = ${status}
        ORDER BY created_at DESC
        LIMIT ${limit};
      `;
    } else {
      rows = await sql`
        SELECT * FROM web_bookings
        ORDER BY created_at DESC
        LIMIT ${limit};
      `;
    }

    return NextResponse.json(
      { success: true, count: rows.length, bookings: rows },
      { headers: corsHeaders }
    );
  } catch (error: any) {
    console.error('Error fetching bookings from Neon:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: corsHeaders }
    );
  }
}

// PATCH: Update booking status or notes
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, notes, convertedInvoiceId } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Booking ID is required for updates.' },
        { status: 400, headers: corsHeaders }
      );
    }

    await sql`
      UPDATE web_bookings SET
        status = COALESCE(${status}, status),
        notes = COALESCE(${notes}, notes),
        converted_invoice_id = COALESCE(${convertedInvoiceId}, converted_invoice_id),
        updated_at = NOW()
      WHERE id = ${id};
    `;

    return NextResponse.json(
      { success: true, message: `Booking ${id} updated successfully.` },
      { headers: corsHeaders }
    );
  } catch (error: any) {
    console.error('Error updating booking in Neon:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: corsHeaders }
    );
  }
}
