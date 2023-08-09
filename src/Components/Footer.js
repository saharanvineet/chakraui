import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Stack,
  VStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w="full" px={'4'}>
          <Heading size="md" textTransform={'uppercase'} textAlign={["center","left"]}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid'} padding={'2'}>
            <Input
              placeholder="Enter email here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}>
        <Heading textTransform={"uppercase"}>
        video hub
        </Heading>
        <Text>All rights received</Text>
        </VStack>

        <VStack w={'full'}>
 
         <Heading size={"md"} textTransform={"uppercase"}  >
          social media
         </Heading>
         <Button variant={"link"} colorScheme={'white'}>
            
         <a href="https://www.instagram.com/vineet.saharan.96/">Instagram</a>
         </Button>
         
         <Button variant={"link"} colorScheme={'white'}>
         <a href="https://github.com/saharanvineet">Github</a>
         </Button>
         
         <Button variant={"link"} colorScheme={'white'}>
         <a href="https://www.linkedin.com/in/vineet-saharan-767a08225/">Linkedin</a>
         </Button>
         
         
         
        </VStack>

      </Stack>
    </Box>
  );
};

export default Footer;
