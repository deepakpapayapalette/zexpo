import React from 'react'
import Banner from '../components/common/Banner'
import OurStory from '../components/about/OurStory'
import MissionVisionSection from '../components/about/MissionVisionSection'
import OurCoreValue from '../components/about/OurCoreValue'
import LeadershipTeam from '../components/about/LeadershipTeam'
import ImpactCTA from '../components/about/OurNewsletter'
import bannerImage from '../assets/images//about/about-banner.png'

import { useAuth0 } from "@auth0/auth0-react";

const bannerContent = {
  image: bannerImage,
  title: "ABOUT",
  title2: "ZEXPO",
  description: "Pioneering the future of healthcare through innovative technology solutions and pathbreaking initiatives."
}
const AboutUs = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);



  // const {
  //   isLoading, // Loading state, the SDK needs to reach Auth0 on load
  //   isAuthenticated,
  //   error,
  //   loginWithRedirect: login, // Starts the login flow
  //   logout: auth0Logout, // Starts the logout flow
  //   user, // User profile
  // } = useAuth0();

  // const signup = () =>
  //   login({ authorizationParams: { screen_hint: "signup" } });

  // const logout = () =>
  //   auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  // if (isLoading) return "Loading...";

  // return isAuthenticated ? (
  //   <>
  //     <p>Logged in as {user.email}</p>

  //     <h1>User Profile</h1>

  //     <pre>{JSON.stringify(user, null, 2)}</pre>

  //     <button onClick={logout}>Logout</button>
  //   </>
  // ) : (
  //   <>
  //     {error && <p>Error: {error.message}</p>}

  //     <button onClick={signup}>Signup</button>

  //     <button onClick={login}>Login</button>
  //   </>
  // );

  // return (
  //   <>
  //     <Banner data={bannerContent} />
  //     <OurStory />
  //     <MissionVisionSection />
  //     <LeadershipTeam />
  //     <ImpactCTA />
  //   </>
  // )
}

export default AboutUs

