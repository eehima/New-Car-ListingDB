import { useState } from "react"
import { useNavigate } from "react-router-dom";
import BButton from "../shared/BButton";

const AddCar = () => {

  const [make, setMake] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [pictures, setPictures] = useState("");

  const navigate = useNavigate();

  const handlleSubmit = async (e) => {
    e.preventDefault();



    // clear the form
    setMake("");
    setDescription("");
    setModel("");
    setYear("");
    setPictures("");

    // send to backend
    try {
      const response =await fetch("http://localhost:4000/api/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
           Authorization: `Bearer ${localStorage.getItem("authToken")}`
        },
        body: JSON.stringify({
          make,
          description,
          model,
          year,
          pictures
        })
      })
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate("/listing");
        
      } else {
        alert("you have to login first");
        navigate("/login");
      }
    } catch (error) {
      
    }
  }

  return (
    <div className="container mt-5">
      <div>
        <form onSubmit={handlleSubmit}>
          <label htmlFor="name">Make</label>
          <input type="text" name="name" id="name" placeholder="Make" value={make} onChange={(e) => setMake(e.target.value)}/>
          <br />
          <label htmlFor="name">Description</label>
          <input type="text" name="description" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
          <br />
          <label htmlFor="model">Model</label>
          <input type="text" name="model" id="model" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)}/>
          <br />
          <label htmlFor="year">Year</label>
          <input type="text" name="year" id="year" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)}/>
          <br />
          <label htmlFor="image">Image</label>
          <input type="text"name="pictures" id="pictures" placeholder="pictures" value={pictures} onChange={(e) => setPictures(e.target.value)}/>
          <br />
          <BButton type="submit">Add Car</BButton>

        </form>
      </div>
    </div>
  )
}

export default AddCar