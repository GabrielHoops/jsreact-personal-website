import styles from './Title.module.css';

export default function Title() {
    return (
    <>
        <div className={styles.welcome}>Willkommen, ich bin</div>
        <div className={styles.name}>Gabriel Hoops</div>
        <div className={styles.title}>Softwareentwickler</div>
        <div className={styles.textw}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
            ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
    </>
    )
}