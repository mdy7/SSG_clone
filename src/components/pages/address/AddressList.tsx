import { DeliveryListType, DeliveryType } from "@/types/delivery/DeliveryListType";

export default function AddressList({DeliveryList}:{DeliveryList: DeliveryListType}) {

    return (
        <div className="flex w-full max-w-full max-h-full">
            <ul className="block w-full">
                {DeliveryList.map((delivery:DeliveryType) => (
                    <li
                        key={delivery.deliveryAddressId}
                        className=" py-5 px-4 border"
                        style={{ display: 'flex', fontSize: '13px' }}
                    >
                        <label className="flex items-center">
                            <div className="py-5">
                                <input type="radio" className="block relative w-5 h-5" />
                            </div>
                            <div className="flex-col ml-4">
                                <div>
                                    <strong>{delivery.addressName}</strong>
                                </div>
                                <p className="mt-1">
                                    [{delivery.zip}] {delivery.street}
                                </p>
                                <p className="mt-1">
                                    {delivery.recipient} / {delivery.phoneNumber}
                                </p>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}
