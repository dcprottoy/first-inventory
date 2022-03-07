import React, { useState } from 'react';
import {p_data} from './Data';

const Form = ()=>{

const [formData,setFormData] = useState([]);

const addItem = () =>{
let id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));  

    setFormData([...formData,{'id':id,'name':""}])
}

const addP = (id,item) =>{
console.log(id,"-----",item);
let size = getSize(item);
let tempArray = formData.map(x => {
    if(x.id == id){
       x = {...x,'p_id':item,'size':size}
    }
    return x;
});
setFormData(tempArray);
}


const getSize = (id) =>{
let sizes = [];
p_data.forEach(f => {
    if(f.id==id){
        sizes = f.size
    }
});
return sizes;
}

return (
    <>
    <form onSubmit={(e)=>e.preventDefault()}>
        <div style={{height:'50vh',backgroundColor:'white',margin:'2px',border:'.1em black solid'}}>
        <div style={{display:'flex'}}>
            <div style={{flexGrow:1}}>
                {console.log(formData)}
               
            </div>
            <button onClick={()=> addItem()}>Add Item</button>
        </div>
        {formData.map(x => {
                    return <div key={x.id} style={{display:'flex',height:'3em',margin:'3px',width:"100",alignItems:'center'}}>
                        <div style={{display:'flex',height:'3em',backgroundColor:'lightblue',margin:'3px',width:"10em",alignItems:'center',justifyContent:'center'}}>
                        <label for="p">Choose a P : </label>

                            <select name="p" id="p" onChange={(e)=>{addP(x.id,e.target.value)}}>
                              {p_data.map(item =>{
                                  return <option key={item.id} value={item.id}>{item.name}</option>
                              })}
                            </select> &nbsp; 
                        </div>
                        {'size' in x ?x.size.map(s => {
                           return <div style={{backgroundColor:'#AB3218',display:'flex'}}>
                                    <input type="number" />
                                    </div>
                        }):(<div style={{flexGrow:1,backgroundColor:'lightcoral'}}>please Select A product</div>)}
                        </div>
                })}
        </div>
    </form>
    </>)
}

export default Form;