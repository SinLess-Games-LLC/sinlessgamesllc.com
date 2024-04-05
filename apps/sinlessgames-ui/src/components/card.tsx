import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  title: string
  description: string
  image?: string
  link?: string
  sx?: React.CSSProperties
}

const Card: React.FC<CardProps> = ({ title, description, image, link, sx }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: '0.5rem solid #daa520',
        borderRadius: 10,
        padding: 4,
        ...(sx || {}) // Merge with any additional styles passed in via `sx`
      }}
    >
      <Typography
        variant="h2"
        sx={{ mt: 2, textAlign: 'center', color: '#daa520' }}
      >
        {title}
      </Typography>
      {image && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Image src={image} alt={title} width={500} height={400} />
        </Box>
      )}
      <br />
      <Typography
        variant="body1"
        sx={{ mt: 1, textAlign: 'center', color: '#daa520' }}
      >
        {description}
      </Typography>
      {link && (
        <Box sx={{ mt: 2 }}>
          {link.startsWith('/') ? (
            <Link href={link} passHref>
              <Button component="a" variant="contained" color="primary">
                Read more
              </Button>
            </Link>
          ) : (
            <Button
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
            >
              Read more
            </Button>
          )}
        </Box>
      )}
    </Box>
  )
}

export default Card
