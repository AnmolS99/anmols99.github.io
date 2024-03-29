import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="socialMedia">
                <GitHubIcon
                    onClick={() => window.open("https://github.com/AnmolS99")}
                />
                <LinkedInIcon
                    onClick={() =>
                        window.open(
                            "https://www.linkedin.com/in/anmol-singh-a20a27180/"
                        )
                    }
                />
                <FacebookIcon
                    onClick={() =>
                        window.open("https://www.facebook.com/anmol.sarai/")
                    }
                />
                <InstagramIcon
                    onClick={() =>
                        window.open("https://www.instagram.com/anmol_sarai/")
                    }
                />
                <EmailIcon
                    onClick={() =>
                        (window.location = "mailto:anmol_singh@live.no")
                    }
                />
            </div>
            <p> &copy; {currentYear} anmols99.github.io</p>
        </div>
    );
}

export default Footer;
