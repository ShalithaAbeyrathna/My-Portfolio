import './contact.css';
import githubIcon from '../../assests/github.png';
import linkedInIcon from '../../assests/linkedin.png';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const formData = form.current.elements;

        if (!formData.from_name.value.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.from_email.value.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailPattern.test(formData.from_email.value)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.value.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name } = e.target;
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setSubmitSuccess(false);

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                'service_wp7gmyq', 
                'template_9j7a1lo', 
                form.current, 
                '_KIHrgyf7gOEQ-yC7'
            );
            
            console.log('Email sent successfully:', result.text);
            form.current.reset();
            setSubmitSuccess(true);
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send email. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className={`name ${errors.name ? 'error' : ''}`} 
                            placeholder='Your name' 
                            name='from_name' 
                            onChange={handleInputChange}
                        />
                        {errors.name && <div className="error-message">{errors.name}</div>}
                    </div>
                    
                    <div className="form-group">
                        <input
                            type="email"
                            className={`email ${errors.email ? 'error' : ''}`}
                            placeholder='Your Email'
                            name='from_email'
                            onChange={(e) => {
                                handleInputChange(e);
                                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                if (errors.email && emailPattern.test(e.target.value)) {
                                    setErrors(prev => ({ ...prev, email: '' }));
                                }
                            }}
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                    </div>
                    
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder='Your Message'
                            rows={5}
                            className={`msg ${errors.message ? 'error' : ''}`}
                            onChange={handleInputChange}
                        ></textarea>
                        {errors.message && <div className="error-message">{errors.message}</div>}
                    </div>
                    
                    <button
                        type="submit"
                        value="Send"
                        className='submitBtn'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                    
                    {submitSuccess && (
                        <div className="success-message">
                            Email sent successfully! I'll get back to you soon.
                        </div>
                    )}
                    
                    <div className="links">
                        <a href="https://github.com/ShalithaAbeyrathna" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" className="link" />
                        </a>
                        <a href="https://www.linkedin.com/in/shalitha-abeyrathna-999895337/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedInIcon} alt="LinkedIn" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;