import Icon from "@/components/Icon";
import { EHomeLink } from "@/configs/links";
import Link from "next/link";

export default function Footer({

}) {
    return (
        <footer className="bg-red-50 py-10 px-8 grid grid-cols-3 gap-20">
            <section className="flex flex-col gap-4">
                <p className="font-bold">Nhà hàng Buffet Poseidon</p>
                <p><span className="font-bold">Địa chỉ:</span> Số 5, đường số 10, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh</p>
                <p>Copyright © 2024 Poseidon. All rights reserved.</p>
            </section>
            <section className="flex flex-col gap-4">
                <Link href={EHomeLink.HOME}>Trang chủ</Link>
                <Link href={EHomeLink.MENU}>Menu</Link>
                <Link href={EHomeLink.PRICE}>Giá buffet</Link>
                <Link href={EHomeLink.ABOUT_US}>Về chúng tôi</Link>
                <Link href={EHomeLink.CONTACTS}>Liên hệ</Link>
            </section>
            <section className="flex flex-col gap-4">
                <p className="flex gap-4"><Icon name="phone" size="lg" />0123456789</p>
                <p className="flex gap-4"><Icon name="envelope" size="lg"  />poseidon@gmail.com</p>
                <p className="flex gap-4"><Icon type="brands" name="facebook" size="lg" />poseidon</p>
            </section>
        </footer>
    )
}