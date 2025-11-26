import { Box, Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { NewChat } from '../components/NewChat'
import { Hero } from '../components/Hero'

export const Home = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <Box width="100vw" height="100vh" bgcolor="#ede3ffff" display="flex">
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ position: 'absolute', top: 8, left: 8, zIndex: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box width="250px" height="100%">
              <NewChat onClose={() => setDrawerOpen(false)} />
            </Box>
          </Drawer>
        </>
      ) : (
        <NewChat />
      )}
      <Hero isMobile={isMobile} />
    </Box>
  )
}
