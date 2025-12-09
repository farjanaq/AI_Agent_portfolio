"use client";


import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ChevronUp } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function initialChat() {
  return (
    <Container fluid className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-black text-white p-4">
      <style type="text/css">
        {`
          body {
            background-color: black;
          }
          .custom-input {
            background-color: #1a1a1a !important;
            border: none !important;
            color: white !important;
            padding: 1rem !important;
          }
          .custom-input::placeholder {
            color: #6c757d !important;
          }
          .custom-input:focus {
            box-shadow: none !important;
          }
          .custom-button {
            background-color: #1a1a1a !important;
            border: 1px solid #333 !important;
            color: white !important;
          }
          .custom-button:hover {
            background-color: #333 !important;
          }
          .chevron-button {
            background-color: transparent !important;
            border: none !important;
            color: #6c757d !important;
          }
          .chevron-button:hover {
            color: white !important;
          }
        `}
      </style>
      
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 fw-bold text-center" style={{ fontSize: '2.5rem' }}>
            Where do you want to travel today?
          </h1>
        </Col>
      </Row>
      
      <Row className="w-100" style={{ maxWidth: '800px' }}>
        <Col>
          <Form>
            <Form.Group className="mb-3 position-relative">
              <Form.Control
                type="text"
                placeholder="Type your message here..."
                className="custom-input rounded"
              />
              <Button className="chevron-button position-absolute top-50 end-0 translate-middle-y me-2">
                <ChevronUp size={20} />
              </Button>
            </Form.Group>
          </Form>
          
          <div className="d-flex flex-wrap gap-2">
            <Button variant="outline-light" className="custom-button flex-grow-1 text-start">
              Search flights from Mumbai to Austin today →
            </Button>
            <Button variant="outline-light" className="custom-button flex-grow-1 text-start">
              Get details for flight AA123 →
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}