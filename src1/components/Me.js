import React from 'react'
import {NavLink,Route,HashRouter as Router,Switch,Redirect} from 'react-router-dom'
import {Icon} from 'antd'
import '../css/me.css'

class Me extends React.Component{
	login(){
		this.props.history.push('/login')
	}
	about(){
		this.props.history.push('./aboutus')
	}
	dingdan(){
		this.props.history.push('./order')
	}
	xuqiu(){
		this.props.history.push('./xuqiu')
	}
	jingpai(){
		this.props.history.push('./jingpai')
	}
	tuikuan(){
		this.props.history.push('./tuikuan')
	}
	zhizuo(){
		this.props.history.push('./zhizuo')
	}
    render(){
        return(
            <div className="container">
                <div className="login">
                	<div onClick={this.login.bind(this)}>
                		<Icon type="user" /> 
                		<span>去登陆</span>
                	</div>
                	<strong>设置</strong>
                </div>
                <section>
                   <div className='shoucang'>
                   	<ul>
                   		<li>
                   			<span>0</span>
                   			<em>我的收藏</em>
                   		</li>
                   		<li>
                   			<span>0</span>
                   			<em>我的优惠券</em>
                   		</li>
                   	</ul>
                   </div>
                   <div className="list" onClick={this.dingdan.bind(this)}>
                   	<span>我的订单</span>
                   	<Icon type="right" />
                   </div>
                   <div className="list" onClick={this.xuqiu.bind(this)}>
                   	<span>我的需求</span>
                   	<Icon type="right" />
                   </div>
                   <div className="list" onClick={this.jingpai.bind(this)}>
                   	<span>我的竞拍</span>
                   	<Icon type="right" />
                   </div>
                   <div className="list" onClick={this.tuikuan.bind(this)}>
                   	<span>我的退款</span>
                   	<Icon type="right" />
                   </div>
                   <div className="list" onClick={this.zhizuo.bind(this)}>
                   	<span>我的制作</span>
                   	<Icon type="right" />
                   </div>
                   <div className="list connect">
                   	<span>联系客服</span>
                   	<div><strong>0349-34875-4455</strong><Icon type="right" /></div>
                   </div>
                   <div className="list" onClick={this.about.bind(this)}>
                   	<span>关于我们</span>
                   	<Icon type="right" />
                   </div>
                   <div className="list business">
                   	<span>商家入驻</span>
                   	<Icon type="right" />
                   </div>
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
export default Me;