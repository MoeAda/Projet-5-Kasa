import Collapse from '../components/Collapse';
import aboutData from "../../data/about.json";

function About() {
  return (
    <>
      <div className="banner">
        <img className="banner__img" src="/public/assets/img-about.png" />
      </div>
      <div className="collapses">
      {aboutData.map((item) => (
        <div key={item.id}>
          <Collapse title={item.title} content={item.description} />
        </div>
      ))}
      </div>
    </>
  );
}

export default About;
