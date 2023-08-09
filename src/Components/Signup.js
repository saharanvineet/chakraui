import React from 'react'
import { Container, Heading, Input, VStack , Button ,Text, Avatar} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
    <form>
    <VStack alignItems={'stretch'} spacing={'8'} w={["full",'96']} m={'auto'} my={'16'}>
       <Heading textTransform={'uppercase'}  borderBottom={'2px solid'} w={"fit-content"}  mx="auto">video hub</Heading>
       <Avatar alignSelf={"center"} boxSize={'32'}/>
       <Input type={"text"} placeholder={'Name'} required focusBorderColor='purple.500' />   
    <Input type={"email"} placeholder={'Email'} required focusBorderColor='purple.500' />
    <Input type={"password"} placeholder={'Password'} required focusBorderColor='purple.500' />
    
   
    <Button colorScheme={'purple'} type='submit'>
    Sinup
    </Button>

    <Text textAlign={"right"}  >
    Already signed up?{'  '} 
    <Button colorScheme={'purple'} variant={"link"}>
    <Link to={'/login'}>Login</Link>
    </Button>
    
    </Text>
    </VStack>
    </form>
</Container>
  )
}

export default Signup
