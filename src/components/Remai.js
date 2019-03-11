import React from 'react';
import { Input } from 'antd';
const Search = Input.Search;
class Remai extends React.Component{
    render(){
        return(
            <div className="container">
                <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
            </div>
        )
    }
}
export default Remai;