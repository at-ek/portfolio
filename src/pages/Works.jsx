import SectionTitle from '../components/SectionTitle';
import { works } from '../data/works';

const Works = () => {
  return (
    <section id='works'>
      <SectionTitle title="Works"/>
      
      <ul className='works-contents'>
        {works.map((item) => {
          return (
            <li className='works-item' key={item.id}>
              <a href={item.link}>
                <img className='item-img' src={`/assets/${item.src}`} alt={item.name} />
                <h3 className='item-title'>{item.name}</h3>
                <p className='item-description'>{item.description}</p>
              </a>
            </li>
          )
        })}
      </ul>
      
    </section>
  )
};

export default Works;