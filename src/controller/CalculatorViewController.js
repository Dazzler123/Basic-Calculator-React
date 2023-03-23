// import $ from "jquery";
//
// export const CalculatorViewController = () => {
//     //input field
//     let input = $('#txt_Equation');
//
//     // clear textfield
//     function clearInput() {
//         input.val("");
//     }
//
//     // button 9
//     function btnNine() {
//         input.val(input.val() + 9);
//     }
//
//     // button 8
//     function btnEight() {
//         input.val(input.val() + 8);
//     }
//
//     // button 7
//     function btnSeven() {
//         input.val(input.val() + 7);
//     }
//
//
//     // button 6
//     function btnSix() {
//         input.val(input.val() + 6);
//     }
//
//     // button 5
//     function btnFive() {
//         input.val(input.val() + 5);
//     }
//
//     // button 4
//     function btnFour() {
//         input.val(input.val() + 4);
//     }
//
//     // button 3
//     function btnThree() {
//         input.val(input.val() + 3);
//     }
//
//     // button 2
//     function btnTwo() {
//         input.val(input.val() + 2);
//     }
//
//     // button 1
//     function btnOne() {
//         input.val(input.val() + 1);
//     }
//
//     // button 0
//     function btnZero() {
//         input.val(input.val() + 0);
//     }
//
//     // button plus (+)
//     function btnPlus() {
//         input.val(input.val() + "+");
//     }
//
//     // button minus (-)
//     function btnMinus() {
//         input.val(input.val() + "-");
//     }
//
//     // button divide (/)
//     function btnSlash() {
//         input.val(input.val() + "/");
//     }
//
//     // button multiply (*)
//     function btnStar() {
//         input.val(input.val() + "*");
//     }
//
//     // button decimal dot (.)
//     function btnDot() {
//         input.val(input.val() + ".");
//     }
//
//     // calculation expression
//     function answer() {
//         var exp = input.val();
//
//         if (exp) {
//             input.val(eval(exp));
//         } else {
//             alert("No expression found!");
//         }
//     }
// }