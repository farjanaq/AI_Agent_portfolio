'use client';
import type React from 'react';
import { Button, Card } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';
import FlightDetailsLoader from './FlightDetailsLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { useActions, useUIState } from 'ai/rsc'
import { useEffect, useState } from 'react';
import PaymentComponent from './paymentComponent';

interface FlightDetailsProps {
  flightNumber: string;
  departure: string;
  arrival: string;
  company: string;
  distance: string;
  price:string;
  date:string;
  destination:string;
  source:string;
  image:string
}

const FlightDetails: React.FC<FlightDetailsProps> = ({ flightNumber, departure, arrival, company, distance,price,duration,destination,source ,image}) => {
    const [loading, setLoading] = useState(true);
    
    const { submitUserMessage } = useActions()
    const [_, setMessages] = useUIState()
    useEffect(() => {
      
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1300);
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <FlightDetailsLoader />; 
    }

  return (
    <>
      <Card style={{ 
        width: 'fit-content', 
        backgroundColor: '#1E1E1E', 
        borderRadius: '12px', 
        overflow: 'hidden',
        border: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        margin: "10px 0px"
      }}>
        <Card.Body style={{ padding: "24px",minWidth: "400px",margin: "8px" }}>
          <Row>
            <Col style={{maxWidth: "56px",paddingLeft: "12px"}}>
              <img src={image} alt="Company Icon" style={{ width: '45px', height: '35px', marginRight: '8px' }} />
            </Col>
            <Col style={{paddingTop: "4px",paddingLeft: "11px"}}>
              <p style={{color: '#FFFFFF',fontSize: '20px',fontWeight: 600 }}>{flightNumber}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <p style={{color: '#FFFFFF',fontSize: '18px',fontWeight: 600 }}>{source}</p>
              </Row>
              <Row style={{marginTop: "-18px",marginLeft: "1px"}}>
                <p style={{color: '#FFFFFF',fontSize: '16px',fontWeight: 500 }}>{departure}</p>
              </Row>
            </Col>
            <Col style={{marginTop: "11px",marginLeft: "19px",maxWidth: "130px"}}>
              <FontAwesomeIcon icon={faPlane} size="sm" color="#FFFFFF" />
            </Col>
            <Col style={{marginRight: "-69px"}}>
              <Row>
                <p style={{color: '#FFFFFF',fontSize: '18px',fontWeight: 600 }}>{destination}</p>
              </Row>
              <Row style={{marginTop: "-18px",marginLeft: "1px"}}>
                <p style={{color: '#FFFFFF',fontSize: '16px',fontWeight: 500 }}>{arrival}</p>
              </Row>
            </Col>
          </Row>
          <div style={{height: '1px',backgroundColor: '#333333',margin: '12px 0'}}/>
          <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '8px'}}/>
          <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '8px'}}/>
          <Row>
            <Col>
              <Row style={{width:"150px"}}>
                <p style={{color: '#8E8E8E',fontSize: '14px',fontWeight: 400,marginBottom: '2px' }}>Airlines</p>
              </Row>
              <Row style={{width:"150px"}}>
                <p style={{color: '#FFFFFF',fontSize: '16px',fontWeight: 500 }}>{company}</p>
              </Row>
            </Col>
            <Col>
              <Row style={{width:"152px"}}>
                <p style={{color: '#8E8E8E',fontSize: '14px',fontWeight: 400,marginBottom: '2px' }}>Class</p>
              </Row>
              <Row style={{width:"152px"}}>
                <p style={{color: '#FFFFFF',fontSize: '16px',fontWeight: 500 }}>Business</p>
              </Row>
            </Col>
            <Col>
              <Row>
                <p style={{color: '#8E8E8E',fontSize: '14px',fontWeight: 400,marginBottom: '2px' }}>Distance</p>
              </Row>
              <Row>
                <p style={{color: '#FFFFFF',fontSize: '16px',fontWeight: 500 }}>{distance}</p>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row style={{width:"150px"}}>
                <p style={{color: '#8E8E8E',fontSize: '14px',fontWeight: 400,marginBottom: '2px' }}>Cabin Baggage</p>
              </Row>
              <Row style={{width:"150px"}}>
                <p style={{color: '#FFFFFF',fontSize: '16px',fontWeight: 500 }}>10kg</p>
              </Row>
            </Col>
            <Col>
              <Row style={{width:"152px"}}>
                <p style={{color: '#8E8E8E',fontSize: '14px',fontWeight: 400,marginBottom: '2px' }}>Private Storage</p>
              </Row>
              <Row style={{width:"152px"}}>
                <p style={{color: '#FFFFFF',fontSize: '16px',fontWeight: 500 }}>Included</p>
              </Row>
            </Col>
            <Col>
              <Row>
                <p style={{color: '#8E8E8E',fontSize: '14px',fontWeight: 400,marginBottom: '2px' }}>Breakfast</p>
              </Row>
              <Row>
                <p style={{color: '#FFFFFF',fontSize: '16px',fontWeight: 500 }}>Included</p>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row style={{width:"150px"}}>
                <p style={{color: '#8E8E8E',fontSize: '14px',fontWeight: 400,marginBottom: '2px' }}>Check-In Baggage</p>
              </Row>
              <Row style={{width:"150px"}}>
                <p style={{color: '#FFFFFF',fontSize: '16px',fontWeight: 500 }}>20kg</p>
              </Row>
            </Col>
            <Col>
              <Row style={{width:"152px"}}>
                <p style={{color: '#8E8E8E',fontSize: '14px',fontWeight: 400,marginBottom: '2px' }}>Cancellation Penalty</p>
              </Row>
              <Row style={{width:"152px"}}>
                <p style={{color: '#FFFFFF',fontSize: '16px',fontWeight: 500 }}>$30</p>
              </Row>
            </Col>
            <Col>
              <Row>
                <p style={{color: '#8E8E8E',fontSize: '14px',fontWeight: 400,marginBottom: '2px' }}>Pets</p>
              </Row>
              <Row>
                <p style={{color: '#FFFFFF',fontSize: '16px',fontWeight: 500 }}>Allowed</p>
              </Row>
            </Col>
          </Row>
          <div style={{height: '1px',backgroundColor: '#333333',margin: '12px 0'}}/>
          <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '8px'}}/>
          <div style={{display: 'flex',justifyContent: 'space-between',marginBottom: '8px'}}/>
          <Row>
            <Col>
              <p style={{color: '#FFFFFF',fontSize: '16px',fontWeight: 500 }}>Business Class Price</p>
            </Col>
            <Col style={{marginRight:"-230px"}}>
              <p style={{color: '#FFFFFF',fontSize: '20px',fontWeight: 500 }}>{price}</p>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
            <Col style={{maxWidth:"35%",marginTop:"15px"}}>
              <Button variant="outline-light" style={{padding: "5px 20px 5px 20px",fontSize: "14px"}} onClick={async () => {
            const display2 = await submitUserMessage("bookFlight");
            setMessages((messages: React.ReactNode[]) => [
              ...messages,
              // <div style={{paddingLeft:"87px"}}>
              //   {display2}
              // </div>
              // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
              <div style={{paddingLeft:"87px"}}>
                <PaymentComponent/>
              </div>
              ]);
            }}>Book flight</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
</>
  );
};

export default FlightDetails;
