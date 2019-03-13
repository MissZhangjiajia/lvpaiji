import React from 'react'
import $ from 'jquery'
import {Icon} from 'antd'
import '../css/register.css'

class Register extends React.Component{
	constructor(props){
		super(props)
		this.state={
			username:'',
			password:''
		}
	}
	goback(){
		this.props.history.go(-1)
	}
	change(){
		var _this=this;
		$.ajax({
			type:'post',
			url:"http://10.8.156.57:8080/checkUser.do",
			dataType:'json',
			data:{uname:_this.refs.phone.value},
			success:function(data){
				console.log(data)
				if(data.code==1){
					_this.refs.phone.value='用户名已存在'
					$('.uname').css('color','red')
				}
			}
		})
	}
	focus(){
		this.refs.phone.value='';
		$('.uname').css('color','')
	}
	regist(){
		var _this=this;
		$.ajax({
			type:'post',
			url:'http://10.8.156.57:8080/insert.do',
			data:{uname:_this.refs.phone.value,password:_this.refs.pwd.value},
			dataType:'json',
			success:function(data){
				console.log(data)
				if(data.code==1){
					_this.props.history.push('/login')
				}else{
					alert(data.msg)
				}
			}
		})
	}
	render(){
		return(
			<div className="contain">
				<header className="register"><Icon type="left" onClick={this.goback.bind(this)}/><span>注册</span><span className="shang">商家入驻</span></header>
				<section>
					<div className="logo"><i className="iconfont icon-quanqiu"></i></div>
					<div className="ipt"><input type="text" placeholder="手机号" ref="phone" onBlur={this.change.bind(this)} onFocus={this.focus.bind(this)} className="uname"/></div>
					{/*<div className="ipt"><input type="text" placeholder="请输入验证码"/><span>获取验证码</span></div>*/}
					<div className="ipt"><input type="password" placeholder="请输入6-20位密码，字母或数字" ref="pwd"/></div>
					<div className="agree">注册即代表您同意<em>《注册协议》</em></div>
					<button onClick={this.regist.bind(this)}>立即注册</button>
 				</section>
			</div>
		)
	}
	
}
export default Register;