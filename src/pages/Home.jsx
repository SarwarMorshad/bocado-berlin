import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BOCADO Restaurant Tapasbar</title>
        <meta
          name="description"
          content="Entdecken Sie authentische spanische Tapas, erlesene Weine und ein unvergessliches kulinarisches Erlebnis im Herzen Berlins bei BOCADO."
        />
      </Helmet>
      <div>
        <Hero />
        {/* Additional home page sections can be added below */}
      </div>
    </>
  );
};

export default Home;
