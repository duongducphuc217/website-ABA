# Design

## Design System

We use the existing Bootstrap variables mapped to CSS custom properties along with custom utility overrides to keep our UI clean, responsive, and visually cohesive.

## Brand Colors

- **ABA Blue** (Primary/Main): `hsl(209, 94%, 41%)` - Represents trust, education, and professionalism. Used for primary branding elements, dark section overlays, and key badges.
- **ABA Orange** (Secondary/Main-Two): `hsl(20, 89%, 59%)` - Represents energy, youth, and active play. Used for call-to-actions, highlight icons, active timeline elements, and target markers.
- **ABA Green** (Tertiary/Main-Three): `hsl(144, 56%, 42%)` - Represents growth and specialized skills. Used for specific sub-components and badges.
- **Neutral dark**: `#0f172a` (Slate 900) for heading typography.
- **Neutral body**: `#475569` (Slate 600) / `#334155` (Slate 700) for body text.
- **Soft Light Background**: `#f8fafc` (Slate 50) and `#f1f5f9` (Slate 100).

## Typography

- **Primary Font**: `Inter`, sans-serif. Used for both headings and body text.
- **Scale**:
  - H1 / Display: Large clamp-based headings (`clamp(2.5rem, 4vw, 4rem)`) for bold, clear hero typography.
  - H2: Subheadings (`clamp(1.75rem, 3vw, 2.5rem)`).
  - H3 / Card Titles: Section subtitles (`clamp(1.25rem, 2vw, 1.75rem)`).
  - Body: 16px–18px range (`1rem` to `1.125rem`) with `1.75` line-height for optimal reading.
- **Rules**:
  - Use `text-wrap: balance` for display titles.
  - Use `text-wrap: pretty` for long body paragraphs to prevent orphaned words.

## Component Layouts

- **Hero Banner**: A full-height/viewport-adapted hero with a dark overlay and high-contrast text. Center-aligned for clean focus.
- **Grid Layouts**: Layouts for Core Values and Galleries use CSS Grid with `repeat(auto-fit, minmax(280px, 1fr))` to dynamically adapt across breakpoints without hardcoded responsive classes.
- **Timelines**: Vertically stacked items with high-contrast connecting borders using ABA Blue and ABA Orange indicators.
- **Interactive Cards**: Flat design with 1px slate borders, subtle box-shadows, and smooth micro-animations on hover (scale borders/box shadows, do not scale images).

## Animations & Transitions

- **Transitions**: Use smooth cubic-bezier transitions for hover effects: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Framer Motion**:
  - Fade-in-up effect on scroll: initial `opacity: 0, y: 30` to animate to `opacity: 1, y: 0` when in viewport.
  - Staggered child animations: delays of `0.1s` per item to establish clear visual reading order.
