


if(confirm('Ok->Continue || Cancel->Stop')==true){
  document.body.style.display='block';
}
else{
    document.body.style.display='none'; 
}





if(prompt('Yashinizi daxil edin:')>=18){
    alert('Xosh gelmisiniz');
    document.body.style.display='block'; 
}
else{
    alert('Get boyuyende gelersen');
    document.body.style.display='none'; 

}





function Button() {
    var value=document.getElementById('inp').value;
    var text=document.getElementById('uname');
    text.innerHTML=value;
    
    
    time=value.slice(-3)
    
    //regemleri 3 beraber yazdim deye string kimi qeyd eledim.
    
    if(time[0]==='1'){
        
        alert('sabah qrupu');
        document.body.style.backgroundColor='white';
        
    }
    else if(time[0]==='2'){
        
        alert('gunorta qrupu');
        document.body.style.backgroundColor='yellow';

    
    }
    else if(time[0]==='3'){
        alert('axsam qrupu')
        document.body.style.backgroundColor='black';
        document.body.style.color='white';

    }
    else{
        alert('Bele qrup yoxdur')
        document.body.style.backgroundColor='red';

    }
    
}




function dark() {
    if(document.body.style.backgroundColor='white'){

    
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    }
   


}
function sun() {
    if(document.body.style.backgroundColor='black'){

    
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
   
    }
}
