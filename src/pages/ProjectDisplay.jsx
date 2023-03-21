import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1> {project.name} </h1>
            <img src={project.image} alt="" />
            <p>{project.description}</p>
            <h2>
                <b>Skills: </b> {project.skills}
            </h2>
            <GitHubIcon onClick={() => window.open(project.githubLink)} />
        </div>
    );
}

export default ProjectDisplay;
