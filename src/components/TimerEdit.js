import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { editTimer } from 'actions';
import TimerForm from 'components/TimerForm';

const TimerEdit = ({ timer, history, editTimer }) => {

    const onSubmit = (formValues) => {
        editTimer( timer.id, formValues);
    }

    return (
        <TimerForm 
            title="Edit Timer"
            initialValues={ _.pick(timer, 'title', 'description') } 
            onDismiss={ () => history.push('/') }
            onSubmit={ onSubmit }
        />
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        timer: state.timers[ownProps.match.params.id]
    }
} 

export default connect(mapStateToProps, { editTimer })(TimerEdit);