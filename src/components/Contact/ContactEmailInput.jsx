export default function ContactEmailInput({onEmailChange}) {
    return (
        <div className="row">
            <div className="col-md-4">E-Mail-Adresse</div>
            <div className="col-md-6">
                <input type="email" className="form-control" placeholder="E-Mail" id="mail" aria-label="Name"
                       aria-describedby="basic-addon1" name="email" onChange={onEmailChange}/>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}