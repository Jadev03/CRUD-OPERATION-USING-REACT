const apiRequests=async(API_URL='',OptionsObj=null,error=null)=>{
    try{
        let response=await fetch(API_URL,OptionsObj)
        console.log(response)
        if(!response.ok) throw new Error("Database fetch error")
        if(!OptionsObj){
            let data=await response.json()
            console.log(data)
           // if(!data)  throw new Error("convertion error")
            console.log(data.body)
        }
    }
    catch(err){
        error=err.message;
    }
    finally{
        console.log(error)
    }

}
export default apiRequests