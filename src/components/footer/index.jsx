import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import Logo from '../logo';

const Footer = () => {
  return (
    <footer className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-2 gap-4 mobile:grid-cols-4'>
          <Logo />
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Support</h3>
            <ul className='flex flex-col gap-1'>
              <li>
                <Link
                  className='duration-150 hover:text-cyan-600'
                  to='/'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className='duration-150 hover:text-cyan-600'
                  to='/'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className='duration-150 hover:text-cyan-600'
                  to='/'>
                  Downloads
                </Link>
              </li>
              <li>
                <Link
                  className='duration-150 hover:text-cyan-600'
                  to='/'>
                  Locate a Dealer
                </Link>
              </li>
              <li>
                <Link
                  className='duration-150 hover:text-cyan-600'
                  to='/'>
                  Product Registration
                </Link>
              </li>
              <li>
                <Link
                  className='duration-150 hover:text-cyan-600'
                  to='/'>
                  Parts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-lg font-semibold'>Ali Babuin</h3>
            <ul className='flex flex-col gap-1'>
              <li>
                <Link
                  className='duration-150 hover:text-cyan-600'
                  to='/'>
                  About Ali Babuin
                </Link>
              </li>
              <li>
                <Link
                  className='duration-150 hover:text-cyan-600'
                  to='/'>
                  Ali Babuin Design
                </Link>
              </li>
              <li>
                <Link
                  className='duration-150 hover:text-cyan-600'
                  to='/'>
                  Ali Babuin Developers
                </Link>
              </li>
              <li>
                <Link
                  className='duration-150 hover:text-cyan-600'
                  to='/'>
                  Ali Babuin Careers
                </Link>
              </li>
              <li>
                <Link
                  className='duration-150 hover:text-cyan-600'
                  to='/'>
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Socials</h3>
            <ul className='flex flex-col gap-4'>
              <li>
                <a
                  href='https://en.wikipedia.org/wiki/The_Social_Network'
                  target='_blank'
                  rel='noreferrer'
                  className=' group/social flex items-center gap-2 text-blue-600 duration-150 hover:text-blue-900'>
                  <BsFacebook size={25} />
                  <span className='leading-none text-neutral-700 duration-150 group-hover/social:text-cyan-700'>
                    Facebook
                  </span>
                </a>
              </li>
              <li>
                <a
                  href='https://en.wikipedia.org/wiki/The_Social_Network'
                  target='_blank'
                  rel='noreferrer'
                  className=' group/social flex items-center gap-2 text-blue-500 duration-150 hover:text-blue-800'>
                  <AiFillTwitterCircle size={30} />
                  <span className='leading-none text-neutral-700 duration-150 group-hover/social:text-cyan-700'>
                    Twitter
                  </span>
                </a>
              </li>
              <li>
                <a
                  href='https://en.wikipedia.org/wiki/The_Social_Network'
                  target='_blank'
                  rel='noreferrer'
                  className=' group/social flex items-center gap-2 text-pink-600 duration-150 hover:text-pink-900'>
                  <AiFillInstagram size={30} />
                  <span className='leading-none text-neutral-700 duration-150 group-hover/social:text-cyan-700'>
                    Instagram
                  </span>
                </a>
              </li>
              <li>
                <a
                  href='https://en.wikipedia.org/wiki/The_Social_Network'
                  target='_blank'
                  rel='noreferrer'
                  className=' group/social flex items-center gap-2 text-blue-400 duration-150 hover:text-blue-700'>
                  <AiFillLinkedin size={30} />
                  <span className='leading-none text-neutral-700 duration-150 group-hover/social:text-cyan-700'>
                    Linked In
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
