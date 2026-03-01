# IMPLEMENTATION Plan - Visual and Behavioral Updates

This document outlines the plan to update the React + Vite + HVAC project with new features and layout refinements as requested.

## ✅ Checklist

### Change 1: "Learn More" Button & Modal
- [ ] Create `src/components/LearnMoreModal.tsx` following the `BookingModal` dialog pattern.
- [ ] Implement the persuasive content in the modal with the specified bullet points.
- [ ] Update `src/components/Hero.tsx` to include state for controlling the Learn More modal.
- [ ] Wire the "Learn More" button in the Hero section to open the new modal.

### Change 2: Replace CTA in "Why Choose Us" (Trust)
- [ ] Locate the `Trust` component in `src/components/Trust.tsx`.
- [ ] Replace the "Schedule Your Visit Now" button with a "View Reviews" button.
- [ ] Ensure the new button has a secondary style and does not perform any action.

### Change 3: Alternating Timeline Layout
- [ ] Identify the process component (`src/components/DiagnosticProcess.tsx`).
- [ ] Update the desktop layout (`lg:` breakpoint) to alternate cards between left and right sides of the timeline.
- [ ] Maintain a centered vertical timeline and dots on desktop.
- [ ] Ensure the mobile layout remains a single column.
- [ ] Use `index % 2` logic to toggle CSS classes for alternating sides.

---

## 🛠 Detailed Tasks

### 1. Create `LearnMoreModal.tsx`
- **File**: `src/components/LearnMoreModal.tsx`
- **Pattern**: Same as `BookingModal.tsx` using `@/components/ui/dialog`.
- **Content**:
    - Title: "Why Schedule a Diagnostic Visit"
    - List:
        - Prevent expensive system failure
        - Identify inefficiency increasing energy bills
        - Catch refrigerant and airflow problems early
        - Understand repair options before committing
        - Protect equipment lifespan

### 2. Update `Hero.tsx`
- **File**: `src/components/Hero.tsx`
- **State**: Add `useState(false)` for `isLearnMoreOpen`.
- **Button**: Change `onClick` of the "Learn More" button to open the modal.
- **Render**: Add the `<LearnMoreModal />` component.

### 3. Replace CTA in `Trust.tsx`
- **File**: `src/components/Trust.tsx`
- **Change**: Replace the `Button` with "View Reviews".
- **Style**: Use `variant="outline"` or similar secondary styling consistent with the design system.

### 4. Alternating Timeline in `DiagnosticProcess.tsx`
- **File**: `src/components/DiagnosticProcess.tsx`
- **Logic**: 
    - For index 0, 2, 4 (even): Card on left, empty space on right.
    - For index 1, 3, 5 (odd): Card on right, empty space on left.
- **Classes**: Use Tailwind's `order-first`, `order-last`, or `col-start` utilities on the `lg` breakpoint.
