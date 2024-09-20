"use client"
import { useSession } from "next-auth/react";
import { use, useEffect, useState } from "react";



function Profile() {
    const session = useSession();
    // console.log(session, 'mypage session')
    const token = session?.data?.user?.accessToken;
    const [name, setName] = useState('');

    useEffect(() => {
        const getClientData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/member`, {
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // console.log("data:", data);
                setName(data.data.name);
                // return data.data;
            } catch (error) {
                console.error('Error:', error);
            }
        };
        getClientData();
    }, [token]);

    return (
        <section className="p-4 pb-1 font-sans">
            <div>
                <h1 className="text-xl">{name} 님</h1>
                <h2 className="font-extrabold text-[19px] mt-4">SSG에서 즐거운 쇼핑 되세요!</h2>
            </div>
        </section>
    )
}
export default Profile
