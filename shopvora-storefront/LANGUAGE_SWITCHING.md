# Language Switching Implementation

## Overview

The Shopvora application now supports multiple languages with a proper translation system that persists across page navigation. Users can change the language using the footer language selector, and the selected language will be maintained throughout their session.

## Supported Languages

- **English** (en) - Default
- **Hindi** (hi)
- **Gujarati** (gu)
- **Marathi** (mr)
- **Tamil** (ta)
- **Telugu** (te)

## Implementation Details

### 1. Language Context Provider

The language state is managed using React Context (`src/lib/context/language-context.tsx`):

```typescript
const { language, setLanguage, translations } = useLanguage()
```

### 2. Translation System

Translations are stored in `src/lib/translations.ts` with a structured interface:

```typescript
interface Translations {
  footer: {
    customerService: string
    about: string
    quickLinks: string
    // ... more footer translations
  }
  common: {
    search: string
    cart: string
    login: string
    // ... more common translations
  }
}
```

### 3. Language Persistence

- Language preference is stored in `localStorage` as `shopvora-language`
- The language persists across browser sessions
- Document language attribute is updated automatically

### 4. Components Updated

The following components now support translations:

- **Footer** (`src/modules/layout/templates/footer/index.tsx`)
  - All footer links and text
  - Language selector dropdown
  - Copyright text

- **Navigation** (`src/modules/layout/templates/nav/index.tsx`)
  - Login button text

- **Search Component** (`src/modules/layout/components/search/index.tsx`)
  - Search placeholder text
  - Products label in dropdown

- **Header Demo** (`src/app/[countryCode]/(main)/header-demo/page.tsx`)
  - Demo page text for consistency

## How to Use

### For Users

1. Scroll to the footer of any page
2. Click the "Translate" button in the bottom footer bar
3. Select your preferred language from the dropdown
4. The page will immediately update with the selected language
5. The language preference will be saved and maintained across all pages

### For Developers

To add translations to a new component:

1. Import the language context:
```typescript
import { useLanguage } from "@lib/context/language-context"
```

2. Use the translations in your component:
```typescript
const { translations } = useLanguage()

return (
  <button>{translations.common.login}</button>
)
```

3. Add new translation keys to `src/lib/translations.ts`:
```typescript
// Add to the interface
interface Translations {
  newSection: {
    newKey: string
  }
}

// Add translations for all languages
const translations: Record<Language, Translations> = {
  en: {
    newSection: {
      newKey: "English text"
    }
  },
  hi: {
    newSection: {
      newKey: "हिंदी टेक्स्ट"
    }
  }
  // ... other languages
}
```

## Technical Features

- **Automatic Language Detection**: Loads saved language preference on app start
- **Real-time Updates**: Language changes are applied immediately without page refresh
- **Persistent Storage**: Language choice is saved in localStorage
- **SEO Friendly**: Document language attribute is updated for search engines
- **Type Safety**: Full TypeScript support with proper interfaces

## Future Enhancements

- Add more languages (Bengali, Kannada, Malayalam, etc.)
- Implement server-side language detection based on user location
- Add language-specific content (images, videos, etc.)
- Implement RTL (Right-to-Left) support for languages like Arabic
- Add language-specific date and number formatting

## Testing

To test the language switching:

1. Start the development server: `npm run dev`
2. Navigate to any page
3. Change the language using the footer selector
4. Navigate to different pages to verify the language persists
5. Refresh the page to verify the language preference is saved
6. Open a new browser tab to verify the preference is maintained across sessions 