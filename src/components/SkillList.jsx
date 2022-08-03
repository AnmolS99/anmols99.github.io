import React from "react";
import "../styles/SkillList.css";

function SkillList({ skillImgList }) {
    return (
        <div className="skillList">
            {skillImgList.map((imgSrc) => {
                return (
                    <div className="skillItem">
                        <img src={imgSrc} alt="" />
                    </div>
                );
            })}
        </div>
    );
}

export default SkillList;
