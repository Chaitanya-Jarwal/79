var student_array=[];
function submit() {
    var n1=document.getElementById("i1").value ;
    var n2=document.getElementById("i2").value ;
    var n3=document.getElementById("i3").value ;
    var n4=document.getElementById("i4").value ;
    student_array.push(n1)
    student_array.push(n2)
    student_array.push(n3)
    student_array.push(n4)
    console.log(student_array);
    document.getElementById("display_name").innerHTML=student_array;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sorting() {
    student_array.sort();
    console.log(student_array);
    document.getElementById("display_name").innerHTML=student_array;
}