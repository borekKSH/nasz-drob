import { ChakraProvider } from '@chakra-ui/react'
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Nasz Drób spółka z o.o",
  description: "...smaczny, Polski, Nasz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <ChakraProvider>
          <Navbar/>
          {children}
          <Footer/>
          </ChakraProvider>
      </body>
    </html>
  );
}
