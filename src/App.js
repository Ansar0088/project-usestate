import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Header from "./Components/Header";
import Field from "./Components/Field";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setEmail("");
    setName("");
  };

  const removeItems = (index) =>{
     let arr = data;
     arr.splice(index, 1);
     setData([...arr]);
  }
  return (
    <>
      <div className="App">
        <Header />
        <div className="inputs">
          <Stack direction="row" spacing={2} mt={3}>
            <TextField
              id="outlined-basic"
              label="Name"
              value={name}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={addData} color="success" variant="contained">
              <AddOutlinedIcon />
            </Button>
          </Stack>
        </div>
        <div className="data">
          <div className="ShowSet">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
          {data.map((element, index) => {
            return (
              <div key={index}  className="ShowSet" >
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Button onClick={()=>removeItems(index)}  color="error" variant="contained">
            <DeleteIcon/>
            </Button>
          </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
