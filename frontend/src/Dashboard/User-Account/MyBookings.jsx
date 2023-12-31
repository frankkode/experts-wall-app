import { BASE_URL } from "./../../config";

import ExpertCard from "./../../components/Experts/ExpertCard";
import useFetchData from "./../../hooks/useFetchData";
import HashLoader from "react-spinners/HashLoader";

const MyBookings = () => {
  const {
    data: myAppointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  console.log(myAppointments);

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center w-full h-full">
          <HashLoader color="#25b7e3" />
        </div>
      )}

      {error && (
        <div className="flex items-center justify-center w-full h-full">
          <h3 className="text-headingColor text-[20px] font-semibold leading-[30px]">
            {error}
          </h3>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-5">
          {myAppointments?.map(expert => (
            <ExpertCard expert={expert} key={expert.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
