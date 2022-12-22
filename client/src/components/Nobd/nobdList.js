import React, { Component } from "react";

class Subject extends Component {
    render() {
        return (
            <header>
                <h2>공지사항</h2>
            </header>
        )
    }
}

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </nav>
        )
    }
}

class Article extends Component {
    render() {
        return (
            <article>
                by serim
            </article>
        )
    }
}

class nobdList extends Component {
    render(){
        return (
            <div>
                <Subject></Subject>
                <Nav></Nav>
                <Article></Article>
            </div>
        )
    }
}
export default nobdList;