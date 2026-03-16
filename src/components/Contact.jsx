import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Icon,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';

import { SiGmail, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {

  const bg = useColorModeValue('purple.50', 'black');
  const cardBg = useColorModeValue('white', 'gray.900');

  const text = useColorModeValue('gray.600', 'gray.300');

  const borderColor = useColorModeValue('purple.100', 'gold');

  const titleColor = useColorModeValue('purple.500', 'gold');

  const buttonBg = useColorModeValue('purple.500', 'gold');
  const buttonHover = useColorModeValue('purple.600', 'yellow.400');
  const buttonText = useColorModeValue('white', 'black');

  return (
    <Box id="contact" py={20} px={6} bg={bg}>

      <VStack spacing={6} maxW="600px" mx="auto">

        <Heading
          textAlign="center"
          color={titleColor}
          fontSize={{ base: '2xl', md: '3xl' }}
        >
          Contact Me
        </Heading>

        <Text
          textAlign="center"
          fontSize="md"
          color={text}
        >
          Want to work together or just say hello?
          Feel free to reach out through any platform below.
        </Text>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          bg={cardBg}
          p={6}
          borderRadius="lg"
          border="1px solid"
          borderColor={borderColor}
          boxShadow="md"
        >

          <Button
            leftIcon={<Icon as={SiGmail} />}
            bg={buttonBg}
            color={buttonText}
            _hover={{
              bg: buttonHover,
              transform: 'translateY(-2px)',
              boxShadow: 'lg'
            }}
            as="a"
            href="mailto:osama060699@gmail.com"
          >
            Email
          </Button>

          <Button
            leftIcon={<Icon as={SiGithub} />}
            bg={buttonBg}
            color={buttonText}
            _hover={{
              bg: buttonHover,
              transform: 'translateY(-2px)',
              boxShadow: 'lg'
            }}
            as="a"
            href="https://github.com/osama0606"
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            leftIcon={<Icon as={FaLinkedin} />}
            bg={buttonBg}
            color={buttonText}
            _hover={{
              bg: buttonHover,
              transform: 'translateY(-2px)',
              boxShadow: 'lg'
            }}
            as="a"
            href="https://www.linkedin.com/in/osama-khan-547960276/"
            target="_blank"
          >
            LinkedIn
          </Button>

        </Stack>

      </VStack>

    </Box>
  );
};

export default Contact;