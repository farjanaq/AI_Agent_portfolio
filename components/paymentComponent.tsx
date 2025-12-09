'use client';
import React, { useState } from 'react'
import { Container, Card, Form, Button } from 'react-bootstrap'
import { CreditCard } from 'react-bootstrap-icons'

export default function PaymentComponent() {
  const [isVerified, setIsVerified] = useState(false)
  const [code, setCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerified(true)
  }

  return (
    <Container className="d-flex align-items-center"  style={{paddingLeft:"0px" }} >
      <Card style={{ width: '100%',marginTop:"10px",marginBottom:"10px", maxWidth: '430px', /* border: '1px solid #dadce0' */background:"#1E1E1E", borderRadius: '8px', boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)' }}>
        <Card.Header className="border-bottom-0 pt-4 px-4 pb-0">
          <div className="d-flex justify-content-between align-items-center" >
            <span className="d-flex align-items-center" style={{ fontSize: '14px',color:"white"}}>
              <CreditCard className="me-2" size={16} />
              Visa ···· 0512
            </span>
            {/* <img src="/placeholder.svg?height=20&width=40" alt="Google Pay" style={{ height: '20px' }} /> */}
          </div>
        </Card.Header>
        <Card.Body className="px-4 pt-3 pb-4">
          {!isVerified ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label className="mb-3" style={{ fontSize: '14px', fontWeight: 400, color: 'white', lineHeight: '20px' }}>
                  Enter the code sent to your phone (***) *** 6137 to complete your purchase.
                </Form.Label>
                <Form.Control
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  maxLength={6}
                  required
                  className="border-0 border-bottom shadow-none px-0 pb-1"
                  style={{ fontSize: '20px', fontWeight: 500, borderBottomColor: '#dadce0',borderRadius:"8px",background:"#3b3a3a",color:"white" }}
                />
              </Form.Group>
              <Button 
                variant="outline-light" 
                type="submit" 
                className="rounded-pill submit-btn" 
                style={{ 
                  padding: '10px 0', 
                  fontSize: '14px', 
                  fontWeight: 500, 
                //   backgroundColor: '#000000', 
                //   border: 'none',
                    width:'170px',
                    marginLeft:'100px',
                  boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)'
                }}
              >
                Submit
              </Button>
            </Form>
          ) : (
            <div className="text-center py-3">
              <svg className="text-success mb-3" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#34A853"/>
                <path d="M36 16L20 32L12 24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4 className="text-success mb-3" style={{ fontSize: '18px', fontWeight: 500, color: '#34a853' }}>Payment Succeeded</h4>
              <p className="mb-0" style={{ fontSize: '14px', color: 'white', lineHeight: '20px' }}>
                Thanks for your purchase! You will receive an email confirmation shortly.
              </p>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  )
}