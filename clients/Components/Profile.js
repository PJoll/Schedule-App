import React    from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
    const {id} = useParams();
    return (
        <main className="profile">
            <div style={{width: "70%"}}>
                <h2>Hello Staufenheim</h2>
                <p>Here is your booking link: WAT</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Mon</td>
                            <td> 8:00 AM</td>
                            <td> 9:00 9PM</td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </main>
    )
}

export default Profile