import React from 'react';
import { Menu, Container, Image, Icon } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middleMenu">
          <Container>
            <Menu.Item><Image src={'https://sanrio-production-weblinc.netdna-ssl.com/assets/weblinc/store_front/logo_home-cecf45498400cb4ccb7edecdb351f23f9ede792068c0092aaac20fa818c61c93.png'} size='small' /></Menu.Item>
            <Menu.Item>New</Menu.Item>
            <Menu.Item>Featured</Menu.Item>
            <Menu.Item>Characters</Menu.Item>
            <Menu.Item>Apparel</Menu.Item>
            <Menu.Item>Bags</Menu.Item>
            <Menu.Item>Accessories</Menu.Item>
            <Menu.Item>Beauty</Menu.Item>
            <Menu.Item>Plush & Toys</Menu.Item>
            <Menu.Item>Stationery</Menu.Item>
            <Menu.Item>Home & Kitchen</Menu.Item>
            <Menu.Item>Kids</Menu.Item>
            <Menu.Item><Icon name='search' color='blue' /></Menu.Item>
            <Menu.Item fitted><Icon name='shopping bag' color='blue' /></Menu.Item>
          </Container>
        </Menu>
    );
  }
}
