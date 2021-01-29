import React from 'react';
import { connect } from 'react-redux';

import { addTimer } from 'actions';
import TimerForm from 'components/TimerForm';

const TimerAdd = ({ history, addTimer }) => {

    const onSubmit = (formValues) => {
        addTimer(formValues);
    }

    return (
        <TimerForm 
            title="Add New Timer"
            onDismiss={ () => history.push('/') }
            onSubmit={ onSubmit }
        />
    );
}

export default connect(null, { addTimer })(TimerAdd);