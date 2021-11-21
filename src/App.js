import { React } from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import StudentsList from "./components/StudentsList";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <>
      <Router>
        <div style={{ display: "grid", gridTemplateColumns: "15% 85%" }}>
          <div>
            <Sidebar />
          </div>
          <div>
            <Routes>
              <Route exact="true" path="/" element={<Dashboard />} />
            </Routes>
            <Routes>
              <Route path="/students" element={<StudentsList />} />
            </Routes>
            <Routes>
              <Route path="/add" element={<AddStudent />} />
            </Routes>
            <Routes>
              <Route path="/edit/:id" element={<EditStudent />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
