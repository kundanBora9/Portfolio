// TechSlider.jsx
import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js", "MongoDB", "Git",
  "HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js", "MongoDB", "Git" // repeated for loop effect
];

const TechSlider = () => {
  return (
    <div className="overflow-hidden bg-white py-4 w-full">
      <motion.div
        className="inline-flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {skills.map((skill, index) => (
          <div key={index} className="mx-6 text-xl font-semibold text-gray-700">
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechSlider;
