import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { dangNhapApiAction } from "../../redux/actions/QuanLyNguoiDungAction";
import {useHistory} from 'react-router-dom'
export default function Login(props) {
//   const [state, setState] = useState({
//     userLogin: {
//       userName: "",
//       passWord: "",
//     },
//   });
let dispatch = useDispatch();
    const [userLogin,setUserLogin] =useState({
        userName: "",
        passWord: "",
    })
let history = useHistory();
    

  // this.state({
  //     userLogin:{
  //         userName:'',
  //         password:''
  //     }
  // })


  console.log(userLogin);
  const handleChange = (e) => {
    const {value, name} = e.target;

    // const newUserLogin={
    //     [name]: value
    // }
    // setState({
    //   userLogin: { ...state.userLogin, [name]: value },
     
    // });
    setUserLogin({...userLogin,[name]: value})
  };

  const login = (e) => {
    e.preventDefault(); //ngăn sự kiện sau khi submit reload lại trang
    //gọi api đăng nhập
    dispatch(dangNhapApiAction(userLogin,history));


    // //Kiểm tra userName,passWord = cybersoft => Chuyển về trang chủ ngược lại báo lỗi
    // if(userLogin.userName === 'cybersoft' && userLogin.passWord === 'cybersoft'){
    //     // props.history.goBack(); //TRẢ VỀ TRANG TRƯỚC LINK ĐẾN TRANG NÀY
    //     props.history.push('/home'); //chuyển hướng đến trang (path) chỉ định => home

    //     // props.history.replace('/home'); //thay đổi thành route tương ứng

    //     

    // }
    // else{
    //     alert('Login failed!!');
    // }
  };

  return (
    <form className="container" onSubmit={login} action="">
      <h3 className="display-4 text-center">Login</h3>
      <div className="form-group">
        <p>Username</p>
        <input
          type="text"
          name="userName"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          type="text"
          name="passWord"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </div>
    </form>
  );
}
