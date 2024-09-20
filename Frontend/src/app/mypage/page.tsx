import Profile from '@/components/mypage/Profile';
import Order from '@/components/mypage/Order';
import Menu from '@/components/mypage/Menu';
import Manage from '@/components/mypage/Manage';
import MyPoint from '@/components/mypage/MyPoint';
import MyPageBanner from '@/components/mypage/MyPageBanner';

function Mypage() {
    return (
        <div>
            <div className='pt-2 pb-9'>
            <Profile />
            <MyPoint />
            <MyPageBanner /> 
            </div> 
            <Order />
            <Menu />
            <div className=" bg-gray-100 h-2 mb-2 mt-4"></div>
            <Manage />
        </div>
    )
}
export default Mypage
