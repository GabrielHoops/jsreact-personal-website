export default function ContactCheckAGBCheckbox({onCheckAGBChange}) {
    return (
        <div className="row">
            <div className="col-md-4">
                <a href="./about.html">AGBs</a> gelesen
            </div>
            <div className="col-md-6">
                <input type="checkbox" id="checkagb" aria-label="Checkbox for following text input" name="checkAGB" onChange={onCheckAGBChange}/>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}