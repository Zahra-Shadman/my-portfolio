import { motion } from "framer-motion";

const AboutMeWordReveal: React.FC = () => {
  const text = "Hi I'm Darya👩‍💻";
  const description =
    "I'm a Front-end developer who loves building web applications and exploring new technologies.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative w-full px-4 sm:px-6 md:px-14 mt-10">
      <div className="flex flex-col md:flex-row justify-end md:mr-44 gap-8 md:gap-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col text-lg mr-24 mt-24 gap-4 break-inside-auto w-full max-w-xs sm:max-w-sm md:max-w-[400px] text-blue-200"
        >
          <motion.span
            className="text-3xl text-blue-100 sm:text-4xl md:text-5xl font-mono flex flex-wrap"
            variants={containerVariants}
          >
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                style={{ marginRight: "0.5rem" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
          <motion.p variants={containerVariants} className="flex flex-wrap">
            {description.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                style={{ marginRight: "0.5rem" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};
export default AboutMeWordReveal;
