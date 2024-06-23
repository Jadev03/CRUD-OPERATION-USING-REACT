import React from 'react'
import './Insert.css'
import api from'./api.js'

const Insert = ({  name, setName, Age, setAge, cnum, setCnum, Add, setAddress }) => {
    let submission = async () => {
        let response;
        try{
            if(name!='' && Age!=''){
                setAge("100")
                response=await api.patch('/details/3',{name,Age,cnum,Add});
                if(!response.statusText) throw new Error("Databse get error")
            }
           // console.log(response)
          //  console.log(response)

        }
        catch(e){
            console.log(e.message);
        }               
    }



    return (
        <div>
            <form>
                <h1>Insert</h1>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' required /><br />
                <input type='text' value={Age} onChange={(e) => setAge(e.target.value)} placeholder='Enter your Age' required /><br />
                <input type='text' value={cnum} onChange={(e) => setCnum(e.target.value)} placeholder='Enter your contact' /><br />
                <input type='text' value={Add} onChange={(e) => setAddress(e.target.value)} placeholder='Enter your Address' /><br />
                <button type="submit" onClick={submission} >Submit</button>
            </form>
        </div>
    );
};

export default Insert;
