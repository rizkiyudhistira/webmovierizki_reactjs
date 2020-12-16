import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Label,
  Input,
  Button
  //NavbarText
} from 'reactstrap';

class Header extends React.Component {
    constructor (props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
        toggle() {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
        render() {
            return (
                <div>
                    <Navbar color="faded" light expand="md">
                        <NavbarBrand href="/">Cinema Web Movie</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/nowplaying/">Now Playing</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/upcoming">Upcoming</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                Kind of Movie
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Horror
                                </DropdownItem>
                                <DropdownItem>
                                    Drama
                                </DropdownItem>
                                <DropdownItem>
                                    Action
                                </DropdownItem>
                                <DropdownItem>
                                    Adventure
                                </DropdownItem>
                                <DropdownItem>
                                    Comedy
                                </DropdownItem>
                                </DropdownMenu>
                                    </UncontrolledDropdown>

                                <Form inline>      
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="Movie" className="mr-sm-2">Movie</Label>
                                    <Input type="movie" name="movie" id="Movie" placeholder="search movie" />
                                    </FormGroup>
                                    <Button>Search</Button>
                                </Form>                                                
                        </Nav>                                                
                        </Collapse>
                    </Navbar>
                </div>
            
            );
        }
    }

export default Header;