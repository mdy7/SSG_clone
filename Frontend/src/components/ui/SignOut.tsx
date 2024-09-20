'use client'

import { signOut } from 'next-auth/react';
import React from 'react';

export default function SignOut() {
    return (
        <div>
            <span onClick={() => signOut()}
                className='ml-3 mr-3 py-2 cursor-pointer'>
                로그아웃</span>
        </div>
    )
}
