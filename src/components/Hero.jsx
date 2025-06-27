import { Box, Heading, Text, Button, Stack, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, teal.400, teal.600)',
    'linear(to-br, teal.600, teal.800)'
  );
  const textColor = useColorModeValue('white', 'whiteAlpha.900');

  return (
    <Box
      id="hero"
      textAlign="center"
      py={{ base: 20, md: 32 }}
      px={6}
      bgGradient={bgGradient}
      color={textColor}
    >
      <Stack spacing={6}>
        <Heading size="2xl">Hi, I'm Osama Khan 👋</Heading>
        <Text fontSize="xl" maxW="600px" mx="auto">
          I’m a MERN Stack Developer focused on building responsive, scalable, and user-friendly web applications.
          I specialize in React, Node.js, Express, and MongoDB — turning ideas into functional products.
        </Text>

        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
          <Button
            as="a"
            href="#projects"
            bg="white"
            color="teal.600"
            _hover={{ bg: 'gray.100' }}
            size="md"
          >
            View Projects
          </Button>

          <Button
            leftIcon={<Icon as={FaDownload} color="teal.600" boxSize={4} />}
            bg="white"
            color="teal.600"
            _hover={{ bg: 'gray.100' }}
            size="md"
            as="a"
            href="/Osama-Resume.pdf"
            download
          >
            Download Resume
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
