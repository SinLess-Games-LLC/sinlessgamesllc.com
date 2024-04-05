import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const HomeCard: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: '0.5rem solid #daa520',
        borderRadius: 10,
        padding: 4,
      }}
    >
        <Typography
            variant="h4"
            sx={{
            textAlign: 'center',
            color: '#daa520',
            }}
        >
            {title}
      </Typography>
      <br/>
      <Grid container spacing={2} direction="row">
        <Grid item sx={{ maxWidth: "50%"}}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image src={image} alt={title} width={500} height={400} />
          </Box>
        </Grid>
        <Grid item sx={{ maxWidth: "50%"}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography
              variant="body1"
              sx={{
                mt: 1,
                textAlign: 'center',
                color: '#daa520',
                fontSize: '1.5rem',
              }}
            >
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeCard;
