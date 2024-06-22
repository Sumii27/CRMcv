import Link from 'next/link';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
const BlogCard = ({ title, description, slug, author, publicationDate }) => {
  return (
    <div className='border p-4 rounded-md shadow-md flex flex-col h-full'>
      <div className='flex-grow'>
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        <p className='text-gray-600 mb-4'>{description}</p>
      </div>
      <div className='flex items-center text-gray-500'>
        <FaCalendarAlt className='mr-1' />
        <span>{publicationDate}</span>
        <FaUser className='ml-4 mr-1' />
        <span>{author}</span>
      </div>
      <div className='mt-auto'>
        <Link href={`/blog/${slug}`}>
          <h4 className='text-blue-500 hover:underline'>Read more</h4>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
