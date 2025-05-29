import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Test Yechish Tizimi</h1>
        
        <div className="space-y-4">
          <Link href="/solo-quiz" className="block w-full">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
              Yakka Tartibda Test Yechish
            </button>
          </Link>
          
          <Link href="/group-quiz" className="block w-full">
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
              Guruh Bo'lib Test Yechish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 