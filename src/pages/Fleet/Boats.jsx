import React from "react";
import BoatsTable from "../../components/fleet/BoatsTable";

const Boats = () => {
  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      <BoatsTable />
    </div>
  );
};

export default Boats;
