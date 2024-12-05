import {withOpacity} from "@/utils/colors";

describe('withOpacity', () => {
  it('should return the correct rgba string for valid opacity', () => {
    expect(withOpacity({ r: 70, g: 167, b: 72 }, 0.5)).toBe('rgba(70, 167, 72, 0.5)');
    expect(withOpacity({ r: 14, g: 118, b: 190 }, 0.3)).toBe('rgba(14, 118, 190, 0.3)');
  });

  it('should throw an error for opacity less than 0', () => {
    expect(() => withOpacity({ r: 70, g: 167, b: 72 }, -0.1)).toThrow('Opacity must be between 0 and 1');
  });

  it('should throw an error for opacity greater than 1', () => {
    expect(() => withOpacity({ r: 70, g: 167, b: 72 }, 1.1)).toThrow('Opacity must be between 0 and 1');
  });

  it('should handle edge cases for opacity of 0 and 1', () => {
    expect(withOpacity({ r: 70, g: 167, b: 72 }, 0)).toBe('rgba(70, 167, 72, 0)');
    expect(withOpacity({ r: 70, g: 167, b: 72 }, 1)).toBe('rgba(70, 167, 72, 1)');
  });
});
