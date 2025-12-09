import { getMutableAIState,streamUI } from 'ai/rsc';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';
import { Flights } from '@/components/flights';
import { createAzure } from '@ai-sdk/azure';
import dynamic from 'next/dynamic';
import PaymentComponent from '@/components/paymentComponent';

const FlightDetails = dynamic(() => import('@/components/flight_details'), { ssr: false });

const azure = createAzure({
  resourceName: process.env.AZURE_RESOURCE_NAME, 
  apiKey: process.env.AZURE_API_KEY,
});

const searchFlights = async (
  source: string,
  destination: string,
  date: string
) => {
  return [
    {
      id: '1',
      flightNumber: 'AA123',
      source: source,
      destination:destination,
      date:date,
      departure: '15:00',
      arrival: '10:50',
      price:'$250',
      image:'/AA_logo.png',
      company:"American Airlines",
      duration:"24hrs 10min"
    },
    {
      id: '2',
      flightNumber: 'AA217',
      source: source,
      destination:destination,
      date:date,
      departure: '05:10',
      arrival: '20:55',
      price:'$560',
      image:'/AA_logo.png',
      company:"American Airlines",
      duration:"29hrs 50min"
    },
    {
      id: '3',
      flightNumber: 'AA557',
      source: source,
      destination:destination,
      date:date,
      departure: '22:00',
      arrival: '04:00',
      price:'$250',
      image:'/AA_logo.png',
      company:"American Airlines",
      duration:"26hrs 35min"
    }
  ];
};

const getFlightByNumber = (flightNumber: string) => {
  console.log(searchFlights)
  const flights=searchFlights;
  console.log("flights",flights)
  return searchFlights/* .find(flight => flight.flightNumber === flightNumber); */
};


const lookupFlight = async (flightNumber: string) => {
  const json=[
    {
      id: '1',
      flightNumber: 'AA123',
      source: "Mumbai",
      destination:"Austin",
      date:"20/10/2024",
      departure: '15:00',
      arrival: '10:50',
      price:'$250',
      image:'/AA_logo.png',
      company:"American Airlines",
      distance:"500miles",
      duration:"24hrs 10min"
    },
    {
      id: '2',
      flightNumber: 'AA217',
      source: "Mumbai",
      destination:"Austin",
      date:"20/10/2024",
      departure: '05:10',
      arrival: '20:55',
      price:'$560',
      image:'/AA_logo.png',
      company:"American Airlines",
      distance:"500miles",
      duration:"29hrs 50min"
    },
    {
      id: '3',
      flightNumber: 'AA557',
      source: "Mumbai",
      destination:"Austin",
      date:"20/10/2024",
      departure: '22:00',
      arrival: '04:00',
      price:'$250',
      image:'/AA_logo.png',
      company:"American Airlines",
      distance:"500miles",
      duration:"26hrs 35min"
    },
    
  ]
  
  return json.find(flight => flight.flightNumber === flightNumber);
  
  // return {
  //   flightNumber: flightNumber,
  //   source:source,
  //   destination:destination,
  //   date:date,
  //   departureTime: '10:00 AM',
  //   arrivalTime: '12:00 PM',
  //   company:'American Airlines',
  //   distance:'300 miles'
  // };
  // const selectedFlight = getFlightByNumber('AA123');
  // console.log(selectedFlight);
  // return selectedFlight;
};



export async function submitUserMessage(input: string,isActive:boolean) {
  'use server';

  console.log("inside sumbit user message");
  const messages = [
      {
        role: "system",
        content:  `\
        You are a flight booking assistant, and you help users search and book flights step by step.
        You can assist the user in browsing available flights, adjusting their preferences, and confirming bookings in the UI.
    
        If the user requests a flight search, call \`searchFlights\` to show the available flights.
        If the user wants details on a specific flight, call \`lookupFlight\` to display flight information.
        If the user wants to book a specific flight, call \`bookFlight\` to book the flight.
        `
      }, 
      {
        role: "user",
        content: input
      }
    ];
    console.log(messages);
  const history = getMutableAIState();
  const ui = await streamUI({
    model: azure("ux_gpt4o"),
    messages: [
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      ...messages.map((message: any) => ({
        role: message.role,
        content: message.content
      }))
    ],
    // prompt: input,
    text: async ({ content }) =>{
      console.log("StreamUI content:", content);
       return <div>{content}</div>;

    },
     
    tools: {
        searchFlights: {
            description: 'Helps in searching for flights. Use this if the user want to search for flights',
            parameters: z.object({
                source: z.string().describe('The origin of the flight'),
                destination: z.string().describe('The destination of the flight'),
                date: z.string().describe('The date of the flight'),
            }),
            generate: async function* ({ source, destination, date }) {
                yield `Searching for flights from ${source} to ${destination} on ${date}...`;
                console.log("source:", source);
                console.log("destination:", destination);
                console.log("date:", date);
                const results = await searchFlights(source, destination, date);
                console.log("results:", results);
                return (
                <Flights flights={results} isActive={isActive}  />
              );
            },
            },
      lookupFlight: {
        description: 'Get the details for a flight. Use this to look for flights.',
        parameters: z.object({
          flightNumber: z.string().describe('The flight number'),
        }),
        generate: async function* ({ flightNumber }) {
          yield `Looking up details for flight ${flightNumber}...`;
          console.log("flightNumber:", {flightNumber});
          const details = await lookupFlight(flightNumber);

          return (
            <FlightDetails
              flightNumber={details.flightNumber}
              source={details.source}
              destination={details.destination}
              date={details.date}
              price={details.price}
              departure={details.departure}
              arrival={details.arrival}
              company={details.company}
              distance={details.distance}
              image={details.image}
              duration={details?.duration}
            />
          );
        },
      },
      bookFlight: {
        description: 'Book the flight. Use this to book flights.',
        parameters: z.object({
          flightNumber: z.string().describe('The flight number'),
        }),
        generate: async function* ({ flightNumber }) {
          yield `Booking flight ${flightNumber}...`;
          // const details = await lookupFlight(flightNumber);

          return (
            <PaymentComponent
              // flightNumber={details.flightNumber}
            />
          );
        },
      },
    },
  });
  
  console.log("UI value:", ui.value);
  return ui.value;
}