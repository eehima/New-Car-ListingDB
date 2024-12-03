import './AddTeamForm.css'
import { useState } from "react";
import TeamCard from "../team/TeamCard";

const AddTeamForm = () => {
    // state to hold form data
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [teamObj, setTeamObj] = useState({});


    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // create a new team object
        const newTeam =  {
            name,
            link,
            imgUrl
        }
        // update team object state
        setTeamObj(newTeam);

        // clear the form
        setName("");
        setLink("");
        setImgUrl("");
    }


  return (
    <div className="container">
        <div>
        <h1 className="heading">Add New Team</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="link">Github Link:</label>
                <input type="text" name="name" id="name" placeholder='Enter github link' value={link} onChange={(e) => setLink(e.target.value)} />
            </div>
            <div>
                <label htmlFor="imgUrl">Profile Image Url:</label>
                <input type="text" name="imgUrl" id="imgUrl" placeholder='Enter image url' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}/>
            </div>
            <button type="submit">Add Team</button>
        </form>
        </div>
       
        <div>
            <h2>Team Card</h2>
            {teamObj.name && (
                <TeamCard imgUrl={teamObj.imgUrl} username={teamObj.name} link={teamObj.link} />
            )}

        </div>
    </div>
  )
}

export default AddTeamForm