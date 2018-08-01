window.onload=function(){
    let img=document.querySelectorAll(".slider img");
    let left=document.querySelector(".slider .icon1");
    let right=document.querySelector(".slider .icon2");
    console.log(left,right,img)
    let now=0;
    let next=0;
    left.onclick=function(){
        next++;
        if(next==img.length){
            next=0;
        }
        img[now].style.left=0;
        img[next].style.left="1519px";
        animate(img[now],{left:-1519})
        animate(img[next],{left:0})
        now=next;
    }
    right.onclick=function(){
        next--;
        if(next==-1){
            next=img.length-1;
        }
        img[now].style.left=0;
        img[next].style.left="-1519px";
        animate(img[now],{left:1519})
        animate(img[next],{left:0})
        now=next;
    }
    let box=document.querySelector(".cp .row .hot .box");
    let hot=document.querySelector(".cp .row .hot");
    let son=document.querySelectorAll(".cp .row .hot .big .sm .son");
    son.forEach(function(i,e){
        i.onclick=function(){
            animate(box,{left:-445*e})
            for(let a=0;a<son.length;a++){
                son[a].style.background="black";
            }
            i.style.background="blue";
        }
    })

       
    
    
}