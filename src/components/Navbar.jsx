import {
  Box,
  Flex,
  Image,
  Link,
  Stack,
  IconButton,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const sections = ['About', 'Projects', 'Skills', 'Contact'];

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [active, setActive] = useState('');

  const bg = useColorModeValue('white', 'black');

  const shadow = useColorModeValue(
    '0 2px 10px rgba(0,0,0,0.1)',
    '0 2px 15px rgba(255,215,0,0.25)'
  );

  const logoColor = useColorModeValue('purple.500', 'gold');
  const logoBorder = useColorModeValue('purple.400', 'gold');

  const buttonBg = useColorModeValue('purple.500', 'gold');
  const buttonHover = useColorModeValue('purple.600', 'yellow.400');
  const buttonText = useColorModeValue('white', 'black');

  const activeBg = useColorModeValue('purple.700', 'yellow.300');
  const iconColor = useColorModeValue('purple.500', 'gold');

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((sec) => {
        const element = document.getElementById(sec.toLowerCase());
        if (element) {
          const position = element.offsetTop - 120;
          if (window.scrollY >= position) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll
  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }

    onClose();
  };

  return (
    <Box
      as="nav"
      bg={bg}
      px={{ base: 4, md: 10 }}
      py={4}
      boxShadow={shadow}
      position="sticky"
      top="0"
      zIndex="1000"
    >

      <Flex justify="space-between" align="center">

        {/* Logo */}

        <Flex
          align="center"
          gap={3}
          cursor="pointer"
          onClick={() => handleScroll('hero')}
        >
          <Image
            src="/profile.png"
            alt="Osama Logo"
            boxSize="48px"
            borderRadius="full"
            border="2px solid"
            borderColor={logoBorder}
          />

          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="bold"
            color={logoColor}
          >
            Osama Khan
          </Text>

        </Flex>

        {/* Desktop Menu */}

        <Stack
          direction="row"
          spacing={5}
          align="center"
          display={{ base: 'none', md: 'flex' }}
        >

          {sections.map((item) => (

            <Button
              key={item}
              size="sm"
              bg={active === item ? activeBg : buttonBg}
              color={buttonText}
              onClick={() => handleScroll(item.toLowerCase())}
              _hover={{
                bg: buttonHover,
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="0.2s"
            >
              {item}
            </Button>

          ))}

          <IconButton
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            aria-label="Toggle Theme"
            variant="ghost"
            color={iconColor}
          />

        </Stack>


        {/* Mobile Menu Button */}

        <IconButton
          icon={<FaBars />}
          onClick={onOpen}
          display={{ base: 'flex', md: 'none' }}
          aria-label="Menu"
          variant="ghost"
        />

      </Flex>


      {/* Mobile Drawer */}

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent bg={bg}>

          <DrawerCloseButton />

          <DrawerBody mt={10}>

            <Stack spacing={6}>

              {sections.map((item) => (

                <Button
                  key={item}
                  bg={buttonBg}
                  color={buttonText}
                  onClick={() => handleScroll(item.toLowerCase())}
                  _hover={{ bg: buttonHover }}
                >
                  {item}
                </Button>

              ))}

              <Button
                onClick={toggleColorMode}
                leftIcon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              >
                Toggle Theme
              </Button>

            </Stack>

          </DrawerBody>

        </DrawerContent>

      </Drawer>

    </Box>
  );
};

export default Navbar;