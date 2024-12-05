export const withOpacity = (rgb: { r: number; g: number; b: number }, opacity: number): string => {
  if (opacity < 0 || opacity > 1) {
    throw new Error('Opacity must be between 0 and 1');
  }
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
}