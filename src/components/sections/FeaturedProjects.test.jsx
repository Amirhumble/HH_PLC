import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import FeaturedProjects from './FeaturedProjects';

describe('FeaturedProjects Component', () => {
  it('should render featured projects section', () => {
    render(
      <MemoryRouter>
        <FeaturedProjects />
      </MemoryRouter>
    );
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
  });

  it('should render multiple featured projects', () => {
    render(
      <MemoryRouter>
        <FeaturedProjects />
      </MemoryRouter>
    );
    const projectCards = screen.getAllByRole('heading', { level: 3 });
    expect(projectCards.length).toBeGreaterThan(0);
  });
});
