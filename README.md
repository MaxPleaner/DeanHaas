# Dean Haas Landscaping Website

A beautiful, professional website for Dean Haas - Landscaping, Gardening & Orchid Expert.

## Features

- Modern, responsive design
- Services showcase (Nursery, Landscaping, Orchids, Tropical Fruit Trees, Gardening, Contractor Work)
- Contact form
- Smooth scrolling navigation
- Professional color scheme with green/nature theme

## Tech Stack

- **Vite** - Fast build tool
- **React** - UI library
- **JavaScript** - Programming language
- **CSS** - Styling with modern features

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Customization

### Update Contact Information

Edit the contact information in:
- `src/components/Contact.jsx` - Contact form section
- `src/components/Footer.jsx` - Footer contact details

### Modify Content

- `src/components/Hero.jsx` - Hero/landing section
- `src/components/Services.jsx` - Services section
- `src/components/About.jsx` - About section

### Styling

All component styles are in their respective `.css` files. The main color scheme is defined in `src/index.css` using CSS variables.

## Project Structure

```
DeanHaas/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

This project is private and proprietary.

