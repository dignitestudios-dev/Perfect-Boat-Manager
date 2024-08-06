import React from "react";

const NotificationSettingsPage = () => {
  return (
    <div className="w-full flex flex-col gap-6 px-5 pb-5 md:px-0">
      <div className="w-full flex justify-start items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] font-bold leading-[32.4px]">
            Notifications
          </h1>
          <p className="text-[12px] leading-[16.2px] text-white/50">
            Stay update with important alerts and reminders. Manage your
            notifications for a <br /> personalized experinece.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-start justify-between">
          <div className="w-full flex flex-col">
            <h1 className="text-[16px] font-medium leading-[21.6px]">
              Task Management
            </h1>
            <p className="text-xs text-[#fff]/[0.5]">
              Receive notifications related to tasks. Stay updated on the tasks accomplished.
            </p>
          </div>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-[32.94px] h-[18.53px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.7px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14.82px] after:w-[14.82px] after:transition-all dark:border-gray-600 peer-checked:bg-[#028EE6]"></div>
            </label>
          </div>
        </div>
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col">
            <h1 className="text-[16px] font-medium leading-[21.6px]">
              Boats Alert
            </h1>
            <p className="text-xs text-[#fff]/[0.5]">
              Stay in loop with updates on changes in boat details and location. keep in sight.
            </p>
          </div>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-[32.94px] h-[18.53px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.7px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14.82px] after:w-[14.82px] after:transition-all dark:border-gray-600 peer-checked:bg-[#028EE6]"></div>
            </label>
          </div>
        </div>
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col">
            <h1 className="text-[16px] font-medium leading-[21.6px]">
              Maintinence Alert
            </h1>
            <p className="text-xs text-[#fff]/[0.5]">
              Receive notifications about upcoming boat maintinence tasks.
            </p>
          </div>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-[32.94px] h-[18.53px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.7px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14.82px] after:w-[14.82px] after:transition-all dark:border-gray-600 peer-checked:bg-[#028EE6]"></div>
            </label>
          </div>
        </div>
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col">
            <h1 className="text-[16px] font-medium leading-[21.6px]">
          System Updates
            </h1>
            <p className="text-xs text-[#fff]/[0.5]">
              Get notified about platform updates and new features. Ensure smooth sailing  with the latest tools.
            </p>
          </div>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-[32.94px] h-[18.53px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.7px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14.82px] after:w-[14.82px] after:transition-all dark:border-gray-600 peer-checked:bg-[#028EE6]"></div>
            </label>
          </div>
        </div>
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col">
            <h1 className="text-[16px] font-medium leading-[21.6px]">
              Security Alerts
            </h1>
            <p className="text-xs text-[#fff]/[0.5]">
             Receive instant alerts in case of security breaches or critical events. Safety first!
            </p>
          </div>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-[32.94px] h-[18.53px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.7px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14.82px] after:w-[14.82px] after:transition-all dark:border-gray-600 peer-checked:bg-[#028EE6]"></div>
            </label>
          </div>
        </div>
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col">
            <h1 className="text-[16px] font-medium leading-[21.6px]">
              New Task Request  
            </h1>
            <p className="text-xs text-[#fff]/[0.5]">
              Get instant notifications when your team members submit new task request.
            </p>
          </div>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-[32.94px] h-[18.53px] bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.7px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14.82px] after:w-[14.82px] after:transition-all dark:border-gray-600 peer-checked:bg-[#028EE6]"></div>
            </label>
          </div>
        </div>
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col">
            <h1 className="text-[16px] font-medium leading-[21.6px]">
             New Boat
            </h1>
            <p className="text-xs text-[#fff]/[0.5]">
              Get notified about future boat additions by enabling notifications
            </p>
          </div>
        </div>   
      </div>
    </div>
  );
};

export default NotificationSettingsPage;
