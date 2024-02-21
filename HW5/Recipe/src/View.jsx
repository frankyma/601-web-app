import PropTypes from "prop-types";

import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";

function View({ name, description, steps, setIsEdit }) {
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2">{name}</Typography>
      <Typography variant="h4">{description}</Typography>
      <Typography variant="h4">Steps</Typography>
      <List>
        {steps.map((step, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={`${index}. ${step}`} />
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
};

export default View;
