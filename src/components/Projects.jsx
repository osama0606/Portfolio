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
    title: 'E-commerce Web App',
    desc: 'A full-stack MERN E-commerce application with product listing, authentication, cart, wishlist, and secure online payment integration.',
    image: '/e-commerce.png',
    demo: 'https://e-commerce-project-liart-rho.vercel.app/',
    code: 'https://github.com/osama0606/E-Commerce-Project',
  },
  {
    title: 'Lenskart Clone',
    desc: 'A responsive frontend clone of Lenskart.com built with React and Chakra UI, showcasing product listings and modern UI design.',
    image: '/lenskart-clone.png',
    demo: 'https://lenskart-clone-theta.vercel.app/',
    code: 'https://github.com/masai-course/osama_khan__cap05_235/tree/master/FEDC-2504/lenskart-clone',
  },
  {
    title: 'Admin Panel',
    desc: 'A full-stack MERN Admin Panel with authentication, product management, and image uploads built using React, Node, Express and MongoDB.',
    image: '/admin-panel.png',
    demo: 'https://admin-panel-liart-xi.vercel.app/',
    code: 'https://github.com/masai-course/osama_khan__cap05_235/tree/master/Backend-Development/Mern-Project',
  },
];

const Projects = () => {

  const bg = useColorModeValue('purple.50', 'black');
  const cardBg = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  const borderColor = useColorModeValue('purple.100', 'gold');

  const titleColor = useColorModeValue('purple.500', 'gold');

  const buttonBg = useColorModeValue('purple.500', 'gold');
  const buttonHover = useColorModeValue('purple.600', 'yellow.400');
  const buttonText = useColorModeValue('white', 'black');

  const outlineColor = useColorModeValue('purple.400', 'gold');

  return (
    <Box id="projects" py={20} px={6} bg={bg}>

      <Heading
        textAlign="center"
        mb={12}
        color={titleColor}
        fontSize={{ base: '2xl', md: '3xl' }}
      >
        My Projects
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        maxW="1200px"
        mx="auto"
      >
        {projectList.map((proj, i) => (

          <Card
            key={i}
            bg={cardBg}
            border="1px solid"
            borderColor={borderColor}
            overflow="hidden"
            transition="0.3s"
            _hover={{
              transform: 'translateY(-8px)',
              boxShadow: 'xl',
            }}
          >

            <Box overflow="hidden">
              <Image
                src={proj.image}
                alt={proj.title}
                height="200px"
                width="100%"
                objectFit="cover"
                transition="0.4s"
                _hover={{ transform: 'scale(1.08)' }}
              />
            </Box>

            <CardBody>

              <Heading
                size="md"
                mb={3}
                color={titleColor}
              >
                {proj.title}
              </Heading>

              <Text color={textColor} fontSize="sm">
                {proj.desc}
              </Text>

            </CardBody>

            <CardFooter>
              <Stack direction="row" spacing={4}>

                <Button
                  as="a"
                  href={proj.demo}
                  target="_blank"
                  bg={buttonBg}
                  color={buttonText}
                  _hover={{ bg: buttonHover }}
                >
                  Live Demo
                </Button>

                <Button
                  as="a"
                  href={proj.code}
                  target="_blank"
                  variant="outline"
                  borderColor={outlineColor}
                  color={outlineColor}
                  _hover={{
                    bg: useColorModeValue('purple.50', 'gray.800')
                  }}
                >
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