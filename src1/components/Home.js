import React from 'react';
import Remai from './Remai';
import Guang from './Guang';
import Tui from './Tui';
import {NavLink,Route,HashRouter as Router,Redirect,Switch} from 'react-router-dom';
import '../App.css'

class Home extends React.Component{
render(){
return(
<div  className="container">
    <header className="head">        
        <NavLink to="/home/remai" className="col">热卖</NavLink>
        <NavLink to="/home/guang" className="col">逛逛</NavLink>
        <NavLink to="/home/tui" className="col">推荐</NavLink>
    </header>
    <section>
        <Router>
            <Switch>
                <Route path="/home/guang" component={Guang}>逛逛</Route>
                <Route path="/home/remai" component={Remai}>热卖</Route>
                <Route path="/home/tui" component={Tui}>推荐</Route>
                <Redirect to="/home/remai"/>
            </Switch>
        </Router>
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
export default Home;