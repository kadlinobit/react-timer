import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Modal } from 'semantic-ui-react';

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
    console.log(props.initialValues);
    return(
        <Modal
            open={ props.open }
            onClose={ props.onClose }
        >
            <Modal.Header>{ props.title }</Modal.Header>
            <Modal.Content>
                <Form id="timer-form" onSubmit={props.handleSubmit(props.onSubmit)}>               
                    <Field required name="title" label="Title" component={ renderTextInput } />
                    <Field name="description" label="Description" component={ renderTextInput } />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button form="timer-form" color="green" type="submit">Submit</Button>
                <Button color="grey" onClick={ props.onClose }>Cancel</Button>
            </Modal.Actions>
        </Modal>
    );

};

export default reduxForm({
    form: 'timerForm',
    validate: validate
})(TimerForm);
