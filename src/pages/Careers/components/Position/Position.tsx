import SCPosition from "./Position.styled.tsx";

type Props = {
  title: string;
  location: string;
  link: string;
};

export default function Position({ title, location, link }: Props) {
  return (
    <SCPosition>
      <div className="text">
        <h4 className="fs-h4 scalable">{title}</h4>
        <p className="fs-body-1">{location}</p>
      </div>
      <a href={link} target="_blank" className="button-primary">
        Apply
      </a>
    </SCPosition>
  );
}
