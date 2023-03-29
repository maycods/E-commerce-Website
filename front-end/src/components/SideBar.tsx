import {
  makeStyles,
  TextField,
  ListItemIcon,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CategoryIcon from "@mui/icons-material/Category";

const Sidebar = () => {
  let categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
    { id: 4, name: "Category 4" },
    { id: 5, name: "Category 5" },
    { id: 6, name: "Category 6" },
    { id: 7, name: "Category 7" },
    { id: 8, name: "Category 8" },
    { id: 9, name: "Category 9" },
    { id: 10, name: "Category 10" },
    { id: 11, name: "Category 11" },
    { id: 12, name: "Category 12" },
    { id: 13, name: "Category 13" },
    { id: 14, name: "Category 14" },
    { id: 15, name: "Category 15" },
  ];

  return (
    <div style={{ width: "250px", padding: "10px" }}>
      <TextField
        variant="outlined"
        margin="normal"
        label="Search"
        fullWidth
        InputProps={{
          startAdornment: (
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          ),
        }}
        // onChange={(event) => handleSearch(event.target.value)}
      />
      <List>
        {categories.map((category) => (
          <ListItem key={category.id}>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
