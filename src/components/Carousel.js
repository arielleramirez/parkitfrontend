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
    <Slide
      {...properties}
      style={{
        width: 550,
        marginLeft: "25%",
        marginTop: 50,
        width: 1000,
        outline: "none"
      }}
    >
      <div className="each-slide">
        <div
          style={{
            height: 500
          }}
        >
          <Card
            style={{
              height: 500
            }}
          >
            <Image
              style={{ width: 700, height: 400, marginLeft: 150 }}
              src={background1}
            />
            <Card.Content>
              <Card.Header>Battery Parking Garage</Card.Header>
              <Card.Meta>
                <span className="date">$35</span>
              </Card.Meta>
              <Card.Description>
                80 Greenwich St, New York, NY 10006
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </div>
      </div>
      <div className="each-slide">
        <div
          style={{
            height: 500
          }}
        >
          <Card
            style={{
              height: 500
            }}
          >
            <Image
              style={{ width: 700, height: 400, marginLeft: 150 }}
              src={background2}
            />
            <Card.Content>
              <Card.Header>iPark</Card.Header>
              <Card.Meta>
                <span className="date">$50 a Day</span>
              </Card.Meta>
              <Card.Description>
                14-26 S William St, New York, NY 10004
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </div>
      </div>
      <div className="each-slide">
        <Card
          style={{
            height: 500
          }}
        >
          <Image
            style={{ width: 700, height: 400, marginLeft: 150 }}
            src={background3}
          />
          <Card.Content>
            <Card.Header>Icon Parking</Card.Header>
            <Card.Meta>
              <span className="date">$100 a day</span>
            </Card.Meta>
            <Card.Description>
              14-26 S William St, New York, NY 10004
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
      <div className="each-slide">
        <Card
          style={{
            height: 500
          }}
        >
          <Image
            style={{ width: 700, height: 400, marginLeft: 150 }}
            src={background4}
          />
          <Card.Content>
            <Card.Header>Quik Park</Card.Header>
            <Card.Meta>
              <span className="date">$24 a day</span>
            </Card.Meta>
            <Card.Description>
              1 New York Plz, New York, NY 10004
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    </Slide>
  );
};

export default Carousel;
