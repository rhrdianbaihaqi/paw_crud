import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FormAddData = () => {
  const navigate = useNavigate();
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [angkatan, setAngkatan] = useState("");

  const [dataMahasiswa, setDataMahasiswa] = useState([]);

  // Get Data
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/mahasiswa/getData"
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

  // Add Data
  const addData = async (e) => {
    e.preventDefault();
    try {
      // Data Exists
      await dataMahasiswa.find((data) => {
        if (data.nim == nim) {
          return toast.error("Data Sudah Terdaftar.");
        }
      });

      await axios.post("http://localhost:3000/mahasiswa/addData", {
        nim,
        nama,
        jurusan,
        fakultas,
        angkatan,
      });
      // console.log(response);
      navigate("/");
      toast.success("Data Berhasil Ditambahkan.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-add-data">
      <form onSubmit={addData}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="nim">NIM</label>
              </td>
              <td>
                <input
                  type="text"
                  name="nim"
                  id="nim"
                  placeholder="Masukan NIM"
                  value={nim}
                  onChange={(e) => setNim(e.target.value)}
                  required
                  autoComplete="off"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="nama">Nama Lengkap</label>
              </td>
              <td>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  placeholder="Masukan Nama Lengkap"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  autoComplete="off"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="jurusan">Jurusan</label>
              </td>
              <td>
                <input
                  type="text"
                  name="jurusan"
                  id="jurusan"
                  placeholder="Contoh : Teknik Informatika"
                  value={jurusan}
                  onChange={(e) => setJurusan(e.target.value)}
                  required
                  autoComplete="off"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="fakultas">Fakultas</label>
              </td>
              <td>
                <select
                  name="fakultas"
                  id="fakultas"
                  value={fakultas}
                  onChange={(e) => setFakultas(e.target.value)}
                >
                  <option value="..."></option>
                  <option value="Fakultas Ilmu Sosial Politik">
                    Fakultas Ilmu Sosial Politik
                  </option>
                  <option value="Fakultas Sains Teknologi">
                    Fakultas Sains Teknologi
                  </option>
                  <option value="Fakultas Ekonomi Bisnis">
                    Fakultas Ekonomi Bisnis
                  </option>
                  <option value="Fakultas Syariah Hukum">
                    Fakultas Syariah Hukum
                  </option>
                  <option value="Fakultas Adab Humaniora">
                    Fakultas Adab Humaniora
                  </option>
                  <option value="Fakultas Tarbiyah Keguruan">
                    Fakultas Tarbiyah Keguruan
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="angkatan">Angkatan</label>
              </td>
              <td>
                <select
                  name="angkatan"
                  id="angkatan "
                  value={angkatan}
                  onChange={(e) => setAngkatan(e.target.value)}
                >
                  <option value="..."></option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="btn">
                <button onClick={() => navigate("/")}>Kembali</button>
                <button type="submit">Add Data</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default FormAddData;
