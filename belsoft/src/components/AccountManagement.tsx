import React from 'react';

export default function AccountManagement() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Account Management</h2>
        <a href="#" className="text-green-500 flex items-center">
          View More
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-5 gap-4 font-semibold text-gray-700 mb-2">
        <span>User ID</span>
        <span>Name of user</span>
        <span>User status</span>
        <span>Status</span>
        <span>Admin control</span>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-5 gap-4 items-center">
          <span>#CCCS45</span>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
            <span>Patrick James</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l-9-5v6l9 5 9-5v-6l-9 5z"></path>
            </svg>
            <span>Professional</span>
          </div>
          <span className="text-red-500 flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12"></path>
            </svg>
            Deactivated
          </span>
          <button className="bg-green-600 text-white px-3 py-1 rounded flex items-center">
            Activate
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4 items-center">
          <span>#CCCS45</span>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
            <span>Patrick James</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l-9-5v6l9 5 9-5v-6l-9 5z"></path>
            </svg>
            <span>Professional</span>
          </div>
          <span className="text-green-500 flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Activated
          </span>
          <button className="bg-red-500 text-white px-3 py-1 rounded flex items-center">
            Deactivate
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4 items-center">
          <span>#CCCS45</span>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
            <span>Patrick James</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l-9-5v6l9 5 9-5v-6l-9 5z"></path>
            </svg>
            <span>Professional</span>
          </div>
          <span className="text-green-500 flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Activated
          </span>
          <button className="bg-red-500 text-white px-3 py-1 rounded flex items-center">
            Deactivate
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4 items-center">
          <span>#CCCS45</span>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
            <span>Patrick James</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l-9-5v6l9 5 9-5v-6l-9 5z"></path>
            </svg>
            <span>Professional</span>
          </div>
          <span className="text-red-500 flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12"></path>
            </svg>
            Deactivated
          </span>
          <button className="bg-green-600 text-white px-3 py-1 rounded flex items-center">
            Activate
          </button>
        </div>
      </div>
    </section>
  );
}