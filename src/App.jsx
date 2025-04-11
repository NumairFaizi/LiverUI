import React from "react";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-50 via-white to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-blue-100">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-teal-700 uppercase mb-8">
            🧬 Liver Disease Detection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField label="Age" />
            <InputField label="Gender (1: Male, 0: Female)" />
            <InputField label="Total Bilirubin" />
            <InputField label="Direct Bilirubin" />
            <InputField label="Alkaline Phosphotase" />
            <InputField label="Alamine Aminotransferase" />
            <InputField label="Aspartate Aminotransferase" />
            <InputField label="Total Proteins" />
            <InputField label="Albumin" />
            <InputField label="Albumin and Globulin Ratio" />
          </div>
          <button className="mt-8 w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 rounded-full text-lg font-semibold tracking-wide shadow-md transition duration-300 
                             hover:shadow-[0_0_15px_5px_rgba(0,204,204,0.5)] hover:scale-105">
            DETECT
          </button>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-blue-100">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-blue-700 uppercase mb-6">
            🤖 LLM Response
          </h2>
          <div className="text-slate-700 text-lg min-h-[100px] leading-relaxed">
            <Typewriter
              options={{
                strings: [
                  "Fill in your medical values to receive an instant health analysis powered by AI.",
                  "Ensure accurate input for best results. Your health is our priority.",
                ],
                autoStart: true,
                loop: true,
                delay: 35,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ label }) => (
  <div>
    <label className="block text-sm font-medium text-slate-600 mb-1">{label}</label>
    <input
      type="number"
      className="w-full bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-slate-800 
                 focus:outline-none focus:ring-2 focus:ring-cyan-500 
                 transition duration-300
                 hover:ring-2 hover:ring-cyan-300 hover:shadow-[0_0_10px_rgba(0,200,255,0.4)]"
    />
  </div>
);

export default App;
