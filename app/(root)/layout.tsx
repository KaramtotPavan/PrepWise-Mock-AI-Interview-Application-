import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';

async function Layout({children}:{children:ReactNode}) {
  const isUserAuthenticated= await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout'>
      <nav>
        <Link href='/' className='flex items-center gap-2'>
        <Image src="/logo.svg" alt='logo' width={38} height={32} />
        <h2 className='text-primary-100'>Prepwise</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default Layout
