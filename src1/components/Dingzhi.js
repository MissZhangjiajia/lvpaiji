import React from 'react';
import {NavLink,Route,HashRouter as Router,Switch,Redirect} from 'react-router-dom'

class Dingzhi extends React.Component{
    render(){
        return(
            <div className="container">
                <header>广场</header>
                <section>
                    
                </section>
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
export default Dingzhi;
