
import PropTypes from 'prop-types';
import "../../CSS/card.css";

function Card({icon, heading, text}) {
    return ( 
        <div className='main-container'>
            <div className='circle'>
                <i className={icon}></i>
            </div>
            <h1 className='heading'>{heading}</h1>
            <p>{text}</p>
        
        </div>
     );
}

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
