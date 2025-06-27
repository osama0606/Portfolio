import { Box, Heading, Text, Stack, useColorModeValue } from '@chakra-ui/react';

const About = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const text = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box id="about" py={20} px={6} bg={bg}>
      <Heading textAlign="center" mb={6} color="teal.400">
        About Me
      </Heading>
      <Stack spacing={4} maxW="800px" mx="auto" textAlign="center">
        <Text fontSize="lg" color={text}>
          I’m Osama Khan, a dedicated and detail-oriented <strong>MERN Stack Developer</strong> with a strong foundation in building scalable and responsive full-stack web applications.
        </Text>
        <Text fontSize="lg" color={text}>
          I specialize in <strong>React.js</strong> for dynamic front-end experiences, and <strong>Node.js, Express, and MongoDB</strong> for powerful and efficient back-end systems. I love turning ideas into working software that delivers real value.
        </Text>
        <Text fontSize="lg" color={text}>
          My focus is on clean UI/UX, reusable components, API integration, and continuous improvement. I'm always eager to learn new technologies and contribute to impactful projects.
        </Text>
      </Stack>
    </Box>
  );
};

export default About;
