 const getmonth = (callback) => {
  setTimeout(() =>{
    let error = true;
    let month = ['January','Februari','March','May','Juni','july','August','September','October','December'];
    if(!error){
      callback(null, month)
    }else{
      callback(new Error('Sorry data not found'),[])
    }
  },4000)
}

let tampilbulang = (param1,param2)=>{
  if(param1 === null){
    var cetakbulang = param2.map(function(quote){
      return quote;
    });
    console.log(cetakbulang);
  
  }else{
    console.log(param1);
  }
}

getmonth(tampilbulang);
