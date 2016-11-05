var num = prompt("Enter your Number","");
function tableGenerator() {
    for(var i=1;i<=20;i++)
{
    document.write(num +"   *   " + "  "+ i + "  " + " = " + num * i + "<br>");
}
}
tableGenerator();