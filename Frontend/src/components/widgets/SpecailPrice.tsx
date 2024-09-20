import SpecialProduct from "../ui/SpecailProduct";

const getSpecialPriceListData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/special`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // console.log(data);
    return data.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default async function SpecailPrice() {
  
  const SpecialPriceList = await getSpecialPriceListData();
  // console.log("SpecialPriceList:", SpecialPriceList);

  return (
    <div>
      {SpecialPriceList.map((item:any) => (
        <SpecialProduct key={item.specialId} id={item.specialId} />
      ))}
    </div>
  );
}
