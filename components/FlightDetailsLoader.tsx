'use client';

import { Card } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';
import React from 'react';
// import './SkeletonLoader.css'; 

const FlightDetailsLoader = () => {
  return (
    <Card style={{ 
      width: '431px', 
      backgroundColor: '#1E1E1E', 
      borderRadius: '12px', 
      overflow: 'hidden',
      border: 'none',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      margin: "10px 0px",
      height:"496px"
    }}>
      <Card.Body style={{ padding: "24px",minWidth: "400px",margin: "8px" }}>
        <Row>
          <Col style={{maxWidth: "90px",paddingLeft: "12px"}}>
            <div className="details-loader" style={{width:"80%",marginBottom:"17px"}}></div>
          </Col>
          <Col style={{paddingLeft: "11px"}}>
            <div className="details-loader" style={{width:"50%",marginBottom:"17px"}}></div>
          </Col>
        </Row>
        <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '8px'}}/>
        <Row>
          <Col>
            <div className="details-loader" style={{width:"92%",marginBottom:"17px"}}></div>
          </Col>
          <Col style={{maxWidth: "80px",marginRight:"14px"}}>
            <div className="details-loader" style={{width:"80%",marginBottom:"17px"}}></div>
          </Col>
          <Col style={{marginRight: "-11px"}}>
            <div className="details-loader" style={{width:"92%",marginBottom:"17px"}}></div>
          </Col>
        </Row>
        <div style={{height: '1px',backgroundColor: '#333333',margin: '12px 0'}}/>
        <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '8px'}}/>
        <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '8px'}}/>
        <Row>
          <Col>
            <div className="details-loader" style={{width:"100%",marginBottom:"17px"}}></div>
          </Col>
          <Col>
            <div className="details-loader" style={{width:"100%",marginBottom:"17px"}}></div>
          </Col>
          <Col>
            <div className="details-loader" style={{width:"100%",marginBottom:"17px"}}></div>
          </Col>
        </Row>
        <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '8px'}}/>
        <Row>
          <Col>
            <div className="details-loader" style={{width:"100%",marginBottom:"17px"}}></div>
          </Col>
          <Col>
            <div className="details-loader" style={{width:"100%",marginBottom:"17px"}}></div>  
          </Col>
          <Col>
            <div className="details-loader" style={{width:"100%",marginBottom:"17px"}}></div>
          </Col>
        </Row>
        <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '8px'}}/>
        <Row>
          <Col>
            <div className="details-loader" style={{width:"100%",marginBottom:"17px"}}></div>  
          </Col>
          <Col>
            <div className="details-loader" style={{width:"100%",marginBottom:"17px"}}></div>
          </Col>
          <Col>
            <div className="details-loader" style={{width:"100%",marginBottom:"17px"}}></div>
          </Col>
        </Row>
        <div style={{height: '1px',backgroundColor: '#333333',margin: '12px 0'}}/>
        <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '8px'}}/>
        <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '8px'}}/>
        <Row>
          <Col>
            <div className="details-loader" style={{width:"80%",marginBottom:"17px"}}></div>
          </Col>
          <Col style={{marginRight:"-157px"}}>
            <div className="details-loader" style={{width:"35%",marginBottom:"17px"}}></div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FlightDetailsLoader;
