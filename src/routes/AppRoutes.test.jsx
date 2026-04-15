import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const renderWithRouter = (ui, { initialPath = '/' } = {}) => {
  window.history.pushState({}, 'Test page', initialPath);
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      {ui}
    </MemoryRouter>
  );
};

describe('App Routes Integration', () => {
  it('should render home page at /', () => {
    renderWithRouter(<AppRoutes />, { initialPath: '/' });
    expect(screen.getByText(/hero\.title/i)).toBeInTheDocument();
  });

  it('should render about page at /about', () => {
    renderWithRouter(<AppRoutes />, { initialPath: '/about' });
    expect(screen.getByText(/Our Story/i)).toBeInTheDocument();
  });

  it('should render services page at /services', () => {
    renderWithRouter(<AppRoutes />, { initialPath: '/services' });
    expect(screen.getByText(/Our Expertise/i)).toBeInTheDocument();
  });

  it('should render contact page at /contact', () => {
    renderWithRouter(<AppRoutes />, { initialPath: '/contact' });
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  it('should render teams page at /teams', () => {
    renderWithRouter(<AppRoutes />, { initialPath: '/teams' });
    expect(screen.getByText(/teams\.title/i)).toBeInTheDocument();
  });
});
