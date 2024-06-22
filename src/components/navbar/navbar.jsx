import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4 fixed w-full z-10'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' passHref>
          <span className='flex items-center space-x-2'>
            <Image
              src='/favicon.png' // Ensure this path is correct
              alt='Zoho crm'
              width={60} // Adjust width as needed
              height={60} // Adjust height as needed
              className='rounded-full' // Optional: Add rounded corners to the image
            />
            {/* <span className='text-white text-lg font-bold'></span> */}
          </span>
        </Link>
        <div className='space-x-4 flex'>
          <Link href='/about' passHref>
            <span className='text-gray-300 hover:text-white cursor-pointer'>
              About
            </span>
          </Link>
          <Link href='/blog' passHref>
            <span className='text-gray-300 hover:text-white cursor-pointer'>
              Blog
            </span>
          </Link>
          <Link href='/crm-comparisons' passHref>
            <span className='text-gray-300 hover:text-white cursor-pointer'>
              CRM Comparisons
            </span>
          </Link>
          <Link href='/resources' passHref>
            <span className='text-gray-300 hover:text-white cursor-pointer'>
              Resources
            </span>
          </Link>
          <Link href='/contact' passHref>
            <span className='text-gray-300 hover:text-white cursor-pointer'>
              Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
