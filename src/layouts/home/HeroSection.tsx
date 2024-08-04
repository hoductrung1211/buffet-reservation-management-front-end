import { Button } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative h-screen z-0 border-b-2 border-primary">
            <div className="absolute inset-0 grid place-items-center text-white bg-black/40 z-10">
                <div className="flex flex-col gap-10 text-center text-3xl">
                    <p>BUFFET</p>
                    <p className="text-9xl font-serif text-primary">Poseidon</p>
                    <p>Món quà từ biển cả</p>
                    <Button
                        className="mx-auto w-fit bg-primary text-2xl"
                        variant="contained"
                    >
                        Đặt bàn ngay
                    </Button>
                </div>
            </div>
            <Image
                className="object-cover"
                src={"https://cdn.buffetposeidon.com/app/media/slider/120223-slide-buffet-poseidon-1.jpg"}
                alt=""
                fill
            />
        </section>
    )
}