import { Box, Heading, Text, Stack, Button, Icon, useColorModeValue } from '@chakra-ui/react';
import { SiGmail, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const text = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box id="contact" py={20} px={6} bg={bg}>
      <Heading textAlign="center" mb={6} color="teal.400">
        Contact Me
      </Heading>
      <Text textAlign="center" mb={8} fontSize="lg" color={text}>
        Want to work together or just say hello? Feel free to reach out.
      </Text>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify="center"
        align="center"
      >
        <Button
          leftIcon={<Icon as={SiGmail} color="white" boxSize={5} />}
          colorScheme="teal"
          variant="solid"
          size="md"
          px={6}
          as="a"
          href="mailto:osama060699@gmail.com"
        >
          Email
        </Button>

        <Button
          leftIcon={<Icon as={SiGithub} color="white" boxSize={5} />}
          colorScheme="teal"
          variant="solid"
          size="md"
          px={6}
          as="a"
          href="https://github.com/osama0606"
          target="_blank"
        >
          GitHub
        </Button>

        <Button
          leftIcon={<Icon as={FaLinkedin} color="white" boxSize={5} />}
          colorScheme="teal"
          variant="solid"
          size="md"
          px={6}
          as="a"
          href="https://www.linkedin.com/in/osama-khan-547960276/"
          target="_blank"
        >
          LinkedIn
        </Button>
      </Stack>
    </Box>
  );
};

export default Contact;
