import * as React from 'react';
import Link from 'next/link';
import Checkbox from '@/components/input/Checkbox';
import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import { apiMock } from '@/lib/apiMock';
import { RoleType, User } from '@/types/user';
import { useRouter } from 'next/router';
import { Product } from '@/types/products';
import Loading from '@/components/Loading';

interface FilterProps {
  label: string;
  value: string;
}

const Filter: FilterProps[] = [
  {
    label: 'Consumer Electronic Goods',
    value: 'Consumer Electronic Goods',
  },
  {
    label: 'Pets & Pet Supplies',
    value: 'Pets & Pet Supplies',
  },
  {
    label: 'Children & Infants',
    value: 'Children & Infants',
  },
]

// const Product: Product[] = [
//   {
//     id: 1,
//     product_name: 'Kaos',
//     description: 'Kaos keren',
//     stock: 10,
//     price: 10000,
//     category: {
//       id: 1,
//       label: 'pakaian',
//     },
//     category_id: 1,
//     likes: 10,
//     review: 'mantap',
//     user: {
//       id: 1,
//       first_name: 'Rizky',
//       last_name: 'Rizky',
//       email: '',
//       no_telp: '',
//       city: '',
//       role: RoleType.SELLER,
//       address: '',
//       password: '',
//     }
//   },
// ]

export default function Products() {
  const [checked, setChecked] = React.useState<string>('');
  const [search, setSearch] = React.useState<string>('');
  const router = useRouter();
  const { data, isLoading, isError}  = useQuery<Product[]>(
    ['products'],
    async () => {
    const res = await apiMock.get(`https://fp-rpl-backend-api-production.up.railway.app`)
    return res.data.data
  })

  if (isLoading) {
    return <Loading/>
  }
  if (isError) {
    return <div>Error...</div>
  }

  const formatRupiah = (number: number) => {
    const rupiah = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  
    return rupiah;
  };
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
            data.map(({
              id,
              product_name,
              description,
              stock,
              price,
              category,
              category_id,
              likes,
              wish_count,
              review,
              user,
              user_id,
            }, key) => {
              if (
                (search == '' || product_name.toLowerCase().includes(search.toLowerCase()) || user?.first_name.concat(" ", user?.last_name).toLowerCase().includes(search.toLowerCase())) &&
                checked == '' || category.label?.toLowerCase() == checked.toLowerCase()
              )
              return (
                <Link href={`/products/${id}`}>
                  <div key={key} className='rounded-md shadow-xl hover:scale-105 ease-in-out transition duration:150 cursor-pointer w-80 pt-2'>
                    <div className='mx-4 my-5'>
                      <h3 className='text-lg font-medium'>{product_name}</h3>
                      <p className='font-normal text-sm text-gray-500 pb-2'>{user?.first_name + " " + user?.last_name}</p>
                      <p className='font-bold text-lg'>{formatRupiah(price)}</p>
                      {/* <p className='font-normal text-sm text-gray-500'>{location}</p> */}
                      <div className='flex justify-between items-center pt-5 pb-2'>
                        <div className='flex items-center gap-x-1'>
                          <AiFillHeart className='text-red-400'/>
                          <p className='font-normal text-sm text-gray-500'>{wish_count}</p>
                        </div>
                        <p className='font-normal text-xs text-gray-500'>Stocks : {stock}</p>
                      </div>
                    </div>
                  </div>
                </Link>
            )})
          }
        </div>
      </div>
    </div>
    </>
  )
}