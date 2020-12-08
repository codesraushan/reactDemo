import React from 'react';
import {Jumbotron} from 'reactstrap';
import { Container, Button } from 'reactstrap';

const Home= ()=> {
    return(
        <div>
        <Jumbotron className = "text-center">
            <h1>
                Calorie-Tracker
            </h1>
            <p>
                Calculate your calories with calorie-tracker for free
            </p>
            <Container>
                <Button color= "primary">
                    Lets start
                </Button>
            </Container>

        </Jumbotron>
        </div>

    );
    
};

export default Home;