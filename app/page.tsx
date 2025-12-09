// previous code where scroll to the bottom is not added
// 'use client';

// import { useState } from 'react';
// import type { AI } from './ai';
// import { useActions, useUIState } from 'ai/rsc';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import {Row,Col} from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../styles/styles.css';

// export default function Page() {
//   const [input, setInput] = useState<string>('');
//   const [conversation, setConversation] = useUIState<typeof AI>();
//   const { submitUserMessage } = useActions();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//     setInput('');
//     setConversation(currentConversation => [
//       ...currentConversation,

//       // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
//       <Row>
//         <Col>
//           <div className="d-flex justify-content-end mb-2">
//             <div className="user-message text-white" style={{ border: "1px solid #373535",maxWidth: "80%",background: "#232121",borderRadius:"2.5rem",padding:"14px"}}>
//               {input}
//             </div>
//           </div>
//         </Col>
//         <Col style={{maxWidth: "10%"}}>
//         <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
//             (
//               <img src={"/UserAvatar1.png"} alt={""} className="h-full w-full object-cover" 
//                 style={{border: "1px solid white",borderRadius: "20px",marginBottom: "10px"}} />
//             )
//           </div>
//         </Col>
//       </Row>
//     ]);
//     const message = await submitUserMessage(input);
//     setConversation(currentConversation => [
//       ...currentConversation,
//       // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
//       <Row>
//         <Col style={{maxWidth: "10%"}}>
//         <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
//             (
//               <img src={"/BotAvatar.png"} alt={""} className="h-full w-full object-cover" 
//                 style={{border: "1px solid white",borderRadius: "20px",marginBottom: "10px"}} />
//             )
//           </div>
//         </Col>

//         <Col>
//           <div className="d-flex justify-content-start mb-2">
//             <div className="ai-message p-2 rounded" style={{ /* border: "1px solid #373535",background: "#232121", */ background:"transparent",maxWidth: "80%",color:"white" }}>
//               {message}
//             </div>
//           </div>
//         </Col>
//       </Row>
//     ]);
//   };

//   return (
//     <div className="container mt-4 d-flex flex-column align-items-center" style={{ position: 'relative', /* height: 'calc(100vh - 50px)' */ /* ,overflowY: 'auto' */}}>
//       <h1 className="mb-4" style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', color: 'white', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)' }}>
//         Flight Booking Assistant
//       </h1>
//       {conversation.length > 0 && (
//         <div className="chat-container w-100" style={{ maxWidth: '800px'/* , height: 'calc(100vh - 160px)' *//* , overflowY: 'auto' */, marginBottom: '60px' }}>
//           <div className="chat-box p-3 mb-3">
//             {conversation.map((message, i) => (
//               <div key={i}>
//                 {message}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       <form onSubmit={handleSubmit} className="d-flex w-100" style={{ maxWidth: '800px', position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', padding: '10px', background: 'black' 
//         ,border: "1px solid grey",borderRadius: "0.75rem",margin: "30px"
//       }}>
//         <Row style={{width:"95%"}}>
//           <Col md={7}>
//            <div>
//            <input
//           type="text"
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           className="chatInputbox me-2 placeholder-white::placeholder"
//           placeholder="Type your message here..."
//           onFocus={(e) => {
//             e.target.style.border = 'none' // Remove border on focus
//           }}
//           style={{background: 'black'/* border: "1px solid grey",borderRadius: "0.75rem" */,
//             color:"white",border:"None",padding:0,outline:"None",minWidth:"500px"}}
//         />
        
//         <style jsx>{`
//         input::placeholder {
//           color: white;
//           opacity: 0.7;
//         }
//       `}</style>

//            </div>
          
//           </Col>
//           <Col style={{width:"90%"}}>
//           </Col>
//           <Col md={2} style={{width:"20px"}}>
//           <button style={{background: "black",borderColor:"white"}} type="submit" className="btn btn-primary"> 
//             <FontAwesomeIcon /* style={{paddingRight: "10px"}} */ icon={faArrowUp}  /> </button>
//           </Col>
//         </Row>
       
//       </form>
//     </div>
//   );
// }


// scroll to the end of the chat functionality added in below code
'use client';

import { useState, useEffect, useRef } from 'react';
import type { AI } from './ai';
import { useActions, useUIState } from 'ai/rsc';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Row, Col,Button,Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/styles.css';
import initialChat from '@/components/initialChat';

export default function Component() {
  const [input, setInput] = useState<string>('');
  const [conversation, setConversation] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState(true);
  const toggleFont = () => {
    setIsActive((prevState) => !prevState);
  };

  useEffect(() => {
    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    };

    scrollToBottom();

    const observer = new MutationObserver(scrollToBottom);
    const config = { childList: true, subtree: true };
    
    if (chatContainerRef.current) {
      observer.observe(chatContainerRef.current, config);
    }

    return () => observer.disconnect();
  }, [conversation]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userInput = input;
    setInput('');
    
    setConversation(currentConversation => [
      ...currentConversation,
      <Row key={`user-${currentConversation.length}`}>
        <Col>
          <div className="d-flex justify-content-end mb-2">
            <div className="user-message text-white" style={{ border: "1px solid #373535", maxWidth: "80%", background: "#232121", borderRadius: "2.5rem", padding: "14px" }}>
              {userInput}
            </div>
          </div>
        </Col>
        <Col style={{ maxWidth: "10%" }}>
          <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
            <img src="/UserAvatar1.png" alt="" className="h-full w-full object-cover" 
              style={{ border: "1px solid white", borderRadius: "20px", marginBottom: "10px" }} />
          </div>
        </Col>
      </Row>
    ]);

    const message = await submitUserMessage(userInput,isActive);
    
    setConversation(currentConversation => [
      ...currentConversation,
      <Row key={`ai-${currentConversation.length}`}>
        <Col style={{ maxWidth: "10%" }}>
          <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
            <img src="/BotAvatar.png" alt="" className="h-full w-full object-cover" 
              style={{ border: "1px solid white", borderRadius: "20px", marginBottom: "10px" }} />
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-start mb-2">
            <div className="ai-message p-2 rounded" style={{ background: "transparent", maxWidth: "80%", color: "white" }}>
              {message}
            </div>
          </div>
        </Col>
      </Row>
    ]);
  };

  return (
    <div className="container mt-4 d-flex flex-column align-items-center" style={{ position: 'relative',fontFamily: !isActive ? 'OpenDyslexic' : 'Helvetica'}}>
      {/* <h1 className="mb-4" style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', color: 'white', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)' }}>
        Flight Booking Assistant
      </h1> */}
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      {/* <Button variant={isActive ? 'success' : 'outline-secondary'}  onClick={toggleFont}>
        Toggle Font
      </Button> */}
        <Form.Check
          type="switch"
          
          label={isActive?"Dyslexic?":"Normal?"}
          
          className="inline-switch switch custom-switch form-check-label-simple "
          // checked={simpleData.years.find(item => item.year === year).includeMonths}
          onChange={toggleFont}
          style={{position: "fixed",right: "30px",color:'white'}}
                     
        />
      {conversation.length === 0 &&(
            <Row className="mb-5" style={{marginTop:"18%"}}>
            <Col>
              <h1 className="display-4 fw-bold text-center" style={{ fontSize: '2.5rem' ,color:"white",marginLeft:"14px"}}>
                Where do you want to travel today?
              </h1>
            </Col>
          </Row>
        )}
      {conversation.length > 0 && (
        <div 
          ref={chatContainerRef}
          className="chat-container w-100" 
          style={{ 
            maxWidth: '800px', 
            marginBottom: '60px' 
          }}
        >
          <div className="chat-box p-3 mb-3">
            {conversation.map((message, i) => (
              <div key={i}>
                {message}
              </div>
            ))}
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="d-flex w-100" style={{ 
        maxWidth: '800px', 
        position: 'fixed', 
        bottom: conversation.length > 0 ? 0 : '42%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        padding: '10px', 
        background: 'black',
        border: "1px solid grey",
        borderRadius: "0.75rem",
        margin: "30px"
        }}>
        <Row style={{ width: "95%" }}>
          <Col md={7}>
            <div>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="chatInputbox me-2 placeholder-white::placeholder"
                placeholder="Type your message here..."
                onFocus={(e) => {
                  e.target.style.border = 'none'
                }}
                style={{
                  background: 'black',
                  color: "white",
                  border: "None",
                  paddingTop:"2%",
                  paddingLeft:"3%",
                  outline: "None",
                  minWidth: "500px"
                }}
              />
              <style jsx>{`
                input::placeholder {
                  color: white;
                  opacity: 0.7;
                }
              `}</style>
            </div>
          </Col>
          <Col style={{ width: "90%" }}/>
          <Col md={2} style={{ width: "20px" }}>
            <button id="enterButton" style={{ background: "black", borderColor: "white" }} type="submit" className="btn btn-primary"> 
              <FontAwesomeIcon icon={faArrowUp} /> 
            </button>
          </Col>
        </Row>
      </form>
      {conversation.length === 0 &&(
            <div className="d-flex flex-wrap gap-2" style={{marginTop:"8%"}}>
            <Button onClick={e => {setInput("Search flights from Mumbai to Austin today"); setTimeout(() => {document.getElementById('enterButton')?.click()}, 1000)}} style={{border:"1px solid grey"}} variant="outline-light" className="custom-button flex-grow-1 text-start">
              Search flights from Mumbai to Austin today →
            </Button>
            <Button onClick={e => {setInput("Get details for flight AA123"); setTimeout(() => {document.getElementById('enterButton')?.click()}, 1000)}} style={{border:"1px solid grey"}} variant="outline-light" className="custom-button flex-grow-1 text-start">
              Get details for flight AA123 →
            </Button>
          </div>
        )}
    </div>
    
    // <>
    //   {/* {conversation.length > 0 ? ( */}
    //     <div className="container mt-4 flex flex-col items-center relative">
    //       {/* <h1 className="mb-4 font-serif text-4xl text-white text-shadow">
    //         Flight Booking Assistant
    //       </h1> */}
    //       {conversation.length === 0 &&(
    //         <Row className="mb-5">
    //         <Col>
    //           <h1 className="display-4 fw-bold text-center" style={{ fontSize: '2.5rem' }}>
    //             Where do you want to travel today?
    //           </h1>
    //         </Col>
    //       </Row>
    //       )}
          
    //       {conversation.length > 0 && (
    //         <div 
    //           ref={chatContainerRef}
    //           className="chat-container w-full max-w-3xl mb-16"
    //         >
    //           <div className="chat-box p-3 mb-3">
    //             {conversation.map((message, i) => (
    //               <div key={i}>{message}</div>
    //             ))}
    //           </div>
    //         </div>
    //       )}
    //       <form onSubmit={handleSubmit} className="flex w-full max-w-3xl fixed bottom-0 left-1/2 transform -translate-x-1/2 p-2.5 bg-black border border-gray-600 rounded-xl m-8">
    //         <Row className="w-[95%]">
    //           <Col md={7}>
    //             <div>
    //               <input
    //                 type="text"
    //                 value={input}
    //                 onChange={(e) => setInput(e.target.value)}
    //                 className="chatInputbox mr-2 placeholder-white::placeholder bg-black text-white border-none p-0 outline-none min-w-[500px]"
    //                 placeholder="Type your message here..."
    //                 onFocus={(e) => {
    //                   e.currentTarget.style.border = 'none'
    //                 }}
    //               />
    //               <style jsx>{`
    //                 input::placeholder {
    //                   color: white;
    //                   opacity: 0.7;
    //                 }
    //               `}</style>
    //             </div>
    //           </Col>
    //           <Col className="w-[90%]" />
    //           <Col md={2} className="w-5">
    //             <button type="submit" className="btn btn-primary bg-black border-white"> 
    //               <FontAwesomeIcon icon={faArrowUp} /> 
    //             </button>
    //           </Col>
    //         </Row>
    //       </form>
    //     </div>
    //   {/* ) : ( */}
    //     {/* <initialChat /> */}
    //   {/* )} */}
    // </>
  );
}



