"use client"
import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, VStack, Text, Link, theme } from '@chakra-ui/react';
import Head from 'next/head';

interface ClickableBoxProps {
  title: string;
  content: React.ReactNode; 
  onClick: () => void;
}

const ClickableBox: React.FC<ClickableBoxProps> = ({ title, content, onClick }) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      borderRadius="md"
      p={3}
      textAlign="center"
      fontSize="md"
      bg="rgba(255, 255, 255, 0.7)"
      boxShadow="md"
      _hover={{ bg: "rgba(255, 255, 255, 0.8)" }}
      m={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="200px"
      h="60px"
      color="gray.800"
      fontWeight="bold"
    >
      {title}
    </Box>
  );
};

const Home: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<React.ReactNode | null>(null);

  const bgImage = 'url("/contact.jpg")'; 

  const handleBoxClick = (content: React.ReactNode) => {
    setSelectedContent(content);
  };

  const officeContent = (
    <>
      <Text>Nasz Drób Sp z o. o.</Text>
      <Text>Ujrzanów 77, 08-110 Siedlce</Text>
      <Text>tel. <Link href="tel:+48256449524" isExternal>25 644 95 24</Link></Text>
      <Text>email: <Link href="mailto:biuro@nasz-drob.pl" isExternal>biuro@nasz-drob.pl</Link></Text>
    </>
  );

  const shopContent = (
    <>
      <Text>Sklepy Firmowe</Text>
      <Text>Sklep przyzakładowy</Text>
      <Text>Ujrzanów 77, 08-110 Siedlce</Text>
      <Text>Tel. <Link href="tel:+48256449524" isExternal>25 644 95 24 wew. 122</Link></Text>
      <Text>Godziny otwarcia:</Text>
      <Text>pn - pt: 8-18</Text>
    </>
  );

  return (
    <>
      <Head>
        <title>Nasz Drób kontakt</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          minH="100vh"
          w="full"
          bgImage={bgImage}
          bgPos="center"
          bgSize="cover"
          p={4}
        >
          <VStack spacing={4} align="center" w="full">
            <ClickableBox title="BIURO" content={officeContent} onClick={() => handleBoxClick(officeContent)} />
            <ClickableBox title="Działy Sprzedaży Finansowy Ruchu" content="Informacje o działach sprzedaży, finansów i ruchu." onClick={() => handleBoxClick("Informacje o działach sprzedaży, finansów i ruchu.")} />
            <ClickableBox title="Sklep" content={shopContent} onClick={() => handleBoxClick(shopContent)} />
          </VStack>
          {selectedContent && (
            <Box mt={6} p={4} bg="rgba(255, 255, 255, 0.8)" borderRadius="md" boxShadow="base" color="gray.800" w="200px" textAlign="center">
              {selectedContent}
            </Box>
          )}
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default Home;
