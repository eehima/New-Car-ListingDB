import { useState } from "react"

const Imagegallery = () => {
    const imgUrls = [
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/3164862/1.jpg?7891",
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/3164862/3.jpg?7891",
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/3164862/4.jpg?7891",
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/3164862/5.jpg?7891"
    ];

    // state
    const [imgUrl, setImgUrl] = useState(imgUrls[0])

    // handle change image
    const handleChangeImage = (urlIndex) => {
        setImgUrl(imgUrls[urlIndex])
    }
    const styles = {
        img: {
            width:"15%",
            height:"15%",
            margin:"10px",
            border:"1px dashed black"
        }
    }
    
        
  return (
    <div>
        <img 
        src={imgUrl} style={styles.img}
        alt="pictures" 
        />

        <div>

            {imgUrls.map((url, index) => (
                <img key={index} src={url} alt="pictures" style={styles.img}
                onClick={() => handleChangeImage(index)}/>
                ))};
           
        </div>
    </div>
  )
}

export default Imagegallery