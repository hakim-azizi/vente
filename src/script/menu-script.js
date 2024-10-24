let openMenu=0;
let showMenu=0;

const menu=()=>{

    if(openMenu===0){
        showMenu=+1
        openMenu=1;
        document.querySelector('#change').setAttribute('src', 'src/pictures/menu-burger-close.png');
        document.querySelector('#change').setAttribute('alt', 'Fermeture du menu');
    }else{
        showMenu=-1
        openMenu=0;
        document.querySelector('#change').setAttribute('src', 'src/pictures/menu-burger-open.png');
        document.querySelector('#change').setAttribute('alt', 'Ouverture du menu');
    }

    let dimention=-1*document.querySelector('.menu').offsetWidth;
    let margin = window.getComputedStyle(document.querySelector('.menu')).getPropertyValue('margin-left');

    margin=parseInt(margin.replace('px',''));

    setInterval(function menu1(){
                
    margin=margin+showMenu;

    if(margin<dimention){
        margin=dimention;
    }

    if(margin>0){margin=0;}

    if(window.innerWidth>800){
        document.querySelector('.menu').style.marginLeft = 0;
    }else{
    document.querySelector('.menu').style.marginLeft = `${margin}px`;}
}

),1000
};