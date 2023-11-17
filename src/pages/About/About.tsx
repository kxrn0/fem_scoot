import PseudoNavbar from "../../components/PseudoNavbar/PseudoNavbar.tsx";
import heroDesktop from "../../assets/images/about-hero-desktop.jpg";
import heroTablet from "../../assets/images/about-hero-tablet.jpg";
import heroMobile from "../../assets/images/about-hero-mobile.jpg";
import digital from "../../assets/images/digital-era.jpg";
import better from "../../assets/images/better-living.jpg";
import phone from "../../assets/images/our-tech.jpg";
import scooter from "../../assets/images/our-integrity.jpg";
import community from "../../assets/images/our-community.jpg";
import IconArrowLeftUpward from "../../icons/IconArrowLeftUpward.tsx";
import SCAbout from "./About.styled.tsx";
import { useMemo } from "react";
import IconArrowRight from "../../icons/IconArrowRight.tsx";
import Message from "../../components/Message/Message.tsx";
import Value from "../../components/Value/Value.tsx";

export default function About() {
  const image = useMemo(
    () => ({
      desktop: { src: heroDesktop, breakPoint: 1000 },
      tablet: { src: heroTablet, breakPoint: 500 },
      mobile: { src: heroMobile },
    }),
    []
  );
  const messages = useMemo(
    () => [
      {
        title: "Mobility for the digital era",
        description:
          "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
        image: digital,
        link: "https://www.youtube.com/watch?v=2SDBxH6mCtI",
        arrow: {
          Icon: IconArrowLeftUpward,
          desktop: {
            top: "auto",
            right: "0",
            bottom: "40px",
            left: "auto",
          },
          tablet: {
            top: "260px",
            right: "0",
            bottom: "auto",
            left: "auto",
          },
          mobile: {
            top: "130px",
            right: "-395px",
            bottom: "auto",
            left: "auto",
          },
        },
      },
      {
        title: "Better urban living",
        description:
          "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
        image: better,
        link: "https://www.youtube.com/watch?v=GsgoZoCnX1g",
        reverse: true,
        arrow: {
          Icon: IconArrowRight,
          desktop: {
            top: "0",
            right: "auto",
            bottom: "auto",
            left: "-100px",
          },
          tablet: {
            top: "0",
            right: "auto",
            bottom: "auto",
            left: "-100px",
          },
          mobile: {
            top: "0",
            right: "auto",
            bottom: "auto",
            left: "-100px",
          },
        },
      },
    ],
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

  return (
    <SCAbout>
      <PseudoNavbar location="About" image={image} />
      <section className="messages">
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </section>
      <section className="values">
        <h2 className="fs-h2 scalable">Our Values</h2>
        <div className="values-container">
          {values.map((value, index) => (
            <Value key={index} {...value} />
          ))}
        </div>
      </section>
    </SCAbout>
  );
}
