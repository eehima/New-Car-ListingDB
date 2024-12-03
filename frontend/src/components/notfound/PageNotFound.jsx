import { Link } from "react-router-dom"

const PageNotFound = () => {
    const style = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
           
        },
        img: {
            width:"400px",
            height:"250px",
           
           
        },
        btn: {
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "orange",
            color: "white",
            fontSize: "16px",
            textDecoration: "none",
            
        }
    }
  return (
    <div className="container mt-5" style={style.container}>
        <h1>You don't have access gettttouttt</h1>
        <img style={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyl3KOobxh1qt0aLElLE6SnF1cFGZ8yo37w&s" alt="not found" />

        <Link to="/" style={style.btn}>Go Back to Home</Link>
    </div>
  )
}

export default PageNotFound