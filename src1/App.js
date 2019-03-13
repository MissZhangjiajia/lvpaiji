import React, { Component } from 'react';
import {NavLink,Route,HashRouter as Router,Redirect,Switch} from 'react-router-dom';
import './App.css';
import "antd/dist/antd.css";
import Home from './components/Home'
import Luxian from './components/Luxian'
import Dingzhi from './components/Dingzhi'
import Kepian from './components/Kepian'
import Me from './components/Me'
import Login from './components/Login'
import Aboutus from './components/Aboutus'
import Register from './components/Register'
import Order from './components/Order'
import Xuqiu from './components/Xuqiu'
import Jingpai from './components/Jingpai'
import Tuikuan from './components/Tuikuan'
import Zhizuo from './components/Zhizuo'
import Detail from './components/Detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/luxian" component={Luxian}></Route>
              <Route path="/dingzhi" component={Dingzhi}></Route>
              <Route path="/kepian" component={Kepian}></Route>
              <Route path="/me" component={Me}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/aboutus" component={Aboutus}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/order" component={Order}></Route>
              <Route path="/xuqiu" component={Xuqiu}></Route>
              <Route path="/jingpai" component={Jingpai}></Route>
              <Route path="/tuikuan" component={Tuikuan}></Route>
              <Route path="/zhizuo" component={Zhizuo}></Route>
              <Route path="/detail" component={Detail}></Route>
              <Redirect to="/home"/>
            </Switch>        
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
