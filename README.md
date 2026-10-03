# Chinnathambi Coir Fibre (CCF) - Modern Next.js & Tailwind CSS Web Application

A modern B2B wholesale platform for **Chinnathambi Coir Fibre (CCF)**, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🌟 Brand & Technical Highlights

- **Heritage & Trust**: 35+ Years Coir Field Experience • Direct Processing Plant in Kanyakumari District, Tamil Nadu (Est. 6 Years Ago).
- **Core Product**: Premium Dyed Black Bristle Coir Fibre in Standard Commercial Lengths (8" - 12" / 200 - 300 mm).
- **Manual Hand-Packing**: Strictly 52kg - 56kg manual hand-packed gunny bales without hydraulic crush, preserving raw bristle elasticity.
- **Logistics**: Direct Pan-India truck dispatches across all 28 states.
- **Design System**: Luxury Warm Espresso (`#2C1810`), Caramel Gold (`#C58940`), and Latte Cream (`#F5EBE1`) theme with pill buttons and circular arrow discs.

---

## 🏗️ Architecture & Routes

```
src/
├── app/
│   ├── layout.tsx             # Root layout with Google Fonts, LightboxProvider, Navbar & Footer
│   ├── globals.css            # Tailwind v4 theme definitions and luxury pill button styles
│   ├── page.tsx               # High-converting homepage
│   ├── products/page.tsx      # Commercial 8"-12" standard length catalogue & matrix
│   ├── process/page.tsx       # 5-step factory manufacturing journey & origin story
│   ├── specifications/page.tsx# B2B technical spec suite with glowing QC dials & printable sheet
│   ├── about/page.tsx         # 35+ years heritage & Kanyakumari facility details
│   └── contact/page.tsx       # Interactive quotation RFQ form with instant WhatsApp dispatch
├── components/
│   ├── Navbar.tsx             # Responsive header with route indicator & mobile drawer
│   ├── Footer.tsx             # Rich 4-column footer with factory credentials
│   ├── Hero.tsx               # Hero banner with trust tags & zoomable photo card
│   ├── StatsBar.tsx           # 4-item credential highlight bar
│   ├── OrderCalculator.tsx    # Interactive tonne-to-bale and truckload transit estimator
│   ├── ProductShowcase.tsx    # Standard 8"-12" showcase, progress bars & Kanyakumari advantage
│   ├── AnatomySection.tsx     # Macro bristle anatomy with Fibre Quality photo
│   ├── ProcessTimeline.tsx    # 5-step production walkthrough with actual factory images
│   ├── FactoryGallery.tsx     # Filterable production photo gallery with click-to-zoom
│   ├── SpecificationSuite.tsx # Luxury spec suite with 4 QC dials and print trigger
│   ├── TransportCoverage.tsx  # All-India transport routes
│   ├── RfqSection.tsx         # Direct wholesale quotation form with WhatsApp integration
│   ├── LightboxModal.tsx      # Global accessible click-to-zoom image viewer
│   └── WhatsAppFloating.tsx   # Fixed bottom-right WhatsApp quick order trigger
└── context/
    └── LightboxContext.tsx    # Global state management for photo previews
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `3001` if port 3000 is occupied).

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🖼️ Media & Static Assets
All production photographs are placed in `public/assets/images/`:
- `Standard 8-12.jpg` (Converted high-res commercial bristle standard)
- `Strapped-Black-img.jpg` (Hand-strapped black bristle hanks)
- `Sun-Curing-img.jpg` (Open-air coastal drying beds)
- `Sun-Drying-img.jpg` (Sun-curing yard at Kanyakumari facility)
- `Deep-Black-img.jpg` (Thermal vat black dyeing)
- `hero-section.jpg` (Hero showcase)
- `Fibre Quality.jpg` (Macro bristle fibre anatomy)
- `IMG_3612.jpg` (Stitched Gunny Bales)
- `IMG_3618.jpg` (Factory Warehouse Stock)
