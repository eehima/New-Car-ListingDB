import "./BButton.css";

const BButton = ({bgColor, bdRadius, btnName, btnFunc,children}) => {
    const styles = {
        backgroundColor:bgColor || "blue",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: bdRadius || "5px",
        cursor: "pointer",
        margin: "5px"
    }

    
  return (
    <button onClick={btnFunc} style={styles} className={btnName}>{children}</button>
  )
}

export default BButton