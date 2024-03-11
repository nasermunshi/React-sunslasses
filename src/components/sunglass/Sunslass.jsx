import React from 'react';

import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiplay, devidednumber } from '../../Utils/calculats';
// import add from '../../Utils/calculats';

const Sunslass = () => {
  
const first = 55;
const secound = 199;
const sum = add(first, secound)
const mult = multiplay(first, secound)
const vagg =  devidednumber(first, secound)   
    
return (
<div>
    <Watch></Watch>                                                        
</div>
);
};

export default Sunslass;