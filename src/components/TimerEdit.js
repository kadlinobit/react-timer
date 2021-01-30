import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { editTimer } from 'actions';
import TimerForm from 'components/TimerForm';

const TimerEdit = (props) => {

const { timer, editTimer, open, onClose } = props;

    console.log(props);
    const onSubmit = (formValues) => {
        editTimer( timer.id, formValues);
    }

    return (
        <TimerForm 
            title="Edit Timer"
            open={ open }
            onClose={ onClose }
            onSubmit={ onSubmit }
            initialValues={ _.pick(timer, 'title', 'description') } 
        />
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        timer: state.timers[ownProps.timerId]
    }
} 

export default connect(mapStateToProps, { editTimer })(TimerEdit);