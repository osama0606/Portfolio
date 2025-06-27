import { Box, Heading, SimpleGrid, Icon, Text, VStack, useColorModeValue } from '@chakra-ui/react';
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
  const bg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box id="skills" py={20} px={6} bg={bg}>
      <Heading textAlign="center" mb={10} color="teal.400">Skills</Heading>
      <SimpleGrid columns={[2, 3, 4]} spacing={10} maxW="800px" mx="auto">
        {skills.map((skill, i) => (
          <VStack key={i}>
            <Icon as={skill.icon} boxSize={12} color="teal.500" />
            <Text fontWeight="medium" color={textColor}>{skill.name}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
