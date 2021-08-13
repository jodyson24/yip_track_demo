import React from 'react';
import { Link } from 'react-router-dom';

export default function Result({modal, setModal}) {
    return (
        <>
            <div className="result_modal">
                <div className="result_box">
                    <div className="res_box_header d-flex justify-content-end border-bottom py-2 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"
                        onClick={e => setModal(!modal)}
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                        </svg>
                    </div>
                    <div className="res_box_info text-center border-bottom">
                        <h5 className="text-center mb-3">Your Tracking Result</h5>
                        <h6>Smartphone Brand: Samsung</h6>
                        <h6>Smartphone Model Number: A11</h6>
                        <h6>Smartphone IMEI Number: 081023399881830203834</h6>
                        <h6>Cellular Mobile Number: 08102339988</h6>
                    </div>
                    <div className="result">
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe>
                                <a href="https://yt2.org">youtube to mp3</a>
                                <br />
                                <a href="https://www.embedgooglemap.net"></a>
                            </div>
                        </div>
                    </div>
                    <div className="res_box_footer text-center border-top py-2 px-3">
                        <Link to="/">Back to home</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
