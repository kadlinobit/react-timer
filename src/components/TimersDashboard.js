import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Icon, Card, Popup } from 'semantic-ui-react';

import Timer from 'components/Timer';

const renderTimers = (timers) => {
    return (timers.map(timer => {
        return <Timer key={ timer.id } timer={ timer } />
    }));
}

const TimersDashboard = (props) => {
    return (
        <Grid centered>
            <Grid.Row>
                <Card.Group centered>
                    { renderTimers(props.timers) }
                </Card.Group>
            </Grid.Row>
            <Grid.Row>
            <Popup 
                trigger={
                    <Link to="/timer/add">
                        <Icon circular inverted color="blue" name="add" size="big" />
                    </Link>
                }
                content="Add New Timer"
                position="bottom center"
                size='small'
            />
            </Grid.Row>
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        timers: _.values(state.timers)
    };
}

export default connect(mapStateToProps)(TimersDashboard);