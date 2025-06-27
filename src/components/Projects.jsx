import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Stack,
  Image,
  Card,
  CardBody,
  CardFooter,
  useColorModeValue,
} from '@chakra-ui/react';

const projectList = [
  {
    title: 'Lenskart Clone',
    desc: 'A responsive frontend clone of Lenskart.com built with React and Chakra UI, showcasing product listings, navigation, and UI design.',
    image: '/lenskart-clone.png', // ✅ updated path from public folder
    demo: 'https://lenskart-clone-theta.vercel.app/',
    code: 'https://github.com/masai-course/osama_khan__cap05_235/tree/master/FEDC-2504/lenskart-clone',
  },
  {
    title: 'Admin Panel',
    desc: 'A full-stack MERN Admin Panel project with authentication, product management, and image uploads, built using React, Node.js, Express, MongoDB, and Chakra UI.',
    image: '/admin-panel.png', // ✅ updated path from public folder
    demo: 'https://admin-panel-liart-xi.vercel.app/',
    code: 'https://github.com/masai-course/osama_khan__cap05_235/tree/master/Backend-Development/Mern-Project',
  }
];

const Projects = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box id="projects" py={20} px={6} bg={bg}>
      <Heading textAlign="center" mb={10} color="teal.400">Projects</Heading>
      <SimpleGrid columns={[1, 1, 2]} spacing={8} maxW="1000px" mx="auto">
        {projectList.map((proj, i) => (
          <Card
            key={i}
            bg={cardBg}
            overflow="hidden"
            border="1px solid"
            borderColor={useColorModeValue('gray.200', 'gray.600')}
            _hover={{ transform: 'scale(1.02)', transition: '0.3s ease' }}
          >
            <Image src={proj.image} alt={proj.title} height="200px" objectFit="cover" />
            <CardBody>
              <Heading size="md" mb={2} color="teal.500">{proj.title}</Heading>
              <Text mb={4} color={textColor}>{proj.desc}</Text>
            </CardBody>
            <CardFooter>
              <Stack direction="row" spacing={4}>
                <Button as="a" href={proj.demo} colorScheme="teal" target="_blank">
                  Live Demo
                </Button>
                <Button as="a" href={proj.code} variant="outline" target="_blank">
                  Source Code
                </Button>
              </Stack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
