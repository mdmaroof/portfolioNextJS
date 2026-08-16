import { motion, MotionValue, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const TrailDot = ({ x, y, order }: { x: MotionValue<number>; y: MotionValue<number>; order: number }) => {
  const springX = useSpring(x, { stiffness: 290 - order * 24, damping: 32 + order * 3, mass: .42 + order * .11 });
  const springY = useSpring(y, { stiffness: 290 - order * 24, damping: 32 + order * 3, mass: .42 + order * .11 });
  const size = Math.max(2, 7 - order * .65);
  return (
    <motion.span
      className="cursor-trail-dot"
      style={{
        x: springX,
        y: springY,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        opacity: Math.max(.025, .16 - order * .018),
      }}
    />
  );
};

export const PlanetCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 760, damping: 44, mass: .16 });
  const smoothY = useSpring(y, { stiffness: 760, damping: 44, mass: .16 });
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(finePointer.matches && !reducedMotion.matches);
    update();
    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => { finePointer.removeEventListener("change", update); reducedMotion.removeEventListener("change", update); };
  }, []);

  useEffect(() => {
    if (!enabled) { document.documentElement.classList.remove("planet-cursor-enabled"); return; }
    document.documentElement.classList.add("planet-cursor-enabled");
    const move = (event: PointerEvent) => { x.set(event.clientX); y.set(event.clientY); };
    const hover = (event: PointerEvent) => setActive(Boolean((event.target as HTMLElement)?.closest("a, button, input, textarea")));
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", hover, { passive: true });
    return () => { document.documentElement.classList.remove("planet-cursor-enabled"); window.removeEventListener("pointermove", move); window.removeEventListener("pointerover", hover); };
  }, [enabled, x, y]);

  if (!enabled) return null;
  return (
    <div className="planet-cursor-layer" aria-hidden="true">
      {[1, 2, 3, 4, 5, 6, 7].map((order) => <TrailDot key={order} x={x} y={y} order={order} />)}
      <motion.span className="planet-cursor-glow" style={{ x: smoothX, y: smoothY }} animate={{ scale: active ? 1.4 : 1, opacity: active ? .72 : .42 }} transition={{ duration: .18 }} />
      <motion.span className="planet-cursor-orbit" style={{ x: smoothX, y: smoothY }} animate={{ scale: active ? 1.35 : 1, rotate: active ? 36 : 0, opacity: active ? .9 : .58 }} transition={{ duration: .2 }} />
      <motion.span className="planet-cursor-core" style={{ x: smoothX, y: smoothY }} animate={{ scale: active ? .82 : 1 }} transition={{ duration: .16 }} />
    </div>
  );
};
