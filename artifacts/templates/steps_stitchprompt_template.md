# Stitch Design Prompt

## Project: {{PROJECT_NAME}}

## CRITICAL: Output Requirements
**IMPORTANT:** Generate 3 DISTINCT design variations (Version A, Version B, Version C).
**LANGUAGE:** All content MUST be in {{CLIENT_LANGUAGE from UCO.client_info.language}} - RUSSIAN if "ru", ENGLISH if "en", etc.
**CONTENT SOURCE:** Use ONLY content from UCO - DO NOT invent features, pages, or menu items not specified in UCO.

## Target Audience & Context
**Target Audience:** {{TARGET_AUDIENCE from UCO - full description}}
**Primary Goal:** {{PRIMARY_KPI from UCO}}
**Value Proposition:** {{VALUE_PROPOSITION from UCO - exact text}}

## Brand Identity
- **Emotions to express:** {{EMOTIONS from UCO - list all}}
- **Competitive advantage:** {{COMPETITIVE_ADVANTAGE from UCO - full text}}
- **Color suggestions:** {{COLORS from UCO or suggest based on emotions}}
- **Typography style:** {{FONT_STYLE based on brand emotions}}

## Full Page Structure (copy ALL sections from UCO)

### Section 1: Hero
- **Headline:** "{{HERO_HEADLINE from UCO - EXACT TEXT}}"
- **Subheadline:** "{{HERO_SUBHEADLINE from UCO - EXACT TEXT}}"
- **CTA Button:** "{{CTA_PRIMARY from UCO - EXACT TEXT}}"
- **Background style:** {{suggest based on brand emotions}}
- **Additional content:** {{any other content from UCO.content.pages.home.sections.hero}}

### Section 2: {{SECTION_NAME from UCO}}
**Copy ENTIRE section from UCO including:**
- Section title: "{{EXACT TEXT}}"
- Section description: "{{EXACT TEXT}}"
- All bullet points/features (if any)
- All content elements
- Visual style suggestions based on brand emotions

### Section 3: {{SECTION_NAME from UCO}}
{{REPEAT for EACH section in UCO.content.pages.home.sections}}

### Section 4: Footer
**Include ONLY elements specified in UCO:**
- Links: {{list from UCO}}
- Contact info: {{from UCO}}
- DO NOT add: Blog, Free Consultation, or other items not in UCO

## Design Variations Instructions

Create 3 COMPLETE variations:

**Version A - Bold & Modern:**
- Strong typography
- High contrast colors
- Geometric shapes
- All sections included

**Version B - Minimal & Clean:**
- Lots of white space
- Subtle colors
- Simple layouts
- All sections included

**Version C - Vibrant & Dynamic:**
- Gradient backgrounds
- Playful elements
- Rich colors
- All sections included

## Technical Requirements
- Fully responsive (mobile-first)
- Modern, clean HTML5 + CSS3
- Accessibility (WCAG AA)
- Performance-optimized

## Output Format
ONE HTML file containing THREE complete page variations.
Each variation wrapped in a section with clear heading: "Version A", "Version B", "Version C".
All CSS internal (within <style> tag).