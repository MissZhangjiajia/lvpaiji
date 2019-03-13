import React from 'react'
import $ from 'jquery'

class Detail extends React.Component{
	render(){
		return(
			<div>
			
			</div>
		)
	}
	componentDidMount(){
		var _this=this;
		$.ajax({
			url:'http://jx.xuzhixiang.top/ap/api/detail.php',
			data:{id:_this.props.location.query.id},
			dataType:'json',
			success:function(data){
				console.log(data)
			}
		})
	}
}
export default Detail;