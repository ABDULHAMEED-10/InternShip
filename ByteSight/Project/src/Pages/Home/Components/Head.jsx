
export const Head = () => {
  return (
    <div className={`px-4 py-4  bg-HeadGray  `}>
      <h1 className="text-white text-xl font-semibold text-center">Head Office</h1>
      <div className="flex gap-10 items-center ml-4 ">
        <i className="fa-solid fa-bars-staggered text-white text-lg"></i>
        <span className="flex gap-2 items-center"><p className="text-gray-400 text-sm">Pages</p><p className="text-gray-400 text-xs">/</p><p className="text-gray-200 text-sm">Products</p></span>
      </div>
    </div>
  )
}
