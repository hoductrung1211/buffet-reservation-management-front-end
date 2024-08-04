import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about-us" className="py-20 bg-black/80 text-white  border-b-2 border-primary">
            <div className="container flex flex-col gap-5">
                <h2 className="uppercase text-primary text-center text-4xl font-bold">
                    Về chúng tôi
                </h2>
                <section className="mt-8 grid grid-cols-2">
                    <div className="relative w-full">
                        <Image
                            className="object-contain"
                            src={"https://cdn.buffetposeidon.com/app/media/about/image-cua.png"}
                            alt=""
                            fill
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl uppercase">Đa phong cách ẩm thực</h3>
                        <p className="mt-6 text-lg">
                            Lấy cảm hứng từ món quà của biển cả và với mong muốn mang lại nhiều sự lựa chọn cho thực khách, Nhà hàng Thần biển - Poseidon mang đến những phong cách ẩm thực đa dạng với hơn 200 món ăn tự chọn được chế biến tỉ mỉ.
                            <br />
                            <br />
                            Thực khách sẽ được thưởng thức thỏa thích không giới hạn hàng trăm món hải sản đa phong cách từ Á đến  Âu thông qua bàn tay điêu luyện của những đầu bếp hạng nhất. Trong đó, điểm nhấn ở Poseidon phải kể đến những món nướng BBQ đậm chất Hàn Quốc; sushi, sashimi và salad giàu truyền thống Nhật Bản; lẩu Thái tom yum hạng nhất và đặc biệt, các món hải sản được lấy cảm hứng từ công thức của những nhà hàng nổi tiếng ở Pháp.
                            <br />
                            <br />
                            Bằng đam mê của những người sáng lập cùng tâm huyết của những đầu bếp, Poseidon đặc biệt chú trọng tới chất lượng thực phẩm và cực kỳ khắt khe trong các khâu chế biến. Poseidon tự tin chinh phục những thực khách khó tính nhất thông qua phong cách ẩm thực khác biệt với chi phí tối ưu nhất cho mọi khách hàng.
                        </p>
                    </div>
                </section>
                <section className="mt-20 grid grid-cols-2">
                    <div>
                        <h3 className="text-2xl uppercase">Dịch vụ hạng nhất</h3>
                        <p className="mt-6 text-lg">Chúng tôi cam kết mang lại dịch vụ chuyên nghiệp thông qua mọi quy trình đào tạo, kiểm tra, giám sắt cực kỳ khắt khe. Chúng tôi muốn đảm bảo rằng, bất cứ thực khách nào thưởng thức ẩm thực tại nhà hàng Poseidon đều có cảm giác được phục vụ như những vị thần bằng những món ăn được đầu tư cầu kỳ và bằng đội ngũ phục vụ cực kỳ chuyên nghiệp.</p>
                    </div>
                    <div className="relative h-[520px]">
                        <Image
                            className="object-contain"
                            src={"https://cdn.buffetposeidon.com/app/media/about/image-dia.png"}
                            alt=""
                            fill
                        />
                    </div>
                </section>
            </div>
        </section>
    )
}