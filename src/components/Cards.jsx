import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactStars from "react-stars";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      _data.forEach((doc) => {
        setData((prv) => [...prv, { ...doc.data(), id: doc.id }]);
      });
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between px-3 mt-2">
      {loading ? (
        <div className="w-full flex justify-center items-center h-96">
          <ThreeDots height={40} color="white" />
        </div>
      ) : (
        data.map((curMovie, idx) => {
          const { id, image, title, rating, rated, year } = curMovie;
          return (
            <Link to={`/detail/${id}`}>
              <div
                key={idx}
                className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500"
              >
                <img
                  className="h-60 md:h-72 w-[200px] md:w-56"
                  src={image}
                  alt={title}
                />
                <h1>{title}</h1>
                <h1 className="flex items-center">
                  <span className="text-gray-500 mr-1">Rating:</span>
                  <ReactStars
                    size={20}
                    half={true}
                    value={rating / rated}
                    edit={false}
                  />
                </h1>
                <h1>
                  <span className="text-gray-500">Year:</span> {year}
                </h1>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Cards;
