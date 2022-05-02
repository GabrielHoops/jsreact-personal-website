export default function ContactNameInmput({onNameChange}) {
    return (
        <div className="row">
            <div className="col-md-4">Name</div>
            <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Name" id="name" aria-label="Name"
                       aria-describedby="basic-addon1" name="name" onChange={onNameChange}/>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}