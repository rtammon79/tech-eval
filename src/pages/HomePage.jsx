//import all components needed for homepage
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Joblistings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

//set up components to be rendered when homepage is rendered as
//a child route element in main(app.jsx)
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <Joblistings isHome={true} />
      <ViewAllJobs />
    </>
  );
};
export default HomePage;
