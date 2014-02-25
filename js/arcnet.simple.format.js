/**
 * Created by Weslley Neri on 25/02/14.
 */
(function () {
    var y = {
        toUpperText: function(data){
            var dataString = data.toString();
            return dataString.toUpperCase();
        },

        toLowerText: function(data){
            var dataString = data.toString();
            return dataString.toLowerCase();
        },

        toFirstUpper: function(data){
            return data.charAt(0).toUpperCase() + data.slice(1);
        }
    };

    var z = {

        cnpjStrip: function(data){
            return (data || "").toString().replace(/[^\d]/g, "");
        },

        cnpjFormat: function(data){
            return z.cnpjStrip(data).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
        },

        cpfStrip: function(data){
            return (data || "").toString().replace(/[^\d]/g, "");
        },

        cpfFormat: function(data){
            return z.cpfStrip(data).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
        }
    };

    $(window).bind("load", function() {
        $('[data-format="toupper"]').on("blur", function(data){
            var upper = y.toUpperText($(this).val());
            $(this).val(upper);
            return true;
        });

        $('[data-format-realtime="toupper"]').keypress(function(data){
            var letter = String.fromCharCode( data.keyCode || data.which );
            var upper = y.toUpperText(letter);
            $(this).val( $(this).val() + upper);
            return false;
        });

        $('[data-format="tolower"]').on("blur", function(){
            var lower = y.toLowerText($(this).val());
            $(this).val(lower);
            return true;
        });

        $('[data-format-realtime="tolower"]').keypress(function(data){
            var letter = String.fromCharCode( data.keyCode || data.which );
            var upper = y.toLowerText(letter);
            $(this).val( $(this).val() + upper);
            return false;
        });

        $('[data-format="firstupper"]').on("blur", function(){
            var firstUpper = y.toFirstUpper($(this).val());
            $(this).val(firstUpper);
            return true;
        });

        $('[data-format-realtime="firstupper"]').keypress(function(data){
            var letter = String.fromCharCode( data.keyCode || data.which );
            if ($(this).val().length >= 1){
                var lowerOrUpper = y.toLowerText(letter);
            }else{
                var lowerOrUpper = y.toUpperText(letter);
            }
            $(this).val( $(this).val() + lowerOrUpper);
            return false;
        });

        $('[data-format="allfirstsupper"]').on("blur", function(){
            var words = $(this).val().split(" ");
            var wordsTogether = "";
            $.each(words, function(index, data){
                wordsTogether += (index == 0 ? "" : " ") + y.toFirstUpper(data);
            })
            $(this).val(wordsTogether);
            return true;
        });

        $('[data-format="cnpj"]').on("blur", function(){
            $(this).val(z.cnpjFormat($(this).val()));
            return true;
        });

        $('[data-format="cnpjstripe"]').on("blur", function(){
            $(this).val(z.cnpjStrip($(this).val()));
            return true;
        });

        $('[data-format="cpf"]').on("blur", function(){
            $(this).val(z.cpfFormat($(this).val()));
            return true;
        });

        $('[data-format="cpfstripe"]').on("blur", function(){
            $(this).val(z.cpfStrip($(this).val()));
            return true;
        });

    });



})(window.jQuery || window.Zepto);

