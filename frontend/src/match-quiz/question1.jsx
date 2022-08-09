import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import Button from '@mui/material/Button';



function Question1() {

    const [checked, setChecked] = useState({
        1: false,
        2: false,
        3: false,
    });
    
    // let error = undefined;

    const error = !checked[1] && !checked[2] && !checked[3];


    //TODO: make nicer (not repeate 3 times...)
    const handleChange1 = () => {
        if (checked[1]) {
            setChecked({
                1: false,
            })
        } else {
                setChecked({
                    1: true,
                })
            }
        return
    }

    const handleChange2 = () => {
        if (checked[2]) {
            setChecked({
                2: false,
            })
        } else {
                setChecked({
                    2: true,
                })
            }
        return
    }
    const handleChange3 = () => {
        if (checked[3]) {
            setChecked({
                3: false,
            })
        } else {
                setChecked({
                    3: true,
                })
            }
        return
    }

    // React.useEffect(() => {
    //      error = !checked[1] && !checked[2] && !checked[3];
    //     console.log({error});
    // })

    return (

                <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" required error={ error } >
                <FormGroup>
                    <FormControlLabel
                    control={
                      <Checkbox checked={checked[1]} onChange={handleChange1} name="1" style={{color: "#194D33"}} />
                    }
                    label="Get out and explore"
                    />
                    <FormControlLabel
                    control={
                      <Checkbox checked={checked[2]} onChange={handleChange2} name="2" style={{color: "#194D33"}} />
                    }
                    label="Tap into my creative side"
                    />
                    <FormControlLabel
                    control={
                      <Checkbox checked={checked[3]} onChange={handleChange3} name="3" style={{color: "#194D33"}} />
                    }
                    label="Be more mindful"
                    />
                </FormGroup>
                {/* <div className="footer"> */}
                {/* <Button 
                    variant="contained"  
                    style={{ background: "#194D33", marginRight: "5px" }} 
                    disabled= { error } 
                    // onClick= { () => {
                    // setPage((currPage) => currPage-1);
                    // }
                    // }
                >
                    Prev
                </Button>
                <Button 
                    variant="contained"  
                    style={{ background: "#194D33" }} 
                    // disabled= { page == quizTitles.length-1 } 
                    // onClick= { () => {
                    // setPage((currPage) => currPage+1);
                    // }
                    // }
                >
                    Next
                </Button>
                </div> */}
                <FormHelperText>Please pick an answer</FormHelperText>
            </FormControl>
        </Box>

  );
}

export default Question1;

