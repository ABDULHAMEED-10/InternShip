import WebLogo from "../../assets/logo-header.svg";
import "../../CSS/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <footer className="flex flex-row items-center py-12 px-10 justify-between">
      <div className="flex items-center w-1/5">
        <img className="w-4/4 " src={WebLogo} alt="Logo" />
      </div>
      <div className="w-3/5 flex justify-center">
        <p className="text-base">
          © 2024 Freelancer - Phlox Elementor WordPress Theme. All rights
          reserved.
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-1/4">
      <div className="icon-bg rounded-xl ml-6 flex items-center justify-center">
            <FacebookIcon />
      </div>
      
        <div className="icon-bg rounded-xl ml-6 flex items-center justify-center">
            <InstagramIcon />
          
        </div>
        <div className="icon-bg  rounded-xl ml-6 flex items-center justify-center">
          <GithubIcon />
        </div>
        <div className="icon-bg  rounded-xl ml-6 flex items-center justify-center">
          <LinkedIn />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
