import { useRef } from "react";
import "./mountains.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Mountains = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-30%", "220%"]);
  const yBgSun = useTransform(scrollYProgress, [0, 1], ["-20%", "100%"]);
  const xBgStars = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        Creating Ideas
      </motion.h1>
      <motion.div
        className="stars"
        style={{ x: xBgStars }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{ y: yBgSun }}
      ></motion.div>
      <motion.div
        className="sun"
        style={{ y: yBgSun }} 
      ></motion.div>
      <motion.div className="mountains"></motion.div>
    </div>
  );
};

export default Mountains;
