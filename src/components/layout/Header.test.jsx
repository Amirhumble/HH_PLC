import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const renderWithRouter = (ui, { initialPath = '/' } = {}) => {
  window.history.pushState({}, 'Test page', initialPath);
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      {ui}
    </MemoryRouter>
  );
};

describe('Header Component', () => {
  it('should render the header with logo', () => {
    renderWithRouter(<Header />);
    expect(screen.getByAltText(/HH PLC Logo/i)).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    renderWithRouter(<Header />);
    
    expect(screen.getByText(/nav\.home/i)).toBeInTheDocument();
    expect(screen.getByText(/nav\.about/i)).toBeInTheDocument();
    expect(screen.getByText(/nav\.services/i)).toBeInTheDocument();
    expect(screen.getByText(/nav\.projects/i)).toBeInTheDocument();
    expect(screen.getByText(/nav\.teams/i)).toBeInTheDocument();
    expect(screen.getByText(/nav\.contact/i)).toBeInTheDocument();
  });

  it('should render search bar', () => {
    renderWithRouter(<Header />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render language toggle', () => {
    renderWithRouter(<Header />);
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('should render mobile toggle button', () => {
    renderWithRouter(<Header />);
    const mobileToggle = screen.getByRole('button', { name: /mobile-menu-toggle/i });
    expect(mobileToggle).toBeInTheDocument();
  });

  it('should show mobile menu when toggle is clicked', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Header />);
    
    const mobileToggle = screen.getByRole('button', { name: /mobile-menu-toggle/i });
    await user.click(mobileToggle);
    
    expect(screen.getAllByText(/nav\.home/i)[0]).toBeInTheDocument();
  });
});
