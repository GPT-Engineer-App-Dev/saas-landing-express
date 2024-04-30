import { Box, Flex, Text, Button, VStack, Heading, Container, Spacer } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="gray.100" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">GPT Engineer</Heading>
        <Button colorScheme="blue">Sign In</Button>
      </Flex>
      <Container maxW="container.xl" centerContent>
        <VStack spacing={10} py={20}>
          <Heading as="h1" size="2xl" textAlign="center">
            Revolutionize Your Development with GPT Engineer
          </Heading>
          <Text fontSize="xl" textAlign="center">
            The ultimate tool for building and improving web applications with the power of AI.
          </Text>
          <Button colorScheme="blue" size="lg">Get Started</Button>
        </VStack>
      </Container>
      <Box bg="gray.50" py={10}>
        <VStack spacing={8}>
          <Heading as="h2" size="xl">Features</Heading>
          <Flex direction={{ base: "column", md: "row" }} justify="center" align="center">
            <Box p={5} shadow="md" borderWidth="1px" flex="1" textAlign="center">
              <FaStar />
              <Heading fontSize="xl">Feature 1</Heading>
              <Text mt={4}>Description of feature 1</Text>
            </Box>
            <Spacer />
            <Box p={5} shadow="md" borderWidth="1px" flex="1" textAlign="center">
              <FaStar />
              <Heading fontSize="xl">Feature 2</Heading>
              <Text mt={4}>Description of feature 2</Text>
            </Box>
            <Spacer />
            <Box p={5} shadow="md" borderWidth="1px" flex="1" textAlign="center">
              <FaStar />
              <Heading fontSize="xl">Feature 3</Heading>
              <Text mt={4}>Description of feature 3</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
      <Box py={10}>
        <VStack spacing={8}>
          <Heading as="h2" size="xl">Testimonials</Heading>
          <Box p={5} shadow="md" borderWidth="1px">
            <Text>"Using GPT Engineer has transformed our development process! Highly recommend!"</Text>
            <Text mt={4} fontStyle="italic">- Jane Doe, CTO at Tech Innovations</Text>
          </Box>
        </VStack>
      </Box>
      <Flex as="footer" bg="gray.200" p={4} justifyContent="center">
        <Text>© 2023 GPT Engineer. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;