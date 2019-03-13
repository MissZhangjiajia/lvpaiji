import React from 'react'
import $ from 'jquery'
import { NavLink, Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom'
import {Form,Icon,Input,Button,Checkbox} from 'antd';
import '../font/iconfont.css'
import '../css/login.css'


class Login extends React.Component {
	constructor(props){
		super(props)
		this.state={
			username:'',
			password:''
		}
	}
	goback() {
		this.props.history.go(-1)
	}
	regist() {
		this.props.history.push('/register')
	}
	login(){
		var _this=this;
		$.ajax({
			type:'post',
			url:'http://10.8.156.57:8080/login.do',
			data:{uname:_this.refs.phone.value,password:_this.refs.pwd.value},
			dataType:'json',
			success:function(data){
				console.log(data)
				if(data.code==1){
					_this.props.history.push('/home')
				}else{
					alert(data.msg);
				}
			}
		})
	}
	render() {
		return(
			<div className="container">
				<header className="denglu"><Icon type="left" onClick={this.goback.bind(this)}/><span>登录</span><span className="regist" onClick={this.regist.bind(this)}>注册</span></header>
				<section>
					<div className="logo"><i className="iconfont icon-quanqiu"></i></div>
					<div className="ipt"><input type="text" placeholder="请输入手机号/用户名" ref="phone"/></div>
					<div className="ipt"><input type="password" placeholder="请输入密码" ref="pwd"/></div>
					<div className="forget">忘记密码</div>
					<button onClick={this.login.bind(this)}>立即登录</button>
					<div className="third">
						<span>第三方账号快速登录</span>
						<Icon type="qq" />
						<Icon type="wechat" />
					</div>
 				</section>
			</div>
		)
	}
}
export default Login;