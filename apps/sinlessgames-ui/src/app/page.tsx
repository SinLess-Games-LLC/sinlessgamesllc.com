'use client'
import HomeCard from '../components/Home/card'
import Box from '@mui/material/Box'
import ColoredLine from '../components/ColoredLine'
import { CarouselItems } from '../variables/Home/carousel'
import Carousel from '../components/carousel'

const IntroCard = {
  title: 'Welcome to SinLess Games!',
  description: `SinLess Games is a game development studio that creates highly
    immersive games with well-thought-out storylines and great graphics.
    Founded in February 2018 by Timothy A. Pierce, SinLess Games strives
    to change the gaming industry's focus from profit to immersive
    experiences. They offer services, including game design, development,
    testing, hosting, modding, and custom gaming PC builds. SinLess Games
    also runs a Minecraft server called Mobius Infernium, offering a
    unique and immersive gameplay experience. Join them on a journey where
    game immersion ranks supreme and dreams come true!`,
  image: '/images/3.png'
}

export default function Index() {
  return (
    <Box
      sx={{
        padding: 4
      }}
    >
      <br />
      <br />
      <HomeCard
        title={IntroCard.title}
        description={IntroCard.description}
        image={IntroCard.image}
      />
      <ColoredLine color="#DAA520" />
      <Carousel items={CarouselItems} />
    </Box>
  )
}
