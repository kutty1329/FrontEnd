import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Form.css'
import'./validate.js'
export let Formusing=()=>
{
    return(
        <>
        <div className="container" bg-info>
        <div className="row-justify-content-center">
            <form className="bg-primary col-lg-6 col-md-10 col-sm-12 mt-3">
                <div className="row">
                    <div className="col">
                        <label className="form-label">UserName</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="col">
                        <label className="form-label">Password</label>
                        <input className="form-control" type="text"/>
                    </div>
                </div>
                <div className="col">
                        <label className="form-label">E-Mail ID</label>
                        <input className="form-control" type="text"/>
                    </div>

            </form>

        </div>

        </div>
        </>
    )
}