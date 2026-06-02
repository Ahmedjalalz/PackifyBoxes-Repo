import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};
function Reveal({
  children,
  delay = 0,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      variants,
      transition: { delay },
      children
    }
  );
}
function Stagger({
  children,
  className,
  delayChildren = 0,
  stagger = 0.08
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-60px" },
      variants: {
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } }
      },
      children
    }
  );
}
function StaggerItem({
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className, variants, initial: false, children });
}
export {
  Reveal as R,
  Stagger as S,
  StaggerItem as a
};
