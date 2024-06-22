'use client';
import React from 'react';
import SEO from '@/components/SEO/seo';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import {
  FaRegLightbulb,
  FaChartLine,
  FaUsers,
  FaCog,
  FaBullhorn,
  FaHandsHelping,
  FaQuoteRight,
  FaRegPlayCircle,
  FaEnvelope,
  FaCalendarAlt,
  FaNewspaper,
  FaQuestionCircle,
} from 'react-icons/fa';
import Link from 'next/link';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase/config';

const Home = () => {
  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      fname: Yup.string().required('First name is required'),
      lname: Yup.string().required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await addDoc(collection(db, 'form-submissions'), values);
        resetForm();
        toast.success('Your message has been sent successfully!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { background: '#25D366', color: '#fff' },
        });
      } catch (error) {
        toast.error(`Error submitting form: ${error.message}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { background: '#FF073A', color: '#fff' },
        });
      }
    },
  });
  return (
    <div className='flex flex-col min-h-screen'>
      {/* <ToastContainer /> */}
      <SEO
        title='Home | CRMcv'
        description='Compare Zoho CRM, Odoo CRM, and Oracle CRM to find the best solution for your needs.'
      />
      <Navbar />
      <main className='flex-grow container mx-auto p-4 pt-20'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold mb-4 text-center'>
            Welcome to CRMcv
          </h1>
          <p className='text-lg mb-8 text-center'>
            Your go-to resource for comparing the top CRM solutions on the
            market. Explore our in-depth comparisons and expert insights to make
            an informed decision.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-blue-200 p-6 rounded-lg text-center'>
              <FaRegLightbulb className='text-5xl mb-4 mx-auto text-blue-600' />
              <h2 className='text-xl font-semibold mb-2'>Expert Insights</h2>
              <p className='text-gray-700'>
                Get expert analysis and insights into the latest CRM trends and
                technologies.
              </p>
              <p className='text-gray-700 mt-2'>
                Our team of seasoned professionals regularly publishes articles,
                reports, and whitepapers that delve deep into the CRM landscape.
                Stay ahead of the curve with our expert commentary and advice.
              </p>
            </div>
            <div className='bg-green-200 p-6 rounded-lg text-center'>
              <FaChartLine className='text-5xl mb-4 mx-auto text-green-600' />
              <h2 className='text-xl font-semibold mb-2'>
                Comprehensive Comparisons
              </h2>
              <p className='text-gray-700'>
                Compare Zoho CRM, Odoo CRM, and Oracle CRM to find the best
                solution for your business needs.
              </p>
              <p className='text-gray-700 mt-2'>
                We provide side-by-side comparisons of features, pricing,
                usability, and more. Our detailed analysis helps you understand
                the strengths and weaknesses of each platform.
              </p>
            </div>
            <div className='bg-yellow-200 p-6 rounded-lg text-center'>
              <FaUsers className='text-5xl mb-4 mx-auto text-yellow-600' />
              <h2 className='text-xl font-semibold mb-2'>Community Support</h2>
              <p className='text-gray-700'>
                Join our community of CRM enthusiasts to share tips, best
                practices, and success stories.
              </p>
              <p className='text-gray-700 mt-2'>
                Engage with like-minded professionals, participate in forums,
                and attend our webinars. Together, we can learn and grow in the
                ever-evolving world of CRM.
              </p>
            </div>
            <div className='bg-purple-200 p-6 rounded-lg text-center'>
              <FaCog className='text-5xl mb-4 mx-auto text-purple-600' />
              <h2 className='text-xl font-semibold mb-2'>Advanced Features</h2>
              <p className='text-gray-700'>
                Discover advanced features and integrations that can enhance
                your CRM experience.
              </p>
              <p className='text-gray-700 mt-2'>
                We cover everything from automation and AI to custom reporting
                and third-party integrations. Learn how to leverage these tools
                to boost your business operations.
              </p>
            </div>
            <div className='bg-red-200 p-6 rounded-lg text-center'>
              <FaBullhorn className='text-5xl mb-4 mx-auto text-red-600' />
              <h2 className='text-xl font-semibold mb-2'>Latest News</h2>
              <p className='text-gray-700'>
                Stay updated with the latest news and updates in the CRM
                industry.
              </p>
              <p className='text-gray-700 mt-2'>
                Our news section provides timely updates on new product
                releases, feature enhancements, and industry events. Never miss
                out on important developments.
              </p>
            </div>
            <div className='bg-teal-200 p-6 rounded-lg text-center'>
              <FaHandsHelping className='text-5xl mb-4 mx-auto text-teal-600' />
              <h2 className='text-xl font-semibold mb-2'>Customer Support</h2>
              <p className='text-gray-700'>
                Learn about the customer support options available with each CRM
                platform.
              </p>
              <p className='text-gray-700 mt-2'>
                We evaluate the responsiveness, availability, and quality of
                support offered by different CRM providers. Ensure you have the
                help you need when you need it.
              </p>
            </div>
          </div>
          {/* New Sections Start Here */}
          <section className='mt-8 w-full'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              User Testimonials
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <FaQuoteRight className='text-3xl mb-4 text-blue-600' />
                <p className='text-gray-700 italic'>
                  "CRMcv helped us choose the perfect CRM for our needs. Their
                  insights were invaluable."
                </p>
                <p className='text-gray-700 font-semibold mt-2'>
                  - Sarah M., Marketing Manager
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <FaQuoteRight className='text-3xl mb-4 text-blue-600' />
                <p className='text-gray-700 italic'>
                  "Thanks to CRMcv, we were able to compare and select a CRM
                  that fit our budget and requirements."
                </p>
                <p className='text-gray-700 font-semibold mt-2'>
                  - James K., Business Owner
                </p>
              </div>
            </div>
          </section>
          <section className='mt-8 w-full'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Featured Case Studies
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-2'>Company A</h3>
                <p className='text-gray-700'>
                  Company A streamlined their sales process and increased
                  efficiency by implementing Zoho CRM.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-2'>Company B</h3>
                <p className='text-gray-700'>
                  Company B improved customer engagement and support using Odoo
                  CRM’s features.
                </p>
              </div>
            </div>
          </section>
          <section className='mt-8 w-full'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Interactive Comparison Tool
            </h2>
            <div className='bg-gray-100 p-6 rounded-lg shadow-md text-center'>
              <p className='text-gray-700'>
                Use our interactive tool to compare the top CRM solutions based
                on your specific needs.
              </p>
              <button className='mt-4 py-2 px-4 bg-blue-600 text-white rounded'>
                <Link href='/crm-comparisons'>Compare Now</Link>
              </button>
            </div>
          </section>
          <section className='mt-8 w-full'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Video Tutorials and Demos
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <FaRegPlayCircle className='text-3xl mb-4 text-red-600' />
                <p className='text-gray-700'>
                  Watch our video tutorial on how to set up and use Zoho CRM
                  effectively.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <FaRegPlayCircle className='text-3xl mb-4 text-red-600' />
                <p className='text-gray-700'>
                  Explore the features of Odoo CRM in our comprehensive demo
                  video.
                </p>
              </div>
            </div>
          </section>
          {/* <section className='mt-8 w-full'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Newsletter Signup
            </h2>
            <div className='bg-gray-100 p-6 rounded-lg shadow-md text-center'>
              <p className='text-gray-700'>
                Stay updated with the latest CRM news and insights by
                subscribing to our newsletter.
              </p>
              <form className='mt-4'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='py-2 px-4 border rounded mr-2'
                />
                <button
                  type='submit'
                  className='py-2 px-4 bg-blue-600 text-white rounded'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section> */}
          <section className='mt-8 w-full'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Upcoming Events and Webinars
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <FaCalendarAlt className='text-3xl mb-4 text-green-600' />
                <h3 className='text-xl font-semibold mb-2'>
                  Webinar: Enhancing CRM with AI
                </h3>
                <p className='text-gray-700'>
                  Join us for a live webinar on integrating AI into your CRM for
                  better customer insights.
                </p>
                <p className='text-gray-700 mt-2'>
                  <strong>Date:</strong> June 25, 2024
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <FaCalendarAlt className='text-3xl mb-4 text-green-600' />
                <h3 className='text-xl font-semibold mb-2'>
                  Event: CRM Expo 2024
                </h3>
                <p className='text-gray-700'>
                  Attend the annual CRM Expo to network with industry leaders
                  and explore the latest technologies.
                </p>
                <p className='text-gray-700 mt-2'>
                  <strong>Date:</strong> August 14-16, 2024
                </p>
              </div>
            </div>
          </section>
          <section className='mt-8 w-full'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Blog Highlights
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <FaNewspaper className='text-3xl mb-4 text-teal-600' />
                <h3 className='text-xl font-semibold mb-2'>
                  5 Tips for Choosing the Right CRM
                </h3>
                <p className='text-gray-700'>
                  Read our latest blog post for practical advice on selecting
                  the best CRM for your business.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <FaNewspaper className='text-3xl mb-4 text-teal-600' />
                <h3 className='text-xl font-semibold mb-2'>
                  Maximizing CRM Efficiency
                </h3>
                <p className='text-gray-700'>
                  Learn how to optimize your CRM system to improve workflow and
                  boost productivity.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <FaNewspaper className='text-3xl mb-4 text-teal-600' />
                <h3 className='text-xl font-semibold mb-2'>
                  CRM Trends for 2024
                </h3>
                <p className='text-gray-700'>
                  Stay ahead of the competition with our insights into the top
                  CRM trends to watch in 2024.
                </p>
              </div>
            </div>
          </section>
          <section className='mt-8 w-full'>
            <h2 className='text-3xl font-bold mb-4 text-center'>Contact Us</h2>
            <div className='bg-gray-100 p-6 rounded-lg shadow-md text-center'>
              <p className='text-gray-700'>
                Have questions or need assistance? Reach out to us, and we’ll be
                happy to help.
              </p>
              <form className='mt-4' onSubmit={formik.handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <input
                      type='text'
                      placeholder='First Name'
                      className='py-2 px-4 border rounded w-full'
                      name='fname'
                      value={formik.values.fname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      required
                    />
                    {formik.touched.fname && formik.errors.fname && (
                      <p className='text-red-500 text-sm'>
                        {formik.errors.fname}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type='text'
                      placeholder='Last Name'
                      className='py-2 px-4 border rounded w-full'
                      name='lname'
                      value={formik.values.lname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      required
                    />
                    {formik.touched.lname && formik.errors.lname && (
                      <p className='text-red-500 text-sm'>
                        {formik.errors.lname}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type='email'
                      placeholder='Email'
                      className='py-2 px-4 border rounded w-full'
                      name='email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      required
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className='text-red-500 text-sm'>
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type='text'
                      placeholder='Phone Number'
                      className='py-2 px-4 border rounded w-full'
                      name='phone'
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      required
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className='text-red-500 text-sm'>
                        {formik.errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <textarea
                  placeholder='Your Message'
                  className='py-2 px-4 border rounded w-full mt-4'
                  rows={5}
                  name='message'
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.message && formik.errors.message && (
                  <p className='text-red-500 text-sm'>
                    {formik.errors.message}
                  </p>
                )}
                <button
                  type='submit'
                  className='mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300'
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
          <section className='mt-8 w-full'>
            <h2 className='text-3xl font-bold mb-4 text-center'>
              Frequently Asked Questions
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <FaQuestionCircle className='text-3xl mb-4 text-gray-600' />
                <h3 className='text-xl font-semibold mb-2'>What is a CRM?</h3>
                <p className='text-gray-700'>
                  A CRM (Customer Relationship Management) system helps
                  businesses manage their customer interactions and data
                  throughout the customer lifecycle.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <FaQuestionCircle className='text-3xl mb-4 text-gray-600' />
                <h3 className='text-xl font-semibold mb-2'>
                  How do I choose the right CRM?
                </h3>
                <p className='text-gray-700'>
                  Consider factors like your business size, industry, budget,
                  and specific needs when choosing a CRM. Use our comparison
                  tools and resources to help make your decision.
                </p>
              </div>
            </div>
          </section>
          {/* New Sections End Here */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
