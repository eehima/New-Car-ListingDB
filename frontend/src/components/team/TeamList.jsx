import TeamCard from "./TeamCard"
import { useEffect, useState } from "react";

const TeamList = () => {
    const styles = {
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            padding: "10px"
        }
    }
    const [team, setTeam] = useState([]);
    const [loading , setLoading] = useState(false);
    // write a function using fetch
    const fetchTeam = async () => {
         setLoading(true);
        const url = "https://api.github.com/users"

        try {
           const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
           });
           const data = await response.json();
           setTeam(data);
           setLoading(false);
            
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    };
   useEffect(() => {
    fetchTeam();
   }, []);

  return (
    <div>
        <h2>Car Bay Team</h2>
        {loading && <p>Loading...</p>}
        <div style={styles.grid}>
            {team.map((team) => (
                <TeamCard 
                key={team.id} 
                imgUrl={team.avatar_url} 
                username={team.login}
                 link={team.html_url}
                 />
            ))}
        </div>
    </div>
  )
}

export default TeamList