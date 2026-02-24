# Visual Structure - Plixum Landing Page

## Page Layout Overview

```
┌─────────────────────────────────────────────────────────┐
│                      HEADER (STICKY)                     │
│  Logo │ Contáctanos │ Docs │ [ES] │ [Login Gradient]   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                        HERO SECTION                      │
│                    (minHeight: 800px)                    │
│                                                           │
│  LEFT                          │         RIGHT            │
│  ┌──────────────────────────┐ │ ┌──────────────────────┐│
│  │ h1: Un portal. Toda tu   │ │ │   PLANETA ANIMADO   ││
│  │     operación global      │ │ │   (z-index: 0)      ││
│  │                          │ │ │                      ││
│  │ p: Abre cuentas...       │ │ │  ┌────────────────┐ ││
│  │                          │ │ │  │ DISPOSITIVO    │ ││
│  │ [Botón Gradient]         │ │ │  │  ANIMADO       │ ││
│  │ [Botón Outline]          │ │ │  │  (z-index: 10) │ ││
│  │                          │ │ │  │  (top: 17%     │ ││
│  │                          │ │ │  │   left: 20%)   │ ││
│  │                          │ │ │  └────────────────┘ ││
│  └──────────────────────────┘ │ └──────────────────────┘│
│                                │                        │
│  50% width │ gap: 72px │ 50% width                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              NUESTRAS SOLUCIONES (TITLE)                │
│         Más control. Menos fricción. Todo en TR         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│             SOLUTIONS - SCROLL BASED (620px)            │
│                                                           │
│  LEFT          │               │           RIGHT         │
│  ┌───────────┐ │               │ ┌──────────────────┐  │
│  │ Step Bars │ │               │ │  SOLUCIÓN ACTIVA │  │
│  │ ─ (78px)  │ │ TEXT & TITLE  │ │    ANIMACIÓN     │  │
│  │ ─ (19px)  │ │               │ │   (Opacity Fade)│  │
│  │ ─ (19px)  │ │               │ │                  │  │
│  │ ─ (19px)  │ │               │ │  LAS OTRAS 4     │  │
│  │ ─ (19px)  │ │               │ │  OCULTAS (op:0)  │  │
│  │ ─ (19px)  │ │               │ │                  │  │
│  └───────────┘ │               │ └──────────────────┘  │
│                │               │                        │
│  SCROLL UP/DOWN → NEXT SOLUTION → Transición 500ms      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         QUIÉNES USAN FINITY (6 MERCADOS)               │
│                                                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Fintech    │  │     BPOs     │  │  Agencias V. │  │
│  │  [Descripción]│  │[Descripción] │  │ [Descripción]│  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ Importadores │  │ Plataformas  │  │  Empresas    │  │
│  │ [Descripción]│  │ [Descripción]│  │ [Descripción]│  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                           │
│           Grid: 3 cols × 2 rows (gap: 72px)            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│        INTEGRACIÓN API (API MOBILE ANIMATION)           │
│                                                           │
│  LEFT                          │         RIGHT           │
│  ┌──────────────────────────┐ │ ┌──────────────────┐   │
│  │ h3: Así se ve operar...  │ │ │  API ANIMACIÓN   │   │
│  │                          │ │ │     (500x500)    │   │
│  │ 3 Features:              │ │ │                  │   │
│  │ ├─ API global unificada  │ │ │   LottiePlayer   │   │
│  │ ├─ Ahorro 73%            │ │ │                  │   │
│  │ └─ Liquidación 24/7      │ │ └──────────────────┘   │
│  │                          │ │                        │
│  │ [Descarga documentación] │ │                        │
│  └──────────────────────────┘ │                        │
│                                                           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                 CTA (CALL TO ACTION)                    │
│                                                           │
│        Habla con nuestro equipo de clase mundial        │
│                                                           │
│              [Botón Gradient] [Botón Outline]           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                      FOOTER                             │
│  Contáctanos │ sales@plixum.com │ [LinkedIn]           │
│  © 2026 Soluciones de Pagos y Recaudos SAS.            │
│  [Términos y Condiciones] [Política de Datos]          │
└─────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
Index (LanguageProvider)
│
├── Header
│   ├── Logo
│   ├── Nav Menu
│   ├── LanguageSwitcher
│   └── Login Button
│
├── Hero
│   ├── Background Gradients (opacity 5%)
│   ├── Left Content
│   │   ├── h1 (60px)
│   │   ├── p (16px)
│   │   └── Buttons (2x)
│   └── Right Animations
│       ├── Planeta Animation (z-0)
│       └── Dispositivo Animation (z-10)
│
├── Solutions
│   ├── Header (Title)
│   └── Scroll Container (620px)
│       ├── Left: Step Bars + Text
│       ├── Right: Active Animation only
│       └── Wheel Listener
│
├── Markets
│   └── Grid (3x2)
│       ├── Market Card 1
│       ├── Market Card 2
│       ├── ... Market Card 6
│       └── (with backdrop blur)
│
├── APISection
│   ├── Left Content
│   │   ├── h3 (48px)
│   │   ├── 3 Features
│   │   └── Download Button
│   └── Right Animation
│       └── LottiePlayer (API Mobile)
│
├── CTA
│   ├── h2 (Title)
│   └── Buttons (2x)
│
└── Footer
    ├── CTA Mini
    ├── Contact Info
    ├── Legal Links
    └── Copyright
```

---

## Color Scheme

```
PRIMARY BACKGROUND:    #000000 (Black)
PRIMARY TEXT:          #FFFFFF (White)
ACCENT 1:              #2CDBFF (Cyan)
ACCENT 2:              #6CEAC7 (Green)

GRADIENTS:
├── Button Primary:    #2bdaff → #6ceac7 (90deg)
├── Accent Text:       #2bdaff → #6ceac7
└── Background Blur:   Radial (cyan & green at 5% opacity)

OVERLAY:
├── Card Backdrop:      rgba(215, 215, 215, 0.15) + blur(25px)
├── Shadows:
│   ├── Primary:        0 4px 25px rgba(0,0,0, 0.1)
│   ├── Medium:         0.5px 0.5px 2px rgba(47,63,87, 0.3)
│   └── Light:          -0.5px -0.5px rgba(255,255,255, 0.3)
```

---

## Responsive Behavior

### Desktop (1200px+)
- Full layout with all animations
- Grid: 2 cols for Hero, 3 cols for Markets
- Step indicators visible

### Tablet (768px - 1199px)
- Reduced padding
- Grid may collapse to 1 col for Markets
- Animations scale down

### Mobile (< 768px)
- Stack layout (single column)
- Adjusted padding
- Mobile-specific animations (if needed)
- Hamburger menu for navigation

---

## Interaction States

### Hero Section
- Button hover: Gradient reverses, text color changes
- Smooth transitions on all elements

### Solutions Section
- **Scroll Up**: activeIndex decreases, animate step bars
- **Scroll Down**: activeIndex increases, animate step bars
- **Debounce**: 800ms between scroll events
- **Transition**: 500ms opacity fade between solutions

### Markets Cards
- Hover: Slight shadow enhancement
- Border on hover (optional)

### General CTA Buttons
- Hover: Background/text color swap
- Active: Scale slight (0.98)
- Transition: all 300ms ease

---

## Animation Details

### LottiePlayer Configuration
```javascript
{
  src: "animation-url.json",
  loop: true,
  autoplay: true,
  speed: 1,
  mode: "normal"
}
```

### Solutions Step Indicators
```javascript
{
  Active:   { height: '78px', gradient: cyan → green }
  Inactive: { height: '19px', color: white }
  Transition: 'all 0.3s ease'
}
```

### Content Transitions
```javascript
Solutions: opacity 500ms ease-in-out
Heroes: fadeIn on mount (optional)
Markets: stagger on scroll (optional)
```

---

**Last Updated**: February 13, 2026  
**Status**: ✅ Fully Implemented
