import { Box, Typography, IconButton } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import logo from "../assets/logo.png"
import person from "../assets/person.png"

export const Conversation = ({ messages, onFeedback }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <Box width="100%" height="90%" sx={{ overflowY: "auto" }}>
      {messages.map((msg, index) => (
        <Box key={index}>
          {/* User Message */}
          <Box boxShadow={2} bgcolor="white" borderRadius={2} m={2} display="flex" alignItems="flex-start" p={1} gap={2}>
            <Box borderRadius="50%" component="img" width="40px" height="40px" src={person} alt="user" />
            <Box>
              <Typography fontWeight={600}>You</Typography>
              <Typography component="p" sx={{ m: 0 }}>{msg.question}</Typography>
              <Typography fontSize={12} color="gray">{formatTime(msg.timestamp)}</Typography>
            </Box>
          </Box>
          {/* AI Response */}
          <Box boxShadow={2} borderRadius={2} m={2} display="flex" alignItems="flex-start" p={1} gap={2} bgcolor="white">
            <Box borderRadius="50%" component="img" width="40px" height="40px" src={logo} alt="bot" />
            <Box flex={1}>
              <Typography fontWeight={600}><span>Soul AI</span></Typography>
              <Typography component="p" sx={{ m: 0 }}>{msg.response}</Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography fontSize={12} color="gray">{formatTime(msg.timestamp)}</Typography>
                <IconButton 
                  size="small" 
                  onClick={() => onFeedback && onFeedback(index, 'like')}
                  color={msg.feedback === 'like' ? 'primary' : 'default'}
                >
                  {msg.feedback === 'like' ? <ThumbUpAltIcon fontSize="small" /> : <ThumbUpOffAltIcon fontSize="small" />}
                </IconButton>
                <IconButton 
                  size="small" 
                  onClick={() => onFeedback && onFeedback(index, 'dislike')}
                  color={msg.feedback === 'dislike' ? 'error' : 'default'}
                >
                  {msg.feedback === 'dislike' ? <ThumbDownAltIcon fontSize="small" /> : <ThumbDownOffAltIcon fontSize="small" />}
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

