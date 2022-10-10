
const tbody=document.getElementById("tbody")
const row=document.createElement("tr")
const pagination=document.getElementById("pagination")

let itemsPerPage=15

const countries=document.getElementById("countries")


fetch("https://restcountries.com/v3.1/all").then((a)=>a.json()).then((res)=>{
    orderRows()
    let totalPageCount=Math.ceil(res.length/itemsPerPage)
    console.log(res)
//     res.slice(0,itemsPerPage).map((a)=>{
        
//         let tr=document.createElement("tr")
//         let numberTd=document.createElement("td")
        
//         let nameTd=document.createElement("td")
//         nameTd.textContent=a.name.common
//          let capitalTd=document.createElement("td")
//          capitalTd.textContent=a.capital
//         let regionTd=document.createElement("td")
//         regionTd.textContent=a.region
//         let subregionTd=document.createElement("td")
//         subregionTd.textContent=a.subregion
//         let populationTd=document.createElement("td")
//         populationTd.textContent=a.population
//         let flagTd=document.createElement("td")
//         flagTd.innerHTML=a.flag
//         let btn = document.createElement("button")
//         btn.textContent="X"
//         tr.append(numberTd,nameTd,capitalTd,regionTd,subregionTd,populationTd,flagTd,btn)
//         tbody.append(tr)
       
//         btn.addEventListener("click", (e) => {
//            confirm("olkeni sil")&&
//             btn.closest("tr").remove()
     
//     })
// })

    for(let i=0;i<totalPageCount;i++){
        let page=document.createElement("li")
pagination.append(page)
        page.textContent=i+1
        page.addEventListener("click",()=>{
            let start=i*itemsPerPage
            let end=start+itemsPerPage
            // countries.innerHTML=""
            res.slice(start,end).map((a)=>{
                console.log(a)
                let tr=document.createElement("tr")
                let numberTd=document.createElement("td")
                
                let nameTd=document.createElement("td")
                nameTd.textContent=a.name.common
                 let capitalTd=document.createElement("td")
                 capitalTd.textContent=a.capital
                let regionTd=document.createElement("td")
                regionTd.textContent=a.region
                let subregionTd=document.createElement("td")
                subregionTd.textContent=a.subregion
                let populationTd=document.createElement("td")
                populationTd.textContent=a.population
                let flagTd=document.createElement("td")
                flagTd.innerHTML=a.flag
                let btn = document.createElement("button")
                btn.addEventListener("click", (e) => {
                    confirm("olkeni sil")&&
                     btn.closest("tr").remove()
             
                })
                tr.append(numberTd,nameTd,capitalTd,regionTd,subregionTd,populationTd,flagTd,btn)
                tbody.append(tr)
                btn.textContent="X"
            })
        })
    }
})

const orderRows = () => {
    [...document.querySelectorAll("tbody tr")].map((tr, a) => {
      tr.querySelector("td").innerText = a + 1;
    });
  };
  const search=document.getElementById("search")
  search.addEventListener("input",()=>{
    
  })