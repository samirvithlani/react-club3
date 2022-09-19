import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import React from 'react'
import DeleteSweepSharpIcon from '@mui/icons-material/DeleteSweepSharp';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';


export const MaterialDemo1 = () => {
  return (
    <div>

    <Button variant='contained' startIcon = {<DeleteSweepSharpIcon/>}>HELLO</Button>        
    <Button variant='contained' endIcon = {<DeleteSweepSharpIcon/>}>HELLO</Button>        
    <IconButton>
        <Fingerprint/>
    </IconButton>

    <Slider aria-label="Volume" />
  
    
    </div>
  )
}
