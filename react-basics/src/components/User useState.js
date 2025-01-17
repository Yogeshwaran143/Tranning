import { useState } from "react";

const User = () => {

    // const [firstName, setFirstName] = useState('James');
    // const [lastName, setLastName] = useState('Bond');
    // const [email, setEmail] = useState('james@email.com');

    const [user, setUser] = useState({
        firstName: "James",
        lastName: "Bond",
        email: "james@email.com"
    });

    function updateUser() {
        // setFirstName('Paul');
        // setLastName('Walker');
        // setEmail('paul@email.com');

        setUser({
            firstName: "Paul",
            lastName: "Walker",
            email: "paul@email.com"
        });
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <button onClick={updateUser}>Update User</button>
        </div>
        
    );
}

export default User;