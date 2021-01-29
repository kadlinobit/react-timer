import React from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';

const renderTextInput = ({ required, label, input, meta }) => {
    
    var error = meta.error && meta.touched ? { content: meta.error } : null;

    return (
        <Form.Field required = { required }>
            <Form.Input 
                fluid 
                { ...input }
                required = { required }
                label={ label } 
                onChange={ input.onChange } 
                value={ input.value } 
                error={ error }
                />
        </Form.Field>
    );
}

const validate = (formValues) => {
    let errorsObj = {};

    if(!formValues.title) {
        errorsObj.title = 'Enter the title.'
    }

    return errorsObj;
}

const TimerForm = (props) => {
    return ReactDOM.createPortal(
		<div 
            onClick={props.onDismiss} 
            className="ui dimmer modals visible active"
        >
            <div 
                onClick={(e) => e.stopPropagation()} 
                className="ui standard modal visible active"
            >
                <div className="header">{ props.title }</div>
                <div className="content">
                    <Form id="timer-form" onSubmit={props.handleSubmit(props.onSubmit)}>               
                        <Field required name="title" label="Title" component={ renderTextInput } />
                        <Field name="description" label="Description" component={ renderTextInput } />
                    </Form>
                </div>
                <div className="actions">
                    <Button form="timer-form" color="green" type="submit">Submit</Button>
                    <Button color="grey" onClick={ props.onDismiss }>Cancel</Button>
                </div>             
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default reduxForm({
    form: 'timerForm',
    validate: validate
})(TimerForm);
