# MeetStranger Clean Design System

## Overview
A clean, simple design system using light blue tones for clarity and ease of use.

## Design Principles
- **Simplicity**: Clean, minimal interface
- **Clarity**: High contrast and readability
- **Light Blue Palette**: Calming, professional colors
- **Consistency**: Unified spacing and typography

## Color System

### Light Blue Palette
- **Primary**: `#3B82F6` - Main blue for buttons and links
- **Primary Light**: `#DBEAFE` - Light blue backgrounds
- **Primary Dark**: `#1D4ED8` - Darker blue for hover states
- **Secondary**: `#E0F2FE` - Very light blue accents

### Backgrounds
- **Background**: `#FAFBFC` - Main app background
- **Surface**: `#FFFFFF` - Cards and components
- **Surface Elevated**: `#F8FAFC` - Elevated surfaces

### Text
- **Text Primary**: `#1F2937` - Main text
- **Text Secondary**: `#6B7280` - Supporting text
- **Text Tertiary**: `#9CA3AF` - Subtle text

### Semantic Colors
- **Success**: `#10B981` - Green for success states
- **Error**: `#EF4444` - Red for errors
- **Warning**: `#F59E0B` - Orange for warnings

## Typography

### Font Sizes
- **xs**: 12px - Small labels
- **sm**: 14px - Captions
- **md**: 16px - Body text
- **lg**: 18px - Titles
- **xl**: 20px - Large titles
- **2xl**: 24px - Section headers
- **3xl**: 30px - Page titles

### Text Styles
- **H1**: 30px, Bold - Main headings
- **H2**: 24px, Bold - Section headings
- **H3**: 20px, Semibold - Subsections
- **Title**: 18px, Semibold - Component titles
- **Body**: 16px, Regular - Main content
- **Caption**: 14px, Regular - Supporting text
- **Button**: 16px, Medium - Button text

## Spacing

### Scale
- **xs**: 4px - Tight spacing
- **sm**: 8px - Small gaps
- **md**: 12px - Standard spacing
- **lg**: 16px - Component padding
- **xl**: 20px - Section spacing
- **2xl**: 24px - Large gaps
- **3xl**: 32px - Section margins
- **4xl**: 48px - Page margins

## Components

### Button
```typescript
// Primary button
<Button variant="primary">Continue</Button>

// Secondary button
<Button variant="secondary">Cancel</Button>

// Ghost button
<Button variant="ghost">Skip</Button>
```

### Input
```typescript
<Input 
  label="Email" 
  placeholder="Enter your email"
/>
```

### Chat Bubble
```typescript
<ChatBubble 
  message="Hello!"
  position="right"
  timestamp="2:30 PM"
/>
```

## Usage Guidelines

### Screen Layout
- Use consistent 16px padding
- Maintain proper spacing between components
- Keep backgrounds clean and minimal

### Color Usage
- Use primary blue for main actions
- Keep secondary colors subtle
- Ensure good contrast for text

### Typography
- Use consistent text styles
- Maintain proper hierarchy
- Keep line heights readable

## Implementation

### Import Design System
```typescript
import { Colors, TextStyles, Spacing } from './design-system';
```

### Apply Styles
```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: Spacing.lg,
  },
  title: {
    ...TextStyles.h2,
    color: Colors.textPrimary,
  },
});
```