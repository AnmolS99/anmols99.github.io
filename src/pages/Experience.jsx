import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3E497A">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015 - 2018"
                    iconStyle={{ background: "#5961e8", color: "#FFF" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Mailand VGS
                    </h3>
                    <h4 className="vertical-timeline-element-title">
                        Lørenskog
                    </h4>
                    <p>Studiespesialisering - Realfag</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018 - 2023"
                    iconStyle={{ background: "#5961e8", color: "#FFF" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Norges teknisk-naturvitenskapelige universitet (NTNU)
                    </h3>
                    <h4 className="vertical-timeline-element-title">
                        Trondheim
                    </h4>
                    <p>
                        Master's degree in Computer Science w/ specialization in
                        AI. Master's thesis: Deep Reinforcement Learning for
                        Spatial-Temporal Wildlife Management
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021"
                    iconStyle={{ background: "#efd231", color: "#FFF" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Summer Internship - Backend, mnemonic
                    </h3>
                    <h4 className="vertical-timeline-element-title">Oslo</h4>
                    <p>
                        Developed pipeline for collecting data from distributed
                        systems through REST API. Development mainly happend in
                        Java.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022"
                    iconStyle={{ background: "#efd231", color: "#FFF" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Summer Internship, ITverket
                    </h3>
                    <h4 className="vertical-timeline-element-title">Oslo</h4>
                    <p>
                        Developed dashboards in Splunk to give an overview of
                        the IT-systems and pipelines at Bertel O. Steen.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2023 -"
                    iconStyle={{ background: "#efd231", color: "#FFF" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        IT Consultant, Itera
                    </h3>
                    <h4 className="vertical-timeline-element-title">Oslo</h4>
                    <p>Fullstack developer for Itera.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
