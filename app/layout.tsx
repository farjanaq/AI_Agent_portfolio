// biome-ignore lint/style/useImportType: <explanation>
import { type ReactNode } from 'react';
import { AI } from './ai';
import 'bootstrap/dist/css/bootstrap.min.css';

// import '../styles/styles.css';


// import "./globals.css";
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title:"Flight booking bot",
//   description: "Helps you search and book flights",
// };

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <AI>
      <html lang="en">
        <body style={{background:"black",overflowY: 'auto',height: "calc(100vh - 50px)",fontFamily:"Helvetica"}}>{children}</body>
      </html>
    </AI>
  );
}