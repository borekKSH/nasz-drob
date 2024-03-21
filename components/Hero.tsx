"use client"
import React from 'react';
import { Flex, VStack, Text, useBreakpointValue, Box } from '@chakra-ui/react';

interface Hero {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<Hero> = ({ title, subtitle }) => {
  return (
    <Flex
      w="full"
      h="100vh"
      backgroundImage="/hero.jpg"
      backgroundSize="cover"
      backgroundPosition="center center"
      align="center"
      justify="center"
    >
      <Box
        px={useBreakpointValue({ base: 4, md: 8 })}
        py="4"
        bgGradient="linear(to-r, blackAlpha.600, transparent)"
        backdropFilter="blur(5px)"
        borderRadius="lg"
        textAlign="center" 
      >
        <VStack
          spacing={4}
          align="stretch" 
          justify="center" 
        >
          <Text
            color="white"
            fontWeight="bold"
            fontSize={useBreakpointValue({ base: "2xl", md: "5xl", lg: "6xl" })}
          >
            {title || "...Smaczny Polski Nasz"}
          </Text>
          <Box w="full" display="flex" alignItems="center" justifyContent="center">
            <Text
              color="white"
              fontSize={useBreakpointValue({ base: "md", md: "xl", lg: "2xl" })}
            >
              {subtitle || "Zasmakuj w naszym drobiu"}
            </Text>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default HeroSection;
