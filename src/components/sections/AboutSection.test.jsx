import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AboutSection from './AboutSection';

describe('AboutSection Component', () => {
  it('should render about section', () => {
    render(
      <MemoryRouter>
        <AboutSection />
      </MemoryRouter>
    );
    expect(screen.getByText(/about\.title/i)).toBeInTheDocument();
  });

  it('should render description', () => {
    render(
      <MemoryRouter>
        <AboutSection />
      </MemoryRouter>
    );
    expect(screen.getByText(/about\.description/i)).toBeInTheDocument();
  });
});
