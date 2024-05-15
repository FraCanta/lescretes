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
        className="flex justify-between items-center cursor-pointer w-full border-t border-neutral-600"
        onClick={toggleOpen}
      >
        <div className="font-bold text-main text-lg py-10">{question}</div>
        <div className="ml-2 text-main text-lg">
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
      {translation.map((el, i) => {
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
