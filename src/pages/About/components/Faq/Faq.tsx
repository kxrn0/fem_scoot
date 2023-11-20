import { ChangeEvent, useState } from "react";
import SCFaq from "./Faq.styled.tsx";
import IconChevronDown from "../../../../icons/IconChevronDown.tsx";

type Props = {
  name: string;
  questions: { question: string; answer: string }[];
};

export default function Faq({ name, questions }: Props) {
  const [isOpen, setIsOpen] = useState(questions.map(() => false));

  function handle_change(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const index = Number(target.dataset.index);
    const checked = target.checked;

    setIsOpen((prev) =>
      prev.map((item, itemIndex) => (itemIndex === index ? checked : item))
    );
  }

  return (
    <SCFaq>
      <h3 className="fs-h3 scalable">{name}</h3>
      <div className="questions">
        {questions.map((question, index) => (
          <div key={index} className="question">
            <label className="head">
              <h4 className="fs-h4 scalable">{question.question}</h4>
              <div className={`input-wrapper ${isOpen[index] && "index"}`}>
                <input
                  type="checkbox"
                  checked={isOpen[index]}
                  data-index={index}
                  onChange={handle_change}
                />
                <IconChevronDown />
              </div>
            </label>
            <div className={`base ${isOpen[index] && "open"}`}>
              <div className="answer fs-body-1">{question.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </SCFaq>
  );
}
