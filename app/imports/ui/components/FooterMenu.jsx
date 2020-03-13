import React from 'react';
import { Container, Grid, List } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {

  render() {
    return (
        <div className='footerMenu'>
          <Container>
            <Grid centered columns={4}>
              <Grid.Column>
                <List>
                  <List.Item><h3>World of Sanrio</h3></List.Item>
                  <List.Item>About Sanrio</List.Item>
                  <List.Item>Other Countries</List.Item>
                  <List.Item>Business Opportunities</List.Item>
                  <List.Item>Careers</List.Item>
                  <List.Item>Press Releases</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item><h3>Need Help?</h3></List.Item>
                  <List.Item>Customer Service</List.Item>
                  <List.Item>FAQs</List.Item>
                  <List.Item>CPSIA</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item><h3>Resources</h3></List.Item>
                  <List.Item>Store Locator</List.Item>
                  <List.Item>Childrens Privacy Policy</List.Item>
                  <List.Item>Privacy Policy</List.Item>
                  <List.Item>Copyright Info</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item><h3>More</h3></List.Item>
                  <List.Item>e-Gift Card</List.Item>
                  <List.Item>Deals</List.Item>
                  <List.Item>Sale</List.Item>
                  <List.Item>Hello Kitty Cafe</List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}
