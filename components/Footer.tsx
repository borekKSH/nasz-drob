"use client"
import { Box, Container, Stack, Text, useColorModeValue, Link } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      position="absolute"
      bottom="0"
      w="full"
      bg={useColorModeValue('rgba(45, 55, 72, 0.5)', 'rgba(45, 55, 72, 0.5)')}
      color={useColorModeValue('#CBD5E0', '#CBD5E0')}
      py={4}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text fontSize="sm" textAlign={{ base: 'center', md: 'left' }}>
          © 2024 Nasz Drób sp. z o.o. Wszelkie prawa zastrzeżone
        </Text>
        <Stack direction={'row'} spacing={6}>
          <Link
            href="/o-nas"
            _hover={{
              textDecoration: 'none',
              transform: 'translateY(-2px)',
              transition: 'transform 0.3s ease-in-out'
            }}
            fontSize="sm"
          >
            O nas
          </Link>
          <Link
            href="/kontakt"
            _hover={{
              textDecoration: 'none',
              transform: 'translateY(-2px)',
              transition: 'transform 0.3s ease-in-out'
            }}
            fontSize="sm"
          >
            Kontakt
          </Link>
          <Link
            href="https://www.facebook.com/naszdrob"
            isExternal
            _hover={{
              textDecoration: 'none',
              transform: 'translateY(-2px)',
              transition: 'transform 0.3s ease-in-out'
            }}
            fontSize="sm"
          >
            <FaFacebook size="1.25em" />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
