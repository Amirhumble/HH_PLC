import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PotentialClientsSection from './PotentialClientsSection';

describe('PotentialClientsSection Component', () => {
  it('should render potential clients section', () => {
    render(<PotentialClientsSection />);
    expect(screen.getByText(/Potential Clients & Partners/i)).toBeInTheDocument();
  });
});
