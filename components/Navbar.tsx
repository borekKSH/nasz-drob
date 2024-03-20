'use client'
import { Flex, Box, Text, useColorModeValue, Link, Menu, MenuButton, MenuList, MenuItem, Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { link } from 'fs';

export default function Navbar() {
  // Styl dla boxów z przezroczystym tłem
  const boxBgStyle = {
    bg: useColorModeValue('rgba(255, 255, 255, 0.6)', 'rgba(23, 25, 35, 0.6)'), // przezroczystość dla jasnego i ciemnego motywu
    backdropFilter: 'blur(10px)', // efekt rozmycia dla tła
    p: '0.5rem', // padding wewnątrz boxów
    borderRadius: 'lg', // zaokrąglenie rogów
    boxShadow: 'md' // delikatny cień dla lepszego kontrastu
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="start"
      wrap="wrap"
      padding="1.5rem"
      bg="transparent"
      color={useColorModeValue('gray.600', 'white')}
      position="absolute"
      width="100%"
      zIndex="10"
    >
      {/* Zastosowanie stylu tła dla logo */}
      <Box mr={10} mt={0} {...boxBgStyle}>
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          <Image src="/nasz.png" alt="NaszDrob" height={250}/>
        </Link>
      </Box>

      <Box {...boxBgStyle}>
        <Menu>
          <MenuButton as={Text} mr={4} cursor="pointer" fontSize="lg" _hover={{ textDecoration: 'underline' }} onMouseEnter={(event) => openMenu(event)}>
            Firma <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} href="/o-nas">O nas</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box {...boxBgStyle}>
        <Menu>
          <MenuButton as={Link} mr={4} href="/produkty" fontSize="lg">
            Produkty <ChevronDownIcon />
          </MenuButton>
        </Menu>
      </Box>

      <Box {...boxBgStyle}>
        <Menu>
          <MenuButton as={Text} mr={4} cursor="pointer" fontSize="lg" _hover={{ textDecoration: 'underline' }} onMouseEnter={(event) => openMenu(event)}>
            Informacje <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} href="/haccp">System HACCP</MenuItem>
            <MenuItem as={Link} href="/certyfikaty">Certyfikaty</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box {...boxBgStyle}>
        <Menu>
          <MenuButton as={Link} mr={4} href="/kontakt" fontSize="lg">
            Kontakt
          </MenuButton>
        </Menu>
      </Box>
    </Flex>
  );
}

function openMenu(event: React.MouseEvent) {
  let menuList = (event.target as HTMLElement).parentNode?.querySelector('ul');
  if (menuList) {
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
  }
}
