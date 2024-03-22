'use client'
import React from 'react';
import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

const ONAS = () => {
  const fontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  const boxWidth = useBreakpointValue({ base: '90%', md: '80%', lg: '50%' });
  const boxPadding = useBreakpointValue({ base: '6', md: '8' });

  return (
    <Flex
      direction="column"
      minH="100vh"
      w="full"
      h="full"
      backgroundImage="url('/o-nas.jpg')"
      backgroundSize="cover"
      backgroundPosition="center center"
      align="center"
      justify="center"
      position="relative"
    >
      <Box
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        width={boxWidth}
        padding={boxPadding}
        background="rgba(255, 255, 255, 0.8)"
        backdropFilter="blur(10px)"
        borderRadius="2xl"
        boxShadow="xl"
        zIndex="2"
        textAlign="center"
        overflow="hidden"
      >
        <Text
          color="gray.800"
          fontWeight="bold"
          fontSize={fontSize}
          fontFamily="'Hepta Slab', serif"
        >
          &quot;Nasz Drób&quot;, założony w 1996 r., przeszedł od spółki jawnej do dynamicznie rozwijającej się spółki z o.o. Specjalizujemy się w produkcji wysokiej jakości, zdrowych produktów drobiowych - od świeżego mięsa po wyroby garmażeryjne i wędliny, oferowane w różnych opakowaniach. Dzięki ciągłej modernizacji, od 2003 r. nieustannie podnosimy standardy produkcji i rozszerzamy asortyment, odpowiadając na zmieniające się trendy i potrzeby rynku. Nasz zespół łączy zaangażowanie i innowacyjność, aby dostarczać produkty, które spełniają oczekiwania klientów z całej Europy.
        </Text>
      </Box>
    </Flex>
  );
};

export default ONAS;
