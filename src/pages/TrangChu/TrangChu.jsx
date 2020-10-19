import React, { Component } from "react";
import axios from "axios";

export default class TrangChu extends Component {
  state = {
    dsPhim: [],
  };
  getFilm = () => {
    
  };
  renderPhim = () => {
    return this.state.dsPhim.map((phim, index) => {
      return (
        <div className="col-3 my-5" key={index}>
          <div className="card text-white bg-warning">
            <img
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.hinhAnh}
              onError={(e) => {
                e.target.src = "https://picsum.photos/300/300";
              }}
            />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text">{phim.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-success"
          onClick={() => {
            this.getFilm();
          }}
        >
          Lấy danh sách phim
        </button>

        <h3>Danh sách phim</h3>
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }

  componentDidMount() {
      //lifecycle này dùng để gọi api từ backend
      axios({
        url:
          "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      })
        .then((res) => {
          console.log("Kết quả", res.data);
          // set lại state dsPhim => function render lại
          this.setState({
            dsPhim: res.data,
          });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
  }
}
