import Layout from '../components/layout'

const AppointmentRequest = () => (
    <Layout>
        <div className="text-center">
            <h1 className="header">Appointment Request</h1>
        </div>

        <div className="container-fluid">
            <div className="container text-center">
                <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ante nec lorem commodo vestibulum. Duis vitae ultricies nulla. Suspendisse sit amet quam non felis ultrices tempus.</p>
                <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ante nec lorem commodo vestibulum. Duis vitae ultricies nulla.</p>
                <p className="body-text">Please fill out a appointment request form below.</p>
            </div>
        </div>

        <div className="container-fluid">
            <div className="container">
                <hr></hr>
                <form className="needs-validation" noValidate>
                    <div className="form-row">
                        <div className ="form-group col-md-6">
                            <label for="inputFN">First Name</label>
                            <input type="Name" className="form-control" id="inputFN" required></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputLN">Last Name</label>
                            <input type="Name" className="form-control" id="inputLN" required></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label for="inputEmail">Email</label>
                            <input type="Email" className="form-control" id="inputEmail" required></input>
                        </div>            
                    </div>

                    <div className="form-row">
                        <legend className="col-form-label">Phone Number</legend>
                        <div className ="form-group col-sm-1">
                            <input type="text" className="form-control" id="phone1" placeholder="###" required></input>
                        </div>
                        <div className="form-group col-sm-1">
                            <input type="text" className="form-control" id="phone2" placeholder="###" required></input>
                        </div>
                        <div className="form-group col-sm-1">
                            <input type="text" className="form-control" id="phone3" placeholder="####" required></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <legend className="col-form-label">What days do you prefer?</legend>
                        <div className="form-group col-md-12" noValidate>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" id="checkBox1" name="checkBox1" className="custom-control-input"></input>
                                <label className="custom-control-label" for="checkBox1">Mon</label>
                            </div>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" id="checkBox2" name="checkBox2" className="custom-control-input"></input>
                                <label className="custom-control-label" for="checkBox2">Tue</label>
                            </div>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" id="checkBox3" name="checkBox3" className="custom-control-input"></input>
                                <label className="custom-control-label" for="checkBox3">Wed</label>
                            </div>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" id="checkBox4" name="checkBox4" className="custom-control-input"></input>
                                <label className="custom-control-label" for="checkBox4">Thu</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <legend className="col-form-label">What time of day do you prefer?</legend>
                        <div className="form-group col-md-12" noValidate>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" id="checkBoxAny" name="checkBoxAny" className="custom-control-input" required="false"></input>
                                <label className="custom-control-label" for="checkBoxAny">Any</label>
                            </div>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" id="checkBoxEM" name="checkBoxEM" className="custom-control-input"></input>
                                <label className="custom-control-label" for="checkBoxEM">Early Morning</label>
                            </div>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" id="checkBoxLM" name="checkBoxLM" className="custom-control-input"></input>
                                <label className="custom-control-label" for="checkBoxLM">Late Morning</label>
                            </div>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" id="checkBoxEA" name="checkBoxEA" className="custom-control-input"></input>
                                <label className="custom-control-label" for="checkBoxEA">Early Afternoon</label>
                            </div>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" id="checkBoxLA" name="checkBoxLA" className="custom-control-input"></input>
                                <label className="custom-control-label" for="checkBoxLA">Late Afternoon</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                        <div className="mb-3">
                            <label for="validationTextarea">Please describe type of appointment</label>
                            <textarea className="form-control" id="validationTextarea" required></textarea>
                        </div>
                        </div>
                    </div>


                    <div className="container text-center">
                        <button className="btn btn-outline-dark" role="button" type="submit">Submit</button>
                    </div>


                </form>
            </div>
        </div>

        <style jsx>{`

        .header {
            margin-top: 15px;
            margin-bottom: 20px;
        }

        .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
            background-color: #365780;
            border-color: #365780;
        }

        textarea {
            height: 100px;
        }

        .body-text {
            font-size: 20px;
        }

        .btn-outline-dark {
            border-color: #365780 !important;
        }


        `}</style>
    </Layout>
);

export default AppointmentRequest;