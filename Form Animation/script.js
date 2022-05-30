const box = document.querySelector(".box");
const button= document.querySelector(".button1")
const button2= document.querySelector(".close-btn")
const sumBtn= document.querySelector(".btn")
const form= document.querySelector(".form")
console.dir(box)



button.addEventListener("click",function(){
    box.style.animation = "var(--animation)"
})

button2.addEventListener("click",function(){
    box.style.animation = "var(--animation2)"
})



sumBtn.addEventListener("click",function(){
    box.style.animation = "var(--animation2)"
    setTimeout(function(){form.submit();},1750)
})




