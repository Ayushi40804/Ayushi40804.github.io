const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        <div>
          <h3>Technical Skills</h3>
          <p>Linux OS, Computer Networks, Data Structures</p>
        </div>
        <div>
          <h3>Programming Languages</h3>
          <p>Python, C, Java, SQL, Golang, HTML/CSS</p>
        </div>
        <div>
          <h3>Frameworks/Tools/Databases</h3>
          <p>
            Django, Bootstrap, AWS Cloud Services, GitHub, Docker, SQL Server, PHP
            Server, MongoDB
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;