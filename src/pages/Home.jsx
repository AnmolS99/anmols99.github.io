import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
import Wave from "../components/Wave";
import SkillList from "../components/SkillList";
import {
    PythonImg,
    DotNetImg,
    JavaImg,
    TensorflowImg,
    KerasImg,
    NumPyImg,
    PandasImg,
    SciKitLearnImg,
    MatplotlibImg,
    SplunkImg,
} from "../helpers/IconImgPaths";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, my name is Anmol</h2>
                <div className="prompt">
                    <p>
                        A developer with a M.Sc. degree in Computer Science with
                        specialization in AI
                    </p>
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
                <Wave />
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <ol className="list">
                    <li className="item">
                        <h2>Languages</h2>
                        <SkillList
                            skillImgList={[PythonImg, DotNetImg, JavaImg]}
                        />
                    </li>
                    <li className="item">
                        <h2>AI</h2>
                        <SkillList
                            skillImgList={[
                                TensorflowImg,
                                KerasImg,
                                NumPyImg,
                                PandasImg,
                                SciKitLearnImg,
                                MatplotlibImg,
                            ]}
                        />
                    </li>
                    <li className="item">
                        <h2>Tools</h2>
                        <SkillList skillImgList={[SplunkImg]} />
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
