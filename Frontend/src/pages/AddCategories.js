import React from 'react'
import { TextField, Button } from "@mui/material";
import { addCategory } from '../services/categories';

export default function AddCategories() {

    const [category, setCategory] = React.useState('');

    const addToCategories = () => {
    console.log(category);
    addCategory(category)
    }

  return (
    <div>
            <div>AddCategories</div>
                <TextField
              id="outlined-basic"
              label="Enter Category"
              size="small"
              className="register__textBox"
              style={{marginTop:'20px', width:'50%', marginLeft:'20px'}}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category..."
            />

<Button
                variant="contained"
                style={{marginTop:'20px', width:'50%', marginLeft:'20px'}}
                className="register__btn" onClick={addToCategories}
                
              >
                SUBMIT
              </Button>
    </div>

  )
}
