export const Head = () => {
  return (
    <div className={`py-3 bg-HeadGray`}>
      <h1 className="text-white text-xl font-semibold text-center">
        Head Office
      </h1>
      <div className="flex justify-between px-8 ">
        <div className="flex gap-10 items-center ">
          <i className="fa-solid fa-bars-staggered text-white text-lg"></i>
          <span className="flex gap-2 items-center">
            <p className="text-gray-400 text-sm">Pages</p>
            <p className="text-gray-400 text-xs">/</p>
            <p className="text-gray-200 text-sm">Products</p>
          </span>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center">
          <i className="fa-solid fa-bell text-gray-100 text-lg"></i>
          </div>
          <div className="flex items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="logo"
            className="w-8 h-8 rounded-full mx-auto"
          />
          <select className="bg-HeadGray text-white text-xs mx-2">
            <option>Abdul Hameed</option>
            <option>User 2</option>
            <option>User 3</option>
          </select>
          </div>
        
        </div>
      </div>
    </div>
  );
};
