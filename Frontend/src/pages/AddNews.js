import React from 'react'
import { TextField, Button } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function AddNews() {
            //add headline
            //add category
            //add news body

            const [headline, setHeadline] = React.useState('');
            const [category, setCategory] = React.useState('');
            const [description, setDescription] = React.useState('');


            const handleSelectCategory = (event) => {
              setCategory(event.target.value);
            };

            const addNews = () =>{
                console.log(headline, category, description)
            }

  return (
    <div>
        <div>Add News</div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <TextField
              id="outlined-basic"
              label="Enter Headline"
              size="small"
              className="register__textBox"
              style={{marginTop:'20px', width:'50%', marginLeft:'20px'}}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Headline..."
            />
                    {/* <TextField
              id="outlined-basic"
              label="Select Category"
              size="small"
              style={{marginTop:'20px', width:'20%', marginLeft:'20px'}}
              className="register__textBox"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
            /> */}

<Select
          labelId="demo-simple-select-label"
          id="outlined-basic"
          value={category}
          style={{marginTop:'20px', width:'20%', marginLeft:'20px'}}
          label="Category"
          onChange={handleSelectCategory}
        >
          <MenuItem value={'Sport'}>Sport</MenuItem>
          <MenuItem value={'Political'}>Political</MenuItem>
          <MenuItem value={'Tech'}>Tech</MenuItem>
        </Select>
                    <TextField
              id="outlined-basic"
              label="Add Description"
              size="small"
              style={{marginTop:'20px', width:'50%', marginLeft:'20px'}}
              className="register__textBox"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description..."
            />

<Button
                variant="contained"
                style={{marginTop:'20px', width:'50%', marginLeft:'20px'}}
                className="register__btn" onClick={addNews}
                
              >
                SUBMIT
              </Button>
        </div>
        
    </div>
  )
}
