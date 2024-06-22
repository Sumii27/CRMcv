'use client';
import SEO from '@/components/SEO/seo';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';

const MAX_DISPLAY = 5;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const formatDateFromTimestamp = (timestamp) => {
    const date = new Date(
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
    );
    return format(date, 'MMMM dd, yyyy');
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const generateDynamicLink = (blogId) => {
        const dynamicLinkDomain = 'your_dynamic_link_domain';
        const link = `https://ursolutiontech.com/${blogId}`;

        const dynamicLink = `https://${dynamicLinkDomain}/?link=${encodeURIComponent(
          link
        )}`;

        return dynamicLink;
      };

      try {
        const snapshot = await getDocs(collection(db, 'ursolutionblog'));

        const blogList = snapshot.docs.map((doc) => {
          const blogData = doc.data();
          const dynamicLink = generateDynamicLink(doc.id);
          return {
            id: doc.id,
            ...blogData,
            dynamicLink: dynamicLink,
          };
        });

        setBlogs(blogList);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <SEO
        title='Blog | CRM Comparison'
        description='Read our latest blog posts on CRM trends and reviews.'
      />
      <Navbar />
      <main className='container mx-auto p-4 pt-20'>
        <div className='divide-y divide-gray-200 dark:divide-gray-700'>
          <div className='space-y-2 pb-8 pt-6 md:space-y-5'>
            <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
              Blog
            </h1>
            <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
              Read our latest blog posts on CRM trends and reviews.
            </p>
          </div>
          <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
            {!blogs.length && 'No posts found.'}
            {blogs.map((blog) => {
              const {
                id,
                date,
                title,
                shortDescription,
                author,
                image,
                tag,
                timetoRead,
                dynamicLink,
              } = blog;
              return (
                <li key={id} className='py-12'>
                  <article className='transition-transform transform hover:-translate-y-1 hover:shadow-lg bg-white dark:bg-gray-800 p-6 rounded-lg'>
                    <div className='grid grid-cols-1 xl:grid-cols-4 xl:gap-6'>
                      <div className='mb-4 xl:mb-0'>
                        <img
                          src={image}
                          alt={title}
                          className='w-full h-auto rounded-lg shadow-md'
                        />
                        <dl className='mt-4'>
                          <dt className='sr-only'>Published on</dt>
                          <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                            <time dateTime={formatDateFromTimestamp(date)}>
                              {formatDateFromTimestamp(date)}
                            </time>
                          </dd>
                        </dl>
                      </div>
                      <div className='space-y-5 xl:col-span-3'>
                        <div className='space-y-6'>
                          <div>
                            <h2 className='text-2xl font-bold leading-8 tracking-tight mb-4'>
                              <span className='text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400'>
                                {title}
                              </span>
                            </h2>
                            <div className='flex items-center space-x-2 mb-4'>
                              <FaUser className='text-gray-500 dark:text-gray-400' />
                              <span className='text-gray-500 dark:text-gray-400'>
                                {author}
                              </span>
                            </div>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                              {tag} · {timetoRead} min read
                            </p>
                          </div>
                          <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                            {shortDescription}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
