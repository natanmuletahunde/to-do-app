// TO DO APP
const form=document.createElement('form')
document.body.appendChild(form)
const input=document.createElement('input')
input.placeholder='TO DO.....'
form.appendChild(input)
const button=document.createElement('button')
button.innerText='ADD'
button.role='ADD'
form.appendChild(button)
const ul=document.createElement('ul')
document.body.appendChild(ul)
const removeelment = (el)=>{
  el.remove()
}// declaring like this used to allow  access function inside the given object 
form.onsubmit=(event)=>{
  event.preventDefault()
  const li = document.createElement('li')
  ul.appendChild(li)
  li.innerText=input.value
  li.onclick=removeelment.bind(null,li)
  input.value=''
}
document.body.style.padding='16px'
document.body.style.marginLeft='49px'
button.style.marginLeft='10px'


 
