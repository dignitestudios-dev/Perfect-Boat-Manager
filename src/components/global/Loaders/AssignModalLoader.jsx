import React from "react";

const AssignModalLoader = () => {
  return (
    <tbody>
      {[...Array(10)].map((_, index) => (
        <tr key={index} className="border-b-[1px] border-white/10">
          <td className="px-0 py-2">
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"></div>
          </td>
          <td className="px-4 py-2 text-[11px] font-medium leading-[14.85px]">
            <div className="w-24 h-4 bg-gray-600 rounded animate-pulse"></div>
          </td>
          <td className="px-4 py-2 text-[11px] font-medium leading-[14.85px]">
            <div className="w-28 h-4 bg-gray-600 rounded animate-pulse"></div>
          </td>
          <td className="px-4 py-2 text-[11px] font-medium leading-[14.85px]">
            <div className="w-24 h-4 bg-gray-600 rounded animate-pulse"></div>
          </td>
          <td className="px-4 py-2 text-[11px] font-medium leading-[14.85px]">
            <div className="w-32 h-4 bg-gray-600 rounded animate-pulse"></div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AssignModalLoader;
