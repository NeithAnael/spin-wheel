# Spin Wheel – React + TypeScript + Vite

A customizable promotional spin wheel built with React, TypeScript, and Vite.

It allows you to easily configure prizes, probabilities, colors, fonts, and backgrounds from a single theme file.

Perfect for store promotions, giveaways, holiday campaigns, and interactive customer experiences.

---

# Live Demo

You can see the project running here:

(https://spinfortreats.vercel.app/)
---

# Installation

Clone the repository:

git clone https://github.com/NeithAnael/spin-wheel.git

Install dependencies:

npm install

Run the development server:

npm run dev

---

# Customization

Most of the customization for the wheel can be done from a single configuration file.

## Theme Configuration

Main configuration file:

spin-wheel/src/components/theme/wheelTheme.tsx

This file controls almost all visual and content aspects of the wheel, including:

• Title
• Tagline
• Background image
• Wheel options and probabilities
• Fonts and font weights
• Wheel colors
• Header and footer styling
• Popup design
• Button styling

Example configuration:

wheelOptions: [
{ option: "Try again", weight: 25 },
{ option: "10% OFF any purchase", weight: 12 },
{ option: "$10 OFF", weight: 12 },
{ option: "FREE RANDOM GIFT", weight: 5 }
]

The **weight** value determines the probability of each option appearing when the wheel spins.

Higher weight = higher chance of landing on that option.

---

# Background Images

Background images are stored in:

spin-wheel/public/images

You can:

• Use the default images included in the project
• Add new images to this folder
• Update the background in the theme configuration

Example:

backgroundImage: "/images/bg-xmas2.jpg"

Any image placed inside the `images` folder can be used as a background.

---

# Wheel Styling

Inside the theme file you can also modify:

### Wheel Colors

Slice background colors, text colors, borders, center circle color, and pointer color.

### Header & Footer

Transparency, blur effects, borders, and text colors.

### Popup

Controls the appearance of the prize popup shown after spinning the wheel.

### Buttons

Customize button colors and hover effects.

---

# Built With

React
TypeScript
Vite

---

# Notes

The wheel behavior, prizes, and probabilities are fully controlled through the `wheelTheme.tsx` file, making it easy to adapt the component for different promotions, stores, or seasonal campaigns.

