import React from 'react';
import { Box, Typography, Link, Paper, Grid } from '@mui/material';
import Image from 'next/image';

interface CarouselItem {
  title: string;
  link: string;
  image?: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Box maxHeight={300} overflow="hidden" sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid key={index} item xs={12}>
            <Typography variant="h5" sx={{ mt: 2 }}>
                <Link href={item.link}>{item.title}</Link>
            </Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
              {item.image && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Image src={item.image} alt={item.title} width={100} height={90}/>
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Carousel;
