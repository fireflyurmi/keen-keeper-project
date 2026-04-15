import React from 'react';
import Image from 'next/image';
import facebookIcon from '@/assets/facebook.png';
import instagramIcon from '@/assets/instagram.png';
import twitterIcon from '@/assets/twitter.png';

export default function Footer() {
  return (
    <footer className="bg-[#244d3f] text-white py-5 sm:py-10 md:py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
          Keen<span className='font-medium'>Keeper</span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-sm max-w-xs sm:max-w-md mx-auto leading-relaxed mb-6 sm:mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <h2 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
          Social Links
        </h2>

        <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          {[instagramIcon, facebookIcon, twitterIcon].map((icon, idx) => (
            <div
              key={idx}
              className="w-10 h-10 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
            >
              <Image src={icon} alt="Social Icon" width={20} height={20} />
            </div>
          ))}
        </div>

        <div className="border-t border-gray-500 my-6 sm:my-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-gray-400 gap-3 sm:gap-4">
          
          <p className="text-center sm:text-left">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}