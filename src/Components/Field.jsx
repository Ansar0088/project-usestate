import React from 'react'
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const Field = (props) => {
  return (
    <div>
         <div className="ShowSet" >
            <h4>{props.name}</h4>
            <h4>{props.email}</h4>
            <Button   color="error" variant="contained">
            <DeleteIcon/>
            </Button>
          </div>
    </div>
  )
}

export default Field