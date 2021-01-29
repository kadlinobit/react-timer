import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import Modal from 'components/Modal';
import { deleteTimer } from 'actions';

const TimerDelete = (props) => {
    
    const { timer, history, deleteTimer } = props; 

    const renderActions = () => {
        return (
            <>
                <Button color="red" onClick={ () => deleteTimer(timer.id) }>Delete</Button>
                <Button color="grey" onClick={ () => history.goBack() }>Cancel</Button>
            </>
        )
    }

    return (
        <Modal 
            title="Delete Timer" 
            text={`Are you sure you want to delete the timer "${timer.title}?"`}
            actions={ renderActions() }
            onDismiss={ () => history.goBack() }
        />
    );

};

const mapStateToProps = (state, ownProps) => {
    return {
        timer: state.timers[ownProps.match.params.id]
    }
} 

export default connect( mapStateToProps, { deleteTimer })(TimerDelete);