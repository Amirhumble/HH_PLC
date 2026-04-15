import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactSection from './ContactSection';

describe('ContactSection Component', () => {
  it('should render contact section', () => {
    render(<ContactSection />);
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
  });

  it('should render contact form', () => {
    render(<ContactSection />);
    expect(screen.getByRole('form', { name: /contact-form/i })).toBeInTheDocument();
  });
});
