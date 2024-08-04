"use client";
import Image from "next/image";
import { useState } from "react";

export default function Menu() {
    const [selectedMenuCategoryId, setSelectedMenuCategoryId] = useState(1);

    function handleChangeMenuCategory(newMenuCategoryId: number) {
        setSelectedMenuCategoryId(newMenuCategoryId);
    }

    return (
        <section id="menu" className="py-20 bg-black/80 text-white  border-b-2 border-primary">
            <div className="container flex flex-col gap-5">
                <h2 className="uppercase text-primary text-center text-4xl font-bold">
                    Menu
                </h2>
                <div className="mt-4 grid grid-cols-12 gap-2">
                    <ul className="col-span-3 flex flex-col gap-8 text-xl font-bold">
                        {
                            menuCategories.map(menuC => (
                                <li
                                    className={`hover:cursor-pointer hover:text-primary ${menuC.menuCategoryId == selectedMenuCategoryId ? "text-primary" : ""}`}
                                    key={menuC.menuCategoryId}
                                    onClick={() => handleChangeMenuCategory(menuC.menuCategoryId)}
                                >
                                    {menuC.menuCategory}
                                </li>
                            ))
                        }
                    </ul>
                    <div className="col-span-9 grid grid-cols-3 gap-6">
                        {
                            menuCategories.find(menuC => menuC.menuCategoryId == selectedMenuCategoryId)?.menuItems.map(item => (
                                <div
                                    key={item.name}
                                    className="aspect-square flex flex-col border border-gray-400"
                                >
                                    <div className="relative grow">
                                        <Image
                                            className="object-cover"
                                            src={item.imageUrl}
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <div className="py-2 text-xl text-center">
                                        <p>{item.name}</p>
                                        <p className="text-gray-300">
                                            {item.price.toLocaleString(
                                                'en-VN',
                                                {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                }
                                            )}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

interface IMenuItem {
    name: string;
    price: number;
    imageUrl: string;
}

interface IMenuCategory {
    menuCategoryId: number;
    menuCategory: string;
    menuItems: IMenuItem[]
}

const menuCategories: IMenuCategory[] = [
    {
        menuCategoryId: 1,
        menuCategory: "Khai vị & Ăn kèm",
        menuItems: [
            {
                name: "Salad Cá hồi",
                price: 89_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60017509_saladtom_1.jpg"
            },
            {
                name: "Salad mùa xuân",
                price: 79_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60018682_Salad_mua_xuan_1.jpg"
            },
            {
                name: "Há cảo truyền thống Hàn Quốc",
                price: 79_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000131_ha_cao_tt_1.jpg"
            },
            {
                name: "Set kimbap (ALC)",
                price: 59_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000127_kimbap_chien_1.jpg"
            },
            {
                name: "Toboki xào hải sản",
                price: 109_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000147_Tokboki_xao_hai_san_1.jpg"
            },
            {
                name: "Bánh hải sản",
                price: 129_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60001728_banh_xeo_hai_san_1.jpg"
            },
            {
                name: "Nấm nướng",
                price: 19_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000057_nam_alc_1_1.jpg"
            },
            {
                name: "Salad cá ngừ (ALC)",
                price: 79_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60018681_saladcangu_1_1.jpg"
            },
            {
                name: "Salad hoa quả",
                price: 99_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60018681_saladhoaqua_1_1.jpg"
            },
            {
                name: "Salad hành paro",
                price: 69_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000020_Salad_hanh_paro_1.jpg"
            }
        ]
    },
    {
        menuCategoryId: 2,
        menuCategory: "Thịt heo",
        menuItems: [
            {
                name: "Sườn heo gabi",
                price: 139_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000137_suon_heo_galbi_1.jpg"
            },
            {
                name: "Má heo",
                price: 149_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000080_ma_heo_obathan_1.jpg"
            },
            {
                name: "Nạc vai heo",
                price: 108_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000046_nac_vai_cay_1_1.jpg"
            },
            {
                name: "Ba chi heo tươi",
                price: 120_000,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000037_Ba_chi_heo_tuoi_1_1.jpg"
            }
        ]
    },
    {
        menuCategoryId: 3,
        menuCategory: "Cơm & Canh & Mỳ",
        menuItems: [
            {
                name: "Mỳ tương đen",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60017526_mituongden_1_1.jpg"
            },
            {
                name: "Mỳ bò Hàn Quốc",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/m/y/my_bo_ha_n_quo_c.jpg"
            },
            {
                name: "Miến xào",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60017524_mienxao_1_1.jpg"
            },
            {
                name: "Cơm rang kim chi",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60013787_comrang_kimchi-min_1_1.jpg"
            },
            {
                name: "Canh lòng bò",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60010807_canh_long_bo_1.jpg"
            },
            {
                name: "Canh Naechang Chigae",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60010485_canh_long_bo_1.jpg"
            },
            {
                name: "Canh rong biển thịt",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000100_Canh_rong_bien_thit_1.jpg"
            },
            {
                name: "Canh kim chi",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000099_Canh_kim_chi_1.jpg"
            },
            {
                name: "Cơm Hàn Quốc",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60015556_Com_HQ_BF_1.jpg"
            },
            {
                name: "Cơm bát đá nóng",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000086_com_bat_da_1_1.jpg"
            }
        ]
    },
    {
        menuCategoryId: 4,
        menuCategory: "Hải sản",
        menuItems: [
            {
                name: "Tôm nướng",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60012739_tom_alc_1.jpg"
            },
            {
                name: "Cá hồi",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60011468_ca_hoi_1.jpg"
            },
            {
                name: "Cá chình Hàn Quốc",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60009650_ca_chinh_1.jpg"
            },
            {
                name: "Bào ngư",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60008388_bao_ngu_1.jpg"
            },
            {
                name: "Cá mút đá",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000056_Ca_mut_da_1_1.jpg"
            }
        ]
    },
    {
        menuCategoryId: 5,
        menuCategory: "Tráng miệng",
        menuItems: [
            {
                name: "Kem Caramen Flan",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000165_Caramel_1_1.jpg"
            },
            {
                name: "Mochi socola",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60011519_mochi_socola_1_1.jpg"
            },
            {
                name: "Mochi trà xanh",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60007832_mochi_tra_xanh_1_1.jpg"
            },
            {
                name: "Kem tươi vị sữa chua",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000155_kem_sua_chua_1_1.jpg"
            },
            {
                name: "Kem tươi vị Kiwi",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000189_kem_kiwi_1_1.jpg"
            },
            {
                name: "Kem tươi vị Berries",
                price: 0,
                imageUrl: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60000188_kem_berries_1_1.jpg"
            }
        ]
    }
];