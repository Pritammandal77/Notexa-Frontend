import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({ children, delay = 0, direction = "y" }) => {
  let initialPos = {};

  switch (direction) {
    case "y":  // bottom se
      initialPos = { y: 10 };
      break;
    case "-y": // top se
      initialPos = { y: -10 };
      break;
    case "x":  // right se
      initialPos = { x: 10 };
      break;
    case "-x": // left se
      initialPos = { x: -15 };
      break;
    default:
      initialPos = { y: 10 };
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...initialPos }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;