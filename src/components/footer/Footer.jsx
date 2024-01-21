import RightArrow from "../../assets/iconComponents/RightArrow";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        POWERED BY <span>APPOINTO</span>
      </p>
      <button>
        Next <RightArrow />
      </button>
    </footer>
  );
};

export default Footer;
