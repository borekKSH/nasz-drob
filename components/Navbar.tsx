'use client'
import { Flex, Box, Text, useColorModeValue, Link, Menu, MenuButton, MenuList, MenuItem, Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="start"
      wrap="wrap"
      padding="1.5rem"
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
    >
      {/* Logo i link do strony głównej (użyj odpowiedniego linku dla Twojej aplikacji) */}
      <Box mr={10}> {/* Zwiększony odstęp od loga */}
  <Link href="/" _hover={{ textDecoration: 'none' }}>
    <Image src="/logo.svg" alt="NaszDrob" />
  </Link>
</Box>


      {/* Box dla każdej sekcji z opcjami wyboru podstron, oddzielone od siebie */}
      <Menu>
        <MenuButton as={Text} mr={4} cursor="pointer" _hover={{ textDecoration: 'underline' }} onMouseEnter={(event) => openMenu(event)}>
          Firma <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} href="/o-nas">O nas</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Link} mr={4} href="/produkty" >{''}
          Produkty
        </MenuButton>
      </Menu>

      <Menu>
        <MenuButton as={Text} mr={4} cursor="pointer" _hover={{ textDecoration: 'underline' }} onMouseEnter={(event) => openMenu(event)}>
          Informacje <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} href="/haccp">System HACCP</MenuItem>
          <MenuItem as={Link} href="/certyfikaty">Certyfikaty</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Link} mr={4} href="/kontakt">{''}
          Kontakt
        </MenuButton>
      </Menu>
    </Flex>
  );
}

function openMenu(event: React.MouseEvent) {
  let menuList = (event.target as HTMLElement).parentNode?.querySelector('ul');
  if (menuList) {
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
  }
}
