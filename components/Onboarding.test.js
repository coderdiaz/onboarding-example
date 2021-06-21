import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Onboarding from './Onboarding'

describe('Onboarding', () => {
  it('Render without crashing', () => {
    const { container } = render(<Onboarding />)
    expect(container).toMatchInlineSnapshot('<div />')
  })

  it('Render a single page',() => {
    const { getByRole } = render(
      <Onboarding>
        <Onboarding.Page>
          <span>Get Inspired</span>
        </Onboarding.Page>
      </Onboarding>
    )

    expect(getByRole('button', { name: 'Getting Started' })).toBeInTheDocument()
  })

  it('Render multiple pages',() => {
    const { container, getByText, getByRole } = render(
      <Onboarding>
        <Onboarding.Page>
          <span>Get Inspired</span>
        </Onboarding.Page>
        <Onboarding.Page>
          <span>Show elements</span>
        </Onboarding.Page>
      </Onboarding>
    )

    expect(getByText('Get Inspired', { selector: 'span' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Skip' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Next' })).toBeInTheDocument()

    // Click event for show the next page
    userEvent.click(getByRole('button', { name: 'Next' }))

    // The second page will be showed
    expect(getByText('Show elements', { selector: 'span' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Getting Started' })).toBeInTheDocument()
  })

  it('Render Onboarding page with custom skip handler', () => {
    const skipHandler = jest.fn()

    const { getByRole } = render(
      <Onboarding skipHandler={skipHandler}>
        <Onboarding.Page>
          <span>Get Inspired</span>
        </Onboarding.Page>
        <Onboarding.Page>
          <span>Show elements</span>
        </Onboarding.Page>
      </Onboarding>
    )

    expect(skipHandler).not.toHaveBeenCalled()
    userEvent.click(getByRole('button', { name: 'Skip' }))
    expect(skipHandler).toHaveBeenCalled()
  })

  it('Render Onboarding page with custom complete handler', () => {
    const completeHandler = jest.fn()

    const { getByRole } = render(
      <Onboarding completeHandler={completeHandler}>
        <Onboarding.Page>
          <span>Get Inspired</span>
        </Onboarding.Page>
        <Onboarding.Page>
          <span>Show elements</span>
        </Onboarding.Page>
      </Onboarding>
    )

    expect(completeHandler).not.toHaveBeenCalled()
    userEvent.click(getByRole('button', { name: 'Next' }))
    userEvent.click(getByRole('button', { name: 'Getting Started' }))

    expect(completeHandler).toHaveBeenCalled()
  })

  it('Render Onboarding page with custom initial page', () => {
    const { getByText, getByRole } = render(
      <Onboarding initialPage={1}>
        <Onboarding.Page>
          <span>Get Inspired</span>
        </Onboarding.Page>
        <Onboarding.Page>
          <span>Show elements</span>
        </Onboarding.Page>
      </Onboarding>
    )

    expect(getByText('Show elements', { selector: 'span' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Getting Started' })).toBeInTheDocument()
  })
})
