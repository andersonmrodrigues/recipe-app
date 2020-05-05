import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default class RecipeView extends Component {
    state = {
        recipe: {},
        ingredients: {},
        steps: {},
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        const recipes = JSON.parse(localStorage.getItem("recipes"));
        let [recipe] = recipes.filter((recipe) => {
            return recipe.id === parseInt(id);
        });
        let ingredients = [];
        let steps = [];
        if (recipe) {
            ingredients = recipe.ingredientes.split(',');
            steps = recipe.modoPreparo.split(',');
        }
        this.setState({
            recipe,
            ingredients,
            steps,
        })
    }

    render() {
        const recipe = this.state.recipe;
        const ingredients = Array.from(this.state.ingredients);
        const steps = Array.from(this.state.steps);
        return (
            <div className="recipe-info">
                <Link to="/">Back</Link>
                <h1 className="text-center">{recipe.receita}</h1>
                <img src={recipe.link_imagem} alt="" />
                <hr />
                <h3>Ingredients:</h3>
                <hr />
                <ul>
                    {ingredients.map((ingredient, i) => (
                        <li key={i}>
                            <p >{ingredient}</p>
                        </li>
                    ))}
                </ul>
                <hr />
                <h3>Steps:</h3>
                <hr />
                <ul>
                    {steps.map((steps, i) => (
                        <li key={i}>
                            <p>{steps}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}