import React, {useEffect} from 'react'
import { TextField, Button } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { addNewsRequest } from '../services/news';
import { useNavigate } from "react-router-dom";

export default function AddNews() {
            //add headline
            //add category
            //add news body

            const [headline, setHeadline] = React.useState('');
            const [category, setCategory] = React.useState('');
            const [description, setDescription] = React.useState('');
            const [userid, setUserId] = React.useState('');

            const navigate = useNavigate();

            const handleSelectCategory = (event) => {
              setCategory(event.target.value);
            };

            useEffect(() => {
              return () => {
                const userId = localStorage.getItem('userId');
                setUserId(userId);
              }
            }, [])
            

            const addNews = () =>{
              const news =   {
                    headline:headline,
                    news:description,
                    category:category,
                    topStories:"false",
                    userId:userid
                }
                console.log(userid)
                console.log(headline, category, description);

                addNewsRequest(news);

                navigate("/home");
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
          className="register__textBox"
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
