import { navType } from "@/types/navType";

export const mainNavMenuData: navType[] = [
  {
    id: 1,
    title: '홈',
    url: '/'
  },
  {
    id: 2,
    title: '특가',
    url: '/specialprice'
  },
  {
    id: 3,
    title: '베스트',
    url: '/ranking'
  },
  {
    id: 4,
    title: '명품',
    url: '/category/all?lCtgId=7&lCtgName=명품'
  },
  {
    id: 5,
    title: '뷰티',
    url: '/category/all?lCtgId=8&lCtgName=뷰티'
  },
  {
    id: 6,
    title: '패션',
    url: '/category/all?lCtgId=1&lCtgName=패션의류'
  },
  {
    id: 7,
    title: '브랜드',
    url: '/ready'
  },
]
