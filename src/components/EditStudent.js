import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { useGlobalContext } from "../context";
import axios from "axios";

const url = "https://6199ee819022ea0017a7af87.mockapi.io/api/v1/users";

function EditStudent() {
  const { userData, preventSubmit, fetchUsers } = useGlobalContext();
  const { id } = useParams();
  const tempUser = userData.find((user) => user.id === id);

  const navigate = useNavigate();
  const navigateToAllStudents = () => navigate('/students', { replace: true });

  /* Get input */
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  /* Edit user details */
  const editHandler = async (event) => {
    preventSubmit(event);

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhone = phoneRef.current.value;

    tempUser.name = enteredName;
    tempUser.email = enteredEmail;
    tempUser.phone = enteredPhone;
    
    await axios.put(`${url}/${id}`, tempUser); 

    fetchUsers();
    navigateToAllStudents();
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder={tempUser.name}
            ref={nameRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Age
          </label>
          <input type="email" className="form-control" id="email" placeholder={tempUser.email} ref={emailRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Gender
          </label>
          <input type="text" className="form-control" id="phone" placeholder={tempUser.phone} ref={phoneRef} />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => editHandler(event)}
        >
          Edit
        </button>
      </form>
    </div>
  );
}

export default EditStudent;
