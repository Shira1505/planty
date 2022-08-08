import Box from '@mui/material/Box';

import React from "react";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import QuizIntro from '../match-quiz/quizIntro.jsx';
import QuizResult from '../match-quiz/quizResult.jsx';
import Question1 from '../match-quiz/question1.jsx';
import Question2 from '../match-quiz/question2.jsx';
import Question3 from '../match-quiz/question3.jsx';




function FindMatch() {

  const [page, setPage] = useState(0);
  const quizTitles = ["FIND YOUR PLANT MATCH", "QUESTION 1", "QUESTION 2", "QUESTION 3", "CONGRATS!"];
  const quizSubTitles = ["", "Choose your intention", "Describe your current relationship with plants", "What’s your light like?", "Your match is..."];

  const pageRender = () => {
    if ( page == 0 ) {
      return <QuizIntro />
    } else if ( page == 1 ) {
      return <Question1 />
    } else if ( page == 2 ) {
      return <Question2 />
    } else if ( page == 3 ) {
      return <Question3 />
    } else {
      return <QuizResult />
    }
  }

  const titleStyle = (title) => (
    <Typography
    variant= 'h4'
    align= 'center'
    style={{marginTop: 30}}
    paragraph= 'true'
    sx={{
      mr: 2,
      fontFamily: 'monospace',
      letterSpacing: '.2rem',
      fontWeight: '700',
      color: 'inherit',
      textDecoration: 'none',
      margin: '0px',
    }}
    >
      {title}   
    </Typography>
  )

  const subTitleStyle = (subTitle) => (
    <Typography
    variant= 'subtitle2'
    align= 'center'
    style={{marginTop: 0}}
    paragraph= 'true'
    sx={{
      mr: 2,
      fontFamily: 'monospace',
      letterSpacing: '.2rem',
      fontWeight: '700',
      color: 'inherit',
      textDecoration: 'none',
      margin: '0px',
    }}
    >
      <h3>{subTitle}</h3>
    </Typography>
  )



  return (
    <div style={{display: "flex", flexDirection: "row", padding: "40px", width: "100%"}}>
        <div style={{width: "35%"}} />
        <div style={{width: "30%", border:"1.2px solid grey"}} align="center" >
        <div className="form-container" style={{ padding: "20px" }}>
        <div className="header">
          {titleStyle(quizTitles[page])}
          {subTitleStyle(quizSubTitles[page])}
        </div>
        <div className="body">
          {pageRender()}
        </div>
        <div className="footer">
          <Button 
            variant="contained"  
            style={{ background: "#194D33", marginRight: "5px" }} 
            disabled= { page == 0 } 
            onClick= { () => {
              setPage((currPage) => currPage-1);
              }
            }
          >
            Prev
          </Button>
          <Button 
            variant="contained"  
            style={{ background: "#194D33" }} 
            disabled= { page == quizTitles.length-1 } 
            onClick= { () => {
              setPage((currPage) => currPage+1);
              }
            }
          >
            Next
          </Button>
        </div>
      </div>
      </div>
        <div style={{width: "35%"}} align="center" />

    </div>
    // <Box 

    //   sx={{
    //   width: "50%",
    //   margin: "40px",
    //   border: "1px grey",
    //   align: "center",
    //   textAlign: "center",

    //   }}
    //   >
    //   <div className="form-container">
    //     <div className="header">
    //       {titleStyle(quizTitles[page])}
    //     </div>
    //     <div className="body">
    //       {pageRender()}
    //     </div>
    //     <div className="footer">
    //       <Button 
    //         variant="contained"  
    //         style={{ background: "#194D33" }} 
    //         disabled= { page == 0 } 
    //         onClick= { () => {
    //           setPage((currPage) => currPage-1);
    //           }
    //         }
    //       >
    //         Previous
    //       </Button>
    //       <Button 
    //         variant="contained"  
    //         style={{ background: "#194D33" }} 
    //         disabled= { page == quizTitles.length-1 } 
    //         onClick= { () => {
    //           setPage((currPage) => currPage+1);
    //           }
    //         }
    //       >
    //         Next
    //       </Button>
    //     </div>
    //   </div>
    // </Box>

  );
}

export default FindMatch;
