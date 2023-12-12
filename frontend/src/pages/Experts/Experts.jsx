import { useEffect, useState } from "react";
import ExpertCard from "../../components/Experts/ExpertCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import { AiOutlineMonitor } from "react-icons/ai";
import HashLoader from "react-spinners/HashLoader";

const Experts = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const {
    data: experts,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/experts?query=${debouncedQuery}`);

  const handleSearch = () => {
    setQuery(query.trim());
  };

  useEffect(() => {
    // Debounce the query value after 500ms of inactivity
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 700);

    // Clean up the timeout
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find an Expert</h2>
          <div className="max-w-[570px] mx-auto mt-[30px] bg-[#0066ff2c] rounded-md flex items-center justify-between ">
            <input
              className="py-4 pl-4 pr-2 focus:outline-none cursor-pointer w-full bg-transparent placeholder:text-textColor"
              type="search"
              placeholder="Search by expert name or specialization"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-md w-20 mr-4"
              onClick={handleSearch}
            >
             <AiOutlineMonitor/>
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {experts?.map(expert => (
                <ExpertCard expert={expert} key={expert.id} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our client say</h2>
            <p className="text__para text-center">
              World-class software debugger. Our experts offers unmatched,
              expert software debugging.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Experts;
