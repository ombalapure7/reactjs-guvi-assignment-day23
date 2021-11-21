import { useRef } from "react";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const url = "https://6199ee819022ea0017a7af87.mockapi.io/api/v1/users";

function AddStudent() {
  const { fetchUsers, preventSubmit } = useGlobalContext();

  /* Get input */
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const navigate = useNavigate();
  const navigateToAllStudents = () => navigate("/students", { replace: true });

  /* Add a user to the list */
  const addHandler = async (event) => {
    preventSubmit(event);
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhone = phoneRef.current.value;

    // All fields are mandatory to enter
    if (enteredName === "" || enteredEmail === "" || enteredPhone === "") {
      return <div>All fields are mandatory!</div>;
    }

    await axios.post(`${url}`, {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
    });

    fetchUsers();
    navigateToAllStudents();
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            aria-describedby="emailHelp"
            ref={nameRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            ref={phoneRef}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => addHandler(event)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
