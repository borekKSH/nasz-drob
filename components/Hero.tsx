"use client"
import {
  Box,
  Heading,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <Box
      display="flex" // Używa flexboxa do wyśrodkowania zawartości
      flexDirection="column" // Ustawia kierunek flexboxa na kolumnowy
      alignItems="center" // Wyśrodkowuje zawartość w poziomie
      justifyContent="center" // Wyśrodkowuje zawartość w pionie
      minH="85vh" // Ustawia minimalną wysokość na 100vh, aby pokryć całą wysokość widoku
      w="100%" // Ustawia szerokość na 100%
      bg={useColorModeValue('white', 'gray.800')} // Ustawia białe tło w trybie jasnym, szare w ciemnym
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }} // Zwiększone rozmiary czcionki
        lineHeight={'110%'}
      >
        Smaczny Polski Nasz
      </Heading>
    </Box>
  )
}