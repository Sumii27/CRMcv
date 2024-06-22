'use client';
import React, { useState } from 'react';
import SEO from '@/components/SEO/seo';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import {
  FaCheckCircle,
  FaTimesCircle,
  FaArrowUp,
  FaArrowDown,
  FaPrint,
  FaSave,
} from 'react-icons/fa';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// Real CRM data array with icons
const crmData = [
  {
    name: 'Zoho CRM',
    description:
      'Zoho CRM is a cloud-based customer relationship management platform that helps businesses of all sizes manage their sales, marketing, and customer support processes.',
    features: [
      'Lead Management',
      'Contact Management',
      'Workflow Automation',
      'Sales Automation',
    ],
    benefits: [
      'User-friendly interface',
      'Robust features',
      'Affordable pricing',
    ],
    drawbacks: ['Limited customization options', 'Integration limitations'],
    image: '/images/zoho-crm.png',
  },
  {
    name: 'Odoo CRM',
    description:
      'Odoo CRM is an open-source customer relationship management platform that offers a suite of integrated business applications.',
    features: [
      'Lead Management',
      'Contact Management',
      'Email Marketing',
      'Reporting',
    ],
    benefits: [
      'Open-source and customizable',
      'Integrated with other Odoo modules',
      'Cost-effective',
    ],
    drawbacks: ['Requires technical expertise', 'Less user-friendly'],
    image: '/images/odoo-crm.png',
  },
  {
    name: 'Oracle CRM',
    description:
      'Oracle CRM is an enterprise-grade customer relationship management platform that offers a wide range of functionalities for sales, marketing, and service automation.',
    features: [
      'Sales Force Automation',
      'Marketing Automation',
      'Customer Service',
      'Analytics',
    ],
    benefits: [
      'Scalability and performance',
      "Integration with Oracle's extensive product suite",
      'Comprehensive feature set',
    ],
    drawbacks: [
      'Complexity and learning curve',
      'Higher cost compared to other CRMs',
    ],
    image: '/images/oracle-crm.png',
  },
  {
    name: 'Salesforce',
    description:
      'Salesforce is a cloud-based CRM platform that provides comprehensive CRM solutions for sales, service, marketing, and more.',
    features: [
      'Sales Automation',
      'Customer Service',
      'Marketing Automation',
      'Analytics',
    ],
    benefits: [
      'Highly customizable',
      'Strong community support',
      'Extensive integrations',
    ],
    drawbacks: [
      'Expensive for small businesses',
      'Complex setup and maintenance',
    ],
    image: '/images/salesforce-crm.png',
  },
  {
    name: 'HubSpot CRM',
    description:
      'HubSpot CRM is designed to help businesses grow better by providing tools for sales, marketing, and customer service.',
    features: [
      'Contact Management',
      'Email Tracking',
      'Sales Automation',
      'Marketing Tools',
    ],
    benefits: [
      'Free tier available',
      'Easy to use',
      'Comprehensive marketing tools',
    ],
    drawbacks: ['Limited advanced features', 'Scaling up can be expensive'],
    image: '/images/hubspot-crm.png',
  },
  {
    name: 'Pipedrive',
    description:
      'Pipedrive is a sales-focused CRM that helps teams visualize their sales processes and close deals more efficiently.',
    features: [
      'Pipeline Management',
      'Activity Reminders',
      'Sales Reporting',
      'Email Integration',
    ],
    benefits: ['Intuitive interface', 'Affordable', 'Strong sales tracking'],
    drawbacks: ['Limited customization', 'Fewer marketing features'],
    image: '/images/pipedrive-crm.png',
  },
];

const CRMComparisonPage = () => {
  const [selectedCRMs, setSelectedCRMs] = useState(crmData.map(() => false));
  const [sortCriterion, setSortCriterion] = useState(null);
  const [ascending, setAscending] = useState(true);

  const handleCRMSelection = (index) => {
    const newSelection = [...selectedCRMs];
    newSelection[index] = !newSelection[index];
    setSelectedCRMs(newSelection);
  };

  const handleSort = (criterion) => {
    setSortCriterion(criterion);
    setAscending(criterion === sortCriterion ? !ascending : true);
  };

  const handleSaveAsPDF = () => {
    const doc = new jsPDF();
    doc.text('CRM Comparison', 10, 10);
    const data = selectedCRMs
      .map((selected, i) =>
        selected
          ? [
              crmData[i].name,
              crmData[i].description,
              crmData[i].features.join(', '),
              crmData[i].benefits.join(', '),
              crmData[i].drawbacks.join(', '),
            ]
          : null
      )
      .filter((row) => row !== null);

    doc.autoTable({
      head: [['Name', 'Description', 'Features', 'Benefits', 'Drawbacks']],
      body: data,
    });

    doc.save('crm-comparison.pdf');
  };

  const sortedCRMs = [...crmData];
  if (sortCriterion) {
    sortedCRMs.sort((a, b) => {
      if (ascending) {
        return a[sortCriterion].localeCompare(b[sortCriterion]);
      } else {
        return b[sortCriterion].localeCompare(a[sortCriterion]);
      }
    });
  }

  return (
    <>
      <SEO
        title='CRM Comparison Tool | CRMcv'
        description='Use our tool to compare CRM systems based on features, benefits, and drawbacks.'
      />
      <Navbar />
      <main className='container mx-auto p-4 pt-20'>
        <h1 className='text-4xl font-bold mb-8 text-center'>
          CRM Comparison Tool
        </h1>

        <div className='flex justify-between mb-4'>
          <div>
            <button
              className='mr-2 py-2 px-4 bg-blue-600 text-white rounded'
              onClick={handleSaveAsPDF}
              disabled={selectedCRMs?.length === 0}
            >
              <FaSave className='inline mr-2' /> Save as PDF
            </button>
            {/* <button
              className='py-2 px-4 bg-green-600 text-white rounded'
              onClick={() => window.print()}
            >
              <FaPrint className='inline mr-2' /> Print
            </button> */}
          </div>
          <div className='flex items-center space-x-4'>
            <label htmlFor='sortCriterion'>Sort by:</label>
            <select
              id='sortCriterion'
              className='py-2 px-4 border rounded'
              onChange={(e) => handleSort(e.target.value)}
              value={sortCriterion}
            >
              <option value=''>Select</option>
              <option value='name'>Name</option>
              <option value='description'>Description</option>
            </select>
            <button
              className='py-2 px-4 bg-gray-600 text-white rounded'
              onClick={() => setAscending(!ascending)}
            >
              {ascending ? (
                <FaArrowUp className='inline' />
              ) : (
                <FaArrowDown className='inline' />
              )}
            </button>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white dark:bg-gray-800'>
            <thead>
              <tr>
                <th className='px-4 py-2'>Select</th>
                <th className='px-4 py-2'>Name</th>
                <th className='px-4 py-2'>Description</th>
                <th className='px-4 py-2'>Features</th>
                <th className='px-4 py-2'>Benefits</th>
                <th className='px-4 py-2'>Drawbacks</th>
              </tr>
            </thead>
            <tbody>
              {sortedCRMs.map((crm, index) => (
                <tr
                  key={index}
                  className={
                    selectedCRMs[index] ? 'bg-gray-100 dark:bg-gray-700' : ''
                  }
                >
                  <td className='border px-4 py-2'>
                    <input
                      type='checkbox'
                      checked={selectedCRMs[index]}
                      onChange={() => handleCRMSelection(index)}
                    />
                  </td>
                  <td className='border px-4 py-2'>{crm.name}</td>
                  <td className='border px-4 py-2'>{crm.description}</td>
                  <td className='border px-4 py-2'>
                    <ul className='list-disc list-inside'>
                      {crm.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                  <td className='border px-4 py-2'>
                    <ul className='list-disc list-inside'>
                      {crm.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </td>
                  <td className='border px-4 py-2'>
                    <ul className='list-disc list-inside'>
                      {crm.drawbacks.map((drawback, i) => (
                        <li key={i}>{drawback}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CRMComparisonPage;
