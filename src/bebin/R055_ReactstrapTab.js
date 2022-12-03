import React, { Component } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

class R055_ReactstrapTab extends Component{
    constructor(props) {
        super(props);
        this.state = {
            TabState: 'React'
        }
    }

    toggle = (tabnum) => {
        if(this.state.TabState !== tabnum) this.setState({TabState: tabnum});
    }

    render() {
        return(
            <> 
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={() => {this.toggle('React'); }}>1 tab</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => {this.toggle('200'); }}>2 tab</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.TabState}>
                    <TabPane tabId="React">React content</TabPane>
                    <TabPane tabId="200">200 content</TabPane>
                </TabContent>
            </>
        )
    }
}

export default R055_ReactstrapTab;