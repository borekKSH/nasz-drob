"use client"
import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, VStack, Text, theme } from '@chakra-ui/react';
import Head from 'next/head';

interface ClickableBoxProps {
  title: string;
  content: string;
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
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  const bgImage = 'url("/contact.jpg")'; 

  const handleBoxClick = (content: string) => {
    setSelectedContent(content);
  };

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
            <ClickableBox title="Biuro" content="Tutaj znajdziesz informacje o naszym biurze." onClick={() => handleBoxClick("Tutaj znajdziesz informacje o naszym biurze.")} />
            <ClickableBox title="Działy Sprzedaży Finansowy Ruchu" content="Informacje o działach sprzedaży, finansów i ruchu." onClick={() => handleBoxClick("Informacje o działach sprzedaży, finansów i ruchu.")} />
            <ClickableBox title="Sklep" content="Dowiedz się więcej o naszej ofercie sklepowej." onClick={() => handleBoxClick("Dowiedz się więcej o naszej ofercie sklepowej.")} />
          </VStack>
          {selectedContent && (
            <Text mt={6} p={4} bg="rgba(255, 255, 255, 0.8)" borderRadius="md" boxShadow="base" color="gray.800" w="200px" textAlign="center">
              {selectedContent}
            </Text>
          )}
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default Home;
