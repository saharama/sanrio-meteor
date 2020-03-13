import React from 'react';
import { Container, Grid, Image, Icon } from 'semantic-ui-react';

export default class SpotlightPochacco extends React.Component {
  render() {
    return (
        <div>
          <Container className="spotlightPochacco">
            <h1>IN THE SPOTLIGHT...</h1>
            <Grid verticalAlign="middle" columns={2}>
              <Grid.Column width={4}>
                <Image size='medium' src={'https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDIvMjcvMjEvNTUvMzgvNTkyL1RodW1ibmFpbF83NDJfUGl4ZWxzLmpwZyJdLFsicCIsIm9wdGltIl1d/Thumbnail%20742%20Pixels.jpg?sha=7ec814859469840b'} />
              </Grid.Column>
              <Grid.Column width={9}>
                <h2>Pochacco Carrot Patch Cake</h2>
                Did you know Pochacco is a vegetarian? His favorite vegetables are carrots! So join this fun-loving pup and his pals for a delicious (early) birthday celebration with this Pochacco Carrot Patch Cake recipe. <br/>
                LEARN MORE<Icon fitted name="caret right" />
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}

