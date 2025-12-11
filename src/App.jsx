import React from 'react'
import WebsiteLayout from './layouts/WebsiteLayout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewsDetail from './pages/NewsDetail';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import ContactUs from './pages/ContactUs';
import ATRN from './pages/ATRN';
import AeturnEMR from './pages/AeturnEMR';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <WebsiteLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },

        // {
        //   path: '/associations',
        //   element: <Associations />
        // },
        {
          path: '/aeturn-emr',
          element: <AeturnEMR />
        },
        // {
        //   path: '/future-vision',
        //   element: <FutureVision />
        // },
        // {
        //   path: '/news',
        //   element: <NewsArticles />
        // },
        {
          path: '/news/:id',
          element: <NewsDetail />
        },

        {
          path: '/aeturn',
          element: <ATRN />
        },
        {
          path: '/services',
          element: <OurServices />
        },
        {
          path: '/about',
          element: <AboutUs />
        },
        {
          path: '/contact',
          element: <ContactUs />
        },

        // {
        //   path: '/about',
        //   element: <AboutRoute />,
        //   children: [
        //     {
        //       path: 'about-us',
        //       element: <AboutUs />,
        //     },
        //     {
        //       path: 'about-us/:id',
        //       element: <NewsDetail />,
        //     },
        //     {
        //       path: 'our-team',
        //       element: <OurTeam />,
        //     },
        //     {
        //       path: 'careers',
        //       element: <Careers />,
        //     },
        //     {
        //       path: 'solution-portfolio',
        //       element: <SolutionPortfolio />,
        //     },
        //   ],
        // },
        // {
        //   path: '/industries',
        //   element: <IndustriesRoute />,
        //   children: [
        //     {
        //       path: 'public-health',
        //       element: <PublicHealth />,
        //     },
        //     {
        //       path: 'medical-tourism',
        //       element: <MedicalTourism />,
        //     },
        //     {
        //       path: 'road-safety',
        //       element: <RoadSafety />,
        //     },
        //     {
        //       path: 'skill-development',
        //       element: <SkillDevelopment />
        //     },
        //     {
        //       path: 'innovations',
        //       element: <Innovations />
        //     },
        //     {
        //       path: 'tourism',
        //       element: <TourismInner />
        //     },

        //   ],
        // },
        // {
        //   path: '/associations',
        //   element: <AssociationRoute />,
        //   children: [
        //     {
        //       path: 'ministry-of-health', //
        //       element: <MinistryHealthEthiopia />,
        //     },
        //     {
        //       path: 'biztech-solutions', //
        //       element: <BizTechSolutionsEthiopia />,
        //     },
        //     {
        //       path: 'IHAT', //
        //       element: <MinistryHealthEthiopia />,
        //     },
        //     {
        //       path: 'suverna-tech-hyderabad', //
        //       element: <MinistryHealthEthiopia />,
        //     },
        //     {
        //       path: 'ministry-of-tourism-UP', //
        //       element: <MinistryHealthEthiopia />,
        //     },
        //     {
        //       path: 'KDS-services', //
        //       element: <MinistryHealthEthiopia />,
        //     },
        //     {
        //       path: 'IACC', //
        //       element: <MinistryHealthEthiopia />,
        //     },
        //     {
        //       path: 'healthcare-sector-skill-council', //
        //       element: <MinistryHealthEthiopia />,
        //     },
        //   ],
        // },

      ]
    },

  ]);
  return (<RouterProvider
    router={router} future={{ v7_startTransition: true, }}
  />
  )
}

export default App
