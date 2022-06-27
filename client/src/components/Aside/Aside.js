import "./Aside.css";
import { useContext } from "react";
import { CategoryContext } from "../../contexts/Category.context";

const Aside = (props) => {
  const { categories } = useContext(CategoryContext);

  return (
    <div className="category-list-container">
      <aside className="categories-side">
        <ul className="category-list">
          {categories?.map((category) => {
            return (
              <li key={category.id}>
                <button
                  className="btn--categories"
                  onClick={() => props.handleClick(category.id)}
                >
                  {category.name}
                </button>
                <hr />
              </li>
            );
          })}
        </ul>

        <div>
          <select
            className="category-list-media"
            onChange={props.handleOptionSelect}
          >
            <option
              defaultValue={"categories"}
              className="category-dropdown-menu"
            >
              Categories
            </option>
            {categories?.map((category) => {
              return (
                <option
                  key={category.id}
                  value={category.id}
                  id={category.id}
                  className="category-dropdown-menu"
                >
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
