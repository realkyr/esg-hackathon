import { render, screen } from "@testing-library/react";
import Navbar from "./index"; // Adjust path if necessary

describe("Navbar (Desktop Version)", () => {
  it("renders the logo", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("SME Development Bank Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders all navigation links with correct text", () => {
    render(<Navbar />);
    const navLinks = screen.getAllByRole("link");
    expect(navLinks.length).toBe(3); // Adjust if the number changes
    expect(navLinks[0]).toHaveTextContent("รายละเอียดโครงการ");
    expect(navLinks[1]).toHaveTextContent("ปฏิทินกิจกรรม");
    expect(navLinks[2]).toHaveTextContent("กฎและกติกา");
  });

  it("renders a signup button with the correct text", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", { name: "สมัครเข้าร่วม" });
    expect(button).toBeInTheDocument();
  });
});