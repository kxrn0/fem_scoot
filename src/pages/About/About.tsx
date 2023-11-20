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
import Faq from "./components/Faq/Faq.tsx";

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
        link: {
          href: "https://www.youtube.com/watch?v=2SDBxH6mCtI",
          blank: true,
        },
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
        link: {
          href: "https://www.youtube.com/watch?v=GsgoZoCnX1g",
          blank: true,
        },
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
  const faqs = useMemo(
    () => [
      {
        question: "How do I download the app?",
        answer:
          "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
      },
      {
        question: "Can I find a nearby Scoots?",
        answer:
          "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information.",
      },
      {
        question: "Do I need a license to ride?",
        answer:
          "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.",
      },
    ],
    []
  );
  const safeFaqs = useMemo(
    () => [
      {
        question: "Should I wear a helmet?",
        answer:
          "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
      },
      {
        question: "How about the rules & regulations?",
        answer:
          "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.",
      },
      {
        question: "What if I damage my Scoot?",
        answer:
          "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.",
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
      <section className="faqs">
        <h2 className="fs-h2 scalable">FAQs</h2>
        <Faq name="How it works" questions={faqs} />
        <Faq name="Safe driving" questions={safeFaqs} />
      </section>
    </SCAbout>
  );
}
