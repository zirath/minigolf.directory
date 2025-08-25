# Minigolf.directory

A fast, modern directory website for discovering mini golf courses built with Astro and Tailwind CSS.

## Features

- **🚀 Fast & Modern**: Built with Astro for optimal performance and SEO
- **📱 Mobile-First**: Fully responsive design optimized for all devices  
- **🎯 Clean HTML**: Semantic, accessible markup with minimal JavaScript
- **🎨 Beautiful UI**: Modern design with Tailwind CSS
- **🔍 Search & Filter**: Find courses by name, location, or theme
- **⭐ Course Reviews**: Detailed ratings and information for each course
- **🎯 SEO Optimized**: Complete meta tags, structured data, and social sharing

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   │   ├── index.astro     # Homepage
│   │   └── courses/        # Course pages
│   │       ├── index.astro # Course listing
│   │       └── [slug].astro # Individual course pages
│   ├── data/            # Sample course data
│   └── styles/          # Global styles
└── package.json
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Sample Data

The project includes 8 sample mini golf courses with realistic data:
- Adventure Golf Paradise (Orlando, FL)
- Pirate's Cove Mini Golf (Myrtle Beach, SC)  
- Glow-in-the-Dark Galaxy Golf (Las Vegas, NV)
- Windmill Gardens Golf (Branson, MO)
- Dinosaur Adventure Golf (Gatlinburg, TN)
- Castle Kingdom Mini Golf (Williamsburg, VA)
- Tropical Lagoon Golf (Key West, FL)
- Wild West Shootout Golf (Deadwood, SD)

## Routes

- `/` - Homepage with hero section and featured courses
- `/courses` - Complete course listing with search functionality
- `/courses/[slug]` - Individual course detail pages

## Technologies

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **HTML5** - Semantic markup
- **JSON-LD** - Structured data for SEO

## Performance Features

- Static site generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle
- SEO-optimized meta tags
- Mobile-first responsive design

## Customization

To add your own courses:
1. Edit `src/data/courses.ts`
2. Add course images to `public/images/`
3. Update the search and filter logic as needed

The design system is built with Tailwind CSS for easy customization of colors, spacing, and layouts.