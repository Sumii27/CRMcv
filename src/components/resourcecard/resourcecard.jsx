import Link from 'next/link';

const ResourceCard = ({ title, description, downloadLink }) => {
  return (
    <div className='transition-transform transform hover:-translate-y-1 hover:shadow-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
    <h2 className='text-2xl font-bold mb-2'>{title}</h2>
      <p className='text-gray-600 mb-4'>{description}</p>
      {/* <Link href={downloadLink} passHref>
        <h4 className='text-blue-500 hover:underline cursor-pointer'>
          Download
        </h4>
      </Link> */}
    </div>
  );
};

export default ResourceCard;
