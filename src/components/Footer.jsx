import {
  Box,
  Text,
  HStack,
  Icon,
  Link,
  useColorModeValue
} from '@chakra-ui/react';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  // Background colors
  const bg = useColorModeValue('purple.600', 'black');
  const textColor = useColorModeValue('white', 'gray.300');

  // Icon colors
  const iconColor = useColorModeValue('white', 'white');
  const iconHover = useColorModeValue('teal.200', 'gold');

  return (
    <Box
      bg={bg}
      color={textColor}
      py={8}
      textAlign="center"
      mt={20}
      boxShadow={useColorModeValue('0px -2px 8px rgba(0,0,0,0.1)', '0px -2px 12px rgba(255,215,0,0.2)')}
    >
      {/* Social Icons */}
      <HStack spacing={6} justify="center" mb={4}>
        <Link href="https://github.com/osama0606" target="_blank">
          <Icon
            as={FaGithub}
            boxSize={6}
            color={iconColor}
            _hover={{ color: iconHover, transform: 'scale(1.2)' }}
            transition="0.3s"
          />
        </Link>

        <Link href="https://www.linkedin.com/in/osama-khan-547960276/" target="_blank">
          <Icon
            as={FaLinkedin}
            boxSize={6}
            color={iconColor}
            _hover={{ color: iconHover, transform: 'scale(1.2)' }}
            transition="0.3s"
          />
        </Link>

        <Link href="mailto:osama060699@gmail.com">
          <Icon
            as={FaEnvelope}
            boxSize={6}
            color={iconColor}
            _hover={{ color: iconHover, transform: 'scale(1.2)' }}
            transition="0.3s"
          />
        </Link>
      </HStack>

      {/* Copyright */}
      <Text fontSize="sm" opacity={0.8}>
        © {new Date().getFullYear()} Osama Khan. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;