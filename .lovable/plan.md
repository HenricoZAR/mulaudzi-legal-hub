

# Mulaudzi John Incorporated Attorneys — Landing Page (Sections 1–5)

## Overview
A premium, professional law firm landing page. Brand colors: gold (#e09c09), black (#000000), white (#ffffff). Heading font: Playfair Display (serif). Body font: Poppins. Fully responsive.

**All images now available:**
- Logo: MJLogoMain.png
- Hero: jmweb1.jpg (background), hero_1_1.jpg, hero_1_2.png (slide-in images)
- About: about-1-left.jpg (scales of justice), John.jpg (top right), about-1-right-2.jpg (gavel on book), about-circle.png (MJ monogram), about-gavel.png
- Attorneys: glasses.jpg (background), John_1.JPG, Mmoledi2.jpg, David.jpg
- Reference screenshots: 4-Section_4.png, 5-Section_5.png (design reference only, not embedded)

---

## Section 1: Top Bar + Navigation + Hero

### Top Info Bar (black background)
- Left: Phone icon + (011) 258 8846 | Email icon + info@mulaudziattorneys.co.za | Location icon + 21 Woodlands Drive, Woodmead, 2191 — all white with white dividers, gold on hover
- Right: Facebook, LinkedIn, Instagram, X icons — white, gold on hover

### Main Navigation (white background)
- Left: Company logo (MJLogoMain.png)
- Center: Home, About, Practice Area (dropdown with 10 practice areas), Contact
- Right: Search icon in light grey circle (circle turns gold on hover)
- Sticky: becomes transparent background on scroll
- Mobile: hamburger menu

### Hero Content
- Background: jmweb1.jpg with 50% black overlay
- Two alternating animated slides:
  - **Slide 1:** "Trustworthy and Dependable" (gold, small heading font) + "We Provide Customised Solutions…" (white, large heading) — hero_1_1.jpg slides in from right with decorative gold border frame (square top-left, rounded top-right, rounded bottom-left, square bottom-right)
  - **Slide 2:** "Your Guardian In Law" (gold, small heading font) + "To Complex Legal Solutions" (white, large heading) — hero_1_2.png slides in from right with same frame style
- Gold "Contact Us →" CTA button (white bg + black text on hover)
- Testimonial area: 3 overlapping circular placeholder avatars, "More than +2k happy clients" (white), 5 gold stars, "4.5/5 (15k+ Reviews)" (grey, Poppins)
- Bottom-right scroll-down half-circle: black with white downward arrow, turns gold on hover, smooth-scrolls to Section 2

---

## Section 2: About Us (light grey background)

### Left: Image Grid
- Large image on left: about-1-left.jpg (scales of justice) with rounded TL, square TR, rounded BL, rounded BR corners + gold decorative border behind it
- Top right smaller image: John.jpg with rounded TL, rounded TR, square BL, rounded BR corners
- Bottom right smaller image: about-1-right-2.jpg with square TL, rounded TR, rounded BL, rounded BR corners
- Both smaller images equal size with small spacing between them
- Animated rotating circle overlay on top of images: black circle containing about-circle.png (MJ monogram) centered, thin gold border around it, rotating text "Mulaudzi John Incorporated Attorneys" in gold circling continuously, outer gold border

### Right: Content
- "About Us" (gold, heading font, smaller) + "Welcome To Mulaudzi John Incorporated" (black, large heading font)
- Firm description paragraph (Poppins, dark grey): "Mulaudzi John Incorporated Attorneys is a black-owned law firm committed to offering value adding and innovative legal services to its clients. Based in Woodmead, Johannesburg, the firm covers a large spectrum of legal services."
- 4 bullet points with check icons:
  - We help clients understand their legal rights and obligations
  - We provide clients with information, guidance and support
  - All legal documentation are accurate and legally binding
  - Courtroom Representation by our lawyers
- Gold "More About Us →" CTA button (same style as hero CTA)
- Animated gavel (about-gavel.png) floating slowly up and down next to CTA, rotated so gavel faces left

---

## Section 3: Stats Counter Bar (white background)

- Gold (#e09c09) counter bar with black text and legal icons
- Four counters animating from 0 on scroll into view:
  - 5k — Cases Done (with legal icon)
  - 4 — Expert Attorneys (with legal icon)
  - 2k+ — Happy Clients (with legal icon)
  - 9 — Provinces Served (with legal icon)
- The floating gavel from Section 2 extends behind/overlaps this counter bar

---

## Section 4: Services / Practice Areas (white background)

- Centered heading: "What We Do" (gold, heading font) + "Overview Of Our Services" (black, large heading font)
- 10 equal-sized cards, 3 per row (as per reference screenshot 4-Section_4.png), last row with 1 card
- Each card (light grey background, rounded corners):
  - Gold legal icon in white circle
  - Service title (heading font, black)
  - Description text (Poppins, dark grey, left-aligned)
  - "Read More →" text link (black, no background)
  - Gold bottom border accent on rounded bottom corners
- **Hover state:** Card background → black, text → white, title → gold on hover, "Read More" → gold on hover, icon: gold → white, white circle → gold. Reverts on mouse leave.
- 10 cards: Public Law, Commercial & Corporate Law, Employment Law, Company Secretarial Law, Aviation & Insurance Law, General Litigation, Debt Collection, Liquidations & Insolvency, Deceased Estates & Wills, ICT & Regulation — each with their full specified descriptions
- Mobile: single column stack

---

## Section 5: Our Attorneys (glasses.jpg background with 50% black overlay)

- **Left side:**
  - "Our Attorneys" (gold, heading font)
  - "Qualified Team, Proven Results" (white, large heading font)
  - "See Attorneys →" gold CTA button (white bg + black text on hover)
- **Right side:** 3 attorney cards (as per reference screenshot 5-Section_5.png), sliding in from right with left/right navigation arrows
  - Card 1: John_1.JPG — Mr. John Mulaudzi, Director
  - Card 2: Mmoledi2.jpg — Mr. Mmoledi Malokane, Consultant
  - Card 3: David.jpg — Mr. David Mohale, Candidate Attorney
  - Cards: rounded corners all around, image fitted with rounded corners, white bottom area with name (dark grey) and title (dark grey, smaller)
  - Gold bottom border accent on bottom corners
  - **Hover:** semi-transparent gold overlay over entire card, name and title centered in white
- Equal spacing between cards
- Mobile: single column stack

---

## Technical Approach
- Single-page layout with smooth scroll between sections
- CSS animations for hero slides, counter increments, gavel float, rotating text badge
- Intersection Observer for scroll-triggered animations (counters, card slide-ins)
- Google Fonts: Playfair Display + Poppins
- All uploaded images used directly — no placeholders
- Fully responsive following the provided mobile mockup references
- **Scope:** Sections 1–5 only — remaining sections and footer to follow in a later phase

