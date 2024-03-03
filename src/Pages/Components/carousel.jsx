/* eslint-disable react/prop-types */
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import '../../CSS/carousel.css';

const Carousel = ({ image, text, name, personTitle }) => {
  return (
    <div className="carousel-item d-flex ">
      <div className="c__image-container ">
        <div className="c__image-container__wrapper">
          <div className="c__image-container__wrapper-background"></div>
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="c__details-container d-flex">
        <div className="c__details-container__quote">
          <FormatQuoteIcon
            fontSize="inherit"
            color="inherit"
            className="quote__inverted"
          />
        </div>
        <p className="c__details-container__text text-justify">{text}</p>
        <p className="c__details-container__name">{name}</p>
        <p className="c__details-container__person-title">{personTitle}</p>
      </div>
    </div>
  );
};

export default Carousel;