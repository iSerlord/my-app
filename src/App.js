import { useState } from "react";
import logo from "./logo.svg";
import { Box, Button, Typography } from "@mui/material";
import "./App.css";

function App() {
  const [word, setWord] = useState("Hello World");
  return (
    <div
      className="App"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        backgroundColor: "#282c34",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            sx={{ fontSize: 20, fontWeight: "600", color: "#ffffff" }}
          >
            {word}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => setWord("Welcome to Docker Test.")}
          >
            Hello World
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default App;
