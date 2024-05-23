// pages/index.js
import Image from "next/image";
import ContactPage from "@/contactPage/page.jsx";
import ServicePage from "@/servicePage/page.jsx";
import ConsultingPage from '@/Consulting/page.jsx';
import TaxRegulatoryPage from "@/TaxRegulatory/page";
import EsgPage from "@/Esg/page";
import DealsPage from "@/Deals/page";
import AssurancePage from "@/Assurance/page";
import GlobalPage from "@/global/page";
import ProprietaryPage from "@/Proprietary/page";
export default function Home() {
  return (
    <>
      {/* <ContactPage /> */}
      {/* <ServicePage /> */}
      {/* <ConsultingPage></ConsultingPage> */}
      {/* <HamburgerMenu /> */}
      {/* <TaxRegulatoryPage></TaxRegulatoryPage> */}
      {/* <EsgPage></EsgPage> */}
      {/* <DealsPage></DealsPage> */}
      {/* <AssurancePage></AssurancePage> */}
      {/* <GlobalPage></GlobalPage> */}
      <ProprietaryPage></ProprietaryPage>
    </>
  );
}
