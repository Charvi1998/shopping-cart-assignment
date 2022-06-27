import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { CategoryContext } from "../../contexts/Category.context";

const HomePage = () => {
  const navigate = useNavigate();
  const { categories } = useContext(CategoryContext);

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <>
      <main className="container">
        <Banner />
        <div className="home-page-categories">
          {categories?.map((category) => {
            return (
              <div className="home-page-category-container" key={category.id}>
                {Math.floor(category.order % 2) === 1 && (
                  <>
                    <div className="home-page-category-img-box flex-start">
                      <img
                        className="home-page-category-img"
                        src={category.imageUrl}
                        alt={category.description}
                      />
                    </div>

                    <div className="home-page-category-content-box">
                      <h3 className="sub-heading-tertiary">{category.name}</h3>
                      <p className="category-content">{category.description}</p>
                      <div className="category-btn-container">
                        <button
                          className=" home-page-category-btn btn"
                          onClick={handleClick}
                        >
                          Explore {category.key}
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {Math.floor(category.order % 2) === 0 && (
                  <>
                    <div className="home-page-category-content-box">
                      <h3 className="sub-heading-tertiary">{category.name}</h3>
                      <p className="category-content">{category.description}</p>
                      <div className="category-btn-container">
                        <button
                          className=" home-page-category-btn btn"
                          onClick={handleClick}
                        >
                          Explore {category.key}
                        </button>
                      </div>
                    </div>

                    <div className="home-page-category-img-box ">
                      <img
                        className="home-page-category-img"
                        src={category.imageUrl}
                        alt={category.name}
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
