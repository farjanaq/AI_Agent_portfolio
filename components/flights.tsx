//without loading animation and text streaming 
// 'use client';

// import { FaPlaneDeparture,FaEye} from 'react-icons/fa';
// import { useActions, useUIState } from 'ai/rsc';
// import type { ReactNode } from 'react';

// import {Row,Col} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useEffect, useState } from 'react';
// import SkeletonLoader from './SkeletonLoader';

// interface FlightsProps {
//   flights: { id: string; flightNumber: string }[];
// }

// export const Flights = ({ flights }: FlightsProps) => {

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000); 
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <SkeletonLoader />; 
//   }

//   const { submitUserMessage } = useActions();
//   const [_, setMessages] = useUIState();

//   function isRedEyeFlight(departureTime: string, arrivalTime: string): boolean {
//     const isNightTime = (time: string) => {
//       const hour = parseInt(time.split(':')[0], 10)
//       return hour >= 21 || hour < 5
//     }
//     return isNightTime(departureTime) || isNightTime(arrivalTime)
//   }
//   return (

//     <div className="flight-list">
//       <p style={{marginBottom:"8px"}}>Showing flights for your preferred airline....</p>
//       <p style={{marginBottom:"8px"}}>Frequent flyer ID:337IG</p>
//       {flights.map(result => (
//         // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
//           <div 
//             key={result.id} 
//             className="flight-card card mb-3" 
//             style={{
//               width: "600px",
//               background: "#1e1e1e",
//               color: "white",
//               borderRadius: "12px",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//             }} 
//             onClick={async () => {
//             const display = await submitUserMessage(`lookupFlight ${result.flightNumber}`);
//             setMessages((messages: ReactNode[]) => [...messages, display]);
//           }}>
//           <div className="card-body" style={{marginBottom: "-26px",marginTop: "-9px"}}>
//             <Row>
//               <Col>
//                 <img src={result.image} alt="Company Icon" style={{ width: '35px', height: '30px', marginRight: '5px' }} />
//               </Col>
//               <Col style={{minWidth:"150px"}}>
//                 <Row>
//                   <p style={{fontSize: "16px",fontWeight: "700",paddingBottom:"5px"}}>{result.flightNumber}</p>
//                 </Row>
//                 <Row style={{fontSize:"10px",color:"#8e8a8a",marginTop:"-24px"}}>
//                   <p>{result.company}</p>
//                 </Row>
//               </Col>
//               <Col style={{minWidth:"150px"}}>
//                 <Row>
//                   <p style={{fontSize: "16px",paddingBottom:"5px"}}>{result.departure}-{result.arrival}</p>
//                 </Row>
//                 <Row style={{fontSize:"10px",color:"#8e8a8a",marginTop:"-24px"}}>
//                   <p>{result.source}-{result.destination}</p>
//                 </Row>
//               </Col>
//               <Col style={{minWidth:"120px"}}>
//                 {result.duration}
//               </Col>
//               <Col>
//                 {result.price}
//               </Col>
//               <Col style={{maxWidth: "15%",fontSize: "22px"}}>
//               {isRedEyeFlight(result.departure, result.arrival) && (
//                 <FaEye style={{color:"#ef4444"}}/>
//               )}
//               </Col>
//             </Row>
//           </div>
//         </div>
//       ))}
//       <style jsx>{`
//         .flight-card:hover {
//         transform: translateY(-5px);
//         box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//         border: 1px solid grey;
//       }

//       `}</style>
//     </div>
//   );
// };



//streaming text and animation like loading
"use client"

import type React from 'react'
import { useState, useEffect } from 'react'
import { useActions, useUIState } from 'ai/rsc'
import { FaEye } from 'react-icons/fa'
import { Row, Col,Tooltip,OverlayTrigger } from 'react-bootstrap'

interface Flight {
  id: string
  flightNumber: string
  company: string
  departure: string
  arrival: string
  source: string
  destination: string
  duration: string
  price: string
  image: string
}

interface FlightsProps {
  flights: Flight[]
  isActive:boolean
}

export const Flights = ({ flights,isActive }: FlightsProps) => {
  const { submitUserMessage } = useActions()
  const [_, setMessages] = useUIState()
  const [loadedFlights, setLoadedFlights] = useState<Flight[]>([])
  const [isTextLoaded, setIsTextLoaded] = useState(false)
  
   useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextLoaded(true);
    }, 1300); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isTextLoaded) {
      flights.forEach((flight, index) => {
        setTimeout(() => {
          setLoadedFlights((prev) => [...prev, flight])
        }, index * 300)
      })
    }
  }, [isTextLoaded, flights])

  function isRedEyeFlight(departureTime: string, arrivalTime: string): boolean {
    const isNightTime = (time: string) => {
      const hour = Number.parseInt(time.split(':')[0], 10)
      return hour >= 21 || hour < 5
    }
    return isNightTime(departureTime) || isNightTime(arrivalTime)
  }

  return (
    <div className="flight-list">
      <p style={{marginBottom:"8px"}}>Showing flights for your preferred airline....</p>
      <p style={{marginBottom:"8px"}}>Frequent flyer ID:337IG</p>
      {flights.map((result, index) => (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div 
          key={result.id} 
          className="flight-card card mb-3" 
          style={{
            width: "630px",
            background: "#1e1e1e",
            color: "white",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            overflow: "hidden",
          }} 
          // onClick={async () => {
          //   const display = await submitUserMessage(`lookupFlight ${result.flightNumber}`)
          //   setMessages((messages: React.ReactNode[]) => [...messages, display])
          // }}
          onClick={async () => {
            const display = await submitUserMessage(`lookupFlight ${result.flightNumber}`);
            setMessages((messages: React.ReactNode[]) => [
              ...messages,
              <div style={{marginLeft:"88px"}}>
                {display}
              </div>
            ]);
          }}
        >
          <div className="card-body py-3" style={{marginTop:"-10px",marginBottom:"-24px"}}>
            <Row className="align-items-center">
              <Col xs={2} className="d-flex align-items-center justify-content-center" style={{maxWidth:"58px",marginBottom:"auto",marginTop:"3px"}}>
                {loadedFlights.includes(result) ? (
                  <img src={result.image} alt="Company Icon" style={{ width: '35px', height: '30px' }} />
                ) : (
                  <div className="flights-loader" style={{width:"80%",marginBottom:"17px"}}/>
                )}
              </Col>
              <Col xs={3}>
                {loadedFlights.includes(result) ? (
                  <div>
                    <Row>
                      <p style={{fontSize: "16px",fontWeight: "700",paddingBottom:"5px"}}>{result.flightNumber}</p>
                    </Row>
                    <Row style={{fontSize:"10px",color:"#8e8a8a",marginTop:"-24px"}}>
                      <p>{result.company}</p>
                    </Row>
                  </div>
                ) : (
                  <div className="flights-loader" style={{width: "80%",marginBottom:"14px"}}/>
                )}
              </Col>
              <Col xs={3}>
                {loadedFlights.includes(result) ? (
                  <div>
                    <Row>
                      <p style={{fontSize: "16px",paddingBottom:"5px"}}>{result.departure}-{result.arrival}</p>
                    </Row>
                    <Row style={{fontSize:"10px",color:"#8e8a8a",marginTop:"-24px"}}>
                      <p>{result.source}-{result.destination}</p>
                    </Row>
                  </div>
                ) : (
                  <div className="flights-loader" style={{width: "80%",marginBottom:"14px"}}/>
                )}
              </Col>
              <Col xs={2} className="text-center" style={{minWidth:"116px",marginBottom:"28px"}}>
                {loadedFlights.includes(result) ? (
                  <p className="mb-0">{result.duration}</p>
                ) : (
                  <div className="flights-loader" style={{width: "80%",marginBottom:"-16px"}}/>
                )}
              </Col>
              <Col xs={1} className="text-center"
               style={{minWidth: "75px",marginBottom:"28px"}} >
                {loadedFlights.includes(result) ? (
                  <p className="mb-0">{result.price}</p>
                ) : (
                  <div className="flights-loader" style={{width: "80%",marginBottom:"-16px"}}/>
                )}
              </Col>
              <Col xs={1} className="text-center" style={{marginBottom:"2%",marginRight:"9px"}}>
                {loadedFlights.includes(result) && isRedEyeFlight(result.departure, result.arrival) && (
                  // <FaEye style={{color:"#ef4444", fontSize: "18px"}}/>
                <OverlayTrigger
         
                  placement="right"
                  overlay={<Tooltip >Red Eye flights</Tooltip>}
                >
                        <img src={"/redEye.png"} alt="Red Eye Icon" style={{ width: '38px', height: '31px' }} />

                      
                    </OverlayTrigger>
                  
                )}
              </Col>
            </Row>
          </div>
        </div>
      ))}
    </div>
  )
}