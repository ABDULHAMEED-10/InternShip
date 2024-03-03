import "../CSS/Section.css";
import "../CSS/carousel.css";
import Portfolio from "./Components/portfolio";
import profile from "../assets/hero-img.png";
import Card from "./Components/Card";
import Layout from "../Layout/Layout";
import { skillsData, portfolioData, CarouselData } from "../staticData/Data";
import Carousel from "./Components/carousel";
import { useState } from "react";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  setInterval(function () {
    !document.hidden && setCurrentIndex((prev) => (prev == 0 ? 1 : 0));
  }, 5000);
  return (
    <Layout>
      {/* Hero section */}

      <section className="flex flex-row mt-8 w-full hero-section-main">
        <div className="w-4/12 mt-24">
          <div className="flex flex-row items-center mb-3">
            <span className="introducing mr-1"></span>
            <p
              style={{ color: "rgb(100, 244, 171)" }}
              className="text-normal leading-loose"
            >
              Introducing
            </p>
          </div>
          <div>
            <h1 className="flex flex-col intro_heading text-normal">
              <span className="font-bold ">Hello</span>{" "}
              <span className="font-extrabold">
                I'm Jessy <span className="font-bold">Walter</span>
              </span>{" "}
            </h1>
          </div>
          <div>
            <p className="my-7 flex text-left intro_text">
              Since beginning my journey as a freelance designer nearby 7 years
              ago, I 've done remote work for agencies, consulted for startup,
              and collaborated with talented people to create digital products.
            </p>
          </div>
          <button className="rpeated_button">Contact Me</button>
        </div>
        <div className="w-8/12 circlesAndImage">
          <div className="upper-circle ">
            <div className="small-circle-1">Id</div>
            <div className="small-circle-2">Ps</div>
            <div className="small-circle-3">Xd</div>
            <div className="small-circle-4">Ai</div>
            <div className="lower-circle "></div>
            <img src={profile} alt="..."></img>
          </div>
        </div>
      </section>

      {/* Skills section */}
      <div className="second-section flex flex-col gap-y-20">
        <section className="">
          <div className="flex flex-row py-28 px-8">
            <div className="w-1/2 flex flex-row justify-center items-center space-y-16 space-x-8 ">
              <div className=" flex flex-col space-y-8 ">
                <Card
                  icon={skillsData[0].icon}
                  heading={skillsData[0].heading}
                  text={skillsData[0].text}
                />
                <Card
                  icon={skillsData[1].icon}
                  heading={skillsData[1].heading}
                  text={skillsData[1].text}
                />
              </div>
              <div className=" flex flex-col space-y-8">
                <Card
                  icon={skillsData[2].icon}
                  heading={skillsData[2].heading}
                  text={skillsData[2].text}
                />
                <Card
                  icon={skillsData[3].icon}
                  heading={skillsData[3].heading}
                  text={skillsData[3].text}
                />
              </div>
            </div>
            <div className="w-1/2 mt-48 pl-40 ">
              <div className="flex flex-row items-center mb-2">
                <span className="introducing mr-1"></span>
                <p
                  style={{ color: "rgb(100, 244, 171)" }}
                  className="leading-loose text-base"
                >
                  My Skills
                </p>
              </div>
              <div>
                <h1 className="text-4xl pr-24 font-bold leading-normal tracking-wide ">
                  Why Hire Me For Next Project?
                </h1>
                <p className="flex text-justify my-7 pr-6 ">
                  The technological revolution is changing aspect of our lives,
                  and the fabric of society itself. it's also changing the way
                  we learn and what we learn. Factual knowledge is less prized
                  when everything you ever need to know can be found on your
                  phone. There's no imperative to be an expert at doing
                  everything when you can.
                </p>
                <button className="rpeated_button">Download CV</button>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio section */}

        <section className="third-section px-4">
          <div className="flex flex-col">
            {portfolioData.map((data) => (
              <div key={data.id}>
                <Portfolio
                  id={data.id}
                  title={data.title}
                  text={data.text}
                  image={data.src}
                  direction={data.id % 2 === 0 ? "reverse" : "row"}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mb-12">
            <button className="view-button w-40">View All</button>
          </div>
        </section>
        <section className="flex flex-row justify-center items-center w-full">
          <div className="number-list-parent flex justify-center items-center gap-x-1">
            <div className="number-list-child">
              <h1>56</h1>
              <p>Happy Clients</p>
            </div>
            <div className="number-list-child">
              <h1>87</h1>
              <p>Project Done</p>
            </div>
            <div className="number-list-child">
              <h1>16</h1>
              <p>Awards Winnings</p>
            </div>
            <div className="number-list-child">
              <h1>7</h1>
              <p>Years Experience</p>
            </div>
          </div>
        </section>
        {/* caurosel */}
        <section className="">
          <div className="carousel d-flex ">
            <div className="carousel__wrapper ">
              <div
                className="carousel__slides"
                style={{ transform: `translate(-${currentIndex * 100}%)` }}
              >
                {CarouselData.map((item, index) => (
                  <Carousel key={index} {...item} />
                ))}
              </div>
            </div>
            <div className="carousel__btns d-flex">
              {CarouselData.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    currentIndex == index ? "carousel__active" : "carousel__btn"
                  } d-flex`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="carousel__btn-inner"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* work togather */}
        <section className="flex flex-row justify-center items-center mb-28">
          <div className="flex flex-col justify-center items-center work-togather">
            <div className="top-left-ring"></div>
            <div className="bottom-right-ring">
              <div></div>
            </div>
            <div className="flex flex-col items-center justify-center items">
              <div className="flex flex-col items-center justify-center gap-y-4">
                <div className="bar"></div>
                <h1 className="heading">Lets Work Together</h1>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-12">
                <p className="text-p">
                  The technological revolution is changing aspect of our lives,
                  and the fabric of society itself. it's also changing the way
                  we learn and what we learn
                </p>
                <button className="rpeated_button rpeated-button-2">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
