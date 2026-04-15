import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import PhoneFAB from './PhoneFAB';

describe('PhoneFAB Component', () => {
  it('should render without crashing', () => {
    render(<PhoneFAB />);
    expect(screen.getByRole('button', { name: /call us/i })).toBeInTheDocument();
  });

  it('should display phone icon by default', () => {
    render(<PhoneFAB />);
    const button = screen.getByRole('button', { name: /call us/i });
    expect(button).toBeInTheDocument();
  });

  it('should show phone numbers when clicked', async () => {
    const user = userEvent.setup();
    render(<PhoneFAB />);
    
    const button = screen.getByRole('button', { name: /call us/i });
    await user.click(button);

    expect(screen.getByText(/call us/i)).toBeInTheDocument();
    expect(screen.getByText(/011 8683830/)).toBeInTheDocument();
    expect(screen.getByText(/011 6672951/)).toBeInTheDocument();
  });

  it('should hide phone numbers when clicked again', async () => {
    const user = userEvent.setup();
    render(<PhoneFAB />);
    
    const button = screen.getByRole('button', { name: /call us/i });
    await user.click(button);
    expect(screen.getByText(/call us/i)).toBeInTheDocument();

    await user.click(button);
    expect(screen.queryByText(/call us/i)).not.toBeInTheDocument();
  });

  it('should have phone numbers as clickable links', async () => {
    const user = userEvent.setup();
    render(<PhoneFAB />);
    
    const button = screen.getByRole('button', { name: /call us/i });
    await user.click(button);

    const phoneLinks = screen.getAllByRole('link');
    expect(phoneLinks).toHaveLength(2);
    
    expect(phoneLinks[0].getAttribute('href')).toMatch(/tel:/);
    expect(phoneLinks[1].getAttribute('href')).toMatch(/tel:/);
  });

  it('should have floating animation class', () => {
    render(<PhoneFAB />);
    const button = screen.getByRole('button', { name: /call us/i });
    expect(button).toHaveClass('animate-float');
  });
});
