import { useEffect } from "react";
import SectionTitle from '../components/SectionTitle';
import { profile, contacts } from '../data/profile';

const Home = () => {
  return (
    <>
        <section id='home'>
          <SectionTitle title="Home" />
          
          <dl className='contents-list home-contents'>
            {profile.map((item) => {
              return (
                <div key={item.label} className='profile-item'>
                  <dt>{`${item.label}: `}</dt>
                  <dd>{item.value}</dd>
                </div>
              )
            })}
          </dl>

          <p className="home-text">現在、Webアプリケーション開発を中心に学習中です。目標はNext.jsを使いフルスタックなアプリケーション開発をすることです。<br />また事務作業の業務効率化を目的とし、Pythonの学習も視野に入れています。</p>
      </section>

      <section id='contact'>
        <h2 className='section-title'>Contact</h2>

        <ul className='contents-list contact-contents'>
          {contacts.map((item) => {
            return (
              <li key={item.label}>
                <a href={item.link}>{item.label}: <span className='text-link'>{item.text}</span></a>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
};

export default Home;