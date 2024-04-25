import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import { object, string, number } from 'yup';

import { useChangeHeader } from '../../hooks/changeHeader.hook';

import './Clients.scss';

const TextInput = ({label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label className="employee-order__form-label">
                {label}
                <input {...props} {...field}/>
                {meta.touched && meta.error ? <p className='error-message'>{meta.error }</p> : null}
            </label>
        </>
    )
};

const Clients = () => {

    useChangeHeader('#000000', '100px');

    return (
        <main className="employee-main-block chapter-margin">

            <section className="employee-main-title-block chapter-margin">
                <div className="container">
                    <h1 className="employee-main-title top-title">Bouquets</h1>
                    <h2 className="employee-main-subtitle top-subtitle">
                        <p className="employee-main-subtitle__first-part chapter-subtitle">Congratulations</p>
                        <p className="employee-main-subtitle__second-part chapter-subtitle">for your employees</p>
                    </h2>
                </div>
            </section>

            <section className="main-slogan chapter-margin bigger-text">
                <div className="container">
                    <p className="main-slogan__text">
                        If you have a large number of employees (or not so many) and you are tired of remembering each of their birthdays and how to congratulate them, then <span className="main-slogan__service green-text"> we can do it for you</span>.
                    </p>             
                </div>
            </section>

            <section className="more-information chapter-margin">
                <div className="container">
                    <div className="more-information__block">
                        <p className="more-information__text more-information__text--first-part bigger-text">
                            One option for cooperation is to provide us with a list of employees with their birthdays and we independently contact each one, make a bouquet or composition and deliver it at a convenient time to the employee either at his place of work or at his place of residence.                                             
                        </p>
                        <p className="more-information__text more-information__text--second-part bigger-text">
                            Another option for cooperation is to order bouquets yourself by a representative of the organization the day before the desired date.
                        </p>
                        <p className="more-information__text more-information__text--third-part bigger-text">
                            This way, you <span className="more-information__third-part-profit green-text">save the time</span> of other employees on collecting money to find a gift and deliver it to the recipient, and also protect yourself from the risk of missing out on any important people in the organization, and this is how you show care and attention to employees in order to ensure that your affairs are They treated the organization with utmost care and also did not miss important days.
                        </p>
                    </div>
                </div>
            </section>

            <section className="main-info-details chapter-margin">
                <div className="container">
                    <p className="main-info-details__text chapter-subtitle">
                        Bouquets can be made in the corporate color of the organization and it is possible to make congratulations on your corporate card, which we can make ourselves.
                    </p>
                    <p className="main-info-details__price bigger-text green-text">
                        The cost of one bouquet is at least £60.
                    </p>
                    <div className="main-info-details__inner grid-block bigger-text">
                        <div className="main-info-details__inner-item main-info-details__inner-item--first-title green-text">Number of applications per month</div>
                        <div className="main-info-details__inner-item main-info-details__inner-item--one">1-2</div>
                        <div className="main-info-details__inner-item main-info-details__inner-item--two">3-10</div>
                        <div className="main-info-details__inner-item main-info-details__inner-item--three">More than 10</div>
                        <div className="main-info-details__inner-item main-info-details__inner-item--second-title green-text">Nice bonuses</div>
                        <div className="main-info-details__inner-item main-info-details__inner-item--four">The cost of one delivery within the city is £10, in the suburbs - from £20</div>
                        <div className="main-info-details__inner-item main-info-details__inner-item--five">
                            <p>Delivery is free</p>
                            <p>Bouquet gift for a manager on his birthday</p>
                        </div>
                        <div className="main-info-details__inner-item main-info-details__inner-item--six">
                            <p>Delivery is free</p>
                            <p>Bouquet gift for a manager on his birthday</p>
                            <p>Festive tree before Christmas</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stages chapter-margin">
                <div className="container">
                    <div className="stages__block">
                        <h2 className="stages__title chapter-subtitle green-text">Stages of work:</h2>
                        <div className="stages__green-line"></div>
                        <ul className="stages__list">
                            <li className="stages__list-item common-subtitle">Filling out an application</li>
                            <li className="stages__list-item common-subtitle">Signing the contract</li>
                            <li className="stages__list-item common-subtitle">Presentation of flowers</li>
                            <li className="stages__list-item common-subtitle">Report on delivered orders</li>
                            <li className="stages__list-item common-subtitle">Payment</li>
                        </ul>  
                    </div>
                </div>           
            </section>

            <section className="employee-order">
                <div className="container">
                    <div className="employee-order__info chapter-subtitle">
                        If you have a single order, you can choose a bouquet in the catalog or order an individual bouquet and indicate its cost, and when placing an order in the basket, indicate that payment will be made from the organization’s bank account.
                    </div>
                    <p className="employee-order__make-order green-text">
                        Fill out the application:
                    </p>

                    <Formik
                        initialValues = {{ 
                            organization: '',
                            address: '',
                            contact_person: '',
                            phone: '',
                            cost: '',
                            email: ''
                        }}
                        validationSchema = {object({
                            organization: string().required('Required!'),
                            address: string().required('Required!'),
                            contact_person: string().required('Required!'),
                            phone: number().min(10, 'No less than 10 number!').required('Required!'),
                            cost: number().required('Required!'),
                            email: string().email('Invalid email!').required('Required!')
                        })}
                        onSubmit = {(values, { resetForm }) => {
                            console.log(JSON.stringify(values, null, 2));
                            resetForm();
                        }}
                    >
                        {({ errors, isSubmitting }) => (
                            <Form className="employee-order__form">
                                <div className="employee-order__form-inner flex">
                                    <TextInput 
                                        label="The name of your organization"
                                        type="text"
                                        name="organization" 
                                        className="employee-order__form-input" 
                                        placeholder="Enter the name of your organization"
                                    />
                                    <TextInput 
                                        label="Address"
                                        type="text" 
                                        name="address"
                                        className="employee-order__form-input"
                                        placeholder="Enter the address here"
                                    />
                                    <TextInput 
                                        label="Contact person"
                                        type="text"
                                        name="contact_person" 
                                        className="employee-order__form-input" 
                                        placeholder="Enter the name of contact person"
                                    />
                                    <TextInput 
                                        label="Phone number"
                                        type="tel" 
                                        name="phone"
                                        className="employee-order__form-input"
                                        placeholder="Enter the phone number here"
                                    />
                                    <TextInput 
                                        label="Approximate cost of the bouquet"
                                        type="number"
                                        name="cost" 
                                        className="employee-order__form-input" 
                                        placeholder="The cost of the bouquet"
                                    />
                                    <TextInput 
                                        label="Email"
                                        type="email" 
                                        name="email"
                                        className="employee-order__form-input"
                                        placeholder="Email"
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="employee-order__form-btn colored-btn"
                                    disabled={isSubmitting || errors.organization || errors.address || errors.contact_person || errors.cost || errors.phone || errors.email}
                                >Send</button>
                                <p className="employee-order__form-policy">
                                    By clicking on the "Send" button, I consent to the processing of personal data in accordance with the <Link to='/policy'> Privacy Policy</Link>.
                                </p>
                            </Form> 
                        )}
                    </Formik>                   
                </div>
            </section>

        </main> 
    )
};

export default Clients;