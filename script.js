function btnclick(val)
{
    console.log(val)
    document.getElementById("textLabelId").value=document.getElementById("textLabelId").value+val
}
function clearbtn()
{
    document.getElementById("textLabelId").value=""
}
function btnequal()
{
    var text=document.getElementById("textLabelId").value
    var result=eval(text)
    document.getElementById("textLabelId").value=result
}