import { useCallback } from "react";
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function Edit({
  name,
  description,
  steps,
  setName,
  setDescription,
  setSteps,
  setIsEdit,
  imgSrc,
  setImgSrc,
}) {
  const onStepValueChange = useCallback(
    (e, index) => {
      const newSteps = steps.map((currStep, currIndex) =>
        currIndex === index ? e.target.value : currStep
      );
      setSteps(newSteps);
    },
    [setSteps, steps]
  );

  const onDeleteStep = useCallback(
    (index) => {
      const newSteps = steps.filter((_, currIndex) => currIndex !== index);
      setSteps(newSteps);
    },
    [setSteps, steps]
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

      <TextField
        required
        label="Image"
        id="outlined-size-small"
        size="small"
        value={imgSrc}
        onChange={(event) => {
          setImgSrc(event.target.value);
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
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setSteps(steps.filter((step) => step !== ""));
          setIsEdit(false);
        }}
      >
        Save
      </Button>
    </Container>
  );
}

Edit.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  setName: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  setSteps: PropTypes.func.isRequired,
  setIsEdit: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  setImgSrc: PropTypes.func.isRequired,
};

export default Edit;
