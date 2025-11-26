import { Box, Typography } from "@mui/material";
import { Chat } from "./Chat";

export const Hero = ({ isMobile }) => {
  return (
    <Box sx={{ width: isMobile ? "100%" : "80%", height: "100%" }}>
      <Box width="100%" height="8%">
        <Typography component="header" fontWeight={800} p={1} pl={isMobile ? 6 : 1} fontSize={30} color="#9860f9ff">BOT AI</Typography>
      </Box>
      <Box width="100%" height="92%">
        <Chat />
      </Box>
    </Box>
  );
};
