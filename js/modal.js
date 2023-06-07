document.getElementById('header-button').addEventListener('click',function(){
    document.getElementById('modal').classList.add('open')
})

document.getElementById('looking-for-button').addEventListener('click',function(){
    document.getElementById('modal-2').classList.add('open')
})

document.getElementById('modal-button-close').addEventListener('click',function(){
    document.getElementById('modal').classList.remove('open')
})

document.getElementById('modal-button-close-2').addEventListener('click',function(){
    document.getElementById('modal-2').classList.remove('open')
})
