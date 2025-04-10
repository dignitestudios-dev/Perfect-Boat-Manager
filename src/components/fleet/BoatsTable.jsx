import React, {
  useContext,
  useRef,
  useState,
  useEffect,
  Fragment,
} from "react";
import { FiSearch } from "react-icons/fi";

import { AuthMockup } from "../../assets/export";
import LocationType from "../global/headerDropDowns/LocationType";
import { useNavigate } from "react-router-dom";
import BoatType from "../global/headerDropDowns/BoatType";
import ManagerListLoader from "../global/Loaders/ManagerListLoader";
import Pagination from "../global/Pagination";

const BoatsTable = ({ data, loading, getBoats }) => {
  const navigate = useNavigate();

  const [boatTypeDropdownOpen, setBoatTypeDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [locationType, setLocationType] = useState([]);
  const [boatType, setBoatType] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 18;

  const toggleBoatTypeDropdown = () => {
    setBoatTypeDropdownOpen(!boatTypeDropdownOpen);
  };

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!locationDropdownOpen);
  };

  const [search, setSearch] = useState("");

  const filteredData = data?.filter((item) => {
    const matchesSearch = search
      ? item?.boatType?.toLowerCase()?.includes(search?.toLowerCase()) ||
        item?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
        item?.make?.toLowerCase()?.includes(search?.toLowerCase()) ||
        item?.model?.toLowerCase()?.includes(search?.toLowerCase()) ||
        item?.location?.toLowerCase()?.includes(search?.toLowerCase())
      : true;
    const boatTypeMatch =
      boatType && boatType.length !== 0
        ? boatType?.includes(item?.boatType?.toLowerCase())
        : true;
    const locationTypeMatch =
      locationType && locationType.length !== 0
        ? locationType?.includes(item?.location?.toLowerCase())
        : true;
    return matchesSearch && locationTypeMatch && boatTypeMatch;
  });

  const totalPages = Math.ceil(filteredData?.length / pageSize);
  // Slice the data for the current page
  const paginatedData = filteredData?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // useEffect(() => {
  //   getBoats(1, 15, boatType, locationType);
  // }, [boatType, locationType]);

  return (
    <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
      <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
        Boats List{" "}
        <span className="text-[12px] font-normal text-white/50 ">
          ({data?.length})
        </span>
      </h3>

      <div className="w-full h-auto flex justify-between items-center">
        <div className="flex w-1/2 lg:w-[295px] h-[32px] items-center rounded-[8px] bg-[#1A293D] relative">
          <span className="w-[32px] h-full flex items-center justify-center">
            <FiSearch className="text-white/50 text-lg" />
          </span>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            type="text"
            placeholder="Search here"
            className="w-[calc(100%-35px)] outline-none text-sm bg-transparent h-full text-white/50 pl-2"
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-1 justify-start items-start">
        <div className="w-full grid grid-cols-5 text-[11px] py-2 border-b border-[#fff]/[0.14] font-medium leading-[14.85px] text-white/50 justify-start items-start">
          <span className="w-full flex justify-start items-center">
            Boat Image
          </span>
          <BoatType
            boatTypeDropdownOpen={boatTypeDropdownOpen}
            toggleBoatTypeDropdown={toggleBoatTypeDropdown}
            boatType={boatType}
            setBoatType={setBoatType}
            managerBoats={data?.map((item) => item.boatType)}
            setCurrentPage={setCurrentPage}
          />
          <span className="w-full flex justify-start items-center">
            Boat Name/Hull Number
          </span>
          <span className="w-full flex justify-start items-center">
            Year/Make/Size
          </span>
          <LocationType
            locationDropdownOpen={locationDropdownOpen}
            toggleLocationDropdown={toggleLocationDropdown}
            locationType={locationType}
            setLocationType={setLocationType}
            employeesLocTitles={data?.map((item) => item.location)}
            title="Location / Customer Name"
            setCurrentPage={setCurrentPage}
            locationTitles={data?.map((item) => item.location)}
          />
        </div>

        {loading ? (
          <ManagerListLoader />
        ) : (
          <Fragment>
            {/* Example rows */}
            {paginatedData.length > 0 ? (
              <>
                {paginatedData?.map((boat, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(`/boats/${boat?._id}`)}
                    className="w-full h-auto grid grid-cols-5 cursor-pointer border-b border-[#fff]/[0.14] py-3 
                    text-[11px] font-medium leading-[14.85px] text-white justify-start items-center"
                  >
                    <span className="w-[106px] h-[76px] flex justify-start items-center relative">
                      <img
                        src={boat?.cover || AuthMockup}
                        alt="boat_image"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "15px 0 0 15px",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        className="w-24"
                        style={{
                          content: '""',
                          position: "absolute",
                          top: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(to right, transparent, #001229)",
                        }}
                      />
                    </span>
                    <span className="w-full flex justify-start items-center">
                      {boat?.boatType}
                    </span>
                    <span className="w-full flex justify-start items-center">
                      {boat?.name}
                    </span>
                    <span className="w-full flex justify-start items-center">
                      {boat.model} / {boat.make} / {boat.size}
                    </span>
                    <span className="w-full flex justify-start items-center">
                      {boat.location}
                    </span>
                  </div>
                ))}
              </>
            ) : (
              <div className="pt-4">No Record Found</div>
            )}
          </Fragment>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default BoatsTable;
