const Student = (props) => {
    return (
        <div>
            <h1>Student Details</h1>
            <p>First name: {props.student.firstName}</p>
            <p>Last name: {props.student.lastName}</p>
            <p>Email: {props.student.email}</p>
        </div>
    );
}

export default Student;