import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Form.css'

export let SampleBootstrap=()=>
{
    return(
        <>
        <script src="./validate.js"></script>
        <div className="bg-success col-lg-6 col-md-10 col-sm-12 mt-3">
        <div className="row-justify-content-center">
            <form name="kuttyapp" onsubmit="return Action()" action="#">
                <div className="row">
                    <div className="col">
                        <label className="form-label">UserName</label>
                        <input className="form-control bg-dark text-light" type="text" placeholder='Ex;Jon' name="user"/>
                        <span id="userdetails"></span>
                    </div>
                    <div className="col">
                        <label className="form-label">Password</label>
                        <input className="form-control bg-dark text-light" type="text" placeholder='Ex;**********' name="pwad"/>
                        <span id="pwaddetails"></span>
                    </div>
                </div>
                <div className='col'>
                        <label className="form-label">E-Mail ID</label>
                        <input className="form-control bg-dark text-light" type="text" placeholder='Ex;Jon@gmail.com' name="email"/>
                        <span id="edeatils"></span>
                    </div>
                    <div className='col'>
                        <label className="form-label">Mobile Number</label>
                        <input className="form-control bg-dark text-light" type="tel" placeholder='Ex;1234567890' name="num"/>
                        <span id="numdetails"></span>
                    </div>
                    <div className='col' align="center">
                        <input type="submit" value="Register" className='bg-dark'/>
                        <input type="reset" value="cancel" className='bg-dark'/>

                    </div>

            </form>

        </div>

        </div>
        </>
    )
}