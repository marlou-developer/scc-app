import { ScrollView } from "react-native";
import HeaderSection from "./_sections/header-section";
import JobPostingSection from "./_sections/job-posting-section";
import SearchSection from "./_sections/search-section";
// Import FontAwesome5

const JobHomePage = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="px-5">
      {/* Header Section */}
      <HeaderSection />
      <SearchSection />
      <JobPostingSection />
    </ScrollView>
  );
};

export default JobHomePage;
