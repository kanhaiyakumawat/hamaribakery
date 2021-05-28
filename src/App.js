import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBarTop from "./MyNavBarTop.js"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import BottomNavBar from './BottomNavBar';


export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                <MyNavBarTop/>
                <br/><br/><br/>
                </div>
                <BrowserRouter>

        <Switch>
            <Route path="/" component={Home} />
        <Route path="#" component={Home} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
      <br/>
      <BottomNavBar/>

            </div>
        )
    }
}