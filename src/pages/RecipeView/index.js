import React, { Component } from 'react';
import data from '../../receitas.json';
import './styles.css';
import { Link } from 'react-router-dom';

export default class RecipeView extends Component {
    state = {
        receita: {},
        ingredients: {},
        steps: {},
    }
    async componentDidMount() {
        const { id } = this.props.match.params;
        let [receita] = data.receitas.filter((receita) => {
            return receita.id === parseInt(id);
        });
        let ingredients = [];
        let steps = [];
        if (receita) {
            ingredients = receita.ingredientes.split(',');
            steps = receita.modoPreparo.split(',');
        }
        this.setState({
            receita,
            ingredients,
            steps,
        })
    }

    render() {
        const receita = this.state.receita;
        const ingredients = Array.from(this.state.ingredients);
        const steps = Array.from(this.state.steps);
        return (
            <div className="recipe-info">
                <Link to="/">Back</Link>
                <h1 className="text-center">{receita.receita}</h1>
                <img src={receita.link_imagem} alt="" />
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