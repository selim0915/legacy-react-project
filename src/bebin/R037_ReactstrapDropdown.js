import React, { Component } from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
 
class R037_ReactstrapDropdown extends Component{
    constructor(props) {
        super(props);
        this.state ={
            dropdownOpen: false
        }
    }

    toggle = (e) => {
        this.setState({dropdownOpen: !this.state.dropdownOpen});
    }

    render() {
        return(
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>btn </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem>header</DropdownItem>
                    <DropdownItem disabled>body</DropdownItem>
                    <a href="http://example.com/">
                        <DropdownItem>href</DropdownItem>
                    </a>
                    <DropdownItem onClick={e => alert('alert')}>alert</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

export default R037_ReactstrapDropdown;