'use client'
import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const Page = () => {
  return (
    <Flex direction="column" minH="95vh">
      <Flex flex="1" position="relative">
        <Image
          src="/o-nas.jpg" 
          alt="O Nas"
          objectFit="cover"
          w="full"
          h="full"
          position="absolute"
        />
        <Box
          position="absolute"
          left="0"
          top="50%"
          transform="translateY(-50%) skew(-10deg)"
          background="rgba(255, 255, 255, 0.7)"
          p="2rem"
          zIndex="2"
          maxWidth="50%"
        >
          <Text
            transform="skew(10deg)"
            color="gray.800"
            fontWeight="bold"
            fontSize="xl"
            fontFamily="'Hepta Slab', serif"
          >
            {/* TEKST DO ZMIANY */}
            "Nasz Drób", założony w 1996 r., przeszedł od spółki jawnej do dynamicznie rozwijającej się spółki z o.o. Specjalizujemy się w produkcji wysokiej jakości, zdrowych produktów drobiowych - od świeżego mięsa po wyroby garmażeryjne i wędliny, oferowane w różnych opakowaniach. Dzięki ciągłej modernizacji, od 2003 r. nieustannie podnosimy standardy produkcji i rozszerzamy asortyment, odpowiadając na zmieniające się trendy i potrzeby rynku. Nasz zespół łączy zaangażowanie i innowacyjność, aby dostarczać produkty, które spełniają oczekiwania klientów z całej Europy. Zapraszamy do współpracy i odkrycia naszych smaków.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Page;

