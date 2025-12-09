import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

const flightData = [
  {
    departure: '8:30 PM',
    arrival: '4:20 PM+1',
    duration: '10hr 45min',
    price: 531,
  },
  {
    departure: '2:40 PM',
    arrival: '10:25 AM+1',
    duration: '10hr 50min',
    price: 564,
  },
  {
    departure: '3:00 PM',
    arrival: '10:50 AM+1',
    duration: '10hr 45min',
    price: 611,
  },
];

export default function FlightSearchResults() {
  return (
    <Container className="py-4">
      <Card className="mb-4 border-0 shadow-sm">
        <Card.Body>
          <Row>
            <Col>
              <div className="text-muted small">Departure</div>
              <div className="fw-bold">San Francisco</div>
            </Col>
            <Col>
              <div className="text-muted small">Arrival</div>
              <div className="fw-bold">Rome</div>
            </Col>
            <Col className="text-end">
              <div className="text-muted small">Date</div>
              <div className="fw-bold">10 April, 2024</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {flightData.map((flight, index) => (
        <Card key={index} className="mb-3 border-0 shadow-sm">
          <Card.Body>
            <Row className="align-items-center">
              <Col xs={2}>
                <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="United Airlines logo" />
              </Col>
              <Col xs={4}>
                <div className="fw-bold">{flight.departure} - {flight.arrival}</div>
                <div className="text-muted small">United Airlines</div>
              </Col>
              <Col xs={3}>
                <div className="fw-bold">{flight.duration}</div>
                <div className="text-muted small">SFO - FCO</div>
              </Col>
              <Col xs={3} className="text-end">
                <div className="fw-bold">${flight.price}</div>
                <div className="text-muted small">One Way</div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}