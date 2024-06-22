import SEO from '@/components/SEO/seo';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { FaUserFriends, FaCogs, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <SEO
        title='About Us | CRM Comparison'
        description='Learn more about CRM Comparison and our mission to provide unbiased CRM reviews.'
      />
      <Navbar />
      <main className='container mx-auto p-4 pt-20'>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
    <div className='flex flex-col justify-center items-center md:items-start border transition-transform transform hover:-translate-y-1 hover:shadow-lg bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md'>
      <h1 className='text-4xl font-bold mb-4 text-center md:text-left'>
        About Us
      </h1>
      <p className='text-lg mb-4'>
        At CRM Comparison, we're passionate about helping businesses
        thrive with the right CRM solution. Our mission is to provide
        unbiased reviews and comparisons to empower businesses in making
        informed decisions. Whether you're a startup looking to scale or an established enterprise seeking efficiency, we're here to guide you through the CRM landscape. Our team consists of CRM experts with years of experience in the industry. We regularly update our content to reflect the latest trends and developments in the CRM market.
      </p>
    </div>
    <div className='flex flex-col justify-center items-center md:items-start space-y-6'>
      <div className='flex items-center border transition-transform transform hover:-translate-y-1 hover:shadow-lg bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md'>
        <FaUserFriends className='text-6xl font-bold mr-4 text-blue-500' />
        <div>
          <h2 className='text-3xl font-bold mb-2'>Our Community</h2>
          <p className='text-lg'>
            Join our vibrant community of CRM enthusiasts, where you can
            share insights, best practices, and success stories. Connect
            with fellow users and CRM experts to expand your knowledge
            and network.
          </p>
        </div>
      </div>
      <div className='flex items-center border transition-transform transform hover:-translate-y-1 hover:shadow-lg bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md'>
        <FaCogs className='text-6xl font-bold mr-4 text-green-500' />
        <div>
          <h2 className='text-3xl font-bold mb-2'>Our Expertise</h2>
          <p className='text-lg'>
            With years of experience in the CRM industry, our experts
            provide comprehensive reviews and analyses to help you find
            the perfect CRM solution. We evaluate CRM platforms based on
            key factors such as features, scalability, ease of use, and
            customer support to ensure that you make an informed decision.
          </p>
        </div>
      </div>
      <div className='flex items-center border transition-transform transform hover:-translate-y-1 hover:shadow-lg bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md'>
        <FaChartLine className='text-6xl font-bold mr-4 text-yellow-500' />
        <div>
          <h2 className='text-3xl font-bold mb-2'>Our Commitment</h2>
          <p className='text-lg'>
            We're committed to transparency, integrity, and delivering
            value to our users. Your success is our success. We strive to
            maintain objectivity in our reviews and recommendations, and
            we continuously seek feedback to improve our services and
            provide the best possible experience for our community.
          </p>
        </div>
      </div>
    </div>
  </div>
</main>
      <Footer />
    </>
  );
};

export default About;
