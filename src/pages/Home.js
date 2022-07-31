import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, my name is Anmol</h2>
                <div className="prompt">
                    <p> A Computer Science student specializing in AI </p>
                    <GitHubIcon
                        onClick={() =>
                            window.open("https://github.com/AnmolS99")
                        }
                    />
                    <LinkedInIcon
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/anmol-singh-a20a27180/"
                            )
                        }
                    />
                    <EmailIcon
                        onClick={() =>
                            (window.location = "mailto:anmol_singh@live.no")
                        }
                    />
                </div>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <ol className="list">
                    <li className="item">
                        <h2>Languages</h2>
                        <span>Python, Java, SQL, SPL</span>
                    </li>
                    <li className="item">
                        <h2>AI</h2>
                        <span>
                            Tensorflow, Keras, NumPy, Pandas, scikit-learn,
                            Matplotlib
                        </span>
                    </li>
                    <li className="item">
                        <h2>Tools</h2>
                        <span>Splunk</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
