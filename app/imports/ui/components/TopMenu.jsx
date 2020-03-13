import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topMenu">
          <Container>
            <Menu.Item><Image src={'https://cdn.clipart.email/51680a4ee672aedf5e1769c454975447_hello-kitty-hello-kitty-head-clipart-in-png-file-gifyu_2000-1424.png'} size='mini' /></Menu.Item>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Blog</Menu.Item>
            <Menu.Item>Hello Kitty Cafe</Menu.Item>
            <Menu.Item position="right">My Account</Menu.Item>
            <Menu.Item>Store Locator</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
