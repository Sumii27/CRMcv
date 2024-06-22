import SEO from '@/components/SEO/seo';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import ResourceCard from '@/components/resourcecard/resourcecard';

const Resources = () => {
  const resources = [
    {
      title: 'CRM Guide 2024',
      description: 'A comprehensive guide to CRM solutions in 2024.',
      downloadLink: '/downloads/crm-guide-2024.pdf',
    },
    {
      title: 'CRM Best Practices',
      description: 'Learn the best practices for implementing and using a CRM.',
      downloadLink: '/downloads/crm-best-practices.pdf',
    },
    {
      title: 'CRM Implementation Checklist',
      description:
        'Ensure a successful CRM implementation with this checklist.',
      downloadLink: '/downloads/crm-implementation-checklist.pdf',
    },
    {
      title: 'CRM Case Studies',
      description:
        'Read real-world case studies of successful CRM implementations.',
      downloadLink: '/downloads/crm-case-studies.pdf',
    },
    {
      title: 'CRM Whitepaper',
      description:
        'Explore in-depth analysis and insights into CRM strategies.',
      downloadLink: '/downloads/crm-whitepaper.pdf',
    },
    {
      title: 'CRM ROI Calculator',
      description:
        'Calculate the potential return on investment of CRM implementation.',
      downloadLink: '/downloads/crm-roi-calculator.pdf',
    },
    {
      title: 'CRM Training Manual',
      description:
        'Comprehensive training manual for CRM users and administrators.',
      downloadLink: '/downloads/crm-training-manual.pdf',
    },
  ];

  return (
    <>
      <SEO
        title='Resources | CRM Comparison'
        description='Download our free resources on CRM solutions and best practices.'
      />
      <Navbar />
      <main className='container mx-auto p-4 pt-20'>
        <h1 className='text-4xl font-bold mb-8'>Resources</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {resources.map((resource) => (
            <ResourceCard
              key={resource.downloadLink}
              title={resource.title}
              description={resource.description}
              downloadLink={resource.downloadLink}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
