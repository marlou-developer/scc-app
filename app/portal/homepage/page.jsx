import Wrapper from "../../_components/wrapper";
import HeaderSection from "./_sections/header";
import Services from "./_sections/services";
import ServicesDetails from "./_sections/services-details";

export default function Page() {
  return (
    <Wrapper>
      <HeaderSection />
      <Services />
      <ServicesDetails />
    </Wrapper>
  );
}
