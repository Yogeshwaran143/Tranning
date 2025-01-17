import '../CSS/HelloWorld.css'

const HelloWorld = () => {
    const userName = "James Bond";
    function alertUser() {
        alert("User alert");
    }

    return (
        <div>
            <h1 className="title">Title</h1>
            <h2>Sub title</h2>
            <p>{userName}</p><br />
            <button onClick={alertUser}>Alert user</button>
        </div>
    );
}

export default HelloWorld;