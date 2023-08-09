import { Box, Img, Image, Heading, Container, Stack,Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assests/1.jpg';
import img2 from '../Assests/2.jpg';
import img3 from '../Assests/3 (1).jpg';
import img4 from '../Assests/4 (1).jpg';
import img5 from '../Assests/5.png';

const Home = () => {
  return (
    <Box>
      <MyCarousal />

      <Container minH={'100vh'} maxW={'container.xl'} p={16}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          margin={'auto'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>

        <Stack h={"full"} p={"4"} alignItems={"center"} direction={['column','row']}>
            <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}></Image>
            <Text letterSpacing={"widest"} lineHeight={"190%"} p={[4,16]} textAlign={"center"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolor quasi ullam voluptatibus perferendis molestiae minus voluptates eveniet! Optio obcaecati perferendis nam veniam incidunt voluptas expedita, assumenda beatae, atque dicta natus. Nobis perspiciatis sequi doloremque voluptatum vero veritatis atque reiciendis aut nemo pariatur obcaecati odit labore consequatur repellat, unde rem! Quod rerum fugiat ab, deserunt placeat dolores nisi asperiores iste maiores sit fuga veniam officia dolorum assumenda quas porro! Earum iure amet excepturi, sapiente accusamus repellat, molestias corrupti eligendi dolores sed numquam pariatur. Ab reiciendis, ducimus officia architecto dolorum quisquam magni amet temporibus recusandae! Accusantium, soluta? Eaque, id. Tenetur nisi in velit amet?</Text>
        </Stack>

      </Container>
    </Box>
  );
};

const headerOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousal = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Img src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headerOptions}>
          Watch the Future
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Img src={img2} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headerOptions}>
          Future is gaming
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Img src={img3} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headerOptions}>
          Gaming in console
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Img src={img4} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headerOptions}>
          Night life is cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
