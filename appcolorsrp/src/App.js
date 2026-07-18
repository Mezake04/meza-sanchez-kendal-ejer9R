import ColorDisplay from "./components/ColorDisplay";
import { useRandomColor } from "./hooks/useRandomColor";

export default function App() {
  const { color, regenerate } = useRandomColor();

  return (
    <main>
      <h1>Color aleatorio</h1>

      <ColorDisplay color={color} onGenerate={regenerate} />
    </main>
  );
}