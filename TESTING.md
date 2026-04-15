# Testing Setup for HH PLC Website

## Test Infrastructure

This project has been set up with comprehensive testing infrastructure using:

### Testing Frameworks
- **Vitest** - Unit and Integration Testing
- **React Testing Library** - Component Testing  
- **@testing-library/user-event** - User Interaction Testing
- **jsdom** - DOM Environment Simulation

### Test Scripts

Run the following commands from the project root:

```bash
# Run all tests in watch mode
npm test

# Run all tests once
npm run test:run

# Run tests with UI (if vitest-ui is installed)
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

## Test File Organization

Test files are colocated with the source code using the naming convention:
- `ComponentName.test.jsx` - Component tests
- `constants.test.js` - Utility/constants tests
- `AppRoutes.test.jsx` - Route integration tests

### Test Locations
- `src/test/` - General tests (constants, setup)
- `src/components/**/*.test.jsx` - Component unit tests
- `src/pages/*.test.jsx` - Page component tests
- `src/routes/*.test.jsx` - Route integration tests
- `src/App.test.jsx` - Main app component test

## Tests Created

### Unit Tests
1. **Constants** (`src/test/constants.test.js`)
   - COMPANY_INFO structure validation
   - SERVICES data validation
   - PROJECTS data validation
   - TEAM_MEMBERS data validation

2. **PhoneFAB Component** (`src/components/PhoneFAB.test.jsx`)
   - Rendering tests
   - Click interaction tests
   - Phone number display tests
   - Animation class tests

3. **Common Components**
   - `SearchBar.test.jsx` - Search functionality tests
   - `LanguageToggle.test.jsx` - Language switching tests

4. **Layout Components**
   - `Header.test.jsx` - Navigation header tests
   - `Footer.test.jsx` - Footer rendering tests

5. **Section Components**
   - `HeroSection.test.jsx`
   - `AboutSection.test.jsx`
   - `ServicesSection.test.jsx`
   - `FeaturedProjects.test.jsx`
   - `PotentialClientsSection.test.jsx`
   - `GallerySection.test.jsx`
   - `ContactSection.test.jsx`

6. **Pages**
   - `Home.test.jsx` - Home page rendering tests

7. **Routes**
   - `AppRoutes.test.jsx` - Route navigation tests

8. **App Component**
   - `App.test.jsx` - Main app layout tests

## Test Configuration

### Vitest Config (`vitest.config.js`)
- Environment: jsdom
- Globals: enabled
- Setup file: `src/test/setup.jsx`
- Test pattern: `src/**/*.{test,spec}.{js,jsx}`

### Setup File (`src/test/setup.jsx`)
- Imports @testing-library/jest-dom for matchers
- Mocks react-i18next
- Mocks window.matchMedia
- Mocks IntersectionObserver

## Mocks

The test setup includes mocks for:
- react-i18next (translation functions)
- window.matchMedia (responsive design)
- IntersectionObserver (scroll animations)
- framer-motion (animations)

## Future Enhancements

### E2E Testing (Not Installed)
Cypress installation was attempted but timed out. To add E2E tests later:

```bash
npm install -D cypress
npm run cypress:open
```

E2E test files would go in `cypress/e2e/`

### Recommended E2E Test Scenarios
1. Home page loads correctly
2. Navigation between pages works
3. Phone FAB displays and works
4. Contact form submission
5. Search functionality
6. Language switching (EN/AM)
7. Mobile responsive behavior

## Troubleshooting

If tests fail to run:
1. Ensure all dependencies are installed: `npm install`
2. Check Node.js version (>= 18 recommended)
3. Clear vitest cache: `rm -rf node_modules/.vite`
4. Run with verbose output: `npm test -- --reporter=verbose`

## Notes

- Tests use mocked i18n - translation keys will appear as-is (e.g., "nav.home")
- React Router is mocked for isolated component testing
- All tests are designed to work with the mocked environment
