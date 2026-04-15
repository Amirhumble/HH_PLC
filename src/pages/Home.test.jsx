import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

const renderWithRouter = (ui, { initialPath = '/' } = {}) => {
  window.history.pushState({}, 'Test page', initialPath);
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      {ui}
    </MemoryRouter>
  );
};

describe('Home Page', () => {
  it('should render home page', () => {
    renderWithRouter(<Home />);
    expect(document.querySelector('div')).toBeInTheDocument();
  });

  it('should render hero section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/hero\.tagline/i)).toBeInTheDocument();
  });

  it('should render about section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/About Our Firm/i)).toBeInTheDocument();
  });

  it('should render services section', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Our Expertise/i)).toBeInTheDocument();
  });

  it('should render featured projects', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
  });

  it('should render phone FAB', () => {
    renderWithRouter(<Home />);
    expect(screen.getByRole('button', { name: /call us/i })).toBeInTheDocument();
  });
});
