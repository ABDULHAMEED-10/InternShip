import PropTypes from "prop-types";
import image_1 from "../../assets/portfolio-1-img.jpg";
import image_2 from "../../assets/portfolio-2-img.jpg";
import image_3 from "../../assets/portfolio-3-img.jpg";
import "../../CSS/portfolio.css";
import { NavLink } from "react-router-dom";

function Portfolio(props) {
  return (
    <div
      className={`w-full flex ${
        props.direction === "reverse" ? "flex-row-reverse" : "flex-row"
      } mb-40 px-20 gap-x-24`}
    >
      <div className="w-2/4 flex flex-col mt-20">
        <div className="flex flex-row items-center  mb-3">
          <span className="introducing mr-1"></span>
          <p style={{ color: "rgb(100, 244, 171)" }} className="intro-text">
            Project {props.id}
          </p>
        </div>

        <div>
          <h1 className="tracking-wide">{props.title}</h1>
        </div>
        <div>
          <p className="text-left my-8 tracking-wide">{props.text}</p>
        </div>
        <div className="flex flex-row items-center">
          <i className="fa-solid fa-arrow-right-long link-before text-center"></i>

          <NavLink
            to={props.link}
            className="link text-center text-xl ml-8 tracking-wide"
          >
            Read More
          </NavLink>
        </div>
      </div>
      <div className="w-2/4 flex justify-center items-center">
        <div className={`relative ${props.direction === "reverse" ? "rotate-12" : "-rotate-12"} image-bg`}>
            <img
                className={`absolute ${props.direction === "reverse" ? "-rotate-12" : "rotate-12"} image`}
                src={
                    props.id === "1" ? image_1 : props.id === "2" ? image_2 : image_3
                }
                alt="..."
            ></img>
        </div>
      </div>
    </div>
  );
}
Portfolio.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Portfolio;
