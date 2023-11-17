import SCFaq from "./Faq.styled.tsx";

type Props = {
  name: string;
  questions: [{ question: string; answer: string }];
};

export default function Faq({ name, questions }: Props) {
  return (
    <SCFaq>
      <h3 className="fs-h3">{name}</h3>
      <div className="questions">
        hi
      </div>
    </SCFaq>
  );
}
