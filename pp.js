const europe=document.getElementById("europe") 
const population=document.getElementById("population")
const tbody=document.getElementById("tbody")
const row=document.createElement("tr")
const pagination=document.getElementById("pagination")
let active=0
let itemsPerPage=15

const countries=document.getElementById("countries")
const getData=async()=>{
    await fetch("https://restcountries.com/v3.1/all").then((a)=>a.json()).then((res)=>{
        console.log(res)
        let totalPageCount=Math.ceil(res.length/itemsPerPage)
        res.slice(0,itemsPerPage).map((a,key)=>{
            let tr=document.createElement("tr")
            let link=document.createElement("a")
        link.setAttribute("href",`details.html?name=${a.name.common}`)
            link.setAttribute("target","blank")
            let numberTd=document.createElement("td")
            numberTd.textContent=key+1
            let nameTd=document.createElement("td")
            link.textContent=a.name.common
            nameTd.classList.add("countryname")
          
             let capitalTd=document.createElement("td")
             capitalTd.textContent=a.capital
            let regionTd=document.createElement("td")
            regionTd.textContent=a.region
            let subregionTd=document.createElement("td")
            subregionTd.textContent=a.subregion
            let populationTd=document.createElement("td")
            populationTd.textContent=a.population
            population.addEventListener("click",()=>{
                if(populationTd.innerText<500000){
                 populationTd.parentElement.classList.remove("hide")
               }
             else{
                populationTd.parentElement.classList.add("hide")
             }
             })
             europe.addEventListener("click",()=>{
                if(regionTd.innerText==="Europe"){
                 regionTd.parentElement.classList.remove("hide")
               }
             else{
                regionTd.parentElement.classList.add("hide")
             }
             })
            let flagTd=document.createElement("td")
           
            let flag=document.createElement("img")
            flagTd.append(flag)
            flag.classList.add("details_img")
            flag.setAttribute("src",a.flags.svg)
            let btn = document.createElement("button")
            btn.classList.add("btn")
            btn.textContent="X"
            btn.addEventListener("click", (e) => {
                e.preventDefault()
                confirm("olkeni sil")&&
                 btn.closest("tr").remove()
         
            })
            tr.append(numberTd,nameTd,capitalTd,regionTd,subregionTd,populationTd,flagTd,btn)
            nameTd.append(link)
           
            tbody.append(tr)
    
        })
        for (let i=0;i<totalPageCount;i++){
            let page = document.createElement("li")
            if (i === active) {
                       page.classList.add("activePage");
                   }
            page.textContent = i + 1
            pagination.append(page)
          
            page.addEventListener("click",()=>{
                active=i
                document.querySelector(".activePage").classList.remove("activePage");
                      page.classList.add("activePage");
                let start=i*itemsPerPage
                let end=start+itemsPerPage
                tbody.innerHTML=""
            res.slice(start,end).map((a,key)=>{
                // console.log(a)
                let tr=document.createElement("tr")
                let link=document.createElement("a")
            link.setAttribute("href",`details.html?name=${a.name.common}`)
                link.setAttribute("target","blank")
                let numberTd=document.createElement("td")
                numberTd.textContent=key+1
                let nameTd=document.createElement("td")
                link.textContent=a.name.common
                nameTd.classList.add("countryname")
              
                 let capitalTd=document.createElement("td")
                 capitalTd.textContent=a.capital
                let regionTd=document.createElement("td")
                regionTd.textContent=a.region
                let subregionTd=document.createElement("td")
                subregionTd.textContent=a.subregion
                let populationTd=document.createElement("td")
                populationTd.textContent=a.population
                
                population.addEventListener("click",()=>{
                    if(populationTd.innerText<500000){
                     populationTd.parentElement.classList.remove("hide")
                   }
                 else{
                    populationTd.parentElement.classList.add("hide")
                 }
                 })
                     europe.addEventListener("click",()=>{
                if(regionTd.innerText==="Europe"){
                 regionTd.parentElement.classList.remove("hide")
               }
             else{
                regionTd.parentElement.classList.add("hide")
             }
             })
                let flagTd=document.createElement("td")
               
                let flag=document.createElement("img")
                flagTd.append(flag)
                flag.classList.add("details_img")
                flag.setAttribute("src",a.flags.svg)
                let btn = document.createElement("button")
                btn.textContent="X"
                btn.classList.add("btn")
                btn.addEventListener("click", (e) => {
                    e.preventDefault()
                    confirm("olkeni sil")&&
                     btn.closest("tr").remove()
             
                })
                tr.append(numberTd,nameTd,capitalTd,regionTd,subregionTd,populationTd,flagTd,btn)
                nameTd.append(link)
               
                tbody.append(tr)
    
            })
        })
        
        }
        
    })
}
getData()

const countryName=document.getElementsByClassName("countryname")
const search=document.querySelector(".search")
search.addEventListener("input",()=>{
   console.log(search.value)
   Array.from(countryName).forEach(elem => {
    
    
        if(elem.innerText.toLowerCase().includes(search.value.toLowerCase())){
            // elem.parentElement.style.display="block"
            elem.parentElement.classList.remove("hide")
           
        }
        else{
          
            elem.parentElement.classList.add("hide")
        }
       })
    })
   
search.addEventListener("input",(e)=>{
    if(e.target.value.trim()<2){
        
    }
})

