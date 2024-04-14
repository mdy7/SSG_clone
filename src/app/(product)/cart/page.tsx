import CartList from '@/components/pages/cart/CartList';
import DeliveryAddress from '@/components/pages/cart/DeliveryAddress';
import ChangeAddress from '@/components/pages/cart/ChangeAddress';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import '../cart/cart.css'

export default function Cart() {
    return (
        <main>
            <SimpleHeader title="장바구니" />
            <DeliveryAddress />
            <ChangeAddress />
            <CartList />
        </main>
    )
}