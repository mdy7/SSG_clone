import React, { Suspense } from 'react';
import LoginForm from '@/components/forms/LoginForm';

export default function page() {
  return (
    <div>
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  )
}