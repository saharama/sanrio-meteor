import React from 'react';
import { Container, Image } from 'semantic-ui-react';

export default class SanrioJapangeles extends React.Component {
  render() {
    return (
        <div>
          <Container className='japangeles'>
            <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDIvMjAvMTcvMzkvMTIvNDgwL0hQX2phcGFuZ2VsZXNfZ3VkZXRhbWFfY29sbGVjdGlvbl8wMjIxMjAyMC5qcGciXSxbInAiLCJvcHRpbSJdXQ/HP_japangeles_gudetama_collection_02212020.jpg?sha=b484487c4763eb39'} />
          </Container>
        </div>
    );
  }
}
