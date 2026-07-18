export const generateHexColor = () => {
  const hex = Array.from({ length: 6 }, () =>
    "0123456789ABCDEF"[Math.floor(Math.random() * 16)]
  ).join("");

  return `#${hex}`;
};

export const generateRgbColor = () => {
  const channel = () => Math.floor(Math.random() * 256);

  return `rgb(${channel()}, ${channel()}, ${channel()})`;
};

export const generateHslColor = () => {
  const hue = Math.floor(Math.random() * 360);

  return `hsl(${hue}, 70%, 60%)`;
};