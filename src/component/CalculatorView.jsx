import $ from "jquery";
import Swal from "sweetalert2";

export const CalculatorView = () => {
    //input field
    let input = $('#txt_Equation');

    // clear text-field
    function clearInput() {
        input.val("");
    }

    // button 9
    function btnNine() {
        input.val(input.val() + 9);
        Swal.fire('Any fool can use a computer').then(r => {
            console.log("Alert fired");
        });
    }

    // button 8
    function btnEight() {
        input.val(input.val() + 8);
    }

    // button 7
    function btnSeven() {
        input.val(input.val() + 7);
    }

    // button 6
    function btnSix() {
        input.val(input.val() + 6);
    }

    // button 5
    function btnFive() {
        input.val(input.val() + 5);
    }

    // button 4
    function btnFour() {
        input.val(input.val() + 4);
    }

    // button 3
    function btnThree() {
        input.val(input.val() + 3);
    }

    // button 2
    function btnTwo() {
        input.val(input.val() + 2);
    }

    // button 1
    function btnOne() {
        input.val(input.val() + 1);
    }

    // button 0
    function btnZero() {
        input.val(input.val() + 0);
    }

    // button plus (+)
    function btnPlus() {
        input.val(input.val() + "+");
    }

    // button minus (-)
    function btnMinus() {
        input.val(input.val() + "-");
    }

    // button divide (/)
    function btnSlash() {
        input.val(input.val() + "/");
    }

    // button multiply (*)
    function btnStar() {
        input.val(input.val() + "*");
    }

    // button decimal dot (.)
    function btnDot() {
        input.val(input.val() + ".");
    }

    // calculation expression
    function answer() {
        var exp = input.val();

        if (exp) {
            input.val(eval(exp));
        } else {
            alert("No expression found!");
        }
    }

    ////////////////////////////////////////

    return (
        <main className="row justify-content-center overflow-hidden mt-5 w-100">
            <div className="col-6 container-fluid row text-center mt-5 bg-secondary rounded-3">
                <button onClick={clearInput} id="btn_Clear_All" type="button" className="col-1 btn btn-warning mt-3">C</button>
                <div className="col-11 mt-3">
                    <input id="txt_Equation" type="text" className="form-control" placeholder="0" aria-label=""></input>
                </div>
                <div className="col-12 row mt-3 g-1 mb-3">
                    <button onClick={btnSeven} id="btn_Seven" type="button" className="col-3 btn btn-light">7</button>
                    <button onClick={btnEight} id="btn_Eight" type="button" className="col-3 btn btn-light">8</button>
                    <button onClick={btnNine} id="btn_Nine" type="button" className="col-3 btn btn-light">9</button>
                    <button onClick={btnPlus} id="btn_Plus" type="button" className="col-3 btn btn-warning">+</button>

                    <button onClick={btnFour} id="btn_Four" type="button" className="col-3 btn btn-light">4</button>
                    <button onClick={btnFive} id="btn_Five" type="button" className="col-3 btn btn-light">5</button>
                    <button onClick={btnSix} id="btn_Six" type="button" className="col-3 btn btn-light">6</button>
                    <button onClick={btnMinus} id="btn_Minus" type="button" className="col-3 btn btn-warning">-</button>

                    <button onClick={btnOne} id="btn_One" type="button" className="col-3 btn btn-light">1</button>
                    <button onClick={btnTwo} id="btn_Two" type="button" className="col-3 btn btn-light">2</button>
                    <button onClick={btnThree} id="btn_Three" type="button" className="col-3 btn btn-light">3</button>
                    <button onClick={btnSlash} id="btn_Slash" type="button" className="col-3 btn btn-warning">/</button>

                    <button onClick={btnZero} id="btn_Zero" type="button" className="col-3 btn btn-light">0</button>
                    <button onClick={btnDot} id="btn_Dot" type="button" className="col-3 btn btn-light">.</button>
                    <button onClick={answer} id="btn_Equals" type="button" className="col-3 btn btn-info">=</button>
                    <button onClick={btnStar} id="btn_Star" type="button" className="col-3 btn btn-warning">*</button>
                </div>
            </div>
        </main>
    )
}
