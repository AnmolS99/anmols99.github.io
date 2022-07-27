import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <GitHubIcon
                    onClick={(event) =>
                        window.open("https://github.com/AnmolS99")
                    }
                />
                <LinkedInIcon
                    onClick={(event) =>
                        window.open(
                            "https://www.linkedin.com/in/anmol-singh-a20a27180/"
                        )
                    }
                />
                <FacebookIcon
                    onClick={(event) =>
                        window.open("https://www.facebook.com/anmol.sarai/")
                    }
                />
                <InstagramIcon
                    onClick={(event) =>
                        window.open("https://www.instagram.com/anmol_sarai/")
                    }
                />
                <EmailIcon
                    onClick={(event) =>
                        (window.location = "mailto:anmol_singh@live.no")
                    }
                />
            </div>
            <p> &copy; 2022 anmols99.github.io</p>
        </div>
    );
}

export default Footer;
