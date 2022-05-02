export default function ContactMessageInput ({onMsgChange}) {
    return (
        <div className="row">
            <div className="col-md-4">Nachricht</div>
            <div className="col-md-6">
                <textarea className="form-control" aria-label="Nachricht" id="msg" name="msg" onChange={onMsgChange}></textarea>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}