import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://neondb_owner:npg_sV0ZnxMyFPX1@ep-tiny-shape-b4e4nht2-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const sql = neon(DATABASE_URL);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      length,
      productGrade,
      quantity,
      state,
      city,
      pincode,
      phone,
      email,
      notes,
      deliveryTerms,
      urgency,
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and Phone number are required.' },
        { status: 400 }
      );
    }

    const bookingId = `wb-${Date.now()}`;
    const bookingNumber = `CCF-BK-${Math.floor(1000 + Math.random() * 9000)}`;
    const grade = productGrade || length || '8" - 12" Standard Length (200-300mm) Commercial ⭐';
    const qty = quantity || '1 Truckload / 10 Tons';
    const estVal = parseFloat(body.estimatedValue || 0) || 450000;

    await sql`
      INSERT INTO web_bookings (
        id, booking_number, customer_name, company_name, phone, email,
        product_grade, quantity, destination_state, destination_city, pincode,
        delivery_terms, urgency, status, estimated_value, notes
      ) VALUES (
        ${bookingId},
        ${bookingNumber},
        ${name},
        ${company || ''},
        ${phone},
        ${email || ''},
        ${grade},
        ${qty},
        ${state || 'India'},
        ${city || ''},
        ${pincode || ''},
        ${deliveryTerms || 'Door Delivery / Transporter Godown'},
        ${urgency || 'Immediate Dispatch'},
        'PENDING',
        ${estVal},
        ${notes || ''}
      );
    `;

    return NextResponse.json({
      success: true,
      bookingNumber,
      bookingId,
      message: 'Quotation request registered and pushed to CCF Admin Panel live database.',
    });
  } catch (error: any) {
    console.error('Error saving web booking in Neon PostgreSQL:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Database error occurred.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const rows = await sql`
      SELECT * FROM web_bookings
      ORDER BY created_at DESC
      LIMIT 100;
    `;
    return NextResponse.json({ success: true, bookings: rows });
  } catch (error: any) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
