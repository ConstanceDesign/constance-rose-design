export default function CursorHand({ x, y, enabled }) {
  if (!enabled) return null

  return (
    <div
      className="cursor-hand"
      aria-hidden="true"
      style={{
        transform: `translate(${x}px, ${y}px) translate(0px, -40px)`,
      }}
    >
      <img src="/hand-cursor.svg" alt="hand cursor with stylus" />
    </div>
  )
}