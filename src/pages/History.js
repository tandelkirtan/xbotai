import { Box, Typography, IconButton, useMediaQuery, useTheme, Drawer } from '@mui/material'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import MenuIcon from '@mui/icons-material/Menu'
import { NewChat } from '../components/NewChat'
import logo from "../assets/logo.png"
import imgg from "../assets/imgg.png"

export const History = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [savedChats, setSavedChats] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedChats") || "[]")
    setSavedChats(saved)
  }, [])

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
      <Box sx={{ width: isMobile ? "100%" : "80%", height: "100%", overflowY: "auto" }}>
        <Box component="header" width="100%" height="8%" display="flex" alignItems="center" justifyContent="space-between">
          <Typography fontWeight={800} p={1} pl={isMobile ? 6 : 1} fontSize={30} color="#9860f9ff">
            Conversation History
          </Typography>
          <Link to="/" href="/" style={{ textDecoration: 'none', marginRight: '16px' }}>
            <Typography color="#9860f9ff" fontWeight={600}>Back to Chat</Typography>
          </Link>
        </Box>
        <Box p={2}>
          {savedChats.length === 0 ? (
            <Typography>No saved conversations yet.</Typography>
          ) : (
            savedChats.map((chat, chatIndex) => (
              <Box key={chatIndex} mb={4} p={2} bgcolor="white" borderRadius={2} boxShadow={2}>
                <Typography fontWeight={600} mb={2}>
                  Saved on: {new Date(chat.timestamp).toLocaleString()}
                </Typography>
                {chat.messages.map((msg, msgIndex) => (
                  <Box key={msgIndex}>
                    <Box display="flex" alignItems="flex-start" p={1} gap={2}>
                      <Box borderRadius="50%" component="img" width="30px" height="30px" src={imgg} alt="user" />
                      <Box>
                        <Typography fontWeight={600} fontSize={14}>You</Typography>
                        <p style={{ margin: 0, fontSize: 14 }}>{msg.question}</p>
                      </Box>
                    </Box>
                    <Box display="flex" alignItems="flex-start" p={1} gap={2} bgcolor="#ede3ffff" borderRadius={1}>
                      <Box borderRadius="50%" component="img" width="30px" height="30px" src={logo} alt="bot" />
                      <Box>
                        <Typography fontWeight={600} fontSize={14}><span>Soul AI</span></Typography>
                        <p style={{ margin: 0, fontSize: 14 }}>{msg.response}</p>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Box>
  )
}

