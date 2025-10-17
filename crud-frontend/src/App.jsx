import { Route, Routes } from "react-router-dom";
import AppCRUD from "../components/AppCRUD";
import FormAddData from "../components/FormAddData";
import FormEditData from "../components/FormEditData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <h1 className="title">WEBSITE CRUD MAHASISWA - 1237050023</h1>
      <Routes>
        <Route path="/" Component={AppCRUD} />
        <Route path="/addData" Component={FormAddData} />
        <Route path="/editData/:id" Component={FormEditData} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
