import Box from '@mui/material/Box';
import React from "react";
import { useState } from "react";
import {useSelector} from "react-redux";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import QuizIntro from '../match-quiz/quizIntro.jsx';
import QuizResult from '../match-quiz/quizResult.jsx';
import Question1 from '../match-quiz/question1.jsx';
import Question2 from '../match-quiz/question2.jsx';
import Question3 from '../match-quiz/question3.jsx';
import {setTest} from '../match-quiz/match-quiz.selectors.js'

function FindMatch() {

  const [page, setPage] = useState(0);
  const quizTitles = ["FIND YOUR PLANT MATCH", "QUESTION 1", "QUESTION 2", "QUESTION 3", "CONGRATS!"];
  const quizSubTitles = ["", "Choose your intention", "Describe your current relationship with plants", "What’s your light like?", "Your match is..."];
  // const [ansSelected, setAnsSelected] = useState(false);
  // const test = useSelector(setTest);
  // console.log({test});

    // //tryinggg...
    // const [answeredQ1, setAnsweredQ1] = useState(false);
    // const changeAnsweredQ1 = () => {
    //   setAnsweredQ1(true);
    // }

    // console.log(answeredQ1);

    // const [ move2, setMove2 ] = useState(false);

    // const canMove2 = () => {
    //   setMove2(true);
    // }

    // // Determines if an answer was selected.
    // const canMoveToQ2 = false;
    // const canMoveToQ3 = false;
    // const canMoveToFinish = false;

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
    <div style={{display: "flex", flexDirection: "row", padding: "40px"}}>
        <div style={{width: "35%"}} />
        <div style={{width: "30%", border:"1.3px solid grey"}} align="center" >
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
            // disabled= { page == quizTitles.length-1 || ( page==1 && !canMoveToQ2 ) || ( page==2 && !canMoveToQ3 ) || ( page==3 && !canMoveToFinish )} 
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
  );
}

export default FindMatch;

