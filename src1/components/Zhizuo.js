import React from 'react'
import {NavLink,Route,HashRouter as Router,Redirect,Switch} from 'react-router-dom';
import {Icon} from 'antd'
import '../css/order.css'

class Zhizuo extends React.Component{
	goback(){
		this.props.history.push('/me')
	}
	render(){
		return(
			<div>
				<header className="order"><Icon type="left" onClick={this.goback.bind(this)}/>我的制作</header>
				<nav>
					<ul>
						<li><NavLink to='/zhizuo/daizhizuo'>待制作</NavLink></li>
						<li><NavLink to='/zhizuo/zhizuozhong'>制作中</NavLink></li>
						<li><NavLink to='/zhizuo/wancheng'>已完成</NavLink></li>
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
					<Redirect to='/zhizuo/daizhizuo'/>
				</section>
			</div>
		)
	}
}
export default Zhizuo;