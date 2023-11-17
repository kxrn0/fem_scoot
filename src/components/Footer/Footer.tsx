import { Link } from "wouter";
import SCFooter from "./Footer.styled.tsx";
import Logo from "../../icons/Logo.tsx";
import IconFacebook from "../../icons/IconFacebook.tsx";
import IconTwitter from "../../icons/IconTwitter.tsx";
import IconInsta from "../../icons/IconInsta.tsx";

export default function Footer() {
  return (
    <SCFooter>
      <div className="links">
        <Link to="/fem_scoot/">
          <Logo />
          <span></span>
        </Link>
        <div className="rest">
          <Link className="fs-body-2" to="/fem_scoot/about">
            About
          </Link>
          <Link className="fs-body-2" to="/fem_scoot/location">
            Location
          </Link>
          <Link className="fs-body-2" to="/fem_scoot/careers">
            Careers
          </Link>
        </div>
      </div>
      <div className="socials">
        <Link
          to="https://www.youtube.com/watch?v=UkXeOMSwdZQ"
          aria-label="facebook"
        >
          <span></span>
          <IconFacebook />
        </Link>
        <Link
          to="https://www.youtube.com/watch?v=NrbHn6PHz8Q"
          aria-label="twitter"
        >
          <span></span>
          <IconTwitter />
        </Link>
        <Link
          to="https://www.youtube.com/watch?v=s5Tjnpb1iQQ"
          aria-label="instagram"
        >
          <span></span>
          <IconInsta />
        </Link>
      </div>
    </SCFooter>
  );
}
