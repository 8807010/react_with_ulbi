import React from 'react';
import {Route, Routes} from "react-router";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import {Redirect} from "react-router-dom";
import {routes} from "../router";

function PostsIdPage() {
    return null;
}

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                />
            )}
        </Routes>
    );
};

export default AppRouter;