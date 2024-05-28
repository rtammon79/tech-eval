//import routing tools needed to create and use react-router-dom to bring in additional
//pages
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
//import for setting up main layout(parent route element) for anything
//that should be on all pages, such as the Navbar
import MainLayout from './layouts/MainLayout';
//import custom NotFoundPage for handling 404 errors
import NotFoundPage from './pages/NotFoundPage';
//import homepage to be the index element home/start page at / (ex. localhost:3000/)
import HomePage from './pages/HomePage';
//import additional routes to be children of parent router
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import JobPage, { jobLoader } from './pages/JobPage';

//creation of browser router. creating parent route at '/' to hold navbar and anything
//that needs to be on all pages, and all the children routes that need to be navigated to
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage />} />
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
