import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const bg = useColorModeValue('teal.500', 'teal.600');
  const color = useColorModeValue('white', 'white');

  return (
    <Box
      bg={bg}
      color={color}
      py={6}
      textAlign="center"
      boxShadow="0px -2px 20px rgba(0, 0, 0, 0.2)"
    >
      <Text fontSize="sm" mb={1}>
        &copy; {new Date().getFullYear()} Osama Khan. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
