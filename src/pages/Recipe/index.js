import React from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';

export default function Recipe() {
    const receitas = JSON.parse(localStorage.getItem("recipes"));
    const history = useHistory();

    function handleView(id) {
        history.push(`/recipe/${id}`);
    }

    function handleEdit(id) {
        history.push(`/recipe/${id}/edit`)
    }

    return (
        <div className="content">
            <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="text-center">Recipes</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {receitas.map(receita => (
                        <div className="col-4" key={receita.id}>
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" src={receita.link_imagem} data-holder-rendered="true" alt="img" />
                                <div className="card-body">
                                    <p className="card-text">{receita.receita}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleView(receita.id)}>View</button>
                                            <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => handleEdit(receita.id)}>Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}