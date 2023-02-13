let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("create");

let mood = 'Create'
let tmp;

function getTotal(){
    let result = +price.value + +taxes.value + +ads.value - discount.value
    if(price.value != ''){
        total.innerHTML = result
        total.style.background = "#040"
    }else{
        total.innerHTML = ''
        total.style.background = "#c03d3d"
    }
}
let dataPro = []
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro = []
}
submit.onclick = function(){
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }

    if(title.value != '' && price.value != ''&& count.value < 100){
        if(mood == 'Create'){
            if(newPro.count > 1){
                for(let i=0; i< newPro.count; i++){
                    dataPro.push(newPro)
                }
            }else{
                dataPro.push(newPro)
            }
        }else{
            dataPro[tmp] = newPro
            submit.innerHTML = 'Create'
            count.style.display = 'block'
        }
    }else{
        clearData()
    }

    localStorage.setItem("product", JSON.stringify(dataPro) )
    clearData()
    createData()
}
function clearData(){
    title.value = ''
    price.value = ''
    taxes.value = ''
    ads.value = ''
    discount.value = ''
    total.innerHTML = ''
    count.value = ''
    category.value = ''
}
function createData(){
    getTotal()
    let table = ''
    for(let i=1;i<dataPro.length; i++){
        table += `
        <tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="upDate(${i})" id="update">update</button></td>
        <td><button onclick="deleteOne(${i})" id="delete">delete</button></td>
    </tr>
        `
    }
    let deleteAll = document.getElementById("deleteAll")
    if(dataPro.length > 0){
        deleteAll.innerHTML = `
        <button onclick="deleteAll()">Delete All</button>
        `
    }else{
        deleteAll.innerHTML = ''
    }
    document.getElementById("tbody").innerHTML = table
}
createData()
function deleteOne(i){
    dataPro.splice(i,1)
    localStorage.product = JSON.stringify(dataPro)
    createData()
    console.log(i)
}
function deleteAll(){
    localStorage.clear()
    dataPro.splice(0)
    createData()
}
function upDate(i){
    title.value = dataPro[i].title
    price.value = dataPro[i].price
    taxes.value = dataPro[i].taxes
    ads.value = dataPro[i].ads
    discount.value = dataPro[i].discount
    getTotal()
    count.style.display = 'none'
    category.value = dataPro[i].category
    mood = 'update'
    tmp = i
    submit.innerHTML = 'Up Date'
}
let searchMood = 'title'
function getSearchMood(id){
    if(id === 'searchtitle'){
        searchMood = 'title'
    }else{
        searchMood = 'category'
    }
    let search = document.getElementById('search')
    search.placeholder = searchMood
    search.focus()
}
function search(value){
    let table = ''
    for(let i=0; i<dataPro.length; i++){
        if(searchMood === 'title'){
            if(dataPro[i].title.includes(value)){
                table += `
                <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
                <td><button onclick="upDate(${i})" id="update">update</button></td>
                <td><button onclick="deleteOne(${i})" id="delete">delete</button></td>
            </tr>
                `
            }
        }else{
            if(dataPro[i].category.includes(value)){
                table += `
                <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
                <td><button onclick="upDate(${i})" id="update">update</button></td>
                <td><button onclick="deleteOne(${i})" id="delete">delete</button></td>
            </tr>
                `
            }
            }
    }
    document.getElementById("tbody").innerHTML = table

    console.log(value)
}



















// let mood = 'create'
// let tmp;
// function getTotal(){
//     let result = +price.value + +taxes.value + +ads.value - +discount.value
//     if(price.value != ''){
//         total.innerHTML = result;
//         total.style.background = '#e56f0f'
//     }else{
//         total.innerHTML = '';
//         total.style.background = '#c03d3d'
//     }
// }
// let dataPro = []
// if(localStorage.product != null){
//     dataPro = JSON.parse(localStorage.product)
// }else{
//     dataPro = []
// }
// submit.addEventListener("click", ()=>{
//     let newPro = {
//         title: title.value,
//         price: price.value,
//         taxes: taxes.value,
//         ads: ads.value,
//         discount: discount.value,
//         total: total.innerHTML,
//         count: count.value,
//         category: category.value,
//     }
//     if(title.value != ''&&price.value!= ''&& count.value <100){
//         if(mood == 'create'){
//             if(newPro.count > 1){
//                 for(let i=0; i<newPro.count; i++){
//                     dataPro.push(newPro)
//                 }
//             }else{
//                 dataPro.push(newPro)
//             }
//         }else{
//             dataPro[tmp] = newPro
//             submit.innerHTML = 'Create'
//             count.style.display = 'block'
//             console.log(tmp)
//         }
//     }else{
//         clearData()
//     }

//     localStorage.setItem("product", JSON.stringify(dataPro))
//     clearData()
//     readData()
// })
// function clearData(){
//     title.value = '';
//     price.value = '';
//     taxes.value = '';
//     ads.value = '';
//     discount.value = '';
//     total.innerHTML = '';
//     count.value = '';
//     category.value = '';
// }
// function readData(){
//     getTotal()
//     let table = '';
//     for(let i=0; i<dataPro.length; i++){
//         table += `
//         <tr>
//         <td>${i}</td>
//         <td>${dataPro[i].title}</td>
//         <td>${dataPro[i].price}</td>
//         <td>${dataPro[i].taxes}</td>
//         <td>${dataPro[i].ads}</td>
//         <td>${dataPro[i].discount}</td>
//         <td>${dataPro[i].total}</td>
//         <td>${dataPro[i].category}</td>
//         <td><button onclick="upDate(${i})" id="update">update</button></td>
//         <td><button onclick="deleteOne(${i})" id="delete">delete</button></td>
//     </tr>
//         `
//     }
//     let deleteAll = document.getElementById("deleteAll")
//     if(dataPro.length > 0){
//         deleteAll.innerHTML = `
//         <button onclick="deleteAll()">Delete All</button>
//         `
//     }
//     document.getElementById("tbody").innerHTML = table
// }
// readData()
// function deleteOne(i){
//     dataPro.splice(i,1)
//     localStorage.product = JSON.stringify(dataPro)
//     readData()
// }
// function deleteAll(){
//     localStorage.clear()
//     dataPro.splice(0)
//     readData()
// }
// function upDate(i){
//     title.value = dataPro[i].title
//     price.value = dataPro[i].price
//     taxes.value = dataPro[i].taxes
//     ads.value = dataPro[i].ads
//     discount.value = dataPro[i].discount
//     getTotal()
//     count.style.display = 'none'
//     category.value = dataPro[i].category
//     submit.innerHTML = 'up Date'
//     mood = 'upDate'
//     tmp = i
//     scroll({
//         top:0,
//         behavior:"smooth"
//     })
// }
// let searchMood = 'title'
// function getSearchMood(id){
//     if(id === 'searchtitle'){
//         searchMood = 'title'
//         console.log(id)
//     }else{
//         searchMood = 'category'
//         console.log(id)
//     }
//     let search = document.getElementById("search")
//     search.focus()
//     search.placeholder = searchMood
// }

// function search(value){
//     let table = ''
//     for(let i=0; i<dataPro.length; i++){
//         if(searchMood === 'title'){
//             if(dataPro[i].title.includes(value)){
//                 table += `
//                 <tr>
//                 <td>${i}</td>
//                 <td>${dataPro[i].title}</td>
//                 <td>${dataPro[i].price}</td>
//                 <td>${dataPro[i].taxes}</td>
//                 <td>${dataPro[i].ads}</td>
//                 <td>${dataPro[i].discount}</td>
//                 <td>${dataPro[i].total}</td>
//                 <td>${dataPro[i].category}</td>
//                 <td><button onclick="upDate(${i})" id="update">update</button></td>
//                 <td><button onclick="deleteOne(${i})" id="delete">delete</button></td>
//             </tr>
//                 `
//             }
//         }else{
//             if(dataPro[i].category.includes(value)){
//                 table += `
//                 <tr>
//                 <td>${i}</td>
//                 <td>${dataPro[i].title}</td>
//                 <td>${dataPro[i].price}</td>
//                 <td>${dataPro[i].taxes}</td>
//                 <td>${dataPro[i].ads}</td>
//                 <td>${dataPro[i].discount}</td>
//                 <td>${dataPro[i].total}</td>
//                 <td>${dataPro[i].category}</td>
//                 <td><button onclick="upDate(${i})" id="update">update</button></td>
//                 <td><button onclick="deleteOne(${i})" id="delete">delete</button></td>
//             </tr>
//                 `
//             }
//         }
//     }
//     document.getElementById("tbody").innerHTML = table

// }

























// let mood = 'create';
// let tmp;
// function getTotal(){
//     let result = +price.value + +taxes.value + +ads.value - discount.value;
//     if(price.value != ''){
//         total.innerHTML = result
//         total.style.background = '#e56f0f'
//     }else{
//         total.innerHTML = '';
//         total.style.background = '#c03d3d'

//     }
// }
// let dataPro = []
// if(localStorage.product != null){
//     dataPro = JSON.parse(localStorage.product)
// }else{
//     dataPro = []
// }
// submit.addEventListener("click", ()=>{
//     let newPro = {
//         title: title.value,
//         price: price.value,
//         taxes:taxes.value,
//         ads:ads.value,
//         discount:discount.value,
//         total:total.innerHTML,
//         count:count.value,
//         category:category.value
//     }
//     if(title.value != '' && price.value != '' && category.value != '' && newPro.count < 100){
//                 if(mood == 'create'){
//             if(newPro.count > 1){
//                 for(let i=0; i<newPro.count; i++){
//                     dataPro.push(newPro)
//                 }
//             }else{
//                 dataPro.push(newPro)
//             }
//         }else{
//             dataPro[tmp] = newPro
//             count.style.display = 'block'
//             submit.innerHTML = 'Create'
//         }
//     }else{
//         clearData()
//     }
    

//     localStorage.setItem("product", JSON.stringify(dataPro))
//     clearData()
//     readData()
// })
// function clearData(){
//     title.value = '';
//     price.value = '';
//     taxes.value = '';
//     ads.value = '';
//     discount.value = '';
//     total.innerHTML = '';
//     count.value = '';
//     category.value = '';
// }
// function readData(){
//     getTotal()
//     let table = '';
//     for(let i=0; i<dataPro.length; i++){
//         table += `
//         <tr>
//         <td>${i + 1}</td>
//         <td>${dataPro[i].title.toLowerCase()}</td>
//         <td>${dataPro[i].price}</td>
//         <td>${dataPro[i].taxes}</td>
//         <td>${dataPro[i].ads}</td>
//         <td>${dataPro[i].discount}</td>
//         <td>${dataPro[i].total}</td>
//         <td>${dataPro[i].category.toLowerCase()}</td>
//         <td><button onclick="upDate(${i})" id="update">update</button></td>
//         <td><button onclick="deleteOne(${i})" id="delete">delete</button></td>
//     </tr>
//         `
//     }
//     let deleteAll = document.getElementById("deleteAll")
//     if(dataPro.length > 0){
//         deleteAll.innerHTML = `
//         <button onclick="deleteAll()">Delete All</button>
//         `
//     }else{
//         deleteAll.innerHTML = ''
//     }

//     document.getElementById("tbody").innerHTML = table
// }
// readData()
// function deleteOne(i){
//     dataPro.splice(i,1)
//     localStorage.product = JSON.stringify(dataPro)
//     readData()
// }
// function deleteAll(){
//     localStorage.clear()
//     dataPro.splice(0)
//     readData()
// }
// function upDate(i){
//     title.value = dataPro[i].title;
//     price.value = dataPro[i].price;
//     taxes.value = dataPro[i].taxes;
//     ads.value = dataPro[i].ads;
//     discount.value = dataPro[i].discount;
//     getTotal();
//     count.style.display = 'none';
//     category.value = dataPro[i].category;
//     submit.innerHTML = "Up Date";
//     mood = 'upDate';
//     tmp = i;
//     scroll({
//         top:0,
//         behavior:'smooth'
//     })
// }
// let searchMood = 'title'
// function getSearchMood(id){
//     if(id === 'searchtitle'){
//         searchMood = 'title'
//     }else{
//         searchMood = 'category'
//     }
//     let search = document.getElementById("search")
//     search.placeholder = searchMood
//     search.focus()
//     search.value = ''
// }
// function search(value){
//     let table = '';
//     for(let i=0; i<dataPro.length; i++){
//         if(searchMood == 'title'){
//             if(dataPro[i].title.includes(value.toLowerCase())){
//                 table += `
//                 <tr>
//                 <td>${i + 1}</td>
//                 <td>${dataPro[i].title}</td>
//                 <td>${dataPro[i].price}</td>
//                 <td>${dataPro[i].taxes}</td>
//                 <td>${dataPro[i].ads}</td>
//                 <td>${dataPro[i].discount}</td>
//                 <td>${dataPro[i].total}</td>
//                 <td>${dataPro[i].category}</td>
//                 <td><button onclick="upDate(${i})" id="update">update</button></td>
//                 <td><button onclick="deleteOne(${i})" id="delete">delete</button></td>
//             </tr>
//             `
//             }
//         }else{
//             if(dataPro[i].category.includes(value.toLowerCase())){
//                 table += `
//                 <tr>
//                 <td>${i + 1}</td>
//                 <td>${dataPro[i].title}</td>
//                 <td>${dataPro[i].price}</td>
//                 <td>${dataPro[i].taxes}</td>
//                 <td>${dataPro[i].ads}</td>
//                 <td>${dataPro[i].discount}</td>
//                 <td>${dataPro[i].total}</td>
//                 <td>${dataPro[i].category}</td>
//                 <td><button onclick="upDate(${i})" id="update">update</button></td>
//                 <td><button onclick="deleteOne(${i})" id="delete">delete</button></td>
//             </tr>
//             `
//             }
//         }
    
//     }
//     document.getElementById("tbody").innerHTML = table
    
// }