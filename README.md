Documentation
Basic Usage Examples
$(document).ready(function(){
  $('element').mask('11/11/1111'); //Date
  $('element').mask('00:00:00'); //Time
  $('element').mask('00/00/0000 00:00:00'); //Date_Time
  $('element').mask('00000-000'); //Cep
  $('element').mask('0000-0000'); //Phone
  $('element').mask('(00) 0000-0000'); //Phone_DDD
  $('element').mask('AAA 000-S0S');
  $('element').mask('000.000.000-00', {reverse: true}); //Cpf
  $('element').mask('000.000.000.000.000,00', {reverse: true}); //Money
  $('element').mask("#.##0,00", {reverse: true, maxlength: false}); //Money
  $('element').mask('##0,00%', {reverse: true}); //Percent
);

Mask using data-mask attribute
To get your mask applied with the data-mask attribute just use it as the same way you use with the $.mask function. 

You can put on your own:
<input type="text" data-inputmask="#####-###"/><br>

Or use some defined types:
<input type="text" name="field-name" data-inputmask="celular" /><br>
<input type="text" name="field-name" data-inputmask="cellphone" /><br>

<input type="text" data-inputmask="cnpj"/><br>

<input type="text" data-inputmask="cpf"/><br>

<input type="text" data-inputmask="telefone"/><br>
<input type="text" data-inputmask="phone"/><br>

<input type="text" data-inputmask="fax"/><br>

<input type="text" data-inputmask="ncm"/><br>

<input type="text" data-inputmask="dinheiro"/><br>
<input type="text" data-inputmask="money"/><br>

<input type="text" data-inputmask="numeros"/><br>
<input type="text" data-inputmask="numbers"/><br>

<input type="text" data-inputmask="letras"/><br>
<input type="text" data-inputmask="letters"/><br>

<input type="text" data-inputmask="alfanumerico"/><br>
<input type="text" data-inputmask="alphanumeric"/><br>

You also can restrict some letters.
<input type="text" data-inputmask-restrict="qwerty"/><br>
<input type="text" data-inputmask-restrict="asdfg"/><br>
