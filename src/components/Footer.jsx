import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer() {
  const { email } = useSelector(state => state.user);
  const socialLinks = useSelector(state => state.user.socialLinks);

  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          Let's work together on<br />
          your next product.
        </h2>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <a href={`mailto:${email}`} className="text-red-500 underline mb-4 md:mb-0">
            👉 {email}
          </a>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-900">Personal Blog</a>
            <a href={socialLinks?.github} className="text-emerald-500">Github</a>
            <a href={socialLinks?.linkedin} className="text-blue-500">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}