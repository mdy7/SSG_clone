import React from 'react';

import AuthTermsList from '../ui/Auth/AuthTermsList';
import AuthInput from '../ui/Auth/AuthInput';

export default function AuthModal({closeModal}:any) {
    const terms = ["개인정보 이용 및 제공 동의", "통신사 이용약관 동의", "고유식별정보 처리 동의", "서비스 이용약관 동의"]
    
    return (
        <div className='w-full h-[450px] px-[15px] py-5 bg-zinc-100 absolute'>
                <AuthTermsList terms={terms}/>
                <AuthInput/>
        </div>
    )
}
