import ExpertCard from "./ExpertCard.jsx";

import { BASE_URL } from "../../config.js";
import useFetchData from "../../hooks/useFetchData.js";
import HashLoader from "react-spinners/HashLoader.js";

const ExpertsList = () => {
  const { data: experts, loading, error } = useFetchData(`${BASE_URL}/experts`);
  return (
    <>
{loading && (
  <div data-testid="loading-spinner" className="flex items-center justify-center w-full h-full">
    <HashLoader color="#0067FF" />
  </div>
)}

{error && (
  <div className="flex items-center justify-center w-full h-full">
    <h3 data-testid="error-message" className="text-headingColor text-[20px] font-semibold leading-[30px]">
      {error}
    </h3>
  </div>
)}

{!loading && !error && (
  <div data-testid="experts-list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
    {experts?.map(expert => (
      <ExpertCard data-testid="expert-card" expert={expert} key={expert.id} />
    ))}
  </div>
)}

    </>
  );
};

export default ExpertsList;
