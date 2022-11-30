import React, { Component } from "react";
 import { User } from "./requests";
 import ProductsIndexPage from "./components/ProductsIndexPage";
 import ProductShowPage from "./components/ProductShowPage";
 import { BrowserRouter, Route, Switch } from "react-router-dom";
 import NavBar from "./components/NavBar";
 import NewProductPage from "./components/NewProductPage";
 import SignInPage from "./components/SignInPage";
 import SignUpPage from "./components/SignUpPage";
 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       user: null,
     };
   }
   componentDidMount() {
     this.getCurrentUser();
   }
   getCurrentUser = () => {
     return User.current().then((res) => {
       if (res?.id) {
         this.setState({ user: res });
       }
     });
   };

   onSignOut = () => {
     this.setState({ user: null });
   };
   render() {
     return (
       <BrowserRouter>
         <NavBar currentUser={this.state.user} onSignOut={this.onSignOut} />
         <Switch>
           <Route
             exact
             path="/sign_in"
             render={(routeProps) => (
               <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />
             )}
           ></Route>
           <Route
             exact
             path="/sign_up"
             render={(routeProps) => (
               <SignUpPage {...routeProps} onSignUp={this.getCurrentUser} />
             )}
           />

           <Route
             exact
             isAuthenticated={this.state.user}
             path="/products"
             component={ProductsIndexPage}
           />
           <Route
             isAuthenticated={this.state.user}
             exact
             path="/products/new"
             component={NewProductPage}
           />
           <Route
             exact
             isAuthenticated={this.state.user}
             path="/products/:id"
             render={(routeProps) => (
               <ProductShowPage {...routeProps} userId={this.state.user?.id}/>
             )}
           />
         </Switch>
       </BrowserRouter>
     );
   }
 }

 export default App;
