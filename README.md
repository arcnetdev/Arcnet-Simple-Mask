#Arcnet Simple Mask Plugin
A jQuery Plugin to make masks on form fields and HTML elements with some mask defined.

##Compatibility

Jquery Arcnet Simple Mask Plugin has been tested with jQuery 1.7+ on all major browsers:

* Firefox 2+ (Win, Mac, Linux);
* IE7+ (Win);
* Chrome 6+ (Win, Mac, Linux, Android, iPhone);
* Safari 3.2+ (Win, Mac, iPhone);
* Opera 8+ (Win, Mac, Linux, Android, iPhone).


##Basic Usage Examples

```bash
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
```


##Mask using data-mask attribute
To get your mask applied with the data-mask attribute just use it as the same way you use with the $.mask function. 

You can put on your own:
```bash
  <input type="text" data-inputmask="#####-###"/>
```

Or use some defined types:
```bash
<input type="text" name="field-name" data-inputmask="celular" />
<input type="text" name="field-name" data-inputmask="cellphone" />

<input type="text" data-inputmask="cnpj"/>

<input type="text" data-inputmask="cpf"/>

<input type="text" data-inputmask="telefone"/>
<input type="text" data-inputmask="phone"/>

<input type="text" data-inputmask="fax"/>

<input type="text" data-inputmask="ncm"/>

<input type="text" data-inputmask="dinheiro"/>
<input type="text" data-inputmask="money"/>
```

You also can restrict some letters and types.
```bash
<input type="text" data-inputmask="numeros"/> //Receives only numbers.
<input type="text" data-inputmask="numbers"/>

<input type="text" data-inputmask="letras"/> //Receives only letters.
<input type="text" data-inputmask="letters"/>

<input type="text" data-inputmask="alfanumerico"/> //Receives only alphanumeric.
<input type="text" data-inputmask="alphanumeric"/>

<input type="text" data-inputmask-restrict="qwerty"/> //Restricts the letters in the parameter
<input type="text" data-inputmask-restrict="asdfg"/>
```
