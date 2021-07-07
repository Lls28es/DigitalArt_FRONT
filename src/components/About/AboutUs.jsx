import Card from "./Card/MemberCard.jsx";
import team from "./team/MembersData.js";

import "../../scss/components/_about.scss";

export default function AboutUs() {
  
  return (
    <div className="home-wrapper">
      <div className="section-about">
        <div className="team">
          {team.information.map((member, index) => {
            member.profilePic = team.profilePic[index];
            return <Card member={member} key={member.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
