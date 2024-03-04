import { render, screen } from "@testing-library/react"
import { Component } from './Component'

describe('<New Component/>', () => {
    it('renders title', () => {
        render(<Component />)
        expect(screen.getByText('23:43 Changed New Component')).toBeInTheDocument()
    })
})