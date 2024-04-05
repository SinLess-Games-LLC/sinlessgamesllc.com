'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import Logo from '../../../public/images/3.png'

export type NavPageType = {
  title: string
  url: string
}

export interface AppBarProps {
  pages: NavPageType[]
}

const ResponsiveAppBar: React.FC<AppBarProps> = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        borderRadius: '0 0 50px 50px'
      }}
    >
      <Container>
        <Toolbar disableGutters>
          {/** Left section */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            {/** Logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              <Image
                src={Logo}
                alt="Sinless Games LLC"
                width={50}
                height={40}
              />
            </Typography>
            {/** Title */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: '#DAA520',
                textDecoration: 'none'
              }}
            >
              SinLess Games LLC
            </Typography>
          </Box>

          {/** Center-aligned section (empty) */}
          <Box sx={{ flexGrow: 1 }} />

          {/** Right section */}
          <Box sx={{ display: 'flex', alignItems: 'right' }}>
            {/** Pages */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  href={page.url}
                  sx={{ mx: 1, color: '#DAA520' }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
            {/** Menu icon (for mobile) */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} href={page.url}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
