import IconCircles from "../../icons/IconCircles.tsx";
import SCPseudoNavbar from "./PseudoNavbar.styled.tsx";

type Props = {
  location: string;
  image: {
    desktop: { src: string; breakPoint: number };
    tablet: { src: string; breakPoint: number };
    mobile: { src: string };
  };
};

export default function PseudoNavbar({ location, image }: Props) {
  return (
    <SCPseudoNavbar>
      <picture>
        <source
          srcSet={image.desktop.src}
          media={`(min-width: ${image.desktop.breakPoint}px)`}
        />
        <source
          srcSet={image.tablet.src}
          media={`(min-width: ${image.tablet.breakPoint}px)`}
        />
        <img src={image.mobile.src} alt="background image" />
      </picture>
      <h1 className="fs-h1 scalable">{location}</h1>
      <IconCircles />
    </SCPseudoNavbar>
  );
}
