import { useRouter } from "next/router";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { apiMock } from "@/lib/apiMock";
import axios from "axios";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import Layout from "@/Layout/Layout";
import Button from "@/components/button/Button";
import { Product } from "@/types/products";
import useAuthStore from "@/store/AuthStore";

export default function ProductsDetail() {
  const { user, isAuthenticated } = useAuthStore()
  const [product, setProduct] = React.useState<Product>()
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useQuery<Product>({
    queryKey: ["products", id],
    queryFn: async () => {
      const res = await apiMock.get(`https://fp-rpl-backend-api-production.up.railway.app/product/${id}`)
      return res.data.data
    }
  })
  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Error</p>

  const handleCart = () => {
    if(!isAuthenticated) return router.push('/login')
    else {
      // addCart({
      //   id: data?.id,
      //   product_name: data?.product_name,
      //   price: data?.price,

      // })
      axios.post(`https://fp-rpl-backend-api-production.up.railway.app/cart`, {
        user_id: user?.id,
        product_id: data?.id
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    }
  }
  return (
    <>
      <Layout>
        <div className="bg-white py-32 text-black">
          <h1 className="text-center font-bold italic text-3xl mb-10">Products Detail</h1>
          <div className="border border-black rounded-lg shadow-lg w-2/3 mx-auto">
            <div className="my-10 mx-10 gap-x-2 grid grid-cols-2">
              <Image
                src={'/vivo-y20.jpg'}
                alt="Picture of the author"
                width={400}
                height={400}
                className="mx-auto"
              />
              <div>
                <h1 className="font-bold text-xl">{data?.product_name}</h1>
                <div className="flex justify-between">
                  <p className="font-medium text-gray-500">Stock: {data?.stock}</p>
                  <div className="flex items-center gap-x-2">
                    <AiFillHeart className='text-red-400'/>
                    <p className="">{data?.wish_count}</p>
                  </div>
                </div>
                <p className="font-bold text-3xl my-5">Rp. {data?.price}</p>
                <p>{data?.description}</p>
                <hr className="text-black my-8" />
                <div className="flex gap-x-5 items-center">
                  <Image
                    src={'/user-profile.jpeg'}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="">
                    <h3 className="font-medium text-lg">{data?.user?.first_name.concat(" " + data?.user?.last_name).toUpperCase()}</h3>
                    <div className="flex items-center gap-x-2">
                      <ImLocation className='text-gray-700'/>
                      <p>{data?.user?.city.toUpperCase()}</p>
                    </div>
                  </div>
                </div>
                <hr className="my-8"/>
                <div className="">
                  <h1 className="text-lg italic font-semibold">Review</h1>
                  {
                    data?.review?.length === 0 ? <p className="text-gray-500 mt-2">No review yet</p> :
                    data?.review?.map(({user_id, description}, key) => (
                      <div key={key}>
                        <p className="">{description}</p>
                      </div>
                    ))
                  }
                </div>
                <div className="mt-10">
                  <Button
                    size="lg"
                    onClick={() => handleCart()}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}