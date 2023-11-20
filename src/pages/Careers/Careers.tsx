import PseudoNavbar from "../../components/PseudoNavbar/PseudoNavbar.tsx";
import heroDesktop from "../../assets/images/careers-locations-hero-desktop.jpg";
import heroTablet from "../../assets/images/careers-locations-hero-tablet.jpg";
import heroMobile from "../../assets/images/careers-location-hero-mobile.jpg";
import phone from "../../assets/images/our-tech.jpg";
import scooter from "../../assets/images/our-integrity.jpg";
import community from "../../assets/images/our-community.jpg";
import join from "../../assets/images/join-us.jpg";
import SCCareers from "./Careers.styled.tsx";
import { useMemo } from "react";
import IconArrowLeftDownward from "../../icons/IconArrowLeftDownward.tsx";
import Message from "../../components/Message/Message.tsx";
import Value from "../../components/Value/Value.tsx";
import Position from "./components/Position/Position.tsx";

export default function Careers() {
  const image = useMemo(
    () => ({
      desktop: { src: heroDesktop, breakPoint: 1000 },
      tablet: { src: heroTablet, breakPoint: 500 },
      mobile: { src: heroMobile },
    }),
    []
  );
  const message = useMemo(
    () => ({
      title: "Care to join our mission?",
      description:
        "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
      link: {
        href: "https://www.youtube.com/watch?v=YMRqF1UMPhs",
        blank: true,
      },
      arrow: {
        Icon: IconArrowLeftDownward,
        desktop: {
          top: "auto",
          right: "0",
          bottom: "0",
          left: "auto",
        },
        tablet: {
          top: "307px",
          right: "0",
          bottom: "auto",
          left: "auto",
        },
        mobile: {
          top: "170px",
          right: "-390px",
          bottom: "auto",
          left: "auto",
        },
      },
      image: join,
    }),
    []
  );
  const values = useMemo(
    () => [
      {
        image: phone,
        number: "01",
        title: "Our tech",
        description:
          "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
      },
      {
        image: scooter,
        number: "02",
        title: "Our integrity",
        description:
          "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
      },
      {
        image: community,
        number: "03",
        title: "Our community",
        description:
          "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
      },
    ],
    []
  );
  const positions = useMemo(
    () => [
      {
        title: "General Manager",
        location: "Jakarta, Indonesia",
        link: "https://youtu.be/MV_3Dpw-BRY?si=deaa-6hvji7toK1v",
      },
      {
        title: "UI/UX Designer",
        location: "Yokohama, Japan",
        link: "https://youtu.be/N8ZAx_OvKpM?si=tpOdvkHLXxTerwxq",
      },
      {
        title: "Blog Content Copywriter",
        location: "New York, United States",
        link: "https://www.youtube.com/watch?v=RQV96Bxsxsw",
      },
      {
        title: "Graphic Designer",
        location: "New York, United States",
        link: "https://www.youtube.com/watch?v=Uw_hZfH5Ukc",
      },
      {
        title: "Fleet Supervisor",
        location: "Jakarta, Indonesia",
        link: "https://www.youtube.com/watch?v=KGAAhzreGWw",
      },
      {
        title: "UX Analyst",
        location: "London, United Kingdom",
        link: "https://www.youtube.com/watch?v=mFnO8C2de-I",
      },
    ],
    []
  );

  return (
    <SCCareers>
      <PseudoNavbar location="Careers" image={image} />
      <div className="message">
        <Message {...message} />
      </div>
      <section className="values">
        <h2 className="fs-h2 scalable">Why join us?</h2>
        <div className="values-container">
          {values.map((value, index) => (
            <Value key={index} {...value} />
          ))}
        </div>
      </section>
      <section className="positions">
        {positions.map((position, index) => (
          <Position key={index} {...position} />
        ))}
      </section>
    </SCCareers>
  );
}
