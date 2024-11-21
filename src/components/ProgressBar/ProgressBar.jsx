import React from "react";
import { Check } from "lucide-react";

export default function CustomProgressBar({
  currentStage = 1,
  color = "bgc-byellow",
}) {
  const stages = [
    { icon: "fa-solid fa-truck-fast" },
    { icon: "fa-solid fa-boxes-packing" },
    { icon: "fa-solid fa-truck-fast" },
    { icon: "fa-solid fa-boxes-packing" },
  ];

  const checkidx = (index) => {
    if (index == 0) {
      return "start-0";
    }
    if (index == 1) {
      return "start-1/3";
    }
    if (index == 2) {
      return "start-2/3";
    }
    if (index == 3) {
      return "end-0";
    }
  };

  const isCompleted = (stage) => currentStage > stage;

  return (
    <div className="w-full mx-auto">
      <div className="relative">
        <div className={`flex justify-between mb-2`}>
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`flex flex-col items-center absolute ${checkidx(
                index
              )}`}
            >
              <div
                className={`flex items-center justify-center rounded-full ${
                  isCompleted(index) ? `bg-${color}` : "bg-gray-100"
                }`}
              >
                {isCompleted(index) ? (
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                ) : (
                  <div className="w-9 h-9 relative">
                    <div
                      className={`w-[60%] h-[60%] absolute start-[25%] top-[12%] ${
                        currentStage > index ? "text-white" : "bg-bg-gray-100"
                      }`}
                    >
                      <i class={stage.icon}></i>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
          <div
            style={{ width: `${Math.ceil(((currentStage - 1) / 3) * 100)}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${color}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
