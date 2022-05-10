let userName=prompt("Ai vậy ? :",'');
if(userName=='Admin'){
    let pass=prompt('Mật khẩu là gì vậy? : ','');
    if(pass=='khoa is the best'){
        alert('welcome');
    }else if(pass==null){
        alert('Canceled.');
    }else{
        alert('Wrong password');
    }
}else if(userName==null){
    alert('Canceled');
}
else{
    alert('Tôi không biết bạn =.=');
}
