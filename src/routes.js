import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Recipe from './pages/Recipe';
import RecipeView from './pages/RecipeView';
import RecipeEdit from './pages/RecipeEdit';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Recipe}></Route>
                <Route path="/recipe/:id" exact component={RecipeView}></Route>
                <Route path="/recipe/:id/edit" component={RecipeEdit}></Route>
            </Switch>
        </BrowserRouter>
    );
}