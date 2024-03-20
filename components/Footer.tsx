"use client"
import { Box, Container, Stack, Text, useColorModeValue, Link } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2024 Nasz Drób sp. z o.o. Wszelkie prawa zastrzeżone</Text>
        <Stack direction={'row'} spacing={6}>
          <Link href="/o-nas" _hover={{ textDecoration: 'none' }}>
            O nas
          </Link>
          <Link href="/kontakt" _hover={{ textDecoration: 'none' }}>
            Kontakt
          </Link>
          <Link href="https://www.facebook.com/naszdrob" isExternal _hover={{ textDecoration: 'none' }}>
            <FaFacebook />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
