import { render, screen } from '@testing-library/react'
import Navbar from './index' // Adjust path if necessary

describe('Navbar (Desktop Version)', () => {
  it('renders all navigation links with correct text', () => {
    render(<Navbar />)
    const navLinks = screen.getAllByRole('link')
    expect(navLinks.length).toBe(3) // Adjust if the number changes
    expect(navLinks[0]).toHaveTextContent('รายละเอียดโครงการ')
    expect(navLinks[1]).toHaveTextContent('ปฏิทินกิจกรรม')
    expect(navLinks[2]).toHaveTextContent('กฎและกติกา')
  })

  // when clicking the link, it should add #<key> to the URL, and scroll to the corresponding section
  describe('Navbar Links', () => {
    it('renders all navigation links with the correct href and text', () => {
      render(<Navbar />)

      const links = screen.getAllByRole('link')
      expect(links.length).toBe(3) // Ensure there are 3 links

      // Verify each link's text and href
      expect(links[0]).toHaveTextContent('รายละเอียดโครงการ')
      expect(links[0]).toHaveAttribute('href', '/#details')

      expect(links[1]).toHaveTextContent('ปฏิทินกิจกรรม')
      expect(links[1]).toHaveAttribute('href', '/#calendar')

      expect(links[2]).toHaveTextContent('กฎและกติกา')
      expect(links[2]).toHaveAttribute('href', '/#rules')
    })
  })
})
