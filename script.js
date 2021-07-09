function showResult(){
// get all element
    var bangla = document.querySelector("#bang").value;
    var english = document.querySelector("#engl").value;
    var math = document.querySelector("#mth").value;
    var echonomic = document.querySelector("#echono").value;
    var total = parseInt(bangla) + parseInt(english) + parseInt(math) + parseInt(echonomic);
    var inputIndex = document.querySelector(".inp").value;


// gradeChacker
    var banglaGrade = gradeChacker(bangla);
    var englishGrade = gradeChacker(english);
    var mathGrade = gradeChacker(math);
    var echonomicsGrade = gradeChacker(echonomic);
    var avGrade = total/4;

    //var totalGrade = gradeChacker(total);
    //alert(inputIndex.length);

// set value to HTML
    if (inputIndex != 0){

        document.querySelector("#avgResult").innerHTML = avGrade;
        document.querySelector("#totalNumberResult").innerHTML = total;
        document.querySelector("#gradeResult").innerHTML = " Bangla:" + bangla + " <br>  Grade: " + banglaGrade  + "</br> English: " + english + "<br>  Grade: " + englishGrade + "<br> Math: " + math + "<br>  Grade : "  + mathGrade + "<br> Echonomic: " + echonomic + "<br>  Grade: " + echonomicsGrade ;
    }else{
        alert("you don't give any valu yet !");
    }
    


}


// gradeChacker function

function gradeChacker(number){
    if(number<=100 && number>0){
        if(number<=100 && number>=80){
            return "A+";
        }if (number<80 && number>=70){
            return "A";
        }if (number <70 && number>=60){
            return "A-";
        }if(number <60 && number >=50){
            return "B";
        }if(number <50 && number>=40){
            return "C";
        }if(number <40 && number >=33){
            return "D";
        }else{
            return "Fail";
        }
    }else{
        return "plz, give correct value";
    }
}
//alert(gradeChacker(79));

