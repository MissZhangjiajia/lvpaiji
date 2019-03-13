import React from 'react';
import $ from 'jquery'
import { Menu, Dropdown, Icon } from 'antd';
import '../css/Topic.css'
//import Mock from 'mockjs'

/*Mock.mock('http://www.baidu.com/style',{
	'list|4':[
		{
			'img':'@image()',
			'addr':'@city()',
			'desc':'@cparagraph(1)'
		}
	]
})*/
class Topic extends React.Component{
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	}
    render(){
        return(
            <div id="container">
            	<h2>地区风格</h2>
            	<div className="topiclist">
            		<ul>
            			{
            				this.state.list.map((item,i)=>{
            					return(
            						<li key={i}>
		            					<img src={item.pimg}/>
		            					<h3>{item.pname}</h3>
		            					<p>{item.pdesc}</p>
		            				</li>
            					)
            				})
            				
            			}
            		</ul>
            	</div>
            	<h2>图片风格</h2>
            	<div className="topiclist">
            		<ul>
            			{
            				this.state.list.map((item,i)=>{
            					return(
            						<li key={i}>
		            					<img src={item.pimg}/>
		            					<h3>{item.pname}</h3>
		            					<p>{item.pdesc}</p>
		            				</li>
            					)
            				})
            				
            			}
            		</ul>
            	</div>
            	<h2>拍摄风格</h2>
            	<div className="topiclist">
            		<ul>
            			{
            				this.state.list.map((item,i)=>{
            					return(
            						<li key={i}>
		            					<img src={item.pimg}/>
		            					<h3>{item.pname}</h3>
		            					<p>{item.pdesc}</p>
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
    		dataType:'json',
    		data:{uid:1153},
    		success:function(data){
    			_this.setState({list:data.data})
    		}
    	})
    }
}
export default Topic;