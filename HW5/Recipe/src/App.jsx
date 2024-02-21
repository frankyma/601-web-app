import "./App.css";
import { useCallback, useState } from "react";
import {
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([""]);

  const onStepValueChange = useCallback(
    (e, index) => {
      const newSteps = steps.map((currStep, currIndex) =>
        currIndex === index ? e.target.value : currStep
      );
      setSteps(newSteps);
    },
    [steps]
  );

  const onDeleteStep = useCallback(
    (index) => {
      const newSteps = steps.filter((_, currIndex) => currIndex !== index);
      setSteps(newSteps);
    },
    [steps]
  );

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">Create Recipe</Typography>

      <TextField
        required
        id="outlined-required"
        label="Recipe Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        required
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <Typography variant="h4">
        Steps
        <IconButton
          aria-label="add"
          onClick={() => {
            setSteps([...steps, ""]);
          }}
        >
          <AddIcon />
        </IconButton>
      </Typography>

      {steps.map((step, index) => (
        <FormControl variant="outlined" key={index}>
          <InputLabel htmlFor="outlined-adornment-step">Add step</InputLabel>

          <OutlinedInput
            id="outlined-adornment-step"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => onDeleteStep(index)}
                >
                  {<DeleteIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="step"
            value={step}
            onChange={(e) => onStepValueChange(e, index)}
          />
        </FormControl>
      ))}
    </Container>
  );
}

export default App;
