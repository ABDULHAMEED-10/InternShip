import { overviewData } from "../../../Utils/Data"

export const OverView = () => {
  return (
    <div className="">
    <div className="flex items-center pt-8">
      <h1 className="text-4xl font-sans text-gray-800 font-semibold leading-normal">Overview</h1>
    </div>
    <div className="mt-8 rounded-xl bg-gray-100 flex justify-evenly py-6">
      
    {overviewData.map((item) => (
      <div className="flex gap-3 items-center" key={item.id}>
        <div style={{ background: item.Gradient, color:item.color}} className="rounded-full w-20 h-20 flex items-center justify-center text-3xl ">
          {/* icon */}
          <div className="opacity-60">{item.icon}</div>

        
        </div>
        <div className="flex flex-col gap-2 font-sans">
          {/* title and p */}
          <h1 className="text-gray-600 text-sm">{item.heading}</h1>
          <p className="text-gray-800 text-lg font-semibold">{item.Description}</p>
        </div>
      </div>
    ))}


    </div>
  </div>
  )
}
