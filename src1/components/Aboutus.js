import React from 'react'
import '../font/iconfont.css'
import '../css/Aboutus.css'
import {Icon} from 'antd'

class Aboutus extends React.Component{
	goback(){
		this.props.history.go(-1)
	}
	render(){
		return(
			<div className="content">
				<header className="lvpai"><Icon type="left" onClick={this.goback.bind(this)}/>我的旅拍</header>
				<section>
					<div className="banben">
						<i className="iconfont icon-quanqiu"></i>
						<span>1.9.5</span>
					</div>
					<div className="tab">
						<span>版本更新</span>
					</div>
					<div className="list1">
						<span>用户协议</span>
						<Icon type="right" />
					</div>
					<div className="list1 jianjie">
						<span>全球旅拍简介</span>
						<Icon type="right" />
					</div>
					<div className="list1">
						<span>客服电话</span>
						<div><strong>0349-34875-4455</strong><Icon type="right" /></div>
					</div>
					<div className="list1">
						<span>微信公众号</span>
						<span>全球旅拍网</span>
					</div>
					<div className="list1">
						<span>微博</span>
						<span>全球旅拍网</span>
					</div>
				</section>
			</div>
		)
	}
}
export default Aboutus;