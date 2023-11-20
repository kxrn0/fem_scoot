import PseudoNavbar from "../../components/PseudoNavbar/PseudoNavbar.tsx";
import heroDesktop from "../../assets/images/careers-locations-hero-desktop.jpg";
import heroTablet from "../../assets/images/careers-locations-hero-tablet.jpg";
import heroMobile from "../../assets/images/careers-location-hero-mobile.jpg";
import mapDesktop from "../../assets/images/world-map-desktop.png";
import mapTablet from "../../assets/images/world-map-tablet.png";
import mapMobile from "../../assets/images/world-map-mobile.png";
import SCLocations from "./Locations.styled.tsx";
import { CSSProperties, useMemo } from "react";

export default function Locations() {
  const image = useMemo(
    () => ({
      desktop: { src: heroDesktop, breakPoint: 1000 },
      tablet: { src: heroTablet, breakPoint: 500 },
      mobile: { src: heroMobile },
    }),
    []
  );
  const points = useMemo(
    () => [
      {
        name: "New York",
        desktop: { top: "13%", left: "13%" },
        tablet: { top: "15%", left: "13%" },
      },
      {
        name: "London",
        desktop: { top: "4%", left: "35.5%" },
        tablet: { top: "5%", left: "35.5%" },
      },
      {
        name: "Yokohama",
        desktop: { top: "14%", left: "77%" },
        tablet: { top: "17%", left: "76.7%" },
      },
      {
        name: "Jakarta",
        desktop: { top: "46.5%", left: "70%" },
        tablet: { top: "48%", left: "69.5%" },
      },
    ],
    []
  );

  return (
    <SCLocations>
      <PseudoNavbar location="Locations" image={image} />
      <section className="image">
        <picture>
          <source srcSet={mapDesktop} media="(min-width: 1115px)" />
          <source srcSet={mapTablet} media="(min-width: 690px)" />
          <img src={mapMobile} alt="map image" />
        </picture>
        <div className="points">
          {points.map((point, index) => (
            <p
              key={index}
              className="point fs-h4"
              style={
                {
                  "--top-d": point.desktop.top,
                  "--left-d": point.desktop.left,
                  "--top-t": point.tablet.top,
                  "--left-t": point.tablet.left,
                } as CSSProperties
              }
            >
              {point.name}
            </p>
          ))}
        </div>
      </section>
      <section className="question">
        <div className="text">
          <h2 className="fs-h2 scalable">Your city not listed?</h2>
          <p className="fs-body-1">
            If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.
          </p>
        </div>
        <a
          href="https://www.youtube.com/watch?v=qdfYwAJazR0"
          target="_blank"
          className="button-primary"
        >
          Message us
        </a>
      </section>
    </SCLocations>
  );
}
