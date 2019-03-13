import React from 'react'
import {NavLink,Route,HashRouter as Router,Redirect,Switch} from 'react-router-dom';
import {Icon} from 'antd'
import '../css/order.css'

class Order extends React.Component{
	goback(){
		this.props.history.push('/me')
	}
	render(){
		return(
			<div>
				<header className="order"><Icon type="left" onClick={this.goback.bind(this)}/>我的订单</header>
				<nav>
					<ul>
						<li><NavLink to='/order/quanbu'>全部</NavLink></li>
						<li><NavLink to='/order/fukuan'>待付款</NavLink></li>
						<li><NavLink to='/order/fuwu'>待服务</NavLink></li>
						<li><NavLink to='/order/queren'>待确认</NavLink></li>
						<li><NavLink to='/order/wancheng'>已完成</NavLink></li>
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
					<Redirect to='/order/quanbu'/>
				</section>
			</div>
		)
	}
}
export default Order;