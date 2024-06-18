import React from "react";
import Layout from "../../components/Layout/Layout";
import HomePageComponent from "../../components/HomePage/HomePage";

const HomePage = () => {
  return (
    <>
      <Layout className="homepage">
        <HomePageComponent />
      </Layout>
    </>
  );
};

export default HomePage;
