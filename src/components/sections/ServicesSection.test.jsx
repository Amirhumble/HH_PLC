import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ServicesSection from './ServicesSection';

describe('ServicesSection Component', () => {
  it('should render services section', () => {
    render(
      <MemoryRouter>
        <ServicesSection />
      </MemoryRouter>
    );
    expect(screen.getByText(/Our Expertise/i)).toBeInTheDocument();
  });

  it('should render multiple services', () => {
    render(
      <MemoryRouter>
        <ServicesSection />
      </MemoryRouter>
    );
    const serviceCards = screen.getAllByRole('heading', { level: 3 });
    expect(serviceCards.length).toBeGreaterThan(0);
  });

  it('should render showcase mode when prop is true', () => {
    render(
      <MemoryRouter>
        <ServicesSection showcase={true} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Our Expertise/i)).toBeInTheDocument();
  });
});
