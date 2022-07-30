import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3E497A">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015 - 2018"
                    iconStyle={{ background: "#3E497A", color: "#FFF" }}
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
                    iconStyle={{ background: "#3E497A", color: "#FFF" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Norges teknisk-naturvitenskapelige universitet
                    </h3>
                    <h4 className="vertical-timeline-element-title">
                        Trondheim
                    </h4>
                    <p>
                        Master's degree in Computer Science w/ specialization in
                        AI
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021"
                    iconStyle={{ background: "#E9D35B", color: "#FFF" }}
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
                    iconStyle={{ background: "#E9D35B", color: "#FFF" }}
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
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
