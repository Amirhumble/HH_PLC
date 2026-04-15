import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GallerySection from './GallerySection';

describe('GallerySection Component', () => {
  it('should render gallery section', () => {
    render(<GallerySection />);
    expect(screen.getByText(/Our Gallery/i)).toBeInTheDocument();
  });
});
