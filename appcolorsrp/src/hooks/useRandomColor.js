import { useState } from "react";
import { generateHexColor } from "../services/colorService";

export function useRandomColor(generator = generateHexColor) {
  const [color, setColor] = useState(generator());

  const regenerate = () => setColor(generator());

  return { color, regenerate };
}