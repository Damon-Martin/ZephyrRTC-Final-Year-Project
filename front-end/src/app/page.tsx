'use client'

import { Suspense, startTransition, useState } from 'react';


import PageLoading from '@/components/page-loading';
import LoginCard from '@/components/login/login-card';


export default function LoginPage() {
  // This is only used in the login page which is distinct compared to other pages which are more similar with each other
  
  return (
    <div>
        <div className='bg-gradient-theme min-h-screen flex items-center justify-center'>
          <Suspense fallback={<PageLoading/>}>
            <LoginCard/>
          </Suspense>
        </div>
    </div>
  );
}