#Arcnet Simple Mask Plugin
A jQuery Plugin to make masks on form fields and HTML elements with some mask defined.

##Demo
http://arcnetdev.github.io/Arcnet-Simple-Mask/

##Compatibility

Jquery Arcnet Simple Mask Plugin has been tested with jQuery 1.7+ on all major browsers:

* Firefox 2+ (Win, Mac, Linux);
* IE7+ (Win);
* Chrome 6+ (Win, Mac, Linux, Android, iPhone);
* Safari 3.2+ (Win, Mac, iPhone);
* Opera 8+ (Win, Mac, Linux, Android, iPhone).


##Basic Usage Examples
###Inserting
```bash
$(document).ready(function(){
  $('element').arcnetmask('11/11/1111'); //Date
  $('element').arcnetmask('00:00:00'); //Time
  $('element').arcnetmask('00/00/0000 00:00:00'); //Date_Time
  $('element').arcnetmask('00000-000'); //Cep
  $('element').arcnetmask('0000-0000'); //Phone
  $('element').arcnetmask('(00) 0000-0000'); //Phone_DDD
  $('element').arcnetmask('AAA 000-S0S');
  $('element').arcnetmask('000.000.000-00', {reverse: true}); //Cpf
  $('element').arcnetmask('000.000.000.000.000,00', {reverse: true}); //Money
  $('element').arcnetmask("#.##0,00", {reverse: true, maxlength: false}); //Money
  $('element').arcnetmask('##0,00%', {reverse: true}); //Percent
}
```

####Defined arcnetmask types
```bash
$(document).ready(function(){
  $('element').arcnetmask("cnpj");
  $('element').arcnetmask("cpf");
  $('element').arcnetmask("telefone");
  $('element').arcnetmask("phone");
  $('element').arcnetmask("fax");
  $('element').arcnetmask("ncm");
  $('element').arcnetmask("data");
  $('element').arcnetmask("date");
  $('element').arcnetmask("hora");
  $('element').arcnetmask("time");
  $('element"]').arcnetmask("data_hora");
  $('element').arcnetmask("date_time");
  $('element').arcnetmask("cep");
  $('element').arcnetmask("percent");
  $('element').arcnetmask("porcentagem");
  $('element').arcnetmask("money");
  $('element').arcnetmask("dinheiro");
  $('element').arcnetmask("money3");
  $('element').arcnetmask("dinheiro3");
}
```

###Removing
```bash
$(document).ready(function(){
  $('element').arcnetunmask();
}
```

###Reverse Attribute
With this attribute the mask will be placed from the right to the left (that's why reverse:true is defined).
```bash
$(document).ready(function(){
  $('element').arcnetmask('##0,00%', {reverse: true});
}
```

###Maxlength Attribute
With this attribute you can define the size of the input, how many numbers can be inserted.
```bash
$(document).ready(function(){
  $('element').arcnetmask('money3', {maxlength: 6});
}
```

###ThreeDecimals Attribute
With this attribute the mask will be placed from the right to the left (that's why reverse:true is defined).
```bash
$(document).ready(function(){
  $('element').arcnetmask('money3', {threedecimals: true});
}
```


##Mask using data-mask attribute
With this attribute you can define if you want to use three or two decimals, by default, it will come "false", in other words, two decimals.

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

<input type="text" data-inputmask="dinheiro"/> //this mask is not real time typing
<input type="text" data-inputmask="money"/>

<input type="text" data-inputmask="dinheiro3"/> //this mask is real time typing :)
<input type="text" data-inputmask="money3"/>

<input type="text" data-inputmask="data"/>
<input type="text" data-inputmask="date"/>

<input type="text" data-inputmask="hora"/>
<input type="text" data-inputmask="time"/>

<input type="text" data-inputmask="data_hora"/>
<input type="text" data-inputmask="date_time"/>

<input type="text" data-inputmask="cep"/>

<input type="text" data-inputmask="porcentagem"/>
<input type="text" data-inputmask="percent"/>
```

You also can restrict some letters and types.
```bash
<input type="text" data-inputmask-restrict="numeros"/> //Receives only numbers.
<input type="text" data-inputmask-restrict="numbers"/>

<input type="text" data-inputmask-restrict="letras"/> //Receives only letters.
<input type="text" data-inputmask-restrict="letters"/>

<input type="text" data-inputmask-restrict="alfanumerico"/> //Receives only alphanumeric.
<input type="text" data-inputmask-restrict="alphanumeric"/>

<input type="text" data-inputmask-restrictwords="qwerty"/> //Restricts the letters in the parameter
<input type="text" data-inputmask-restrictwords="asdfg"/>

<input type="text" data-inputmask-acceptwords="qwerty"/> //Accepts only the words in parameter
<input type="text" data-inputmask-acceptwords="asdfg"/>
```

```bash
$(document).ready(function(){
  $('element').arcnetunmaskrestricts('numbers');
  $('element').arcnetunmaskrestricts('numeros');
  $('element').arcnetunmaskrestricts('letters');
  $('element').arcnetunmaskrestricts('letras');
  $('element').arcnetunmaskrestricts('alphanumeric')
  $('element').arcnetunmaskrestricts('alfanumerico');
  $('element').arcnetunmaskrestricts("restrictWords", "words");
  $('element').arcnetunmaskrestricts("acceptWords", "words");
}
```



#License
Created by Weslley Neri on 2014-02-20 - https://github.com/weslley39

 Copyright (c) 2014 Arcnet - Automação Comercial (http://arcnet.com.br/)

 The MIT License (http://www.opensource.org/licenses/mit-license.php)

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
