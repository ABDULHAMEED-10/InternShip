import  { useEffect,useState } from 'react';
import { chartData } from '../../../Utils/Data';
import { Doughnut } from 'react-chartjs-2';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend);

export const Graphs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    return () => {
      // Clean up the chart instance when the component unmounts
      if (Chart.instances[0]) {
        Chart.instances[0].destroy();
      }
    };
  }, []);

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : chartData.length - 1));
  };

  const handleForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex < chartData.length - 1 ? prevIndex + 1 : 0));
  };
  return (
    <div className="flex flex-wrap mt-8 gap-14 font-sans">
      <div className="flex flex-col w-1/4 bg-gray-100 p-8 rounded-xl ">
              <div className='flex flex-col gap-2'>
              <h1 className='font-semibold text-lg'>Data Usage</h1>
              <p className='text-xs text-gray-600'>Total Data Used By Customer</p>  
        </div>
        <div className='mt-5 w-54 flex justify-center'>
          <Doughnut data={chartData[currentIndex]} />
        </div>
        <div className="flex justify-between items-center pt-5">
          <button onClick={handleBack} className="p-1 rounded"><GrFormPrevious /></button>
          <h1 className='text-sm'>{chartData[currentIndex].label}</h1>
          <button onClick={handleForward} className="p-1 rounded"><MdNavigateNext /></button>
        </div>
      </div>

      <div className="flex w-2/5 bg-gray-100 p-8 rounded-xl justify-between ">
              <div>
              <h1 className='font-semibold text-lg'>Invoice History</h1>
        </div>
      </div>

      <div className="flex w-1/4  bg-gray-100 p-8 rounded-xl justify-between">
      <div>
              <h1 className='font-semibold text-lg'>Speed Test</h1>
        </div>
      </div>
    </div>
  );
};

export default Graphs;