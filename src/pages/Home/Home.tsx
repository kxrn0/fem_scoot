import IconArrowRight from "../../icons/IconArrowRight.tsx";
import IconLine from "../../icons/IconLine.tsx";
import IconCircles from "../../icons/IconCircles.tsx";
import heroDesktop from "../../assets/images/home-hero-desktop.jpg";
import heroTablet from "../../assets/images/home-hero-tablet.jpg";
import heroMobile from "../../assets/images/home-hero-mobile.jpg";
import IconLocate from "../../icons/IconLocate.tsx";
import IconScooter from "../../icons/IconScooter.tsx";
import IconRide from "../../icons/IconRide.tsx";
import telemetry from "../../assets/images/telemetry.jpg";
import nearYou from "../../assets/images/near-you.jpg";
import payments from "../../assets/images/payments.jpg";
import SCHome from "./Home.styled.tsx";
import { useMemo } from "react";
import Instruction from "./components/Instruction/Instruction.tsx";
import Message from "../../components/Message/Message.tsx";
import IconArrowLeftDownward from "../../icons/IconArrowLeftDownward.tsx";
import scroll_to_bottom from "../../utilities/scroll_to_bottom.ts";

export default function Home() {
  const instructions = useMemo(
    () => [
      {
        Icon: IconLocate,
        title: "Locate with app",
        description:
          "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. ",
      },
      {
        Icon: IconScooter,
        title: "Pick your scooter",
        description:
          "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
      },
      {
        Icon: IconRide,
        title: "Enjoy the ride",
        description:
          "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
      },
    ],
    []
  );
  const messages = useMemo(
    () => [
      {
        title: "Easy to use riding telemetry",
        description:
          "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
        image: telemetry,
        link: { href: "/fem_scoot/about", blank: false },
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
      },
      {
        title: "Coming to a city near you",
        description:
          "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
        image: nearYou,
        reverse: true,
        link: { href: "/fem_scoot/location", blank: false },
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
            left: "-175px",
          },
        },
      },
      {
        title: "Zero hassle payments",
        description:
          "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
        image: payments,
        link: {
          href: "/fem_scoot/about",
          blank: false,
        },
        arrow: {
          Icon: IconArrowLeftDownward,
          desktop: {
            top: "85px",
            right: "-380px",
            bottom: "auto",
            left: "auto",
          },
          tablet: {
            top: "85px",
            right: "-380px",
            bottom: "auto",
            left: "auto",
          },
          mobile: {
            top: "0",
            right: "-525px",
            bottom: "auto",
            left: "auto",
          },
        },
      },
    ],
    []
  );

  return (
    <SCHome>
      <header className="hero">
        <picture>
          <source srcSet={heroDesktop} media="(min-width: 1400px)" />
          <source srcSet={heroTablet} media="(min-width: 690px)" />
          <img src={heroMobile} alt="hero image" />
        </picture>
        <div className="content">
          <h1 className="fs-h1 scalable">Scooter sharing made simple</h1>
          <div className="paragraph">
            <p className="fs-body-1">
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you’re away!
            </p>
            <button className="button-primary" onClick={scroll_to_bottom}>
              Get Scootin
            </button>
          </div>
        </div>
        <IconLine />
        <IconArrowRight />
        <IconCircles />
      </header>
      <section className="instructions">
        {instructions.map((inst, index) => (
          <Instruction key={index} {...inst} />
        ))}
      </section>
      <section className="messages">
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </section>
    </SCHome>
  );
}
