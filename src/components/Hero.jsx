import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Icon,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {

  const bg = useColorModeValue('purple.50', 'black');

  const headingColor = useColorModeValue('gray.800', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  const imageBorder = useColorModeValue('purple.500', 'gold');

  const buttonBg = useColorModeValue('purple.600', 'gold');
  const buttonHover = useColorModeValue('purple.700', 'yellow.400');
  const buttonText = useColorModeValue('white', 'black');

  return (
    <Box
      id="hero"
      textAlign="center"
      py={{ base: 24, md: 36 }}
      px={6}
      bg={bg}
    >
      <Stack spacing={8} align="center">

        {/* Profile Image */}
        <Image
          src="/profile.png"
          alt="Osama Khan"
          boxSize={{ base: "140px", md: "180px" }}
          borderRadius="full"
          objectFit="cover"
          border="4px solid"
          borderColor={imageBorder}
          boxShadow="lg"
        />

        <Heading
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight="bold"
          color={headingColor}
        >
          Hi, I'm Osama Khan 👋
        </Heading>

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          maxW="650px"
          color={textColor}
        >
          I’m a MERN Stack Developer focused on building responsive,
          scalable, and user-friendly web applications.
          I specialize in React, Node.js, Express, and MongoDB —
          turning ideas into functional digital products.
        </Text>

        <Stack
          direction={{ base: 'column', sm: 'row' }}
          spacing={5}
          pt={4}
        >

          <Button
            as="a"
            href="#projects"
            size="lg"
            bg={buttonBg}
            color={buttonText}
            _hover={{
              bg: buttonHover,
              transform: 'translateY(-2px)',
              boxShadow: 'lg'
            }}
          >
            View Projects
          </Button>

          <Button
            leftIcon={<Icon as={FaDownload} />}
            size="lg"
            bg={buttonBg}
            color={buttonText}
            as="a"
            href="/Osama Khan Resume.pdf"
            download
            _hover={{
              bg: buttonHover,
              transform: 'translateY(-2px)',
              boxShadow: 'lg'
            }}
          >
            Download Resume
          </Button>

        </Stack>

      </Stack>
    </Box>
  );
};

export default Hero;