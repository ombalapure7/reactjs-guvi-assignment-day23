import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import axios from "axios";

const url = "https://6199ee819022ea0017a7af87.mockapi.io/api/v1/users";

function StudentsList() {
  const { userData, fetchUsers } = useGlobalContext();

  /* Delete user details */
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      fetchUsers();
    } catch (error) {
      console.log("Error while deleting user: ", error);
    }
  };

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Edit/Delte</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>
                  <Link to={`/edit/${row.id}`}>
                    <button className="btn btn-warning">Edit</button>
                  </Link>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteHandler(row.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
