import React, { Component } from "react";

class Content extends Component {
    shouldComponentUpdate(newProps, newState){
        console.log("=== shouldComponentUpdate ===", newProps.date, this.props.data);

        // shouldComponentUpdate가 true면 render 호출
        // fasle 면 shouldComponentUpdate 내부 호출
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
    }

    render() {
        console.log("=== Content render ===");

        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i<data.length){
            lists.push(
                <li key={data[i].id} style={{'float':'left', 'marginRight':'10px'}}>
                    <a 
                        href={"/content/"+data[i].id} 
                        data-id={data[i].id}
                        onClick={function(id, num, e){
                            e.preventDefault();
                            this.props.onChangePage(id);
                            //this.props.onChangePage(e.target.dataset.id);
                    }.bind(this, data[i].id, 10)}>
                        {data[i].title}
                    </a>
                </li>
            );
            i += 1;
        }

        return (
            <div className="list_cont" style={{'display':'inline-block', 'marginTop': '15px'}}>
                <hr />
                    <ul>
                        {lists}
                    </ul>
                <hr />
            </div>
        )
    }
}

export default Content;