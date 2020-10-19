import React, { Component } from 'react'
import ModalHOC from './ModalHOC'
import Login from '../Login/Login';
export default class DemoHOC extends Component {
    render() {
        //this.props.children la dùng để truyền giá trị từ cha sang con thông qua phần innerHTML của thẻ component (Thường dùng để truyền giao diện)
        return (
            <div>
                 <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                        open Login
                </button>
                <ModalHOC Component={Login}/>
            </div>
        )
    }
}
