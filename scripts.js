function insert(num)
{
    var numero = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('operacao').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('operacao').innerHTML;
    if(resultado)
    {
        document.getElementById('operacao').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('operacao').innerHTML = ""
    }
}