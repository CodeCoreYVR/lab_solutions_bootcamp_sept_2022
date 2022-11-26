import React, { Component } from "react";
import { Session } from "./requests";
import ProductsIndexPage from "./components/ProductsIndexPage";
import ProductShowPage from "./components/ProductShowPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewProductPage from "./components/NewProductPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    Session.create({
      email: "admin@user.com",
      password: "123",
    }).then((fetchedUser) => {
      this.setState((state) => {
        return {
          user: fetchedUser,
        };
      });
    });
  }
  render() {
    return (
      <div className="container container-fluid">
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/products" component={ProductsIndexPage} />
            <Route exact path="/products/new" component={NewProductPage} />
            <Route exact path="/products/:id" component={ProductShowPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
