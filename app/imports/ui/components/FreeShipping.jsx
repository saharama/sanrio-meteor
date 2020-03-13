import React from 'react';
import { Container, Image } from 'semantic-ui-react';

export default class FreeShipping extends React.Component {
  render() {
    return (
        <div>
          <Container className='shipping'>
            <Image src={'https://www.sanrio.com/media/W1siZiIsIjIwMTkvMDYvMTIvMTYvNTIvMTIvOTcwL3hzYl9mcmVlX3NoaXBwaW5nXzIwMTgxMjE0YS5qcGciXV0/xsb_free-shipping_20181214a.jpg?sha=6dc5cb7f948f0476'} />
          </Container>
        </div>
    );
  }
}
