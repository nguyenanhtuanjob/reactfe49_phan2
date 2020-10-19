import React,{Fragment} from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/Header/Header';

const HomeLayout =(props) => {
    return <Fragment>
        <Header/>
        {props.children}
        
    </Fragment>
}

export const HomeTemplate = ({Component,...restProps}) =>{
    // let {exact,path,Component} = props;
    return <Route {...restProps} render={(propsRoute) =>{
        return <HomeLayout>
            <Component {...propsRoute}/>
        </HomeLayout>
    }}/>
}