import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {connect, useSelector,useDispatch} from 'react-redux';
import {layDanhSachPhimApiAction} from '../../redux/actions/QuanLyPhimAction';
import { NavLink } from 'react-router-dom'
function Home(props) {


    //Dùng useSelector thay cho mapStateToProps lấy danh sách từ reducer về
    const danhSachPhim =useSelector(state => state.QuanLyPhimReducer.dsPhim);

    //useDispatch thay thế cho this.props.dispatch bên react component
    const dispatch = useDispatch();


    const [dsPhim,setDSPhim] =useState([])

    const getFilm = async () => {

        dispatch(layDanhSachPhimApiAction());
        // getFilmApi()
        // axios({
        //     url:'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // }).then(res =>{
        //     console.log("Kết quả",res.data);
        //     setDSPhim(res.data);
        // }).catch(err =>{
        //     console.log(err.response.data);
        // })
    }

    useEffect(()=>{
        dispatch(layDanhSachPhimApiAction());
        // axios({
        //     url:'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // }).then(res =>{
        //     console.log("Kết quả",res.data);
        //set lại state dsPhim => function render lại (chạy lại tất cả với dsPhim mang giá trị mới)
        //     setDSPhim(res.data);
        // }).catch(err =>{
        //     console.log(err.response.data);
        // })

    },[]) //Tham số thứ 2 useEffect là mảng rổng => ứng với componentDidmount của react Lifecycle

    // const getFilmApi = async () => { //async funtion là function bất đồng bộ khi gọi nó, các hàm tiếp theo vẫn tiếp tục thực hiện
    //     try{
    //     let {data,status} = await  axios({
    //         url:'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
    //         method: 'GET'
    //     });
    //     //Lệnh await bắt buộc các lệnh phía sau phải đợi đến khi hàm này thực thi xong thì mới làm tiếp
    //     // console.log(data);
    //     if(status ===200){
    //         setDSPhim(data);
    //     }
    //     }
    //     catch(ex){
    //         console.log('ex',ex)
    //     }
    // }


    const renderPhim = () => {
        console.log('dsPhim',danhSachPhim);
        return danhSachPhim.slice(0,8).map((phim,index) =>{
            return(
                <div className="col-3 my-5" key={index}>
                    <div className="card text-white bg-warning">
                        <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e)=>{
                            e.target.src ="https://picsum.photos/300/300"
                        }} />
                        <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>

                        <NavLink className="btn btn-success" to={`/detail/${phim.maPhim}`}>ĐẶT VÉ</NavLink>
                        </div>
                    </div>
                </div>
            )

        })
    }
    return (
        <div className="container">
            <button className="btn btn-success" onClick={()=>{
               
                getFilm();
            }} >Lấy danh sách phim</button>

            <h3>Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        dsPhim: state.QuanLyPhimReducer.dsPhim
    }
}
export default connect(mapStateToProps) (Home)