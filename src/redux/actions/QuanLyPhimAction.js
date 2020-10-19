import axios from "axios";
import {
  LAY_DANH_SACH_PHIM,
  LAY_CHI_TIET_PHIM,
} from "../constans/QuanLyPhimContanst";
//Action có 2 loại:
// + 1 là action bình thường

// + Action async ( các action dùng để gọi api)
export const layDanhSachPhimApiAction = () => {
  //Thay vì return về object -> middleware thunk cho phép mình return về 1 functin có tham số là hàm dispatch
  return (dispatch) => {
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08",
      method: "GET",
    })
      .then((res) => {
        console.log("Kết quả", res.data);

        //dispatch lần 1 tại component để gọi action nayf thực thi

        dispatch({
          type: LAY_DANH_SACH_PHIM,
          dsPhim: res.data,
        });
        // const action ={
        //     type: LAY_DANH_SACH_PHIM,
        //     dsPhim :res.data
        // }
        //dispatch lần 2 sau khi có kết quả từ api lấy dữ liệu dispatch lên reducer
        // dispatch(action);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const layChiTietPhim = (maPhim) => {
  //Thay vì return về object -> middleware thunk cho phép mình return về 1 functin có tham số là hàm dispatch
  return (dispatch) => {
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    })
      .then((res) => {
        console.log("quanlyphimaction", res);
        dispatch({
          type: LAY_CHI_TIET_PHIM,
          chiTietPhim: res.data,
        });
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  };
};

// // + Action async ( các action dùng để gọi api)
// export const layDanhSachPhimApiAction = () => {
//     //Thay vì return về object -> middleware thunk cho phép mình return về 1 functin có tham số là hàm dispatch
//     return async dispatch =>{
//        const {data} = await axios({
//             url:'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
//             method: 'GET'
//         })

//         //Sau khi lấy dữ liệu từ backend về sử dụng hàm dispactch đưa dữ liệu lên reducer
//         const action = {
//             type: LAY_DANH_SACH_PHIM,
//                 dsPhim :res.data
//         }
//         dispatch(action);
//     }
// }
