import SCValue from "./Value.styled.tsx";

type Props = {
  image: string;
  number: string;
  title: string;
  description: string;
};

export default function Value({ image, number, title, description }: Props) {
  return (
    <SCValue>
      <div className="image">
        <img src={image} alt={title} />
        <h4 className="fs-h4">{number}</h4>
      </div>
      <div className="text">
        <h4 className="fs-h4">{title}</h4>
        <p className="fs-body-1">{description}</p>
      </div>
    </SCValue>
  );
}
