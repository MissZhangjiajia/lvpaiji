import React from 'react'
import {NavLink,Route,HashRouter as Router,Redirect,Switch} from 'react-router-dom';
import {Icon} from 'antd'
import '../css/order.css'

class Tuikuan extends React.Component{
	goback(){
		this.props.history.push('/me')
	}
	render(){
		return(
			<div>
				<header className="order"><Icon type="left" onClick={this.goback.bind(this)}/>我的退款</header>
				<nav>
					<ul>
						<li><NavLink to='/tuikuan/quanbu'>全部</NavLink></li>
						<li><NavLink to='/tuikuan/chuli'>待处理</NavLink></li>
						<li><NavLink to='/tuikuan/tuikuanzhong'>退款中</NavLink></li>
						<li><NavLink to='/tuikuan/chenggong'>已成功</NavLink></li>
						<li><NavLink to='/tuikuan/jujue'>已拒绝</NavLink></li>
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
					<Redirect to='/tuikuan/quanbu'/>
				</section>
			</div>
		)
	}
}
export default Tuikuan;