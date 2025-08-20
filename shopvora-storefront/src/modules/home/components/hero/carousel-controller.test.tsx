import { render, screen, fireEvent } from '@testing-library/react'
import CarouselController from './carousel-controller'

describe('CarouselController', () => {
  const mockOnPrev = jest.fn()
  const mockOnNext = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders both previous and next buttons', () => {
    render(
      <CarouselController
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    )

    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  it('calls onPrev when previous button is clicked', () => {
    render(
      <CarouselController
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    )

    fireEvent.click(screen.getByLabelText('Previous slide'))
    expect(mockOnPrev).toHaveBeenCalledTimes(1)
  })

  it('calls onNext when next button is clicked', () => {
    render(
      <CarouselController
        onPrev={mockOnPrev}
        onNext={mockOnNext}
      />
    )

    fireEvent.click(screen.getByLabelText('Next slide'))
    expect(mockOnNext).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    const { container } = render(
      <CarouselController
        onPrev={mockOnPrev}
        onNext={mockOnNext}
        className="custom-class"
      />
    )

    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(
      <CarouselController
        onPrev={mockOnPrev}
        onNext={mockOnNext}
        size="sm"
      />
    )

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      expect(button).toHaveClass('w-8', 'h-8')
    })

    rerender(
      <CarouselController
        onPrev={mockOnPrev}
        onNext={mockOnNext}
        size="lg"
      />
    )

    const largeButtons = screen.getAllByRole('button')
    largeButtons.forEach(button => {
      expect(button).toHaveClass('w-16', 'h-16')
    })
  })
}) 