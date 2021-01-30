import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Grid, Icon, Card, Popup, Confirm } from 'semantic-ui-react';

import { cancelModal, deleteTimer, initAdd } from 'actions';
import Timer from 'components/Timer';
import TimerAdd from 'components/TimerAdd';
import TimerEdit from './TimerEdit';

const renderTimers = (timers) => {
    return (timers.map(timer => {
        return <Timer key={ timer.id } timer={ timer } />
    }));
}

const renderModal = (modal, cancelModal, deleteTimer) => {
    if (modal.open && modal.operation === 'delete') {
        return (
            <Confirm
                open={ modal.open && modal.operation === 'delete' }
                onConfirm={ () => deleteTimer(modal.id) }
                onCancel={ cancelModal }
                header="Delete Timer"
                content="Are you sure you want to delete the timer?"
            />
        );
    }
    else if (modal.open && modal.operation === 'add') {
        return (
            <TimerAdd 
                open={ modal.open && modal.operation === 'add' }
                onClose={ cancelModal }
            />
        );
    } 
    else if (modal.open && modal.operation === 'edit') {
        return (
            <TimerEdit
                open={ modal.open && modal.operation === 'edit' }
                onClose={ cancelModal }
                timerId={ modal.id }
            />
        );
    }
    return null;
}

const TimersDashboard = (props) => {
    
    const { timers, modal, cancelModal, deleteTimer, initAdd } = props;

    return (
        <>
            <Grid centered>
                <Grid.Row>
                    <Card.Group centered>
                        { renderTimers(timers) }
                    </Card.Group>
                </Grid.Row>
                <Grid.Row>
                <Popup 
                    trigger={
                        <Icon 
                            onClick={ () => initAdd() }
                            circular 
                            inverted 
                            color="blue" 
                            name="add" 
                            size="big" 
                        />
                    }
                    content="Add New Timer"
                    position="bottom center"
                    size='small'
                />
                </Grid.Row>
            </Grid>
            { renderModal(modal, cancelModal, deleteTimer) }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        timers: _.values(state.timers),
        modal: state.modal
    };
}

export default connect(mapStateToProps, { cancelModal, deleteTimer, initAdd })(TimersDashboard);