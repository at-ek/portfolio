import SectionTitle from '../components/SectionTitle';
import { hobbies } from '../data/hobbies';

const Hobby = () => {
  return (
    <section id='hobby'>
      <SectionTitle title="Hobby"/>
      
      <ul className='contents-list hobby-contents'>
        {hobbies.map(item => <li key={item}>{item}</li>)}
      </ul>
    </section>
  )
};

export default Hobby;