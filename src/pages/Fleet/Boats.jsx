import React, { useEffect, useState } from "react";
import BoatsTable from "../../components/fleet/BoatsTable";
import axios from "../../axios";

const Boats = () => {
  const [boats, setBoats] = useState([]);
  const [loadingBoats, setLoadingBoats] = useState(false);
  const [pageDetails, setPageDetails] = useState({});

  const getBoats = async (
    pageNumber = 1,
    rows = 15,
    boatType = [],
    locationType = []
  ) => {
    setLoadingBoats(true);
    try {
      const boatQuery = boatType.length !== 0 ? `&boatType=${boatType}` : "";
      const locationQuery =
        locationType.length !== 0 ? `&location=${locationType}` : "";
      // const { data } = await axios.get(
      //   `/manager/boat?page=${pageNumber}&pageSize=${rows}${boatQuery}${locationQuery}`
      // );
      const { data } = await axios.get(`/manager/boat`);

      setBoats(data?.data);
      // setPageDetails(data?.data?.paginationDetails);
    } catch (err) {
      console.log("🚀 ~ Boats ~ err:", err);
    } finally {
      setLoadingBoats(false);
    }
  };

  useEffect(() => {
    getBoats();
  }, []);
  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      <BoatsTable data={boats} loading={loadingBoats} getBoats={getBoats} />
    </div>
  );
};

export default Boats;
