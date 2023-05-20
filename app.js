let div = document.getElementById(`div`);
let div_2 = document.getElementById(`calc`)
let havasar = document.getElementById(`havasar`)
let c = document.getElementById(`c`)
let p = Array.from(document.getElementsByClassName(`item`));
let p1 = Array.from(document.getElementsByClassName(`item1`))


let my_p = p.map(value => value.addEventListener(`click`,(event)=>{
    div_2.innerText += event.target.innerText
}))

let my_p1 = p1.map(value => {
    value.addEventListener(`click`, (event) => {
        if ( div_2.innerHTML[div_2.innerHTML.length - 1] == `+` || div_2.innerHTML[div_2.innerHTML.length - 1] == `(` || div_2.innerHTML[div_2.innerHTML.length - 1] == `)` || div_2.innerHTML[div_2.innerHTML.length - 1] == `.` || div_2.innerHTML[div_2.innerHTML.length - 1] == `-` || div_2.innerHTML[div_2.innerHTML.length - 1] == `/` || div_2.innerHTML[div_2.innerHTML.length - 1] == `*`) {
           
        } else {
            div_2.innerHTML = div_2.innerHTML + event.target.innerHTML
        }
    })
})

c.addEventListener(`click`,()=>{
    div_2.innerHTML = ``
})
havasar.addEventListener(`click`,()=>{
    div_2.innerText = eval(div_2.innerText)
})

