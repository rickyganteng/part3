const cekHarikerja = (day)=> {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const dataDay = ['senin','selasa','rabu','kamis','jumat']
      let cek = dataDay.find((item)=>{
        return item === day
      })
      if(cek){
        resolve(cek)
      }else{
        reject(new Error('hari ini bukan hari kerja'))
      }
    },3000);
  })
}
///then catch ini tidak perlu menggunakan fungsi promise,

cekHarikerja('sabtu')
  .then((result)=>{
    console.log(result);
  })
  .catch((reject)=>{
    console.log(reject);
  });
 
 
  const hello = async () => {
    try {

      let result = await cekHarikerja('sabtu'); 
      console.log(result); 
    } catch (error) {

      console.log(error);
    }
  };
  
  hello();


  ////await harus memakai fungsi promise, ketika memakai fungsi biasa dia tidak akan mau jalan. dan untuk await ini nilai akan ditampung terlebih dahulu