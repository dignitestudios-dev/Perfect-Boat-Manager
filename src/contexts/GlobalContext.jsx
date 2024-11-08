import axios from "../axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const route = useNavigate();
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = (url, active) => {
    route(url);
    setActiveLink(active);
  };

  const [managers, setManagers] = useState([]);
  const [loadingManagers, setLoadingManagers] = useState(false);
  const [updateManager, setUpdateManager] = useState(false);

  // const getManagers = async (jobType = "all", locationType = "all") => {
  //   setLoadingManagers(true);
  //   try {
  //     const boatQuery = jobType !== "all" ? `jobTitle=${jobType}` : "";
  //     const locationQuery =
  //       locationType !== "all" ? `locations=${locationType}` : "";
  //     const queryString = [boatQuery, locationQuery].filter(Boolean).join("&");
  //     const { data } = await axios.get(`/manager/manager?${queryString}`);

  //     setManagers(data?.data);
  //   } catch (err) {
  //   } finally {
  //     setLoadingManagers(false);
  //   }
  // };
  // useEffect(() => {
  //   getManagers();
  // }, [updateManager]);

  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(false);
  const [updateEmployee, setUpdateEmployee] = useState(false);

  const getEmployees = async (jobType = "all", locationType = "all") => {
    setLoadingEmployees(true);
    try {
      const boatQuery = jobType !== "all" ? `jobTitle=${jobType}` : "";
      const locationQuery =
        locationType !== "all" ? `locations=${locationType}` : "";
      const queryString = [boatQuery, locationQuery].filter(Boolean).join("&");
      const { data } = await axios.get(`/manager/employees?${queryString}`);
      setEmployees(data?.data);
    } catch (err) {
    } finally {
      setLoadingEmployees(false);
    }
  };
  useEffect(() => {
    getEmployees();
  }, [updateEmployee]);

  const [boats, setBoats] = useState([]);
  const [loadingBoats, setLoadingBoats] = useState(false);
  const [updateBoat, setUpdateBoat] = useState(false);

  const getBoats = async (boatType = "all", locationType = "all") => {
    setLoadingBoats(true);
    try {
      const boatQuery = boatType !== "all" ? `boatType=${boatType}` : "";
      const locationQuery =
        locationType !== "all" ? `locationType=${locationType}` : "";
      const queryString = [boatQuery, locationQuery].filter(Boolean).join("&");
      const { data } = await axios.get(`/manager/boat?${queryString}`);

      setBoats(data?.data);
    } catch (err) {
    } finally {
      setLoadingBoats(false);
    }
  };
  useEffect(() => {
    getBoats();
  }, [updateBoat]);

  const [dropDown, setDropDown] = useState([]);
  const [boatDropDown, setBoatDropDown] = useState([]);
  const [taskDropDown, setTaskDropDown] = useState([]);

  const [updateDropDown, setUpdateDropDown] = useState(false);

  const getDropDown = async () => {
    setLoadingBoats(true);
    try {
      const [companyResponse, boatResponse, taskResponse] = await Promise.all([
        axios.get("/manager/dropdown/company"),
        axios.get("/manager/dropdown/boat"),
        axios.get("/manager/dropdown/task"),
      ]);
      if (
        taskResponse.status === 200 ||
        boatResponse.status === 200 ||
        companyResponse.status === 200
      ) {
        setDropDown(companyResponse?.data?.data);
        setBoatDropDown(boatResponse?.data?.data);
        setTaskDropDown(taskResponse?.data?.data);
      }
    } catch (err) {
      console.error("Error fetching dropdown data", err);
    } finally {
      setLoadingBoats(false);
    }
  };
  useEffect(() => {
    getDropDown();
  }, [updateDropDown]);

  const test = "";
  return (
    <GlobalContext.Provider
      value={{
        test,
        navigate,
        activeLink,
        // getManagers,
        getEmployees,
        getBoats,
        setUpdateEmployee,
        setUpdateManager,
        setUpdateBoat,
        setUpdateDropDown,
        getDropDown,
        dropDown,
        boatDropDown,
        taskDropDown,
        loadingBoats,
        loadingEmployees,
        loadingManagers,
        managers,
        boats,
        employees,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
