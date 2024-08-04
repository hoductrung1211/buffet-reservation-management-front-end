export default function BuffetPrice() {
    return (
        <section id="price" className="py-20 bg-black/80 text-white border-b-2 border-primary">
            <div className="container flex flex-col gap-8">
                <h2 className="uppercase text-primary text-center text-4xl font-bold">
                    Giá Buffet
                </h2>
                <div className="mt-4 grid grid-cols-3 rounded-md bg-white/15">
                    {
                        prices.map(item => (
                            <div className="last:border-r-0 border-r-2">
                                <h3 className="py-2 h-20 flex flex-col justify-center items-center border-b-2 text-center text-xl">
                                    <span className=" text-2xl uppercase">
                                        {item.name}
                                    </span>
                                    {item.description ?? <p>{item.description}</p>}
                                </h3>
                                <p className="flex justify-between items-center px-6 py-4 text-xl">
                                    Người lớn:
                                    <span className="text-3xl text-primary">
                                        {item.adult.toLocaleString() + " ₫"}
                                    </span>
                                </p>
                                <p className="flex justify-between items-center px-6 py-4 text-xl">
                                    Trẻ em:
                                    <span className="text-3xl text-primary">
                                        {item.child.toLocaleString() + " ₫"}
                                    </span>
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col items-center">
                    <p>
                        Giá chưa bao gồm đồ uống và thuế VAT bắt buộc
                    </p>
                    <p>
                        Trẻ em: cao từ 100cm tới 130cm
                    </p>
                    <p>
                        Miễn phí cho trẻ em cao dưới 100cm
                    </p>
                </div>
            </div>
        </section>
    )
}

const prices = [
    {
        name: "Ngày thường",
        description: "(thứ 2 đến thứ 6)",
        adult: 100_000,
        child: 80_000
    },
    {
        name: "Cuối tuần",
        description: "(thứ 7 & Chủ nhật)",
        adult: 120_000,
        child: 100_000
    },
    {
        name: "Ngày lễ",
        adult: 140_000,
        child: 120_000
    }
]