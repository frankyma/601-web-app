import PropTypes from "prop-types";

import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
} from "@mui/material";

function View({ name, description, steps, setIsEdit, imgSrc }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          my: "1rem",
        },
      }}
    >
      <Typography variant="h2" color>
        {name}
      </Typography>
      <Typography variant="h6">{description}</Typography>
      <Typography variant="h4">Steps</Typography>
      {imgSrc && (
        <Box
          component="img"
          sx={{
            height: "fit-content",
            maxWidth: { xs: "100%", sm: "50%" },
          }}
          alt="Recipe image"
          src={imgSrc}
        />
      )}
      <List>
        {steps.map((step, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText
              primary={`${index + 1}. ${step}`}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsEdit(true)}
        fullWidth
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
