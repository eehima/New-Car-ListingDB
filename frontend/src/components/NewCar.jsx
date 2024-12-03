import { useState, useEffect } from "react"

const NewCar = () => {
    const style = {
        card: {
            width: "350px",
            height: "350px",
            border: "2px solid orange",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",
            marginBottom: "60px"
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            padding: "20px"
        },
        img: {
            width: "100%",
            height: "50%",
            borderRadius: "15px"
        },
        h1: {
            textAlign: "center",
            margin: "20px",
            color: "blue",
            fontSize: "40px"

        }

    }

    const [car, setCar] = useState([]);
    const [loading, setLoading] = useState(false);



    const fetchCar = async () => {
        setLoading(true);
        const url = "http://localhost:4000/api/cars";

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            console.log(data);
            setCar(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCar();
    }, [])

    return (
        <div >
            <h1 className="text-center mt-5"  style={style.h1}>New Car</h1>
            {loading && <p>Loading...</p>}


            <div style={style.grid}>
                {car.map((car) => (
                    <div style={style.card} key={car.id}>
                        <img style={style.img} src={car.pictures} alt={car.name} />
                        <h4>{car.make}</h4>
                        <p>{car.description}</p>
                        <p>{car.year}</p>
                        <p>{car.model}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default NewCar