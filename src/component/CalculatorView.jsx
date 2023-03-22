import Bootstrap from 'bootstrap';
import $ from 'jquery';

export const CalculatorView = () => {
    return (
        <div className="row justify-content-center overflow-hidden mt-5">
            <div className="col-6 container-fluid row text-center mt-5 bg-secondary rounded-3">
                <button id="btn_Clear_All" type="button" className="col-1 btn btn-warning mt-3">C</button>
                <div className="col-11 mt-3">
                    <input id="txt_Equation" type="text" className="form-control" placeholder="0" aria-label=""></input>
                </div>
                <div className="col-12 row mt-3 g-1 mb-3">
                    <button id="btn_Seven" type="button" className="col-3 btn btn-light">7</button>
                    <button id="btn_Eight" type="button" className="col-3 btn btn-light">8</button>
                    <button id="btn_Nine" type="button" className="col-3 btn btn-light">9</button>
                    <button id="btn_Plus" type="button" className="col-3 btn btn-warning">+</button>

                    <button id="btn_Four" type="button" className="col-3 btn btn-light">4</button>
                    <button id="btn_Five" type="button" className="col-3 btn btn-light">5</button>
                    <button id="btn_Six" type="button" className="col-3 btn btn-light">6</button>
                    <button id="btn_Minus" type="button" className="col-3 btn btn-warning">-</button>

                    <button id="btn_One" type="button" className="col-3 btn btn-light">1</button>
                    <button id="btn_Two" type="button" className="col-3 btn btn-light">2</button>
                    <button id="btn_Three" type="button" className="col-3 btn btn-light">3</button>
                    <button id="btn_Slash" type="button" className="col-3 btn btn-warning">/</button>

                    <button id="btn_Zero" type="button" className="col-3 btn btn-light">0</button>
                    <button id="btn_Dot" type="button" className="col-3 btn btn-light">.</button>
                    <button id="btn_Equals" type="button" className="col-3 btn btn-info">=</button>
                    <button id="btn_Star" type="button" className="col-3 btn btn-warning">*</button>
                </div>
            </div>
        </div>
    )
}
