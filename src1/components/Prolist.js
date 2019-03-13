import React from 'react';
import $ from 'jquery'
import {NavLink} from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd';
import '../App.css'
import '../css/prolist.css'
//import Mock from 'mockjs'


/*Mock.mock('http://www.baidu.com/api',{
	"list|10":[
		{
			'img':'@image()',
			'addr':'@city()',
			'num':'@zip()'
		}
	]
})*/

class Prolist extends React.Component{
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	}
	change(){
		
	}
    render(){
        return(
            <div id="container">
                <nav>
                	<div className="firstNav">
                		<ul>
                			<li>综合 <Icon type="down" /></li>
                			<li>地点 <Icon type="down" /></li>
                			<li>类型 <Icon type="down" /></li>
                			<li>价格 <Icon type="down" /></li>
                			<li onClick={this.change.bind(this)}>三</li>
                		</ul>
                	</div>
                </nav>
                <div className="prolist">
                	<ul>
                		{
                			this.state.list.map((item,i)=>{
                				return(
	                				<li key={i}>
	                					<NavLink to={{pathname:'/detail',query:{id:item.pid}}}><img src={item.pimg}/></NavLink>
	                					<h3 className="desc">{item.pdesc}</h3>
	                					<p className="price"><span>${item.pprice}</span><em>销量：123</em></p>
	                				</li>
                				)
                			})
                		}
                	</ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
    	var _this=this;
    	$.ajax({
    		url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
    		data:{uid:1153},
    		dataType:'json',
    		success:function(data){
    			console.log(data.data)
				_this.setState({list:data.data})
    		}
    	})
    }
}
export default Prolist;