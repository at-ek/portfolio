import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { skills, levelIndex } from '../data/skills';

const Skills = () => {
  const [category, setCategory] = useState('All');

  const categorys = ['All', ...new Set(skills.map((skill) => skill.category))];

  const filteredSkills = 
    category === 'All'
      ? skills
      : skills.filter((skill) => skill.category === category);

  return (
    <section id='skills'>
      <SectionTitle title="Skills" />
      
      <aside>
        <h3>Levelバロメーター</h3>
        <ul>
          {Object.entries(levelIndex).map(([key,text]) => {
            return (
              <li key={key}>
                <span>
                  {'★'.repeat(key)}
                  {'☆'.repeat(4 - key)}
                </span>
                <span>…</span>
                <span>{text}</span>
              </li>
              )
            }) 
          }
        </ul>
      </aside>

      <div>
        <ul className='button-container'>
          {categorys.map((cat) => {
            return (
              <li key={cat} ><button type='button' className={`${cat} ${category === cat ? 'active' : ''}`} onClick={() => setCategory(cat)}>{cat}</button></li>
            )
          })}
        </ul>

        <div className="skill-list">
          <div className="skill-header">
            <span>Skill</span>
            <span>Level</span>
            <span>Category</span>
          </div>
          <ul>
            {
              filteredSkills.map((skill) => {
                return (
                  <li key={skill.id} className='skill-item'>
                    <p>{skill.skill}</p>
                    <p>
                      <span>
                        {'★'.repeat(skill.level)}
                        {'☆'.repeat(4 - skill.level)}
                      </span>
                    </p>
                    <p>{skill.category}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
};

export default Skills;