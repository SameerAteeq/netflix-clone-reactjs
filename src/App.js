import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch } from "react-redux";
import { getApiConfiguration, getGeneres } from "./store/homeSlice";
import Home2 from "./components/home2";
import MovieDetailPage from "./components/detailPage";
import CommonNav from "./components/common/CommonNav";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
    getAllGeneres();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((resp) => {
      const url = {
        backdrop: resp?.images?.secure_base_url + "original",
        poster: resp?.images?.secure_base_url + "original",
        profile: resp?.images?.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const getAllGeneres = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGeneres = {};
    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const genreData = await Promise.all(promises);
    genreData.map(({ genres }) => {
      return genres.map((item) => (allGeneres[item.id] = item));
    });
    dispatch(getGeneres(allGeneres));
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home2 />} />
          <Route path="/:mediaType/:id" element={<MovieDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
