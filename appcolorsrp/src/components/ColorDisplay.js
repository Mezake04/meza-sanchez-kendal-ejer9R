export default function ColorDisplay({ color, onGenerate, size = 150 }) {
  return (
    <>
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          border: "1px solid #ccc",
        }}
      />

      <p>{color}</p>

      <button onClick={onGenerate}>Generar color</button>
    </>
  );
}