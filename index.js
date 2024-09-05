const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messagess');
const message = messages.querySelectorAll('.messagess');
const messageSearch = document.querySelector('#message-search');




const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('avtive');
    })
}

const searchMessage = () => {
    const val = messageSearch.ariaValueMax.toLowerCase();
    console.log(val);
    message.forEach(chat => {
    let name = chat.querySelectorAll('h5').textContent.toLowerCase();
    if(name.indexOf(val) != -1){
        chat.style.display = 'flex';
    } else {
        chat.style.display = 'none';
    }
})
}


messageSearch.addEventListener('keyup', searchMessage);

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display='none';
        } else {
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none'; 

        }
    })
})

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notifications-count').style.display = 'none';
    setTimeout (() =>{
     messages.style.boxShadow = 'none';
    }, 2000);
     
})
