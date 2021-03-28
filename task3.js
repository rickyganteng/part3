//1.
/* const cekNomor = (a)=> {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let cek = a % 2==0;
      if(cek){
        resolve("bilangan bisa habis dibagi 2");
      }else{
        reject(new Error('bilangan tidak habis dibagi 2'))
      }
    },3000);
  })
}

let printData = (cek) => {
  console.log(cek);
};
 
  const hello = async () => {
    try {
      let result = await cekNomor(7);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };  
  hello(); */
//////////////////////////////////////////////////////////////////////////////


//2
 const Absensi = (user)=> {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const name = ['dodi','fahrul','rudi','james']
      let cek = name.find((item)=>{
        return item === user
      })
      if(cek){
        resolve("Selamat Datang "+ cek )
      }else{
        reject(new Error('tidak terdaftar'))
      }
    },3000);
  })
}

Absensi('dodii')
  .then((result)=>{
    console.log(result);
  })
  .catch((reject)=>{
    console.log(reject);
  });
