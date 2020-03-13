import React from 'react';
import { Container, Grid, Icon, Input } from 'semantic-ui-react';

export default class BottomFooter extends React.Component {
  render() {
    return (
        <div className = "bottomBackground">
          <Container className="bottomContainer">
            <Grid>
              <Grid.Row>
                <h3>Sign up for Email</h3>
              </Grid.Row>
              <Grid.Row>
                Be the first to get the scoop on new releases, exclusive events, free gifts,<br/>
                shipping offers and more!
              </Grid.Row>
              <Grid.Row>
                <Input action={{
                  content: 'Join',
                  color: 'red',
                }}
                       placeholder="enter your email address"
                />
              </Grid.Row>
              <Grid.Row>
                <Icon inverted size='big' name='facebook f'/>
                <Icon inverted size='big' name='twitter'/>
                <Icon inverted size='big' name='instagram'/>
                <Icon inverted size='big' name='pinterest p'/>
                <Icon inverted size='big' name='youtube'/>
              </Grid.Row>
              <Grid.Row>
                © 2020 SANRIO CO., LTD. All Sanrio characters that appear on this website are protected<br/>
                Copy created by ICS314 S20
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}
