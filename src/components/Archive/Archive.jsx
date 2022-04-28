import "./Archive.module.css";

export default function Archive({data}) {
    return (
        <div className={data.style}>
            <div className="archiveicon">
                <img className="archiveiconsvg" src={data.icon} alt="icon" />
            </div>
            <div className="archivehead">{data.head}</div>
            <div className="archivetext">{data.text}</div>
        </div>
    )
}