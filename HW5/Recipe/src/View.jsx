import PropTypes from "prop-types";

import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Box,
} from "@mui/material";

function View({ name, description, steps, setIsEdit, imgSrc }) {
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2">{name}</Typography>
      <Typography variant="h4">{description}</Typography>
      <Typography variant="h4">Steps</Typography>
      <Box
        component="img"
        sx={{
          height: 255,
          width: "fit-content",
        }}
        alt="Recipe image"
        src={imgSrc}
      />
      <List>
        {steps.map((step, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={`${index + 1}. ${step}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsEdit(true)}
      >
        Edit
      </Button>
    </Container>
  );
}

View.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  setIsEdit: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default View;
