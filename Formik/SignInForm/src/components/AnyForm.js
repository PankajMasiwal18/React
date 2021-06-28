import React from 'react'
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import * as Yup from 'yup'

function AnyForm() {

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        password: Yup.string()
            .required('Required')
    })

    const onSubmit = (values, submitProps) => {
        console.log('Form data', values);
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {formik => {
                    return (
                        <Form>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <Field type='text' id='email' name='email' />
                                <ErrorMessage name='email' />
                            </div>
                            <div>
                                <label htmlFor='password'>Password</label>
                                <Field type='text' id='password' name='password' />
                                <ErrorMessage name='password' />
                            </div>
                            <button type='reset'>Reset</button>
                            <button type='submit' disabled={!formik.isValid}>
                                Submit
                            </button>
                        </Form>
                    )
                }}

            </Formik>
        </div>
    )
}

export default AnyForm
