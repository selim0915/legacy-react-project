import React, { Component } from "react";
import Search from "./search";
import Content from "./Content";
import Control from "./Control";
import ReadContent from "./ReadContent";
import CreatContent from "./CreatContent";

class nobdList extends Component {
    constructor(props){
        super(props);
        this.max_content_id = 3; // TODO contents 크기 구하기

        this.state = {
            mode: "read",
            selected_content_id: 2,
            welcome: {title: 'welcome', desc:'hello'},
            subject: {title: '게시판', sub: '게시글을 관리하는 메뉴'},
            contents: [
                {id:1, title:'공지사항', desc:'HTML is information'},
                {id:2, title:'자유게시판', desc:'CSS is information'},
                {id:3, title:'덧글게시판', desc:'JavaScript is information'},
            ]
        }
    }

    render(){
        var _titie, _desc, _article = null;
        if(this.state.mode === 'welcome'){
            _titie = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_titie} desc={_desc}></ReadContent>
        }else if (this.state.mode === 'read'){
            var i = 0;
            while(i < this.state.contents.length){
                var data = this.state.contents[i];
                if(data.id === this.state.selected_content_id){
                    _titie = data.title;
                    _desc = data.desc;
                    break;
                }
                i += 1;
            }
            _article = <ReadContent title={_titie} desc={_desc}></ReadContent>
        }else if(this.state.mode === 'create'){
            _article = <CreatContent 
                            onSubmit={function(_title, _desc){
                                this._max_content_id = this.max_content_id+1;
                                // this.state.contents.push(
                                //     {id: this._max_content_id, title: _title, desc: _desc}
                                // );
                                var _contents = this.state.contents.concat(
                                    {id: this._max_content_id, title: _title, desc: _desc}
                                )
                                this.setState({
                                    contents: _contents
                                });
                            }.bind(this)}
                        ></CreatContent>
        }

        return (
            <div>
                <section className="sub_wrap">
                    <article className="s_cnt re_1 ct1">
                        <Search 
                            title={this.state.subject.title}
                            sub={this.state.subject.sub}
                            onChangePage={function(){
                                this.setState({
                                    mode: 'welcome'
                                });
                            }.bind(this)}>
                        </Search>
                        <Content 
                            data={this.state.contents}
                            onChangePage={function(id){
                                this.setState({
                                    mode: 'read',
                                    selected_content_id: Number(id)
                                });
                            }.bind(this)}>
                        </Content>
                        {_article}
                        <Control onChangeMode={function(_mode){
                            this.setState({
                                mode: _mode
                            });
                        }.bind(this)}></Control>
                    </article>
                </section>
            </div>
        )
    }
}
export default nobdList;