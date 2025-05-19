// src/app/page.tsx
import React from 'react';
// REMOVE: import styles from './page.module.css'; // No CSS Modules here now

// Components
import PersonalInfo from '@/components/PersonalInfo';
import ProjectsSection from '@/components/ProjectSection';
import ExperienceSection from '@/components/ExperienceSection';
import LeadershipSection from '@/components/LeadershipSection';
import SkillsSection from '@/components/SkillSection';
import EducationSection from '@/components/EducationSection';
import CertificationsSection from '@/components/CertificationSection';

const Home: React.FC = () => {
  return (
    <div className="container"> {/* Using global container class */}
      <main>
        <PersonalInfo />
        <ProjectsSection />
        <ExperienceSection />
        <LeadershipSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
      </main>
    </div>
  );
};

export default Home;