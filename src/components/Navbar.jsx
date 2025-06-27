import {
  Box,
  Flex,
  Image,
  Link,
  Stack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('white', 'gray.900');
  const color = useColorModeValue('gray.800', 'whiteAlpha.900');
  const hoverColor = useColorModeValue('teal.500', 'teal.300');

  return (
    <Box
      as="nav"
      bg={bg}
      color={color}
      px={{ base: 4, md: 8 }}
      py={4}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center">
        {/* ✅ Logo + Clickable Name */}
        <Link href="#hero" _hover={{ textDecoration: 'none' }}>
          <Flex align="center" gap={3}>
            <Image
              src="/Osama-Khan-Logo.png" // ✅ Direct path from public folder
              alt="Osama Logo"
              boxSize="48px"
              borderRadius="full"
              border="2px solid teal"
            />
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight="bold"
              color="teal.400"
              _hover={{ color: hoverColor }}
              transition="0.2s"
            >
              Osama Khan
            </Text>
          </Flex>
        </Link>

        {/* ✅ Nav Links + Toggle Button */}
        <Stack direction="row" spacing={{ base: 3, md: 6 }} align="center">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              fontWeight="medium"
              fontSize={{ base: 'sm', md: 'md' }}
              _hover={{ color: hoverColor }}
              transition="0.2s"
            >
              {item}
            </Link>
          ))}

          <IconButton
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            aria-label="Toggle Theme"
            variant="ghost"
            colorScheme="teal"
            size="md"
          />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
