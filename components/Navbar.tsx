"use client"
import React from 'react';
import {
  Flex, Box, Text, Link, Menu, MenuButton, MenuList, MenuItem,
  useDisclosure, Collapse, IconButton, useColorModeValue
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navItemBg = useColorModeValue('rgba(255, 255, 255, 0.6)', 'rgba(23, 25, 35, 0.6)');
  const navItemBgHover = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(23, 25, 35, 0.8)');

  const menuItemStyle = {
    mr: 4,
    padding: '0.5rem',
    borderRadius: 'lg',
    boxShadow: 'md',
    bg: navItemBg,
    color: 'black',
    fontWeight: 'bold',
    _hover: {
      bg: navItemBgHover,
    },
  };

  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify={{ base: 'center', md: 'start' }}
        wrap="wrap"
        padding="1.5rem"
        bg="transparent"
        color="black"
        position="absolute"
        width="100%"
        zIndex="10"
      >
        <Box {...menuItemStyle}>
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            <Text fontSize="2xl" fontWeight="bold">
              NaszDrób
            </Text>
          </Link>
        </Box>

        <Flex display={{ base: 'none', md: 'flex' }} flexGrow={1} align="center">
          <MenuItems menuItemStyle={menuItemStyle} />
        </Flex>

        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          aria-label="Toggle Navigation"
          size="lg"
        />

        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: 'none' }} width="100%">
            <MenuItems menuItemStyle={menuItemStyle} />
          </Box>
        </Collapse>
      </Flex>
    </Box>
  );
}

function MenuItems({ menuItemStyle }: MenuItemsProps) {
  return (
    <>
      <Menu>
        <MenuButton as={Link} href="#" style={menuItemStyle}>
          Firma <ChevronDownIcon />
        </MenuButton>
        <MenuList style={menuItemStyle}>
          <MenuItem as={Link} href="/o-nas" _hover={menuItemStyle._hover}>
            O nas
          </MenuItem>
        </MenuList>
      </Menu>

      <Box as={Link} href="/produkty" style={menuItemStyle}>
        Produkty
      </Box>

      <Menu>
        <MenuButton as={Link} href="#" style={menuItemStyle}>
          Informacje <ChevronDownIcon />
        </MenuButton>
        <MenuList style={menuItemStyle}>
          <MenuItem as={Link} href="/haccp" _hover={menuItemStyle._hover}>
            System HACCP
          </MenuItem>
          <MenuItem as={Link} href="/certyfikaty" _hover={menuItemStyle._hover}>
            Certyfikaty
          </MenuItem>
        </MenuList>
      </Menu>

      <Box as={Link} href="/kontakt" style={menuItemStyle}>
        Kontakt
      </Box>
    </>
  );
}

interface MenuItemsProps {
  menuItemStyle: {
    mr: number;
    padding: string;
    borderRadius: string;
    boxShadow: string;
    bg: string;
    color: string;
    fontWeight: string;
    _hover: {
      bg: string;
    };
  };
}
