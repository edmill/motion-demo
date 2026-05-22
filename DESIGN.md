# DESIGN.md
# Design system for motion-demo
# Read this before generating any UI component.

---

## Color palette

### Backgrounds (darkest → lightest)
| Token        | Hex     | Usage                           |
|--------------|---------|---------------------------------|
| bg-base      | #0a0a0e | App background, code snippets   |
| bg-panel     | #0f0f16 | Section cards, panel surfaces   |
| bg-panel-alt | #0d0d18 | Right-side panel variant        |
| bg-card      | #1e293b | Notification cards, raised surfaces |

### Borders
| Token         | Hex     | Usage                          |
|---------------|---------|--------------------------------|
| border-subtle | #1e293b | Card borders, section dividers |
| border-muted  | #334155 | Notification card borders      |

### Text
| Token        | Hex     | Usage                          |
|--------------|---------|--------------------------------|
| text-primary | #f1f5f9 | Headings, card titles          |
| text-body    | #94a3b8 | Body copy, descriptions        |
| text-muted   | #64748b | Timestamps, secondary labels   |
| text-faint   | #475569 | Section labels, dismiss icons  |
| text-ghost   | #334155 | Faintest text, footer hints    |

### Accent — brand orange
| Token         | Value                | Usage                   |
|---------------|----------------------|-------------------------|
| accent        | #f97316              | CTAs, highlights, dots  |
| accent-bg     | rgba(249,115,22,0.1) | Pill backgrounds        |
| accent-border | rgba(249,115,22,0.2) | Pill borders            |

### Status colors
| Name    | Hex     | Usage                         |
|---------|---------|-------------------------------|
| error   | #ef4444 | "Before" indicator dot        |
| success | #10b981 | "After" indicator dot, payment|
| indigo  | #6366f1 | Message notification type     |
| amber   | #f59e0b | File notification type        |

---

## Typography

| Role          | Size    | Weight | Notes                                    |
|---------------|---------|--------|------------------------------------------|
| Page heading  | 36px    | 700    | letter-spacing: -0.02em, line-height 1.1 |
| Body          | 16px    | 300    | line-height 1.6                          |
| Section label | 13px    | 600    | uppercase, letter-spacing: 0.08em        |
| Card title    | 13px    | 600    | color: text-primary                      |
| Card body     | 12px    | 400    | color: text-body, line-height 1.4        |
| Timestamp     | 11px    | 400    | color: text-muted                        |
| Code/mono     | 11–13px | 400    | font-family: monospace                   |

---

## Border radius

| Context            | Value |
|--------------------|-------|
| Page panels / grid | 16px  |
| Section cards      | 12px  |
| Notification cards | 12px  |
| Avatar icons       | 10px  |
| Buttons            | 8px   |
| Code snippets      | 6px   |
| Pill badges        | 20px  |
| Round dots/badges  | 50%   |

---

## Spacing

| Context             | Value             |
|---------------------|-------------------|
| Page padding        | 40px 24px 32px    |
| Panel inner padding | 32px              |
| Card inner padding  | 16px              |
| Between sections    | 32px (margin-top) |
| Card gap (avatar)   | 12px              |
| Label / dot gap     | 8–10px            |
| Grid gap            | 2px               |

---

## Shadows

| Context    | Value                      |
|------------|----------------------------|
| After card | 0 4px 24px rgba(0,0,0,0.4) |
| Before card| 0 4px 12px rgba(0,0,0,0.3) |

---

## Component patterns

### Notification card
- Background: bg-card (#1e293b)
- Border: 1px solid border-muted (#334155)
- Border radius: 12px
- Padding: 16px
- Avatar: 36×36px, 10px radius, type color at 20% opacity bg + 40% opacity border

### Trigger button — "After" (with motion spec)
- Background: accent (#f97316)
- Text: white, no border
- Radius: 8px, padding: 10px 20px

### Trigger button — "Before" (no motion spec)
- Background: bg-card (#1e293b)
- Text: text-primary (#f1f5f9)
- Border: 1px solid border-muted (#334155)
- Radius: 8px, padding: 10px 20px

### Status pill (section header)
- Background: accent-bg
- Border: 1px solid accent-border
- Text: accent, monospace 12px
- Radius: 20px, padding: 4px 14px

### Section card (info boxes)
- Background: bg-panel (#0f0f16)
- Border: 1px solid border-subtle (#1e293b)
- Border radius: 12px
- Padding: 28px 32px

---

## Layout

- Demo grid max width: 1280px; command reference section max width: 900px, centered
- Demo page: 2-column grid (`1fr 1fr`), 2px gap, `border-left` divider on the right panel
- Third demo column (when added): same panel pattern as center; background `#0c0c1a`, accent dot `#818cf8`, grid `1fr 1fr 1fr`
- Column backgrounds: left `#0f0f16`, center `#0d0d18`, optional right `#0c0c1a`
- Notification demo area: 320px height, overflow hidden
