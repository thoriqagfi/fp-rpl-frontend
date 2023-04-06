import useAuthStore from "@/store/AuthStore"

export default function AddProductCard (data: any) {
  const { user } = useAuthStore()
  return (
    <>
      <div className="border border-black shadow-lg rounded-lg px-10 py-5 flex justify-between my-5">
        <div >
          <h1 className="text-lg font-medium">{data.data.product_name}</h1>
          <p className="text-sm">Stocks : {data.data.stock}</p>
        </div>
        <div className="flex gap-x-2">
          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-slate-600">Edit</button>
          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-slate-600">Delete</button>
        </div>
      </div>
    </>
  )
}