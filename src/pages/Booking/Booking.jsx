import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect,useParams } from 'react-router-dom';
import { datVeActionAPI, layDanhSachGheApi } from '../../redux/actions/QuanLyPhongVeAction';

export default function Booking(props) {

    const {dsGhe} = useSelector(state => state.QuanLyPhongVeReducer);
    
    const dispatch = useDispatch();
    // const params = useParams();

    //bóc tấch
    const {maLichChieu} = useParams();
    // console.log(params);
    // console.log(dsGhe);
    useEffect(()=>{
        // call api 
        // console.log(props.match.params.maLichChieu);
        dispatch(layDanhSachGheApi(maLichChieu));
    },[])

    const handleClassName = (ghe) => {
        if(ghe.loaiGhe ==='Vip' && !ghe.dangChon) {
            return "btn btn-success text-white m-2"
        } else  if(ghe.daDat){
            //đã đặt
            return "btn btn-danger text-white m-2"
        }
        else{
            //chưa đặt
            if(ghe.dangChon){
                //đang chọn
                return "btn btn-info text-white m-2"
            }else{
                return "btn btn-dark text-white m-2"
            }
            
        }
    }

    const renderDanhSachGhe = () => {
        return dsGhe.map((ghe,index)=>{
            return <>
             <button style={{ width: '50px', height: '50px'}}  key={index} className={handleClassName(ghe)} disabled={ghe.daDat}
            onClick={()=>{
                dispatch({
                    type:'TOGGLE_GHE',
                    // ghe: ghe,
                    ghe,
                })
            }}>
                {ghe.tenGhe}
            </button>
            <br className={(index + 1) % 16 ? 'd-none' : 'd-block'} />
            
             </>
        })
    }

    const handleBooking = ()=>{
        //call api
        let gheDaChon = dsGhe.filter((ghe)=> ghe.dangChon);
        gheDaChon = gheDaChon.map((ghe)=>({maGhe : ghe.maGhe, giaVe: ghe.giaVe}));
        // console.log(gheDaChon);
        dispatch(datVeActionAPI(maLichChieu,gheDaChon));
    }
    //Nếu có login thì cho phép đặt vé, không có thì chuyển hướng sang trang đăng nhập
    if(localStorage.getItem('userLogin')){
        return (
            <div className="container text-center">
                <h2>Danh Sách Ghế</h2>
                <div>
                    {
                        renderDanhSachGhe()
                    }
                </div>
                <div>
                    <button className="btn btn-success" onClick={handleBooking}> Đặt ghế</button>
                </div>
            </div>
        )
    }
    return <Redirect to='/login'/>
    
}
