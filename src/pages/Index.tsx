import { Helmet } from "react-helmet-async";
import JobBoard from "@/components/JobBoard";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Find Your Next Opportunity</title>
        <meta
          name="description"
          content="Browse open positions and find your next career opportunity. Filter by location and team to discover roles that match your skills."
        />
      </Helmet>
      <JobBoard />
    </>
  );
};

export default Index;
