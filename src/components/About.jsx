import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';

const About = () => {

  const bg = useColorModeValue('purple.50', 'black');
  const cardBg = useColorModeValue('white', 'gray.900');

  const text = useColorModeValue('gray.600', 'gray.300');

  const borderColor = useColorModeValue('purple.100', 'gold');

  const titleColor = useColorModeValue('purple.500', 'gold');

  const highlight = useColorModeValue('purple.600', 'gold');

  return (
    <Box id="about" py={20} px={6} bg={bg}>

      <Heading
        textAlign="center"
        mb={10}
        color={titleColor}
        fontSize={{ base: '2xl', md: '3xl' }}
      >
        About Me
      </Heading>

      <Box
        maxW="900px"
        mx="auto"
        bg={cardBg}
        p={8}
        borderRadius="lg"
        border="1px solid"
        borderColor={borderColor}
        boxShadow="md"
        transition="0.3s"
        _hover={{
          transform: 'translateY(-5px)',
          boxShadow: 'xl'
        }}
      >

        <Stack spacing={5} textAlign="center">

          <Text fontSize="lg" color={text}>
            I’m <Text as="span" fontWeight="bold" color={highlight}>Osama Khan</Text>, a passionate and detail-oriented
            <Text as="span" fontWeight="bold" color={highlight}> MERN Stack Developer</Text> with a strong foundation in
            building scalable and responsive full-stack web applications.
          </Text>

          <Text fontSize="lg" color={text}>
            I specialize in <Text as="span" fontWeight="bold" color={highlight}>React.js</Text> for dynamic front-end
            experiences and <Text as="span" fontWeight="bold" color={highlight}>Node.js, Express, MongoDB</Text> for
            powerful and efficient backend systems.
          </Text>

          <Text fontSize="lg" color={text}>
            My focus is on building clean UI, reusable components,
            API integrations, and continuously improving my development skills
            to deliver real-world solutions.
          </Text>

        </Stack>

      </Box>

    </Box>
  );
};

export default About;