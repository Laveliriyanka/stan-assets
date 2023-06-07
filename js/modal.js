document.getElementById('header-button').addEventListener('click',function(){
    document.getElementById('modal').classList.add('open')
})

document.getElementById('looking-for-button').addEventListener('click',function(){
    document.getElementById('modal-2').classList.add('open')
})


function closeModalTwo() {
    document.getElementById('modal-2').classList.remove('open')
}

function closeModal() {
    document.getElementById('modal').classList.remove('open')
}

function showNotification() {
    document.getElementById('modal-notification').classList.add('open')
    setInterval(() => document.getElementById('modal-notification').classList.toggle('open'),2000)
}