import { useRef } from "react";
import "./mountains.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Mountains = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Adjust the speed by changing the values here
  const yText = useTransform(scrollYProgress, [0, 1], ["-30%", "220%"]); // For Creating Ideas
  const yBgSun = useTransform(scrollYProgress, [0, 1], ["-20%", "100%"]); // Adjust speed for Sun
  const xBgStars = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]); // Adjust speed for Stars

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        Projects
      </motion.h1>
      <motion.div
        className="stars"
        style={{ x: xBgStars }} // Apply adjusted transform for scrolling effect to the right
      ></motion.div>
      <motion.div
        className="planets"
        style={{ y: yBgSun }} // Apply adjusted transform for scrolling effect
      ></motion.div>
      <motion.div
        className="sun"
        style={{ y: yBgSun }} // Apply adjusted transform for scrolling effect
      ></motion.div>
      <motion.div className="mountains"></motion.div>
    </div>
  );
};

export default Mountains;
