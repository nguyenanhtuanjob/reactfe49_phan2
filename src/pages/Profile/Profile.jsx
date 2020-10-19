import React from 'react'
import { Redirect } from 'react-router-dom';

export default function Profile(props) {

    if(localStorage.getItem('userLogin')){
        return <div className="display-4 text-center">
            hello cybersoft
        </div>
    }else{
        alert('Đăng nhập để vào trang này');
        return <Redirect to="/login"/>
    }
}
