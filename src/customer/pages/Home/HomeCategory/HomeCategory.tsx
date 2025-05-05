import React from 'react'
import HomeCategoryCard from './HomeCategoryCard'
import { useAppSelector } from '../../../../Redux Toolkit/Store';

const homeCategory = [
  {
    name: "Banarasi Saree",
    categoryId: "banarasi_saree",
    parentCategoryId: "women_saree",
    section: "SHOP_BY_CATEGORIES",
    image: "https://m.media-amazon.com/images/I/71ttBApNmCL._SY879_.jpg",
  },
  {
    name: "Kanjeevaram Saree",
    categoryId: "kanjeevaram_saree",
    parentCategoryId: "women_saree",
    section: "SHOP_BY_CATEGORIES",
    image: "https://m.media-amazon.com/images/I/61t5Rq80yeL._SY879_.jpg",
  },
  {
    name: "Paithani Saree",
    categoryId: "paithani_saree",
    parentCategoryId: "women_saree",
    section: "SHOP_BY_CATEGORIES",
    image: "https://madhurya.com/cdn/shop/files/SGxMD_1023_17711.jpg?v=1737959704&width=1600",
  },
  {
    name: "Bandhani Saree",
    categoryId: "bandhani_saree",
    parentCategoryId: "women_saree",
    section: "SHOP_BY_CATEGORIES",
    image: "https://geethacreation.com/cdn/shop/files/A42FDE48-87D9-4FC9-B38F-85BDAC0C5BA0.jpg?v=1725894358",
  },
  {
    name: "Chanderi Saree",
    categoryId: "chanderi_saree",
    parentCategoryId: "women_saree",
    section: "SHOP_BY_CATEGORIES",
    image: "https://rkgshopping.in/cdn/shop/products/chanderi-hand-block-print-saree-with-blouse-saree-rkg-shopping-224515.jpg?v=1688134681&width=493",
  },
  {
    name: "Mysore Silk Saree",
    categoryId: "mysore_silk_saree",
    parentCategoryId: "women_saree",
    section: "SHOP_BY_CATEGORIES",
    image: "https://img.theloom.in/pwa/catalog/product/cache/e442fb943037550e0d70cca304324ade/k/a/kapittha-_3__1.jpg/tr:c-at_max,w-800,h-1066-",
  },
  {
    name: "Organza Saree",
    categoryId: "organza_saree",
    parentCategoryId: "women_saree",
    section: "SHOP_BY_CATEGORIES",
    image: "https://m.media-amazon.com/images/I/71NzQKKBs6L._SY879_.jpg",
  },
  {
    name: "Net Saree",
    categoryId: "net_saree",
    parentCategoryId: "women_saree",
    section: "SHOP_BY_CATEGORIES",
    image: "https://m.media-amazon.com/images/I/71x8pxL1JrL._SY879_.jpg",
  },
  {
    name: "Chiffon Saree",
    categoryId: "chiffon_saree",
    parentCategoryId: "women_saree",
    section: "SHOP_BY_CATEGORIES",
    image: "https://www.lavanyathelabel.com/cdn/shop/files/LBL101KS890_1_800x.jpg?v=1740034479",
  }
]

const HomeCategory = () => {
  const { homePage } = useAppSelector((store) => store);
  
  // Filter saree categories if needed, or use them directly
  const sareeCategories = homeCategory.filter(item => item.parentCategoryId === "women_saree");

  return (
    <div className='flex justify-center gap-7 flex-wrap'>
      {sareeCategories.map((item) => (
        <HomeCategoryCard 
          key={item.categoryId} 
          item={item} 
        />
      ))}
    </div>
  )
}

export default HomeCategory;
