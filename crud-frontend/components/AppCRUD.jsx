import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AppCRUD = () => {
  const [dataMahasiswa, setDataMahasiswa] = useState([]);

  // Get Data
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/mahasiswa/getData/"
      );
      console.log(data.data);
      setDataMahasiswa(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // Delete Data
  const deleteData = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/mahasiswa/deleteData/${id}`
      );
      console.log(response);
      getData();
      toast.success("Data Berhasil Dihapus.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="app-crud">
        <Link to="/addData" className="tambah-data">
          Tambah Data
        </Link>
        <table>
          <tbody>
            <tr>
              <th>NO</th>
              <th>NIM</th>
              <th>NAMA</th>
              <th>JURUSAN</th>
              <th>FAKULTAS</th>
              <th>ANGKATAN</th>
              <th>ACTION</th>
            </tr>
            {dataMahasiswa.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Tidak Ada Data
                </td>
              </tr>
            ) : (
              <>
                {dataMahasiswa.map((data, index) => {
                  return (
                    <tr key={data._id}>
                      <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                      <td>{data.nim}</td>
                      <td>{data.nama}</td>
                      <td>{data.jurusan}</td>
                      <td>{data.fakultas}</td>
                      <td>{data.angkatan}</td>
                      <td>
                        <Link to={`/editData/${data._id}`}>
                          <i
                            className="fa-solid fa-pen-to-square"
                            title="Edit Data"
                          ></i>
                        </Link>
                        <i
                          className="fa-solid fa-trash"
                          title="Delete Data"
                          onClick={() => {
                            return confirm("Are you Sure?")
                              ? deleteData(data._id)
                              : "";
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppCRUD;
