let year=parseInt(prompt("Hãy nhập năm muốn kiểm tra:"));
let isLeapYear=false;
let isDivisibleBy4=year%4==0;
let isDivisibleBy100=year%100==0;
let isDivisibleBy400=year%400==0;


if(isDivisibleBy4){
    if(isDivisibleBy100){
        if(isDivisibleBy400){
            isLeapYear=true;
        }

    }
    else {
        isLeapYear=true;
    }
}

if(isLeapYear){
    alert(year+" là năm nhuận");
}
else {
    alert(year+" không phải là năm nhuận")
}