import { render, screen, fireEvent } from '@testing-library/react'
import CarouselIndicators from './carousel-indicators'

describe('CarouselIndicators', () => {
  const mockOnSlideChange = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the correct number of indicators', () => {
    render(
      <CarouselIndicators
        totalSlides={5}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    )

    const indicators = screen.getAllByRole('button')
    expect(indicators).toHaveLength(5)
  })

  it('highlights the current slide', () => {
    render(
      <CarouselIndicators
        totalSlides={5}
        currentSlide={2}
        onSlideChange={mockOnSlideChange}
      />
    )

    const indicators = screen.getAllByRole('button')
    expect(indicators[2]).toHaveClass('bg-[#2A1454]')
    expect(indicators[2]).toHaveAttribute('aria-current', 'true')
  })

  it('calls onSlideChange when indicator is clicked', () => {
    render(
      <CarouselIndicators
        totalSlides={5}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
      />
    )

    const indicators = screen.getAllByRole('button')
    fireEvent.click(indicators[3])
    expect(mockOnSlideChange).toHaveBeenCalledWith(3)
  })

  it('applies custom className', () => {
    const { container } = render(
      <CarouselIndicators
        totalSlides={3}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
        className="custom-class"
      />
    )

    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(
      <CarouselIndicators
        totalSlides={3}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
        size="sm"
      />
    )

    const indicators = screen.getAllByRole('button')
    indicators.forEach(indicator => {
      expect(indicator).toHaveClass('w-2', 'h-2')
    })

    rerender(
      <CarouselIndicators
        totalSlides={3}
        currentSlide={0}
        onSlideChange={mockOnSlideChange}
        size="lg"
      />
    )

    const largeIndicators = screen.getAllByRole('button')
    largeIndicators.forEach(indicator => {
      expect(indicator).toHaveClass('w-4', 'h-4')
    })
  })

  it('has correct accessibility attributes', () => {
    render(
      <CarouselIndicators
        totalSlides={3}
        currentSlide={1}
        onSlideChange={mockOnSlideChange}
      />
    )

    const indicators = screen.getAllByRole('button')
    indicators.forEach((indicator, index) => {
      expect(indicator).toHaveAttribute('aria-label', `Go to slide ${index + 1}`)
    })

    expect(indicators[1]).toHaveAttribute('aria-current', 'true')
    expect(indicators[0]).toHaveAttribute('aria-current', 'false')
    expect(indicators[2]).toHaveAttribute('aria-current', 'false')
  })
}) 