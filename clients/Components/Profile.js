import React    from "react";
import { useParams } from "react-router-dom";

const [scheddules, setSchedules] = useState([]);
const [loading, setLoading] = useState(true);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

useEffect(() => {
    function getUserDetails() {
        if(id) {
            fetch(`http://localhost:4000/schedules/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setUsername(data.username);
                setSchedules(data.schedules);
                setLoading(false);
                setTimezone(data.timezone.label);
            })
            .catch((err) => console.error(err));
        }
    }
    getUserDetails();
}, [id]
);

const Profile = () => {
    useEffect(() => {
        if (!localStorage.getItem("_id")) {
            navigate("/");
        }
    }, [navigate]);
    const {id} = useParams();
    return (
        <main className='profile'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>Hey, {username}</h2>
                    <p>Here is your schedule: - {timezone}</p>
                    <table>
                        <tbody>
                            {schedules.map((sch) => (
                                <tr key={sch.day}>
                                    <td style={{ fontWeight: "bold" }}>{sch.day.toUpperCase()}</td>
                                    <td>{sch.startTime || "Unavailable"}</td>
                                    <td>{sch.endTime || "Unavailable"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}

export default Profile