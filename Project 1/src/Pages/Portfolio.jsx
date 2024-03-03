import Layout from "../Layout/Layout";
import PortfolioCard from "./Components/portfolio";
import { portfolioALLData } from "../staticData/Data";
import "../CSS/pagePortfolio.css";
function Portfolio() {
    return (
        <Layout>
            <section className="flex justify-center items-center mt-8 py-40 portfolio w-full">
            <div className="flex flex-col">
            {portfolioALLData.map((data) => (
              <div key={data.id}>
                <PortfolioCard
                  id={data.id}
                  title={data.title}
                  text={data.text}
                  image={data.src}
                  direction={data.id % 2 === 0 ? "reverse" : "row"}
                />
              </div>
            ))}     
          </div>
                
            </section>
        </Layout>
            
      
      );
}

export default Portfolio;