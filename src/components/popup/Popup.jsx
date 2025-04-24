import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, useField } from 'formik';
import { object, string, number } from 'yup';

import './Popup.scss';

const TextInput = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <input {...props} {...field}/>
            {meta.touched && meta.error ? <p className='error-message'>{meta.error }</p> : null}
        </>
    )
};

const Popup = ({ handleOpenModal }) => {
    return (
        <div className="popup-wrapper">
            <div className="popup">
                <div className="popup__close-btn" onClick={() => handleOpenModal(false)}>
                    <img src="../images/popup-close-btn.svg" alt="green close sign" width="30" height="30" />
                </div>
                <h1 className="popup__title chapter-subtitle">Order a call</h1>
                <div className="popup__green-block"></div>
                <p className="popup__info">
                    Enter your details and we will contact you. Your data will under no circumstances be passed on to third parties.
                </p>

                <Formik
                    initialValues = {{ 
                        name: '',
                        phone: ''
                    }}
                    validationSchema = {object({
                        name: string().min(4, 'No less than 4 symbols!').required('Required!'),
                        phone: number().min(10, 'No less than 10 number!').required('Required!'),
                    })}
                    onSubmit = {(values, { resetForm }) => {
                        console.log(JSON.stringify(values, null, 2));
                        resetForm();
                    }}
                >
                    {({ errors, isSubmitting }) => (
                        <Form className="popup__form questions__form">
                            <TextInput 
                                type="text" 
                                name="name"
                                className="questions__form-name" 
                                placeholder="Your name" 
                            />
                            <TextInput 
                                type="tel" 
                                name="phone"
                                className="questions__form-phone" 
                                placeholder="+44 171 77 77 77" 
                            />
                            <button 
                                type="submit" 
                                className="questions__form-btn colored-btn"
                                disabled={isSubmitting || errors.name || errors.phone}
                            >Send</button>
                            <p className="questions__form-policy">
                                By clicking on the "Send" button, I consent to the processing of personal data in accordance with the <Link to="/policy">Privacy Policy</Link>.
                            </p>
                        </Form> 
                    )}
                </Formik>
            </div>
        </div>
    )
};

export default Popup;