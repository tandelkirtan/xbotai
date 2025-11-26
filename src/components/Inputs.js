import { Box } from '@mui/material'
import React from 'react'

export const Inputs = ({ input, setInput, onSubmit, onSave }) => {
  return (
    <Box
        display="flex"
        width="100%"
        height="10%"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          width="90%"
          height="100%"
        >
          <form
            onSubmit={onSubmit}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "10px",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Message Bot AI...'
              className="chat-input"
              style={{
                width: "90%",
                height: "40px",
                fontSize: "20px",
                padding: "10px",
                borderRadius:"5px",
                border:"1px solid gray",
                outline:"none"
              }}
            />
            <button
              style={{
                width: "10%",
                height: "40px",
                fontSize: "20px",
                padding: "10px",
                border:"none",
                borderRadius:"5px",
                backgroundColor:"#b58bffff",
                fontWeight:"600"
              }}
              type="submit"
              className="ask-button"
              >
              Ask
            </button>
          </form>
        </Box>
        <Box display="flex"
          alignItems="center"
          justifyContent="center" width="10%" height="100%">
          <button
            onClick={onSave}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              height: "40px",
              fontSize: "20px",
              padding: "10px",
              fontWeight:"600",
              border:"none",
                borderRadius:"5px",
                backgroundColor:"#b58bffff"
            }}
            type="button"
            className="save-button"
          >
            Save
          </button>
        </Box>
      </Box>
  )
}
