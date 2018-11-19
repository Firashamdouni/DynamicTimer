import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

import './timer.css';



function MsToTime(props){
    var a = props.time;
    console.log(a);
   return  <div className="row d-flex justify-content-between ">
<div className="card col-lg-4 d-flex align-items-stretch">
<div className="a"><p className="text text-center text-muted">{a.h}</p> </div>
<div className="b"><p className="describe text-center">Hours</p>  </div>
</div>

<div className="card col-lg-4 d-flex align-items-stretch">
<div className="a"><p className="text text-center text-muted">:{a.m}</p> </div>
<div className="b"><p className="describe text-center">Minute</p> </div>
</div>
<div className="card col-lg-4 d-flex align-items-stretch">
<div className="a"><p className="text text-center text-muted">:{a.s}</p> </div>
<div className="b"><p className="describe text-center">Second</p> </div>
</div>
</div>

}


export default MsToTime;