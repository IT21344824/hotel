import React from "react";
import TeamSplaher from "@/components/team/TeamSplasher";
import TeamMember from "@/components/team/TeamMember";
import StaffHero from "@/components/staffComps/staffHero";

export default function Team_pg() {
  return (
    <div>
      <TeamSplaher />
      <TeamMember />
      <StaffHero />
    </div>
  );
}
