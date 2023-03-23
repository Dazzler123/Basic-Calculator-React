import $ from "jquery";

export const CalculatorView = () => {
    // clear textfield
    function clearInput() {
        $('#txt_Equation').val("");
    }

    // button 9
    function btnNine() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Nine').text());
    }

    // button 8
    function btnEight() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Eight').text());
    }

    // button 7
    function btnSeven() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Seven').text());
    }


    // button 6
    function btnSix() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Six').text());
    }

// button 5
    function btnFive() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Five').text());
    }

// button 4
    function btnFour() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Four').text());
    }

// button 3
    function btnThree() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Three').text());
    }

// button 2
    function btnTwo() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Two').text());
    }

// button 1
    function btnOne() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_One').text());
    }

// button 0
    function btnZero() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Zero').text());
    }

// button plus (+)
    function btnPlus() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Plus').text());
    }

// button minus (-)
    function btnMinus() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Minus').text());
    }

// button divide (/)
    function btnSlash() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Slash').text());
    }

// button multiply (*)
    function btnStar() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Star').text());
    }

// button decimal dot (.)
    function btnDot() {
        $('#txt_Equation').val($('#txt_Equation').val() + $('#btn_Dot').text());
    }

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


    return (
        <div className="row justify-content-center overflow-hidden mt-5">
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
        </div>
    )
}
