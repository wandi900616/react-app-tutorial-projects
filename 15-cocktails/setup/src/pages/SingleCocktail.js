import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  // console.log(useParams();result in id);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getCocktails = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: img,
            strAlcoholic: alcoholic,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          // console.log(ingredients);
          setCocktail({
            name,
            img,
            alcoholic,
            category,
            glass,
            instructions,
            ingredients,
          });

          // console.log(cocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCocktails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    // console.log(!cocktail);
    return <h2 className="section-title">no cocktail</h2>;
  }

  const { alcoholic, category, glass, img, ingredients, instructions, name } =
    cocktail;

  // alcoholic: "Alcoholic";
  // category: "Cocktail";
  // glass: "Martini Glass";
  // img: "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg";
  // ingredients: (5)[("Gin", "Grenadine", "Heavy cream", "Milk", "Egg White")];
  // instructions: "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.";
  // name:

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        home
      </Link>
      <h2 className="section-title">{name} </h2>
      <div className="drink">
        <img src={img} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">alcoholic:</span> {alcoholic}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients</span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? <span key={index}>{ingredient}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
