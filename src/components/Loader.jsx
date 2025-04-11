import { FaMicroscope } from "react-icons/fa";
import { GiLiver } from "react-icons/gi";

const Loader = () => {
  return (
    <div className="fixed inset-0 top-0 right-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="relative">
        <GiLiver className="text-red-500 text-7xl animate-ping-slow" />
        <FaMicroscope className="absolute text-blue-500 text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
      </div>
      <p className="mt-6 text-lg font-medium text-gray-700">Analyzing Liver Scan with Deep Learning...</p>
    </div>
  );
};

export default Loader;