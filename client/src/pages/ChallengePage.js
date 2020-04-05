import React, {useContext, useState} from "react";
import StopwatchHooks from '../components/Stopwatch/StopwatchHooks';
import FinishBtn from '../components/FinishBtn/FinishBtn';
import ChallengeCard from '../components/ChallengeCard/ChallengeCard';
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Logo from '../components/Logo/Logo'
import WOD from '../components/WOD/WOD'
import API from "../utils/API";
import {useAuth, WODContext} from "../utils/store";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#B8C0DB",
        height: "100%",
        minHeight: '100vh',
        marginBottom: '64px'
    },
}));

function ChallengePage() {

    const classes = useStyles();

    const { wod } = useContext(WODContext)
    const { user, setUser } = useAuth();
    const history = useHistory()


  const [ currentTime, setCurrentTime ] = useState(0)

    const handleFinish = () => {
      // Update user with the workout they completed...
      API.updateUser({
        email: user.email,
        time: currentTime,
        exercises: wod
      }).then((res) => {
        // Send user to homepage...
        if( res.data.success ){
          setUser( res.data.user );
          history.push('/')
        }
      })

    }

    return (
        <Container className={classes.root}>
                <Logo />
                <StopwatchHooks onTimeChange={(time) => setCurrentTime(time)} />
                <br />
                <FinishBtn onClick={() => handleFinish()}/>
                <br />
                <WOD />
                <NavBar />

        </Container>
    );
}

export default ChallengePage;
