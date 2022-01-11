import { ReactComponent as GitHubIcon } from 'assets/img/GitHub.svg';
import './styles.css';

function NavBar(): JSX.Element {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Matheus-santos7" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GitHubIcon />
                            <p className="dsmovie-contact-link">/Matheus-santos7</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
export default NavBar;