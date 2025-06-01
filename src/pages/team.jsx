import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";
import TeamCard from "../components/TeamCard";
import team from "../data/team";
import styles from "../styles/components/teampage.module.css";

const TeamPage = () => {
  return (
    <>
      
      <PageContent>
        <h1>Our Leadership</h1>
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </PageContent>
    
    </>
  );
};

export default TeamPage;
