import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-md" aria-label="Fourth navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html"><img className={styles.logo} src="/bvb.svg" alt="BVB"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavgh"
                        aria-controls="mynavgh" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30"
                         focusable="false"><title>Menu</title>
                        <path stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10"
                              d="M4 7h22M4 15h22M4 23h22"></path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse" id="mynavgh">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="expertise.html">Expertise</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="fun.html">Funfacts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}