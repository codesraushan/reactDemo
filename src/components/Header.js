import React from 'react';
import { Card, CardBody } from 'reactstrap';

const Header = () => {
    return(
        <div>
            <Card className="my-2 bg-warning">
                <CardBody>
                    <h1 className="text-center my-2">
                        Welcome to Calorie-tracker
                    </h1>
                    <h2 className="text-center my-3">
                        track your healh
                    </h2>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;
