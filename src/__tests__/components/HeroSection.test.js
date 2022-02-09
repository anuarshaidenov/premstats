import { render, screen } from '@testing-library/react';
import HeroSection from '../../components/hero-section/HeroSection';

describe('HeroSection', () => {
  it('should render Premiere League text', () => {
    render(<HeroSection />);
    const h1Element = screen.getByRole('heading', {
      name: 'Premiere League Teams',
    });
    expect(h1Element).toBeInTheDocument();
  });
});
