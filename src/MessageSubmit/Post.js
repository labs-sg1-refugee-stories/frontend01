// import lodash from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

const FIELDS = {
    name: {
        type:'input',
        label:'Name'
    },
    country: {
        type:'input',
        label:'Where are you from?'
    },
    message:{
        type:'textarea',
        label:'Please Share Your Story'

    }
};


class Post extends Component {
    onSubmit(props) {
    }

    renderField(fieldConfig, field ) {
        const fieldHelper = this.props.fields[field];

        return( 
            <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
                <label>{fieldConfig.label}</label>
                <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
                <div className="text-help">
                    {fieldHelper.touched ? fieldHelper.error : ''}
                </div>
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;
            return (
                <form onSubmit={handleSubmit(props => this.onSubmit(props))}>
                    <h3>Please Share Your Story!</h3>
                    {FIELDS.map(FIELDS, this.renderField.bind(this))}
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to=".PostMessage" className="btn- btn-danger">Cancel</Link>
                </form>
        );

    }
}




function validate(values) {
    const errors = {};

    FIELDS.each(FIELDS, (type, field) => {
        if (!values[field] ) {
            errors[field] = `Enter a ${field}`;
        }
    });

    return errors;
}

export default reduxForm({
    form:'Post',
    fields: FIELDS.keys(FIELDS),
    validate
}) (Post);
  