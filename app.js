
/*let eplBtn = document.querySelector(".Epl")
eplBtn.addEventListener("click",premierLeague)

function premierLeague(){
   let uri = "https://api.football-data.org/v4/competitions/PL";
   let headers = {
       "X-Auth-Token":"231bcea2350c4643903f4a0f82bb23da",
       "Accept-Encoding":"",
       "mode":"cors"
   }
   fetch(uri,headers = headers)
   .then((res)=>{
       return res.json()
   })
   .then((res)=>{
       console.log(res)
   })
}
*/

function getData(){
    fetch("app.json")
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res)
    })
}

