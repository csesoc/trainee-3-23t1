import React from "react";

interface FilterSectionProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedFilter,
  setSelectedFilter,
}) => {
  return (
    <div className="h-screen w-[355px] bg-background pl-10 pt-10">
      <h3 className="text-sm">FILTER</h3>
      <div className="flex flex-col">
        <button
          className={`text-white bg-white/40 mt-[10px] flex h-[56px] w-[258px] items-center rounded-[10px] border px-4 py-2 font-bold shadow-default hover:border-accent-1 ${
            selectedFilter === "courses" ? "bg-accent-1" : ""
          }`}
          onClick={() => setSelectedFilter("courses")}
        >
          <img
            src="https://img.uxwing.com/wp-content/themes/uxwing/download/editing-user-action/read-book-icon.png"
            alt="Course Icon"
            className="mr-2 h-4 w-4"
          />
          <span>Courses</span>
        </button>
        <button
          className={`text-white bg-white/40 mt-[10px] flex h-[56px] w-[258px] items-center rounded-[10px] border px-4 py-2 font-bold shadow-default hover:border-accent-1 ${
            selectedFilter === "users" ? "bg-accent-1" : ""
          }`}
          onClick={() => setSelectedFilter("users")}
        >
          <img
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            alt="User Icon"
            className="mr-2 h-4 w-4"
          />
          <span>Users</span>
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
