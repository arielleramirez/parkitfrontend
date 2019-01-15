import React from "react";
import { Slide } from "react-slideshow-image";
import background1 from "../img/parking1.jpg";
import background2 from "../img/parking2.jpg";
import background3 from "../img/parking3.jpg";
import background4 from "../img/parking4.jpg";

import { Card, Icon, Image } from "semantic-ui-react";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

const Carousel = () => {
  return (
    <Slide>
      <Card>
        <Image className="cardImage" src={background1} />
        <Card.Content>
          <Card.Header>
            <h4>Battery Parking Garage</h4>
          </Card.Header>
          <Card.Meta>
            <h5>$50/day</h5>
          </Card.Meta>
          <Card.Description>
            <h6>80 Greenwich St, New York, NY 10006</h6>
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Image className="cardImage" src={background2} />
        <Card.Content>
          <Card.Header>
            <h4>iPark</h4>
          </Card.Header>
          <Card.Meta>
            <span>
              <h5>$50/day</h5>
            </span>
          </Card.Meta>
          <Card.Description>
            <h6>14-26 S William St, New York, NY 10004</h6>
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Image className="cardImage" src={background3} />
        <Card.Content>
          <Card.Header>
            <h4>Icon Parking</h4>
          </Card.Header>
          <Card.Meta>
            <span>
              <h5>$100/day</h5>
            </span>
          </Card.Meta>
          <Card.Description className="des">
            <h6>14-26 S William St, New York, NY 10004</h6>
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Image className="cardImage" src={background4} />
        <Card.Content>
          <Card.Header>
            <h4>Quik Park</h4>
          </Card.Header>
          <Card.Meta>
            <span>
              <h5>$24 a day</h5>
            </span>
          </Card.Meta>
          <Card.Description>
            <h6>1 New York Plz, New York, NY 10004</h6>
          </Card.Description>
        </Card.Content>
      </Card>
    </Slide>
  );
};

export default Carousel;
