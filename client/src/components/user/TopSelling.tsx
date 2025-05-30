import ProductCard from "./ProductCard"

const TopSelling = () => {
  return (
    <section className='text-center'>
      <p className='font-text text-2xl'>TOPSELLING</p>
      <div className='grid sm:grid-cols-4 grid-cols-1 m-4 gap-20'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        
      </div>
      <button className=' border border-gray-300 px-12 py-2 font-semibold font-text rounded-xl'>View All</button>
     <hr className="h-px my-8 mx-5 bg-gray-200 border-0 dark:bg-gray-300"></hr>
    </section>
  )
}

export default TopSelling