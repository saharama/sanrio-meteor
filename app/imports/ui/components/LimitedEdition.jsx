import React from 'react';
import { Grid, Container, Image } from 'semantic-ui-react';

export default class LimitedEdition extends React.Component {
  render() {
    return (
        <Container className = "limitedEdition">
          <Grid centered columns={2}>
            <Grid.Column>
              <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDMvMDYvMjEvMDkvMTQvMzc4LzJ1cF9yZWNfZm90bV9tYXJjaF9jbl8wMzA5MjAyMF9jYWxlbmRhci5qcGciXSxbInAiLCJvcHRpbSJdXQ/2up-rec_fotm-march-cn_03092020_calendar.jpg?sha=58ce13a9822f2eb5'} />
            </Grid.Column>
            <Grid.Column>
              <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDMvMDYvMjEvMDkvMTQvMzc4LzJ1cF9yZWNfZm90bV9tYXJjaF9jbl8wMzA5MjAyMF9jYWxlbmRhci5qcGciXSxbInAiLCJvcHRpbSJdXQ/2up-rec_fotm-march-cn_03092020_calendar.jpg?sha=58ce13a9822f2eb5'} />
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
