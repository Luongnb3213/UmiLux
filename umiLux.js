const logo =  document.querySelector('.logo1')
var close_button = document.querySelector('.mobile_nav_bar_head .close')
const nav_bar =  document.querySelector('.mobile_nav_bar')
const footer_info =  document.querySelectorAll('.footer_info')
if(logo){    
    logo.onclick = function(){      
        nav_bar.style.animation = 'slidein 1s linear';
        nav_bar.style.display ='block'
    }
    close_button.onclick = function(){
        
        nav_bar.style.animation = 'slideout 1s linear';
        nav_bar.addEventListener('animationend', function () {           
            nav_bar.style.display = 'none';           
            nav_bar.removeEventListener('animationend', arguments.callee);
        });
    }
}
 Array.from(footer_info).forEach((i) => {
    
    i.onclick = function(){
        
        let footer_info_item = i.querySelector('.pc')
        let img_dow = i.querySelector('.footer_info_head img')      
        footer_info_item.classList.toggle('godown')
        img_dow.classList.toggle('rotate')
    }
   
 })