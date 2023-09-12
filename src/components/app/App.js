import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./styles.css";
import Advantages from "/src/mocks/Advantages";

export default function App() {
  return <PageWrapper advantages={Advantages} />;
}
