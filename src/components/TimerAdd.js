import React from 'react';
import { connect } from 'react-redux';

import { addTimer } from 'actions';
import TimerForm from 'components/TimerForm';

const TimerAdd = ({ addTimer, open, onClose }) => {

    const onSubmit = (formValues) => {
        addTimer(formValues);
    }

    return (
        <TimerForm 
            title="Add New Timer"
            open={ open }
            onClose={ onClose }
            onSubmit={ onSubmit }
        />
    );
}

export default connect(null, { addTimer })(TimerAdd);