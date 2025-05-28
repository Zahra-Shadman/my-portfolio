import { motion, useScroll, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [0, 1]);
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <motion.div style={{ opacity, y }}>
      <p className="">ABOUT ME</p>
      
    </motion.div>
  );
};

export default ScrollAnimation;
