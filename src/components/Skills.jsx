import {
  Box,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiChakraui,
  SiGithub,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Chakra UI', icon: SiChakraui },
  { name: 'GitHub', icon: SiGithub },
];

const Skills = () => {

  const bg = useColorModeValue('purple.50', 'black');
  const cardBg = useColorModeValue('white', 'gray.900');

  const textColor = useColorModeValue('gray.700', 'gray.300');
  const borderColor = useColorModeValue('purple.100', 'gold');

  const titleColor = useColorModeValue('purple.500', 'gold');
  const iconColor = useColorModeValue('purple.500', 'gold');

  return (
    <Box id="skills" py={20} px={6} bg={bg}>
      
      <Heading
        textAlign="center"
        mb={12}
        color={titleColor}
        fontSize={{ base: '2xl', md: '3xl' }}
      >
        My Skills
      </Heading>

      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 4 }}
        spacing={8}
        maxW="900px"
        mx="auto"
      >
        {skills.map((skill, i) => (
          <VStack
            key={i}
            bg={cardBg}
            p={6}
            borderRadius="lg"
            border="1px solid"
            borderColor={borderColor}
            spacing={4}
            transition="0.3s"
            _hover={{
              transform: 'translateY(-6px)',
              boxShadow: 'lg',
            }}
          >

            <Icon
              as={skill.icon}
              boxSize={10}
              color={iconColor}
            />

            <Text
              fontWeight="medium"
              color={textColor}
              fontSize="sm"
            >
              {skill.name}
            </Text>

          </VStack>
        ))}
      </SimpleGrid>

    </Box>
  );
};

export default Skills;