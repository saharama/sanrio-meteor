import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

export default class StaffPicks extends React.Component {
  render() {
    return (
        <Container className = "staffPicks">
          <Grid centered>
            <Grid.Row>
              <h2>Shop Sanrio Staff Picks!</h2>
            </Grid.Row>
            <Grid.Row columns={6}>
              <Grid.Column>
                <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/product_images/sanrio-com-e-gift-card/5762254269702d6dfb002de4/detail.jpg'} size='small' />
                <h5>Sanrio Online Store e-Gift Card</h5>
                $25.00-$200.00
              </Grid.Column>
              <Grid.Column>
                <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/product_images/little-twin-stars-room-lamp/5dc34af573616e3d89000083/detail.jpg'} size='small' />
                <h5>Little Twin Stars Room Lamp</h5>
                $62.00
              </Grid.Column>
              <Grid.Column>
                <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/product_images/aggretsuko-plush-id-badge-holder/5d1babdb73616e7ad4000020/detail.jpg'} size='small' />
                <h5>Aggretsuko Plush ID Badge Holder</h5>
              </Grid.Column>
              <Grid.Column>
                <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/product_images/hello-kitty-24k-gold-ring/5c526f9073616e57250025cb/detail.jpg'} size='small' />
                <h5>Hello Kitty 24K Gold Ring</h5>
              </Grid.Column>
              <Grid.Column>
                <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/product_images/sailor-moon-x-my-melody-tote-bag-1/5af5da4d73616e48b2000d1d/detail.jpg'} size='small' />
                <h5>Sailor Moon x My Melody Tote Bag</h5>
              </Grid.Column>
              <Grid.Column>
                <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/product_images/gudetama-handy-dandy-cream-peach-scented/5baeced973616e76ed000045/detail.jpg'} size='small' />
                <h5>The Creme Shop: Gudetama Handy Dandy Hand Cream</h5>
                $10.00
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
