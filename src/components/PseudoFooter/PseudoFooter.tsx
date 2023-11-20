import IconAppleStore from "../../icons/IconAppleStore.tsx";
import IconPlayStore from "../../icons/IconPlayStore.tsx";
import IconSemiCircles from "../../icons/IconSemicircles.tsx";
import SCPseudoFooter from "./PseudoFooter.styled.tsx";

export default function PseudoFooter() {
  return (
    <SCPseudoFooter className="pseudofooter">
      <h2 className="fs-h2 scalable">Sign up and Scoot off today</h2>
      <div className="icons">
        <a href="https://www.youtube.com/watch?v=wFaYUl_b1Ns" target="_blank">
          <IconAppleStore />
        </a>
        <a href="https://www.youtube.com/watch?v=HXFksVj3Ghg" target="_blank">
          <IconPlayStore />
        </a>
      </div>
      <IconSemiCircles />
    </SCPseudoFooter>
  );
}
