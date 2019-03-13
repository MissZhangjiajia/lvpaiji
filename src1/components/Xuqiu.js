import React from 'react'
import {NavLink,Route,HashRouter as Router,Redirect,Switch} from 'react-router-dom';
import {Icon} from 'antd'
import '../css/order.css'

class Xuqiu extends React.Component{
	goback(){
		this.props.history.push('/me')
	}
	render(){
		return(
			<div>
				<header className="order"><Icon type="left" onClick={this.goback.bind(this)}/>我的需求</header>
				<nav>
					<ul>
						<li><NavLink to='/xuqiu/fabu'>已发布</NavLink></li>
						<li><NavLink to='/xuqiu/caina'>已采纳</NavLink></li>
						<li><NavLink to='/xuqiu/guoqi'>已过期</NavLink></li>
					</ul>
				</nav>
				<section>
					{/*<Switch>
						<Route path='/order/quanbu' component={Quanbu}></Route>
						<Route path='/order/fukuan' component={Fukuan}></Route>
						<Route path='/order/fuwu' component={Fuwu}></Route>
						<Route path='/order/queren' component={Queren}></Route>
						<Route path='/order/wancheng' component={Wancheng}></Route>
					</Switch>*/}
					<Redirect to='/xuqiu/fabu'/>
				</section>
			</div>
		)
	}
}
export default Xuqiu;