import SpecailPrice from '@/components/widgets/SpecailPrice';
import TabList from '@/components/widgets/TabList';

export default function page() {


  const TablistTitles = [
    { title: '전체', subtitle: '보기' },
    { title: '쓱~', subtitle: '특가' },
    { title: '오늘의', subtitle: '장보기' }
  ];

  return (
    <div className="w-full h-100">
      <TabList TablistTitles={TablistTitles} />
      <SpecailPrice />
    </div>
  )
}
