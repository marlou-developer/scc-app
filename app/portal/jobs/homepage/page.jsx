import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderSection from "./_sections/header-section";
import JobPostingSection from "./_sections/job-posting-section";
import SearchSection from "./_sections/search-section";
// Import FontAwesome5

const JobHomePage = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="px-5">
        {/* Header Section */}
        <HeaderSection />
        <SearchSection />
        <JobPostingSection />
      </ScrollView>

      {/* Bottom Navigation */}
    </SafeAreaView>
  );
};

export default JobHomePage;
