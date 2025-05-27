import PageTemplate from './PageTemplate.jsx';

const Projects = () => (
  <PageTemplate fn={(card) => card.category === "projects"} />
);
export default Projects;
