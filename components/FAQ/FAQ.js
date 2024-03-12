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

const FAQ = () => {
  return (
    <div>
      <FAQItem
        question="Posso portare i miei bambini a una degustazione di vino?"
        answer="Siamo Family Friendly! Offriamo ai bambini una selezione di giochi con cui divertirsi mentre i ‘grandi’ assaggiano i nostri vini e da bere, sempre offerto ai i più piccoli, succo d’uva biologico! *I vini sono selezionati dalla cantina in relazione alla stagionalità e disponibilità della produzione. Durante il periodo vendemmiale la visita in cantina non è garantita per motivi di sicurezza legati alla fermentazione dei mosti. "
      />

      <FAQItem
        question="Se ho un imprevisto, posso cambiare il giorno della degustazione?"
        answer="Il mio colore preferito è il blu."
      />
      <FAQItem
        question="Le degustazioni sono ideali anche per chi è vegetariano o vegano?"
        answer="Non ho un'età specifica, sono solo un programma di computer."
      />
      <FAQItem
        question="E' possibile regalare una degustazione?"
        answer="Non ho un'età specifica, sono solo un programma di computer."
      />
      <FAQItem
        question="Qual è la capacità massima di partecipanti per questa degustazione? È necessaria una prenotazione anticipata?"
        answer="Non ho un'età specifica, sono solo un programma di computer."
      />
    </div>
  );
};

export default FAQ;
