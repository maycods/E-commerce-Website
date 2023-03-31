import {
  TextField,
  List,
  ListItemText,
  Box,
  ListSubheader,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import { useCategories } from "../hooks/useCategories";
import { useStore } from "../Store";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const categories = useCategories(searchTerm);
  const setCategory = useStore((state) => state.setCategory);
  return (
    <Box
      sx={{
        width: "250px",
        height: "87vh",
        scrollBehavior: "smooth",
        overflow: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      position="fixed"
    >
      <List
        sx={{
          //add right border
          borderRight: "1px solid #fff",
        }}
      >
        <ListSubheader
          sx={{
            marginBottom: "10px",
          }}
        >
          <TextField
            variant="standard"
            label="Search"
            fullWidth
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </ListSubheader>
        <ListItemButton onClick={() => setCategory("")}>
          <ListItemText primary="All Products" />
        </ListItemButton>
        {categories.map((category) => (
          <ListItemButton
            key={category.id}
            onClick={() => setCategory(category.name)}
          >
            <ListItemText primary={category.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
