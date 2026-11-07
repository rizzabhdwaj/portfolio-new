import styles from './Experience.module.css'
import experience from '../data/experience.json'

const Experience = () => (
  <section className="content-section section-border" id="experience">
    <div className="sectionHeading">
      <h2>Experience</h2>
    </div>
    <p className={styles.sectionNote}>
      Selected work, grouped by project ecosystem.
    </p>
    <div className={styles.experienceList}>
      {experience.map((item, index) => (
        <div className={styles.experienceItem} key={`${item.title}-${item.company}`}>
          <div className={styles.experienceRow}>
            <span className={styles.marker}>{index === 0 ? '■' : '□'}</span>
            <span className={styles.date}>{item.date}</span>
            <div className={styles.details}>
              <span className={styles.title}>{item.title} <span className={styles.company}>@ {item.company}</span></span>
              <span className={styles.description}>{item.description}</span>
              {item.projects && (
                <div className={styles.projects} aria-label="Open-source projects">
                  {item.projects.map((project) => (
                    <span className={styles.project} key={project}>{project}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
          {index < experience.length - 1 && <div className={styles.separator} />}
        </div>
      ))}
    </div>
  </section>
)

export default Experience
