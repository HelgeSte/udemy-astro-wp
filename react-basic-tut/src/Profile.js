import { useEffect } from "react";
import { useState } from "react";

export default function Profile(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3001/profile`);
            const data = await response.json();
            setFirstName(data.firstName);
            setLastName(data.lastName);
            console.log({ data });
        };
        fetchData();
    }, []); // Empty dep-list = only run once whenever the component is mounted
    return <div>
        <div><strong>First name: </strong>{firstName}</div>
        <div><strong>Last name: </strong>{lastName}</div>
    </div>;
}