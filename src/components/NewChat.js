import { Box, Typography } from '@mui/material'
import logo from "../assets/logo.png"
import EditSquareIcon from '@mui/icons-material/EditSquare';

export const NewChat = ({ onClose }) => {
  return (
    <Box
    sx={{
        width: onClose ? "100%" : "20%",
        height:"100%",
        bgcolor:"white",
    }}>
        <Box    
        sx={{
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
        width:"100%",
        height:"8%",    
        bgcolor:"#b58bffff"}}>
            <Box borderRadius={4} component="img" src={logo} alt='logo' height="80%"></Box>  
            <Typography  fontSize="20px" fontWeight={600}>New Chat</Typography>
            <EditSquareIcon/>
        </Box>

        <Box    
        sx={{
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
        width:"100%",
        height:"8%"}}>
            <Typography px={1} borderRadius={1} bgcolor="#b58bffff" fontSize="20px" fontWeight={600}>Past Conversations</Typography>
        </Box>
    </Box>
  )
}
