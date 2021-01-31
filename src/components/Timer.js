import React, { useEffect, useState } from 'react';
import { Card, Icon, Image, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { millisecondsToHuman } from 'helpers/helpers';
import { startTimer, stopTimer, resetTimer, initDelete, initEdit } from 'actions';

const renderButton = (timer, startTimer, stopTimer, resetTimer, setClock) => {

    const commonProps = {
        circular: true, 
        inverted: true, 
        size: 'large',
        style: { 'cursor': 'pointer'}
    }

    let controlsArray = [];

    if(timer.elapsed > 0) {
        controlsArray.push(<Icon key="reset" { ...commonProps } name="repeat" color="teal" onClick={() => { resetTimer(timer.id); setClock(0); }} />);   
    }

    if (timer.isRunning) {
        controlsArray.push(<Icon key="pause" { ...commonProps } name="pause" color="red" onClick={() => stopTimer(timer.id)}/>);
    } else {
        controlsArray.push(<Icon key="start" { ...commonProps } name="play" color="green" onClick={() => startTimer(timer.id)} />);
    }
    return controlsArray;
}

const calcElapsedTime = (elapsed, runningSince) => {
    let totalElapsed = elapsed;

    if(runningSince) {
        totalElapsed += Date.now() - runningSince;
    }

    return totalElapsed;
}

const Timer = (props) => {
    const { timer, startTimer, stopTimer, resetTimer, initDelete, initEdit } = props;
    const [ clock, setClock ] = useState(0);

    useEffect(() => {
        let interval = null;
        
        if(timer.isRunning) {
            interval = setInterval(() => {
                setClock(calcElapsedTime(timer.elapsed, timer.runningSince));
            },10);
        } else {
            setClock(calcElapsedTime(timer.elapsed, timer.runningSince));         
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [clock, setClock, timer.isRunning, timer.runningSince, timer.elapsed]);

    return (
        <Card>
            <Image>
                <h1 className="centered">{ millisecondsToHuman(clock) }</h1>
            </Image>
            <Card.Content>
                <Card.Header>
                    { timer.title }
                </Card.Header>
                <Card.Meta>{ timer.description }</Card.Meta>
                <Divider />
                { renderButton(timer, startTimer, stopTimer, resetTimer, setClock) }
            </Card.Content>
            <Card.Content extra>
                    <Icon onClick={ () => initEdit(timer.id) } name="edit" style={{ cursor: 'pointer' }}></Icon>           
                    <Icon onClick={ () => initDelete(timer.id) } name="trash alternate" style={{ cursor: 'pointer' }}></Icon>
            </Card.Content>
        </Card>
    )
}

export default connect(null, { startTimer, stopTimer, resetTimer, initDelete, initEdit })(Timer);