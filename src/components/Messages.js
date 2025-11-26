import { Box, Typography } from '@mui/material'
import imgg from "../assets/imgg.png"

export const Messages = ({ onCardClick }) => {
  const cards = [
    "Hi, what is the weather",
    "Hi, what is my location",
    "Hi, what is the temperature",
    "Hi, how are you"
  ]

  return (
    <Box  width="100%" height="90%">
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="50%">
            <Box textAlign="center">
                <Typography fontSize="30px" fontWeight={600} component="h1">How Can I Help You Today?</Typography>
                <Box m={2} borderRadius={50} component="img" width="90px" src={imgg} alt='logo'></Box>
            </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }} width="100%" height="50%">
            {cards.map((card, index) => (
              <Box 
                key={index}
                m={1} 
                boxShadow={4} 
                borderRadius={2} 
                bgcolor="white" 
                sx={{ 
                  width: { xs: "90%", md: "40%" }, 
                  height: { xs: "20%", md: "40%" },
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#f5f5f5" }
                }}
                onClick={() => onCardClick && onCardClick(card)}
              >
                <Typography fontSize={20} fontWeight={600} m={1} component="p">{card}</Typography>
                <Typography color='gray' m={1} component="p">Get immediate AI generated response</Typography>
              </Box>
            ))}
        </Box>
      </Box>
  )
}
