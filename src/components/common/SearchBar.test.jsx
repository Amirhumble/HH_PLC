import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from './SearchBar';

const renderWithRouter = (ui, { initialPath = '/' } = {}) => {
  window.history.pushState({}, 'Test page', initialPath);
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      {ui}
    </MemoryRouter>
  );
};

describe('SearchBar Component', () => {
  it('should render search input', () => {
    renderWithRouter(<SearchBar />);
    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument();
  });

  it('should render search button', () => {
    renderWithRouter(<SearchBar />);
    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeInTheDocument();
  });

  it('should update query when typing', async () => {
    const user = userEvent.setup();
    renderWithRouter(<SearchBar />);
    
    const searchInput = screen.getByRole('textbox');
    await user.type(searchInput, 'test query');
    
    expect(searchInput.value).toBe('test query');
  });

  it('should clear input when empty and submitted on non-search page', async () => {
    const user = userEvent.setup();
    renderWithRouter(<SearchBar />, { initialPath: '/' });
    
    const searchInput = screen.getByRole('textbox');
    await user.type(searchInput, '   ');
    
    const searchButton = screen.getByRole('button');
    await user.click(searchButton);
    
    expect(searchInput.value).toBe('');
  });
});
