import {
  TextField,
  ListItemIcon,
  List,
  ListItem,
  ListItemText,
  Box,
  ListSubheader,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CategoryIcon from "@mui/icons-material/Category";
import { useCategories } from "../hooks/useCategories";

const Sidebar = () => {
  let categories = useCategories();

  return (
    <Box
      sx={{
        width: "250px",
        height: "87vh",
        // padding: "10px",
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
            // InputProps={{
            //   startAdornment: (
            //     <ListItemIcon>
            //       <SearchIcon />
            //     </ListItemIcon>
            //   ),
            // }}
            // onChange={(event) => handleSearch(event.target.value)}
          />
        </ListSubheader>
        {categories.map((category) => (
          <ListItem key={category.id}>
            {/* <ListItemIcon> */}
            {/* <CategoryIcon /> */}
            {/* </ListItemIcon> */}
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
