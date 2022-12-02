import React, { useEffect, useState } from "react";
import { User } from "./requests";
import ProductsIndexPage from "./components/ProductsIndexPage";
import ProductShowPage from "./components/ProductShowPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewProductPage from "./components/NewProductPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  const [user, setUser] = useState(null);
  
  const getCurrentUser = () => {
    return User.current().then((res) => {
      if (res?.id) {
        setUser(res);
      }
    });
  };

  const onSignOut = () => {
    this.setState({ user: null });
  };

  useEffect(() => {
    getCurrentUser();
  }, [])

  return (
    <BrowserRouter>
        <NavBar currentUser={user} onSignOut={onSignOut} />
        <Switch>
          <Route
            exact
            path="/sign_in"
            render={(routeProps) => (
              <SignInPage {...routeProps} onSignIn={getCurrentUser} />
            )}
          ></Route>
          <Route
            exact
            path="/sign_up"
            render={(routeProps) => (
              <SignUpPage {...routeProps} onSignUp={getCurrentUser} />
            )}
          />

          <Route
            exact
            isAuthenticated={user}
            path="/products"
            component={ProductsIndexPage}
          />
          <Route
            isAuthenticated={user}
            exact
            path="/products/new"
            component={NewProductPage}
          />
          <Route
            exact
            isAuthenticated={user}
            path="/products/:id"
            render={(routeProps) => (
              <ProductShowPage {...routeProps} userId={user?.id}/>
            )}
          />
          <Route component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App;