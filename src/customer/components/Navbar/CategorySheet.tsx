import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { menLevelTwo } from '../../../data/category/level two/menLevelTwo'
import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo'


const categoryTwo: { [key: string]: any[] } = {
    men: menLevelTwo,
    women: womenLevelTwo,
 
};

const CategorySheet = ({ selectedCategory, toggleDrawer, setShowSheet }: any) => {
    const navigate = useNavigate()

    const handleCategoryClick = (category: string) => {
        if (toggleDrawer) {
            toggleDrawer(false)();
        }
        if (setShowSheet) {
            setShowSheet(false)
        }

        navigate("/products/" + category);
    }

    return (
        <Box className='bg-white shadow-lg lg:h-[500px] overflow-y-auto'>
            <div className='flex text-sm flex-wrap'>
                {categoryTwo[selectedCategory]?.map((item: any, index) =>
                    <div key={item.name} className={`p-8 lg:w-[20%] ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}>
                        <p className='text-[#00927c] mb-5 font-semibold'>{item.name}</p>
                        <ul className='space-y-3'>
                            <li
                                onClick={() => handleCategoryClick(item.categoryId)}
                                className='hover:text-[#00927c] cursor-pointer'>
                                {item.name}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </Box>
    )
}

export default CategorySheet
