import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react';
import type { NextPage } from 'next';

const IndexPage: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" p={12} rounded={6} background={formBackground}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder="john.doe@gmail.com" variant="filled" mb={3} type="email"/>
        <Input placeholder="********" variant="filled" mb={6} type="password"/>
        <Button colorScheme="teal" mb={3}>Log in</Button>
        <Button onClick={toggleColorMode}>Toggle Color mode</Button>
      </Flex>
    </Flex>
  )
}

export default IndexPage
