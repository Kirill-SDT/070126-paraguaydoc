# Project Rules for Claude Code

## Critical Workflow Rules

1. **ALWAYS** read this file first
2. **ALWAYS** use Planning Mode for UCO, VAL, Blueprint generation
3. **NEVER** generate entire project in one prompt - decompose
4. **ALWAYS** test after each change
5. **ALWAYS** commit working changes immediately

## Project Structure

- artifacts/: JSON artifacts (UCO, VAL, QA Plan, Change Impact Report)
- artifacts/stitch/: Design files from Stitch
- src/: Generated code
- .github/workflows/: CI/CD

## Stack

- Frontend: NextJS 14 + TypeScript + TailwindCSS
- Styling: TailwindCSS (mobile-first)
- Components: Functional components with hooks
- State: React useState / useContext

## Conventions

- Component files: PascalCase (HeroSection.tsx)
- Utility files: camelCase (formatDate.ts)
- Styles: TailwindCSS classes, no custom CSS unless necessary
- TypeScript: strict mode, all props typed

## Testing Requirements

- Visual check after every change
- Lighthouse score > 90
- Mobile responsive (375px, 768px, 1024px)
- Keyboard navigation working

## Commit Message Format

- `init:` - Project initialization
- `step X:` - Meta-plan step completion (основные вехи workflow)
- `feat:` - New feature (промежуточные изменения внутри шага)
- `fix:` - Bug fix (исправления ошибок)
- `update:` - Artifact update
- `analysis:` - Change impact analysis
- `ci:` - CI/CD changes

## Usage Guidelines

**Используйте `step X:`** для финальных коммитов, завершающих шаг:
- `step 1: client answers received`
- `step 2: UCO v2.0.0 created`
- `step 6: v0 code generation completed`
- `step 7: QA testing completed`

**Используйте `feat:`** для промежуточных изменений внутри шага:
- `feat: hero section implemented` (внутри Шага 6)
- `feat: add footer component` (внутри Шага 6)

**Используйте `fix:`** для исправлений ошибок:
- `fix: CA002 - corrected CTA button text` (в Шаге 8)
- `fix: VR001 - update primary color to match VAL`

## Known Issues & Gotchas

[Add project-specific notes here as you discover them]