import axios from 'axios';
import { DOMAIN, TOKEN, USER_LOGIN } from '../../ultity/ConfigWeb';

export const dangNhapApiAction = (userLogin , history) => {
    return async dispatch => {
        try{
            let {data,status} = await axios({
                url : DOMAIN +'/api/quanlynguoidung/dangnhap',
                method : 'POST',
                data:{
                    taiKhoan: userLogin.userName,
                    matKhau:userLogin.passWord
                }
            });
            if(status ===200){
                //sau khi gọi api =>dispatch lên redux
                dispatch({
                    type: 'DANG_NHAP',
                    userLogin:data
                });
                //lưu vào localstorage

                localStorage.setItem(USER_LOGIN,JSON.stringify(data));

                localStorage.setItem(TOKEN,data.accessToken);
                // history.push("/");
                history.goBack();
            }
            

        }
        catch(err){
            console.log(err.response.data);
            alert(err.response.data);
        }
    }
}
