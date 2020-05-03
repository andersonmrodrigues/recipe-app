import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Recipe from './pages/Recipe';
import RecipeView from './pages/RecipeView';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Recipe}></Route>
                <Route path="/recipe/:id" component={RecipeView}></Route>
            </Switch>
        </BrowserRouter>
    );
}