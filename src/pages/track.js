import React, { useState } from 'react';
import Result from '../components/tracking/Result';

export default function Track() {
    const [modal, setModal] = useState(false)

    return (
        <>
            <div className="tracking_page">
                <div className="page_t_top">
                    <div className="col-85">
                        <h6>Track your Smartphone</h6>
                    </div>
                </div>

                <div className="page_t_bottom py-3">
                    <div className="col-85 py-3">
                        <h6>Enter your smartphone details</h6>

                        <div className="border rounded-sm p-4">
                            <div className="mb-2 f-in">
                                <label htmlFor="brand">Smartphone Brand Name</label>
                                <input type="text" className="form-control" id="brand" />
                            </div>

                            <div className="mb-2 f-in">
                                <label htmlFor="brand">Model Number</label>
                                <input type="text" className="form-control" id="brand" />
                            </div>

                            <div className="mb-2 f-in">
                                <label htmlFor="brand">Smartphone IMEI Number</label>
                                <input type="text" className="form-control" id="brand" />
                            </div>

                            <div className="mb-2 f-in">
                                <label htmlFor="brand">Cellular Mobile Number</label>
                                <input type="text" className="form-control" id="brand" />
                            </div>

                            <div className="mb-2 mt-4 f-in">
                                <button className="track-btn"
                                    onClick={e => setModal(!modal)}
                                >Track smartphone</button>
                            </div>
                        </div>


                    </div>
                </div>

                {
                    modal && <Result setModal={setModal} modal={modal} />
                }
            </div>
        </>
    );
}
