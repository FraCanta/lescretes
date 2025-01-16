import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between w-full border-t cursor-pointer border-neutral-600"
        onClick={toggleOpen}
      >
        <div className="py-5 text-lg font-bold text-main">{question}</div>
        <div className="ml-2 text-lg text-main">
          <Icon
            icon={isOpen ? "mdi:minus-circle" : "mdi:plus-circle"}
            color="#4a4a49"
            width={25}
          />
        </div>
      </div>
      <motion.div
        className="mt-2 text-main"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: isOpen ? 0 : 0.1,
        }}
      >
        {isOpen && answer}
      </motion.div>
    </div>
  );
};

const FAQ = ({ translation }) => {
  return (
    <>
      {translation.items.map((el, i) => {
        return (
          <div key={i}>
            <FAQItem question={el.question} answer={el.answer} />
          </div>
        );
      })}
    </>
  );
};

export default FAQ;
