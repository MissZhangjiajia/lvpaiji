import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;
class Sousuo extends React.Component{
    back(){
        this.props.history.push('/remai')
    }
    render(){
        return(
            <div className="container">
                <header>
                    <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                    />
                    <span onClick={this.back.bind(this)}>取消</span>
                </header>
            </div>
         )
    }
}
export default Sousuo;