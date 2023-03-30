import * as React from 'react';
import Checkbox from '@/components/input/Checkbox';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

interface FilterProps {
  label: string;
  value: string;
}

const Filter: FilterProps[] = [
  {
    label: 'Pakaian',
    value: 'pakaian',
  },
  {
    label: 'Teknologi',
    value: 'teknologi',
  },
  {
    label: 'Makanan',
    value: 'makanan',
  },
]

interface Product {
  name: string;
  description: string;
  category: string;
  stocks: number;
  price: number;
  location: string;
  rating: number;
  image?: string;
  seller: string;
}

const Product: Product[] = [
  {
    name: 'Kaos',
    description: 'Kaos keren',
    category: 'pakaian',
    stocks: 10,
    price: 10000,
    location: 'Jakarta',
    rating: 4.1,
    image: '/4k.jpg',
    seller: 'Toko A',
  },
]

export default function Products() {
  const [checked, setChecked] = React.useState<string>('');
  const [search, setSearch] = React.useState<string>('');
  return (
    <>
    <div className="bg-white text-black min-h-screen min-w-full px-20 py-20">
      <h1 className='text-center text-2xl font-bold italic'>Products</h1>
      {/* Search */}
      <div className='flex justify-center'>
        <input type="text" className='rounded-md shadow-md px-3 py-2 bg-white' placeholder='Search' onChange={e => {
          setSearch(e.target.value);
        }}/>
      </div>
      <div className="flex py-10 gap-x-4">
        <div className=''>
          {/* Filter */}
          <div className="rounded-md">
            <div className='mx-10 my-3'>
              <h2 className='font-bold text-lg'>Filter</h2>

              <div className="flex flex-col">
                {
                  Filter.map((item, index) => (
                    <Checkbox
                      key={index}
                      selected={checked === item.value}
                      onChange={
                        e => e.target.checked ? setChecked(item.value) : setChecked('')
                      }
                      label={item.label}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        {/* Product */}
        <div className='flex flex-wrap md:gap-10 mx-auto'>
          {
            Product.map(({
              name,
              description,
              category,
              stocks,
              price,
              location,
              rating,
              image,
              seller
            }, key) => {
              if (
                (search == '' || name.toLowerCase().includes(search.toLowerCase()) || seller.toLowerCase().includes(search.toLowerCase())) &&
                checked == '' || category.toLowerCase() == checked.toLowerCase()
              )
              return (
                <div key={key} className='rounded-md shadow-xl hover:scale-105 ease-in-out transition duration:150 cursor-pointer'>
                  <Image
                    src={`${image}`}
                    alt={name}
                    width={200}
                    height={200}
                    className='rounded-t-md object-fill h-[200px] w-[200px]'
                  />
                  <div className='mx-2 mb-3 mt-2'>
                    <p className='font-normal text-sm text-gray-500'>{seller}</p>
                    <h3 className='text-base'>{name}</h3>
                    <p className='font-bold text-lg'>Rp{price}</p>
                    <p className='font-normal text-sm text-gray-500'>{location}</p>
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center gap-x-1'>
                        <AiFillStar className='text-yellow-400'/>
                        <p className='font-normal text-sm text-gray-500'>{rating}</p>
                      </div>
                      <p className='font-normal text-xs text-gray-500'>Stocks : {stocks}</p>
                    </div>
                  </div>
                </div>
            )})
          }
        </div>
      </div>
    </div>
    </>
  )
}