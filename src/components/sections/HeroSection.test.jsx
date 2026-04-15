import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import HeroSection from './HeroSection';

describe('HeroSection Component', () => {
  it('should render hero section', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );
    expect(document.querySelector('section')).toBeInTheDocument();
  });

  it('should render brand tagline', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );
    expect(screen.getByText(/hero\.tagline/i)).toBeInTheDocument();
  });
});
