import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import Refresh from "./Refresh";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    // function fetchTours(){}
    console.log("fetchTours invoke");
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      console.log(tours);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useEffect is called");
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return <Refresh fetchTours={fetchTours} />;
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
      {/* removeTour function is passed on Tours.js as props */}
    </main>
  );
}

export default App;
