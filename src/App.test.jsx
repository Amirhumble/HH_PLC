import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('should render app with header, main, and footer', () => {
    render(<App />);
    
    // Header should be present
    expect(screen.getByAltText(/HH PLC Logo/i)).toBeInTheDocument();
    
    // Main content area should exist
    expect(screen.getByRole('main')).toBeInTheDocument();
    
    // Footer should be present
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should have proper layout structure', () => {
    render(<App />);
    
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
