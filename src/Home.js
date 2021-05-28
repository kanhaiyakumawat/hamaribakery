import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = (props) => {
return (
    <div>
                     <Container fluid>
                    <Row>
                        <Col xs={12} md={4}>
                        <img class="img-fluid"
      src="https://drive.google.com/uc?id=1Eajgby3TUG8UcL11h1KMMykbQLRTbXue"
      alt="new"
      />
                        </Col>
                
                        <Col xs={12} md={4}>
                        <img class="img-fluid"
      src="https://drive.google.com/uc?id=1MKcjiSAuX8a-MDGL4_IOPB5u44Ydz_lL"
      alt="new"
      />

                        </Col>
                        <Col xs={12} md={4}>
                        <img class="img-fluid"
            src="https://drive.google.com/uc?id=1yvYUwgDEGMACuobXKzrSM0HZO4K-Nekk"
      alt="new"
      />
                        </Col>
                    </Row>
                </Container>    
    </div>
  )
};

export default Home;