import styles from './BackgroundDefault.module.css';

export default function BackgroundDefault() {
    return (
        <div className={styles.backgroundme}>
            <div className={styles.circledash}></div>
            <div className={styles.circlefull}></div>
            <div className={styles.smallcirclered}></div>
            <div className={styles.smallcirclewhite}></div>
            <div className={styles.smallpolyred}></div>
            <div className={styles.smallpolywhite}></div>
            <div className={styles.smallpolywhitemid}></div>
        </div>
    )
}