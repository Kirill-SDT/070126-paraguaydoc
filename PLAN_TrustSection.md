# Trust Section Implementation Plan

## Planning Mode Checklist

- [x] Trust design system elements identified (colors, typography, spacing)
- [x] Background patterns/textures noted (decorative blur circles in CTA)
- [x] Interactive elements identified (card hover animations, CTA button)
- [x] Responsive behavior understood (4-col → 2-col → 1-col grid)
- [x] Existing constants.ts tokens analyzed for reuse

---

## 1. Visual Analysis (from trust.png)

### Section Layout
- **Background**: Light gray `#f8f9fa` (close to existing `#f6f6f8`)
- **Max width**: 1280px, centered
- **Padding**: `py-16 md:py-24`, `px-4 md:px-10`

### Header
- **Title**: "Почему нам доверяют" - `text-3xl md:text-4xl font-black`
- **Subtitle**: Gray text `#616e89`, `text-lg`, max-width 720px

### Trust Cards (4 cards)
- **Grid**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
- **Card styling**:
  - White background
  - Border: `border-[#dbdee6]` (light gray)
  - Border radius: `rounded-xl`
  - Padding: `p-6`
  - Hover: `shadow-lg`, `-translate-y-1`, `transition-all duration-300`
- **Icon container**: `size-12 rounded-full bg-primary/10 text-primary`
- **Title**: `text-lg font-bold`
- **Description**: `text-sm text-[#616e89]`

### Telegram CTA Banner
- **Container**: `rounded-2xl bg-primary p-8 md:p-12 lg:p-16`
- **Decorative elements**: Two blur circles (white/10, black/10) with `blur-3xl`
- **Layout**: Flex row on md+, column on mobile
- **Title**: White, `text-3xl md:text-4xl font-black`
- **Subtitle**: White/90, `text-lg`
- **Button**: White bg, primary text, `px-8 py-4 rounded-xl`, hover scale effect

---

## 2. Reusable Tokens from constants.ts

### Colors (already exist)
- `COLORS.primary` → `#2463eb` ✓
- `COLORS.backgroundLight` → `#f6f6f8` ✓ (close enough to `#f8f9fa`)

### Brand (already exists)
- `BRAND.telegramUrl` → `https://t.me/Paraguaydoc` ✓

### NEW tokens to add
```typescript
export const TRUST_CONTENT = {
  title: 'Почему нам доверяют',
  subtitle: 'Мы ценим ваше доверие и строим работу на принципах честности и открытости. Наш опыт — ваша безопасность.',
}

export const TRUST_SIGNALS = [
  {
    id: 'transparency',
    icon: 'visibility',
    title: 'Прозрачность на каждом этапе',
    description: 'Вы всегда знаете, на каком этапе находятся ваши документы, сколько времени осталось, что происходит дальше',
  },
  // ... 3 more
]

export const TELEGRAM_CTA = {
  title: 'Посмотрите наши реальные обновления и отзывы',
  subtitle: 'Присоединяйтесь к нашему сообществу в Telegram...',
  buttonText: 'Перейти в Telegram-канал',
}
```

---

## 3. Component Structure

```
src/components/TrustSection.tsx
├── TrustSection (main)
│   ├── Section header (title + subtitle)
│   ├── Trust cards grid (4 cards)
│   └── TelegramCTA sub-component
```

### TypeScript Interface
```typescript
interface TrustSignal {
  id: string
  icon: string
  title: string
  description: string
}
```

---

## 4. Implementation Steps

1. **Update constants.ts**
   - Add `TRUST_CONTENT`, `TRUST_SIGNALS`, `TELEGRAM_CTA`

2. **Create TrustSection.tsx**
   - Import constants
   - Build responsive grid for trust cards
   - Implement hover animations
   - Build Telegram CTA with decorative elements

3. **Update page.tsx**
   - Add TrustSection after ChecklistSection

4. **Test**
   - Visual comparison with screenshot
   - Hover animations working
   - Responsive breakpoints (375px, 768px, 1024px)
   - Dark mode support

---

## 5. Key Visual Details to Preserve

| Element | CSS Classes |
|---------|-------------|
| Section bg | `bg-[#f8f9fa] dark:bg-[#161b26]` |
| Card border | `border border-[#dbdee6] dark:border-gray-700` |
| Card hover | `hover:shadow-lg hover:-translate-y-1 transition-all duration-300` |
| Icon bg | `bg-primary/10` |
| CTA blur circles | `blur-3xl`, positioned with `-mr-16 -mt-16` and `-ml-16 -mb-16` |
| CTA button hover | `hover:scale-105` |

---

## 6. Files to Create/Modify

| File | Action |
|------|--------|
| `src/lib/constants.ts` | ADD trust section constants |
| `src/components/TrustSection.tsx` | CREATE new component |
| `src/app/page.tsx` | ADD TrustSection import and usage |
