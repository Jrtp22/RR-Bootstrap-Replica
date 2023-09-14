import React from "react";
import { Card, CardGroup } from "react-bootstrap";

function Location() {
    return (
        <div>
            <Card className="text-center" >
                <CardGroup style={{ display: "flex", alignItems: "center", backgroundColor: "#dfeed6" }}>
                    <Card.Body>
                        <Card.Title>Order groceries for delivery or pickup today</Card.Title>
                        <Card.Text>
                            Whatever you want from local stores, brought right to your door.
                        </Card.Text>
                        <input type="text" placeholder="Enter your address" />
                    </Card.Body>
                <Card.Img className='justify-content-end' variant="end" src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" />
                </CardGroup>
            </Card>
        </div>
    );
}

export default Location