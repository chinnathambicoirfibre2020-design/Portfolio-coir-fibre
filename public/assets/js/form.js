/**
 * Wholesale B2B Quotation Form & Enquiry Handler
 * Supports direct email dispatch and instant WhatsApp quote generation with All-India logistics details
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('qf');
  const whatsappBtn = document.getElementById('btnWhatsappQuote');

  if (!form) return;

  const SALES_EMAIL = 'chinnathambicoir@gmail.com';
  const SALES_WHATSAPP_NUMBER = '919487371259'; // CCF WhatsApp Helpline

  // Standard Email Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = getFormDataObject(formData);

    const emailSubject = `Wholesale Black Bristle Order - ${data.Company || data.Name} (${data['State / City']})`;
    const emailBody = formatEnquiryMessage(data);

    const mailtoUrl = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  });

  // WhatsApp Quote Generation
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = new FormData(form);
      const data = getFormDataObject(formData);
      const message = `*New Wholesale Black Bristle Inquiry*\n\n` + formatEnquiryMessage(data);

      const whatsappUrl = `https://wa.me/${SALES_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }
});

function getFormDataObject(formData) {
  const labels = {
    n: 'Name',
    c: 'Company / Business',
    l: 'Cut Length',
    q: 'Quantity (Tons / Bales)',
    d: 'City / Delivery Location',
    p: 'Phone / WhatsApp'
  };

  const obj = {};
  for (const [key, value] of formData.entries()) {
    const label = labels[key] || key;
    obj[label] = value || 'Not specified';
  }
  obj['Location'] = obj['City / Delivery Location'] || 'Direct Delivery';
  return obj;
}

function formatEnquiryMessage(data) {
  return [
    `Name: ${data.Name || 'N/A'}`,
    `Business: ${data['Company / Business'] || 'N/A'}`,
    `Product: Premium Dyed Black Bristle Coir Fibre (35+ Years Experience)`,
    `Grade / Length: ${data['Cut Length'] || '8" - 12" Standard Commercial Length (200-300mm) ⭐'}`,
    `Quantity: ${data['Quantity (Tons / Bales)'] || 'N/A'}`,
    `Destination / Delivery Location: ${data['City / Delivery Location'] || 'N/A'}`,
    `Phone: ${data['Phone / WhatsApp'] || 'N/A'}`
  ].join('\n');
}

