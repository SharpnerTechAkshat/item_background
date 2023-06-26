// console.log(document.head)
// console.log(document.images)
// console.log(document.forms)

//-------GETELEMENTBYID-------------//
// const element = document.getElementById('items') 
// console.log(element)

//const element2 = document.getElementById('header-title') 
// const element2 = document.getElementById('main-header') 
// console.log(element2)

// element2.textContent = 'Sharpner'

// element2.style.border = 'solid 3px #000'

// const element3 = document.getElementById('h2')
// element3.style.color = 'green'
// element3.style.fontWeight = 'bold'



//-------------GETELEMENTBYCLASS-----------//
// Make the 3 rd element in the list have green background
// color
// Make all the elements in the list have bold color font

const item = document.getElementsByClassName('list-group-item')
//item[2].textContent = 'Hello'
//console.log(item[2])
item[2].style.backgroundColor = 'green'

for(var i=0 ; i<item.length ;i++){
     item[i].style.fontWeight = 'bold'
}



