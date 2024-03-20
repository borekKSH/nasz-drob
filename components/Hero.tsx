"use client"
import React from 'react';
import { Box, Button, VStack, Text, Image, Flex, Spacer } from '@chakra-ui/react';

interface Hero {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<Hero> = ({ title, subtitle }) => {
  return (
    <Flex direction="column" minH="95vh"> 
      <Box flex="1" position="relative"> 
        <Image
          src="/hero.jpg" 
          alt="Pyszny Kurczaczek z Rodzinką"
          objectFit="cover"
          w="full"
          h="full"
          position="absolute"
        />
        <VStack
          position="absolute" 
          top="50%" 
          left="50%" 
          transform="translate(-50%, -50%)" 
          spacing="4"
          color="white" 
          maxW="600px"
          textAlign="center" 
          p="4" // 
          bg="blackAlpha.500" 
          borderRadius="lg" 
        >
          <Text fontSize="5xl" fontWeight="bold" as="h1">
            {title || "...Smaczny Polski Nasz"}
          </Text>
          <Text fontSize="xl" as="p">
            {subtitle || "Zasmakuj w naszym drobiu"}
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default HeroSection;
