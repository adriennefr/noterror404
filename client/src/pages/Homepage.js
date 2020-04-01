import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import FitMoodji from '../components/Fitmoodji/Fitmoodji'
import HomepageButtons from '../components/WorkoutButtons/WorkoutButtons'

function Homepage() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <FitMoodji />
            </Container>
        </React.Fragment>
    );
}
export default Homepage;