import React from 'react';
import {Button,Icon,Carousel} from 'antd';
import {NavLink} from 'react-router-dom';
import '../css/remai.css';
import $ from 'jquery'

class Remai extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    search(){
        window.location.href = '#/sousuo'
    }
    render(){
        return(
            <div className="container">
                <div className="top">
                   <input type="text" placeholder="请搜索你感兴趣的东西"/>
                   <Button type="primary" onClick={this.search.bind(this)}><Icon type="search" /></Button>
                </div> 
                <section className="swipe">
                <Carousel autoplay>
                    {
                        this.state.list.map((item,i)=>{
                            return(
                                 <div key={i}><img src={item.banner_img_url}/></div>
                            )
                        })
                    } 
                </Carousel>                
                </section> 
            </div>
        )
    }
    componentDidMount(){
		var _this=this;
		$.ajax({
			url:'http://jx.xuzhixiang.top/ap/api/bannerlist.php',
			data:{uid:1152},
			dataType:'json',
			success:function(data){
                console.log(data.data)
				_this.setState({list:data.data})
			}
		})
		
	}
}
export default Remai;