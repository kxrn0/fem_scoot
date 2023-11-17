import { CSSProperties, FunctionComponent } from "react";
import SCMessage from "./Message.styled.tsx";

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean;
  arrow: {
    Icon: FunctionComponent;
    desktop: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    tablet: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    mobile: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
  };
};

export default function Message({
  title,
  description,
  image,
  link,
  reverse,
  arrow,
}: Props) {
  const Icon = arrow.Icon;
  const styles = {
    "--top-d": `${arrow.desktop.top}`,
    "--right-d": `${arrow.desktop.right}`,
    "--bottom-d": `${arrow.desktop.bottom}`,
    "--left-d": `${arrow.desktop.left}`,

    "--top-t": `${arrow.tablet.top}`,
    "--right-t": `${arrow.tablet.right}`,
    "--bottom-t": `${arrow.tablet.bottom}`,
    "--left-t": `${arrow.tablet.left}`,

    "--top-m": `${arrow.mobile.top}`,
    "--right-m": `${arrow.mobile.right}`,
    "--bottom-m": `${arrow.mobile.bottom}`,
    "--left-m": `${arrow.mobile.left}`,
  } as CSSProperties;

  return (
    <SCMessage className={reverse ? "reverse" : "normal"} style={styles}>
      <div className="text">
        <div className="info">
          <h2 className="fs-h2 scalable">{title}</h2>
          <p className="fs-body-1">{description}</p>
        </div>
        <a href={link} target="_blank" className="button-primary">
          Learn More
        </a>
      </div>
      <img src={image} alt="" />
      <Icon />
    </SCMessage>
  );
}
