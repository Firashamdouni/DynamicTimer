import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './timer';
import  MsToTime from './transform1';
import './timer.css';


const Transform = (props) => {
    var a = props.obj;
    console.log("this is :"+a);
    var ms = a % 1000;
    a = (a - ms) / 1000;
     var secs = a % 60;  secs=(secs<10)? "0"+secs:secs
    a = (a - secs) / 60;
    var mins = a % 60;    mins=(mins<10)? "0"+mins:mins
    var hrs = (a - mins) / 60; hrs=(hrs<10)? "0"+hrs:hrs


  let aa = {
        h:hrs,
        m:mins,
        s:secs,
        ms:ms
    }
    return  <MsToTime time={aa} />
}



export default Transform;




