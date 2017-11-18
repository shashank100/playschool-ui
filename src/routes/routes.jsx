import React from "react";
import { Switch, Route } from "react-router";
import HomePage from "../components/homepage/HomePage.jsx";
import NoMatch from "../components/notfound/NotFound.jsx";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NoMatch}/>
    </Switch>
)

export default Routes;
