import React from 'react';
import { Container, Image } from 'semantic-ui-react';

export default class Vanity extends React.Component {
  render() {
    return (
        <div>
          <Container className='vanity'>
            <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDIvMjUvMTgvMzQvMTEvOTA0L0hQX0ltcHJlc3Npb25zVmFuaXR5XzAxMDcyMDIwXzAyLmpwZyJdLFsicCIsIm9wdGltIl1d/HP_ImpressionsVanity_01072020_02.jpg?sha=e257acfbcba196f5'} />
          </Container>
        </div>
    );
  }
}
