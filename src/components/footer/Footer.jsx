import React from "react";

export default class Footer extends React.Component {
    render() {
        return(
            <footer className="mt-3 text-light bg-dark text-center px-5 pt-5">
                <div className="row border-top border-2 border-secondary d-flex justify-content-between">
                    <div className="col-lg-6 text-start pt-3">
                        <p id="copyright"><small>&copy;Copyright by <b>Scrooge McDuck</b>. All Rights Reserved</small></p>
                    </div>
                    <div className="col-lg-6 text-end pt-3">
                        <p><small>Designed by <span className="text-warning">Zeusi</span></small></p>
                    </div>
                </div>
	        </footer>
        );
    }
}