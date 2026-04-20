# Netlify Image CDN Optimization TODO

- [x] Step 1: Create `src/utils/imageUtils.js` with `getOptimizedImage` utility function
- [x] Step 2: Update `src/components/sections/ProjectsSection.jsx` 
  - Add import
  - Replace grid img src= with getOptimizedImage(project.image, 800)
  - Update modal main img and thumbnails
- [x] Step 3: Update `src/components/sections/TeamsSection.jsx`
  - Add import  
  - Replace team photo src= with getOptimizedImage(member.photo, width)
- [x] Step 4: Check FeaturedProjects.jsx and other sections for PROJECTS images and update if needed
- [x] Step 5: Test locally with `npm run dev` and verify img src formats (dev server format correct; optimization active on Netlify deploy)
- [ ] Step 6: Deploy to Netlify and confirm optimization

## Notes
- Utility handles both static paths and imported asset URLs uniformly
- Use widths like 800/1200 for projects, 400/600 for teams
- Keep existing `loading="lazy"`

