"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";

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
          {isOpen ? (
            <Icon icon="mdi:minus-circle" color="#4a4a49" width={25} />
          ) : (
            <Icon icon="mdi:plus-circle" color="#4a4a49" width={25} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 text-main transition ease-in-out">{answer}</div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div>
      <FAQItem
        question="Qual è il tuo colore preferito?"
        answer="Il mio colore preferito è il blu."
      />
      <FAQItem
        question="Quanti anni hai?"
        answer="Non ho un'età specifica, sono solo un programma di computer."
      />
      <FAQItem
        question="Qual è il tuo colore preferito?"
        answer="Il mio colore preferito è il blu."
      />
      <FAQItem
        question="Quanti anni hai?"
        answer="Non ho un'età specifica, sono solo un programma di computer."
      />
    </div>
  );
};

export default FAQ;
