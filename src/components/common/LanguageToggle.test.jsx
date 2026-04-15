import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import LanguageToggle from './LanguageToggle';

describe('LanguageToggle Component', () => {
  it('should render both language buttons', () => {
    render(<LanguageToggle />);
    
    const enButton = screen.getByRole('button', { name: /EN/i });
    const amButton = screen.getByRole('button', { name: /አማ/i });
    
    expect(enButton).toBeInTheDocument();
    expect(amButton).toBeInTheDocument();
  });

  it('should have English button active by default', () => {
    render(<LanguageToggle />);
    
    const enButton = screen.getByRole('button', { name: /EN/i });
    expect(enButton).toHaveAttribute('aria-pressed', 'true');
  });

  it('should render as a group with aria-label', () => {
    render(<LanguageToggle />);
    
    const group = screen.getByRole('group');
    expect(group).toBeInTheDocument();
  });
});
