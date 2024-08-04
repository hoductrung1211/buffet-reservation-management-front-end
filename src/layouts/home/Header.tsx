import { EHomeLink } from "@/configs/links";
import Image from "next/image";
import Link from "next/link";

export default function Header({

}) {
    return (
        <header className="fixed top-0 left-0 right-0 bg-primary z-10">
            <div className="container h-16 flex justify-between items-center">
                <div className="relative w-14 h-14 grid place-items-center">
                    <Image src={"/logo/poseidon.png"} alt="poseidon-logo" fill />
                </div>
                <nav className="h-full flex gap-8 items-center font-bold">
                    <Link href={EHomeLink.HOME}>Trang chủ</Link>
                    <Link href={EHomeLink.MENU}>Menu</Link>
                    <Link href={EHomeLink.PRICE}>Giá buffet</Link>
                    <Link href={EHomeLink.ABOUT_US}>Về chúng tôi</Link>
                    <Link href={EHomeLink.CONTACTS}>Liên hệ</Link>
                </nav>
                <nav className="flex gap-8 items-center font-bold">
                    <Link href={EHomeLink.SIGN_IN}>Đăng nhập</Link>
                    <Link href={EHomeLink.SIGN_UP}>Đăng ký</Link>
                </nav>
            </div>
        </header>
    )
}