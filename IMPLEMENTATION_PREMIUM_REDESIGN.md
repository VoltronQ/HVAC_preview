# IMPLEMENTATION Plan - Premium Design & Experience Redesign

This document outlines the strategy for elevating the HVAC project from a standard landing page to a **premium, world-class digital experience**.

## ✅ Checklist

### Phase 1: Typography & Foundation
- [ ] Import "Outfit" (Google Fonts) for headlines and "Inter" for UI text.
- [ ] Define custom "Glassmorphism" utility classes in `index.css`.
- [ ] Implement a multi-layered shadow system for deep visual hierarchy.
- [ ] Define high-fidelity color tokens (Deep Navy, Electric Orange, Glacier Blue).

### Phase 2: Hero "Wow" Factor
- [ ] Replace static gradient with a multi-layered **Mesh Gradient** (animated/static).
- [ ] Add a **Trust Badge Row** below the Hero text (NATE, BBB, 5-Star icons).
- [ ] Implement an auto-scrolling **Professional Review Ticker** at the bottom of the Hero section.
- [ ] Add 1px reflective "Edge Highlights" to the glass containers.

### Phase 3: Interactive "Symptom Checker"
- [ ] Refactor `Symptoms.tsx` into a more interactive experience.
- [ ] Add a "Diagnostic Recommender" logic: Selecting symptoms highlights the urgency.
- [ ] Implement "Glow" effects on icon containers that activate on card hover.

### Phase 4: High-Fidelity Process Visuals
- [ ] Upgrade Lucide icons in `DiagnosticProcess.tsx` to **Duo-tone SVGs** with brand colors.
- [ ] Implement a "Cold to Hot" color transition throughout the timeline sections.
- [ ] Add a "Reveal" animation to the Learn More modal content (Progressive Disclosure).

---

## 🛠 Detailed Technical Tasks

### 1. Style & Foundation (`src/index.css`)
- **Fonts**: `@import` Outfit and Inter.
- **Utilities**:
  ```css
  .glass-premium {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  }
  .edge-highlight {
    box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.1);
  }
  ```

### 2. Mesh Gradient Hero (`src/components/Hero.tsx`)
- Use a series of `absolute` positioned divs with `blur-3xl` and varying `top/left/bottom/right` to create a complex, organic mesh background.
- Update the title font to `font-outfit` with `tracking-tightest`.

### 3. Interactive Component Logic (`src/components/Symptoms.tsx`)
- Add state `selectedSymptoms: string[]`.
- When a symptom is clicked, toggle it in state.
- If $>3$ symptoms are selected, a floating badge appears: *"Urgent Diagnostic Recommended."*

### 4. Professional Assets
- Use `generate_image` to create high-quality, shallow-depth-of-field background assets or technician portraits if needed.
- Implement the "View Reviews" button in the Hero as a trigger for a future Testimonial section scroll or modal.

---

## 🎨 Visual Identity Shift
- **Primary**: Deepest Navy (`#050A1A`)
- **Action**: High-Vibrancy Orange (`#FF5C00`)
- **Trust**: Professional Teal/Cyan (`#00D1FF`)
- **Luxury**: Subtle Gold/Silver accents for "Licensed & Certified" badges.
