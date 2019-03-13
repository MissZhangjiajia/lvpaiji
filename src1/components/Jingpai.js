import React from 'react'
import {NavLink,Route,HashRouter as Router,Redirect,Switch} from 'react-router-dom';
import {Icon} from 'antd'
import '../css/order.css'

class Jingpai extends React.Component{
	goback(){
		this.props.history.push('/me')
	}
	render(){
		return(
			<div>
				<header className="order"><Icon type="left" onClick={this.goback.bind(this)}/>我的竞拍</header>
				<nav>
					<ul>
						<li><NavLink to='/jingpai/canyu'>已参与</NavLink></li>
						<li><NavLink to='/jingpai/jieshu'>已结束</NavLink></li>
						<li><NavLink to='/jingpai/huopai'>已获拍</NavLink></li>
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
					<Redirect to='/jingpai/canyu'/>
				</section>
			</div>
		)
	}
}
export default Jingpai;