import * as React from 'react';
import Button from '@mui/material/Button';

export default function Square({ value, onSquareClick }) {
  return (

    <Button variant="contained" 
    aria-label="Large button group" 
    className="square" 
    onClick={onSquareClick}
    sx={{width: '150px',
        height: '150px',
        minWidth: '64px',
        fontSize: '60px',
        padding: 0,
        backgroundColor: 'darkblue',
        borderColor: 'black',
        fontFamily: 'revert'
        
        }}
    >
    {value}
    </Button>
   
  );
}
