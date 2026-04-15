import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

const renderWithRouter = (ui, { initialPath = '/' } = {}) => {
  window.history.pushState({}, 'Test page', initialPath);
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      {ui}
    </MemoryRouter>
  );
};

describe('Footer Component', () => {
  it('should render the footer', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should render brand name', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/brand\.shortName/i)).toBeInTheDocument();
  });

  it('should render quick links', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/footer\.quickLinks/i)).toBeInTheDocument();
  });

  it('should render contact information', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/footer\.contactUs/i)).toBeInTheDocument();
  });

  it('should render phone numbers', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/footer\.phoneNumbers/i)).toBeInTheDocument();
  });

  it('should render emails', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/footer\.emails/i)).toBeInTheDocument();
  });

  it('should render social media links', () => {
    renderWithRouter(<Footer />);
    const socialLinks = screen.getAllByRole('link', { target: '_blank' });
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it('should render copyright information', () => {
    renderWithRouter(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });
});
