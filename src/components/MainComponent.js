import React, { Component } from 'react';
import './MainComponent.css';
import Header from './header';
import Login from './login'
import Home_Body from './home_body'
import Signup from './signup'
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './footer';

class Main extends Component {
    

    render() {
      
               return(
            <div>
            <Header />
        <Switch>
            <Route path='/home' component={Home_Body} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            {/* <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route excat path='/aboutus' component={()=> <About leaders={this.state.leaders} />} />
            <Route excat path='/contactus' component={Contact} /> */}
            <Redirect to="/home" />
        </Switch>
        <Footer />
        </div>
        );
    }
}

        export default Main;
