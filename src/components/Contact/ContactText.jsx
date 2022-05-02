import styles from "./Contact.module.css";

export default function ContactText({text}) {
    return (
        <div className="row">
            <div className="col-md-5">
                <div className={styles.title}>Kontakt</div>
                <div className={styles.textwhite}>{text}</div>
            </div>
        </div>
    )
}