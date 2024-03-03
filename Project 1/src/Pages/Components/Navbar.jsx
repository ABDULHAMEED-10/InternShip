import WebLogo from "../../assets/logo-header.svg";
import "../../CSS/navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <header className="flex flex-row justify-between pt-2">
        <div className="flex items-center">
          <img className="w-4/4 " src={WebLogo} alt="Logo" />
        </div>

        <ul className="flex flex-row items-center justify-around w-3/12 text-lg font-semibold font-sans pt-3 pr-6">
          <li>
            <NavLink
              to="/"
              style={({ isActive}) => {
                return {
                  borderBottom: isActive ? '3px solid white' : 'none',
                  paddingBottom: '0.3rem',
                  color: 'white',
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/portfolio"
              style={({ isActive}) => {
                return {
                  borderBottom: isActive ? '3px solid white' : 'none',
                  paddingBottom: '0.3rem',
                  color: 'white',
                };
              }}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/contact"
              style={({ isActive}) => {
                return {
                  borderBottom: isActive ? '3px solid white' : 'none',
                  paddingBottom: '0.3rem',
                  color: 'white',
                };
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex flex-row items-center w-1/2 justify-end pt-2 ">
          <div className="flex flex-row items-center w-2/4 justify-evenly h-full">
            <div className="icon-bg  rounded-xl ml-6">
              <i className="fas fa-globe fa-lg icon-bg"></i>
            </div>
            <button className="rpeated_button">Contact Me</button>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default Navbar;
