import React, { useEffect, useState } from 'react';
import Home from './Containers/Home';
import Loading from './Containers/Loading';



const Homewithloading = Loading(Home)

function App(props){
  
  const [ loading , setLoading ] = useState (false);

  const [ data , setData ] = useState ([]);

  let orgdata=[
    {
      id:101,
      name:'Brijesh'
    }
    ,
    {
      id:102,
      name:'Roshni'
    }
    ,
    {
      id:103,
      name:'Kartik'
    }
  ]

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{setLoading(false);setData(orgdata)},3000)
  },[])

  return (
   
      <Homewithloading
        isloading={loading}
        data={data}
      />
    
  );
}

export default App;