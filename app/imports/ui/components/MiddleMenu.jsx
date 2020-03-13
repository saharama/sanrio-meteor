import React from 'react';
import { Menu, Container, Image, Icon } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
        <Menu borderless className="middleMenu">
          <Container>
            <Menu.Item><Image src={'https://sanrio-production-weblinc.netdna-ssl.com/assets/weblinc/store_front/logo_home-cecf45498400cb4ccb7edecdb351f23f9ede792068c0092aaac20fa818c61c93.png'} size='small' /></Menu.Item>
            <Menu.Item name='New' onClick={this.handleItemClick}/>
            <Menu.Item name='Featured' onClick={this.handleItemClick}/>
            <Menu.Item name='Characeters' onClick={this.handleItemClick}/>
            <Menu.Item name='Apparel' onClick={this.handleItemClick}/>
            <Menu.Item name='Bags' onClick={this.handleItemClick}/>
            <Menu.Item name='Accessories' onClick={this.handleItemClick}/>
            <Menu.Item name='Beauty' onClick={this.handleItemClick}/>
            <Menu.Item name='Plush & Toys' onClick={this.handleItemClick}/>
            <Menu.Item name='Stationary' onClick={this.handleItemClick}/>
            <Menu.Item name='Home & Kitchen' onClick={this.handleItemClick}/>
            <Menu.Item name='Kids' onClick={this.handleItemClick}/>
            <Menu.Item><Icon name='search' color='blue' /></Menu.Item>
            <Menu.Item fitted><Icon name='shopping bag' color='blue' /></Menu.Item>
          </Container>
        </Menu>
    );
  }
}
