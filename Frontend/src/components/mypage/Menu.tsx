import Image from 'next/image';
import Link from 'next/link';

function Menu() {
    const MenuIcon = [
        { id: 1, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_like.svg', alt: '좋아요', url: '/myclip' },
        { id: 2, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_freq.svg', alt: '자주구매', url: '/ready' },
        { id: 3, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_event.svg', alt: '이벤트현황', url: '/ready' },
        { id: 4, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_qna.svg', alt: '상품Q&A', url: '/ready' },
        { id: 5, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_alert.svg', alt: '입고알림', url: '/ready' },
        { id: 6, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_gift.svg', alt: '선물함', url: '/ready' },
        { id: 7, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_giftcard.svg', alt: '상품권전환', url: '/ready' },
        { id: 8, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_albi.svg', alt: '알비백관리', url: '/ready' },
        { id: 9, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_delivery.svg', alt: '배송지관리', url: '/ready' },
        { id: 10, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_regular_delivery.svg', alt: '정기배송관리', url: '/ready' },
        { id: 11, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_notification.svg', alt: '알림함', url: '/ready' },
        { id: 12, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_chat.svg', alt: '고객센터톡', url: '/ready' },
        { id: 13, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_universe.svg', alt: '유니버스클럽', url: '/ready' },
        { id: 14, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_modify.svg', alt: '회원정보변경', url: '/ready' },
        { id: 15, src: 'https://sui.ssgcdn.com/ui/m_ssg/img/myssg_main/img_manage.svg', alt: '내정보관리', url: '/ready' },
    ]
    return (
        <section className="mt-8 p-4">
            <p className="font-extrabold text-xl">자주찾는 메뉴</p>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-y-3 gap-x-2 mb-10 mt-2 text-[11px]">
                {MenuIcon.map((icon) => (
                    <div key={icon.id}>
                        <Link href={icon.url}>
                            <Image
                                src={icon.src}
                                alt={icon.alt}
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                width={61}
                                height={61}
                            />
                            <p className="text-center whitespace-nowrap">{icon.alt}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="flex items-center border py-2 rounded-xl text-[12px]">
                <p className="flex-1 text-center "><Link href='/ready'>고객센터</Link></p>
                <p className="text-gray-200 text-sm">|</p>
                <p className="flex-1 text-center"><Link href='/ready'>e-mail 상담/답변</Link></p>

            </div>
        </section>
    )
}

export default Menu
