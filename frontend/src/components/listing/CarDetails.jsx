import { useParams } from "react-router-dom"

const CarDetails = () => {
    const {id} = useParams();

    
  return (
    <div className="container my-5">
        <h1 className="text-primary">Welcome to Car Details</h1>

    </div>
  )
}

export default CarDetails