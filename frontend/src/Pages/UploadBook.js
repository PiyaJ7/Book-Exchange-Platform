import "./uploadBook.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function UploadBook() {
  return (
    <div className="uploadBook-section flex items-center justify-center">
      <div className="bookUpload-div">
        <h1 className="font-bold text-center text-blue-900">Upload a Book</h1>
        <form action="">
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                m: 1,
                width: "40vw",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgb(30, 58, 138)",
                },
                "&:hover fieldset": {
                  borderColor: "rgb(30, 58, 138)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(30, 58, 138)",
                },
              },
              "& .MuiFormLabel-root": {
                color: "rgb(30, 58, 138)",
              },
              "& .MuiSelect-select": {
                "&:focus": {
                  backgroundColor: "transparent",
                },
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="bookName"
              label="Name of the Book"
              variant="outlined"
              required
            />
            <TextField id="author" label="Author" variant="outlined" required />
            <TextField
              id="price"
              label="Price (LKR)"
              variant="outlined"
              required
            />
            <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="select-label">Book Category</InputLabel>
              <Select
                labelId="select-label"
                id="demo-simple-select"
                label="Book Category"
                variant="outlined"
                required
                sx={{ width: "50%" }}
              >
                <MenuItem value={"Mystery"}>Mystery</MenuItem>
                <MenuItem value={"Horror"}>Horror</MenuItem>
                <MenuItem value={"Romance Novel"}>Romance Novel</MenuItem>
                <MenuItem value={"Fiction"}>Fiction</MenuItem>
                <MenuItem value={"Fairy tale"}>Fairy tale</MenuItem>
                <MenuItem value={"Thriller"}>Thriller</MenuItem>
                <MenuItem value={"Classic"}>Classic</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <div className="upload-button-div flex items-center justify-center">
            <button className="book-upload-button">Upload Book</button>
          </div>
        </form>
      </div>
    </div>
  );
}
