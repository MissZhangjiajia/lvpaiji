import React from 'react';
import {NavLink,Route,HashRouter as Router,Switch,Redirect} from 'react-router-dom';
import Prolist from './Prolist'
import Topic from './Topic'

class Luxian extends React.Component{
    render(){
        return(
            <div className="container">
                <header className="head">
                    <NavLink to="/Luxian/prolist" className="col">产品列表</NavLink>
                    <NavLink to="/Luxian/topic" className="col">话题分类</NavLink>
                </header>
                <Router>
                    <section>
                        <Switch>
                        <Route path="/Luxian/prolist" component={Prolist}></Route>
                        <Route path="/Luxian/topic" component={Topic}></Route>
                        <Redirect to="/Luxian/prolist"/>
                        </Switch>
                    </section>
                </Router>
                <footer className="foot">
                    <NavLink to="/home" className="col">首页</NavLink>
                    <NavLink to="/luxian" className="col">路线</NavLink>
                    <NavLink to="/dingzhi" className="col">定制</NavLink>
                    <NavLink to="/kepian" className="col">客片</NavLink>
                    <NavLink to="/me" className="col">我的</NavLink>
                </footer>
            </div>
        )
    }
}
export default Luxian;