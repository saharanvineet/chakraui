import { Container, Heading, Input, VStack , Button ,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
          <form>
          <VStack alignItems={'stretch'} spacing={'8'} w={["full",'96']} m={'auto'} my={'16'}>
             <Heading>Welcome Back</Heading>
          <Input type={"email"} placeholder={'Email'} required focusBorderColor='purple.500' />
          <Input type={"password"} placeholder={'Password'} required focusBorderColor='purple.500' />
          
          <Button variant={"link"} alignSelf={"flex-end"} >
          <Link to={'/forgotpassword'}>Forgot Password</Link>
          </Button>

          <Button colorScheme={'purple'} type='submit'>
          Login
          </Button>

          <Text textAlign={"right"}  >
          New User?{'  '} 
          <Button colorScheme={'purple'} variant={"link"}>
          <Link to={'/signup'}>Signup</Link>
          </Button>
          
          </Text>
          </VStack>
          </form>
    </Container>
  )
}

export default Login
