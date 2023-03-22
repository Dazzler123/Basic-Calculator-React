import $ from 'jquery';

export const CalculatorViewController = () => {
    // clear textfield
    $('#btn_Clear_All').click(function () {
        $('#txt_Equation').val("");
    });

    // button 9
    $('#btn_Nine').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Nine').text());
    });

    // button 8
    $('#btn_Eight').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Eight').text());
    });

    // button 7
    $('#btn_Seven').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Seven').text());
    });

    // button 6
    $('#btn_Six').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Six').text());
    });

    // button 5
    $('#btn_Five').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Five').text());
    });

    // button 4
    $('#btn_Four').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Four').text());
    });

    // button 3
    $('#btn_Three').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Three').text());
    });

    // button 2
    $('#btn_Two').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Two').text());
    });

    // button 1
    $('#btn_One').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_One').text());
    });

    // button 0
    $('#btn_Zero').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Zero').text());
    });

    // button plus (+)
    $('#btn_Plus').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Plus').text());
    });

    // button minus (-)
    $('#btn_Minus').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Minus').text());
    });

    // button divide (/)
    $('#btn_Slash').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Slash').text());
    });

    // button multiply (*)
    $('#btn_Star').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Star').text());
    });

    // button decimal dot (.)
    $('#btn_Dot').click(function () {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Dot').text());
    });

    ////////////////////////////////////////

    // calculation expression
    function answer() {
        var exp = $('#txt_Equation').val();

        if (exp) {
            $('#txt_Equation').val(eval(exp));
        } else {
            alert("No expression found!");
        }
    }

    // button equals (=)  ---> answer
    $('#btn_Equals').click(function () {
        answer();
    });
}

