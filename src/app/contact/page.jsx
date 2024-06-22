'use client';
import React from 'react';
import SEO from '@/components/SEO/seo';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '@/firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Your name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Your email is required'),
    service: Yup.string().required('Service selection is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      service: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await addDoc(collection(db, 'form-submissions'), values);
        resetForm();
        toast.success(
          'Your request has been sent successfully. We will contact you soon!',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { background: '#25D366', color: '#fff' },
            bodyClassName: 'toast-body',
          }
        );
      } catch (error) {
        toast.error('Error submitting form: ' + error.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { background: '#FF073A', color: '#fff' },
          bodyClassName: 'toast-body',
        });
      }
    },
  });

  return (
    <>
      <SEO
        title='Contact Us | CRM Comparison'
        description='Get in touch with the CRM Comparison team for any inquiries.'
      />
      <Navbar />
      <ToastContainer />
      <main className='container mx-auto p-4 pt-20'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Contact Us</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
          {/* Left Side: Additional Info */}
          <div className='lg:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-8 lg:mb-0 lg:mr-4'>
            <div className='mb-6'>
              <h2 className='text-2xl font-bold mb-4'>Headquarter</h2>
              <div className='flex items-center mb-2'>
                <FaMapMarkerAlt className='text-blue-500 mr-2 text-xl' />
                <p className='mb-0 font-bold'>
                  Riyadh, Alijanadriyah, Imam Abdullah Ibn Saud bin Abdulaziz
                </p>
              </div>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-bold mb-4'>Regional Office</h2>
              <div className='flex items-center mb-2'>
                <FaMapMarkerAlt className='text-blue-500 mr-2 text-xl' />
                <p className='mb-0 font-bold'>
                  H- #210, Icon Tower Barsha heights, Dubai, UAE
                </p>
              </div>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-bold mb-4'>
                Offshore Development Center
              </h2>
              <div className='flex items-center mb-2'>
                <FaMapMarkerAlt className='text-blue-500 mr-2 text-xl' />
                <p className='mb-0 font-bold'>
                  Of- #313, CMR Road, Kalyan Nagar, Bangalore, India
                </p>
              </div>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-bold mb-4'>Contact Information</h2>
              <div className='flex items-center mb-2'>
                <FaPhone className='text-blue-500 mr-2 text-xl' />
                <p className='mb-0 font-bold'>+966-500946604</p>
              </div>
              <div className='flex items-center mb-2'>
                <FaEnvelope className='text-blue-500 mr-2 text-xl' />
                <p className='mb-0 font-bold'>info@daamesnad.com</p>
              </div>
            </div>

            <div className='mb-6'>
              <h2 className='text-2xl font-bold mb-4'>
                Follow us on Social Media
              </h2>
              <div className='flex'>
                <a href='#' className='text-blue-500 mr-4'>
                  <FaFacebook className='text-xl' />
                </a>
                <a href='#' className='text-blue-500 mr-4'>
                  <FaTwitter className='text-xl' />
                </a>
                <a href='#' className='text-blue-500 mr-4'>
                  <FaLinkedin className='text-xl' />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className='lg:w-1/2 bg-white p-8 rounded-lg shadow-lg'>
            <form onSubmit={formik.handleSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 placeholder-gray-400'
                  placeholder='Enter your name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.name && !!formik.errors.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className='text-red-500 text-sm'>{formik.errors.name}</p>
                )}
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 placeholder-gray-400'
                  placeholder='Enter your email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.email && !!formik.errors.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className='text-red-500 text-sm'>{formik.errors.email}</p>
                )}
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='service'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Select the Service
                </label>
                <select
                  id='service'
                  name='service'
                  className='border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 placeholder-gray-400'
                  value={formik.values.service}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.service && !!formik.errors.service}
                >
                  <option value=''>Select a service</option>
                  <option value='CRM Implementation'>CRM Implementation</option>
                  <option value='CRM Support'>CRM Support</option>
                  <option value='CRM Consulting'>CRM Consulting</option>
                </select>
                {formik.touched.service && formik.errors.service && (
                  <p className='text-red-500 text-sm'>{formik.errors.service}</p>
                )}
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='message'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  className='border border-gray-300 rounded-md px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500 placeholder-gray-400'
                  placeholder='Enter your message'
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.message && !!formik.errors.message}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <p className='text-red-500 text-sm'>{formik.errors.message}</p>
                )}
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-medium mb-2'>
                  <input
                    type='checkbox'
                    className='mr-2'
                    required
                  />I have read and accept the website's data protection policy
                </label>
              </div>
              <button
                type='submit'
                className='bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 w-full'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <p className='text-lg mt-8 text-center'>
          If you have any questions or inquiries, feel free to reach out to us
          via email at contact@crmcomparison.com.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
