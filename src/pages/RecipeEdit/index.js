import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RecipeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeName: '',
            imageLink: '',
            ingredients: '',
            steps: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    async componentDidMount() {
        const { id } = this.props.match.params;
        const recipes = JSON.parse(localStorage.getItem("recipes"));
        let [recipe] = recipes.filter(recipe => {
            return recipe.id === parseInt(id);
        });
        const recipeName = recipe.receita;
        const linkImage = recipe.link_imagem;
        const ingredients = recipe.ingredientes;
        const steps = recipe.modoPreparo;
        this.setState({
            recipeName,
            linkImage,
            ingredients,
            steps,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const recipe = {
            "receita": this.state.recipeName,
            "link_imagem": this.state.linkImage,
            "ingredients": this.state.ingredients,
            "modoPreparo": this.state.steps,
        }
        const { id } = this.props.match.params;
        let recipes = JSON.parse(localStorage.getItem("recipes"));
        recipes.forEach(element => {
            if (element.id === parseInt(id)) {
                console.log(element);
                element.ingredientes = recipe.ingredients;
                element.link_imagem = recipe.link_imagem;
                element.modoPreparo = recipe.modoPreparo;
                element.receita = recipe.receita;
                console.log(element);
            }
        });
        localStorage.clear();
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }



    render() {
        return (
            <div className="recipe-info">
                <Link to="/">Back</Link>
                <form onSubmit={this.handleSubmit}>
                    <h3>Recipe: {this.state.recipeName}</h3>
                    <hr />
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="recipeName"
                            value={this.state.recipeName || ""}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Name"></input>
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="linkImage"
                            value={this.state.linkImage || ""}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Image Link"></input>
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            name="ingredients"
                            value={this.state.ingredients || ""}
                            onChange={this.handleChange}
                            placeholder="Ingredients"
                            rows="8"></textarea>
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            name="steps"
                            value={this.state.steps || ""}
                            onChange={this.handleChange}
                            placeholder="Steps"
                            rows="8"></textarea>
                    </div>
                    <button className="btn btn-dark" type="submit">Save</button>
                </form>


            </div>
        )
    }

}