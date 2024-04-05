import "./uploadBook.css";
import { MdCloudUpload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function UploadBook() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className="uploadBook-section flex items-center justify-center">
      <div className="bookUpload-div">
        <button onClick={handleNavigate} className="upload-book-close-button">
          <IoCloseSharp size={40} className="upload-book-close-icon" />
        </button>
        <h1 className="font-bold text-center text-blue-900">Upload a Book</h1>
        <form action="">
          <div className="upload-book-input">
            <input type="text" placeholder="Title" />
          </div>
          <div className="upload-book-input">
            <input type="text" placeholder="Author" />
          </div>
          <div className="upload-book-input">
            <input type="text" placeholder="Price (LKR)" />
          </div>
          <div className="upload-book-input">
            <select name="" id="">
              <option value="Null">Choose category</option>
              <option value={"Mystery"}>Mystery</option>
              <option value={"Horror"}>Horror</option>
              <option value={"Romance Novel"}>Romance Novel</option>
              <option value={"Fiction"}>Fiction</option>
              <option value={"Fairy tale"}>Fairy tale</option>
              <option value={"Thriller"}>Thriller</option>
              <option value={"Classic"}>Classic</option>
            </select>
          </div>
          <div
            className="upload-bookimg"
            onClick={() =>
              document.querySelector(".input-file-bookimg").click()
            }
          >
            <input
              type="file"
              className="input-file-bookimg"
              accept="image/*"
              hidden
            />
            <MdCloudUpload size={50} className="cloud-icon" />
            <p>Drag and Drop files here</p>
            <button>Choose file</button>
          </div>
          <div className="upload-button-div flex items-center justify-center">
            <button className="book-upload-button">Upload Book</button>
          </div>
        </form>
      </div>
    </div>
  );
}
