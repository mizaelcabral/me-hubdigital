import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactMain from "@/components/containers/ContactMain";
import { useLanguage } from "@/context/LanguageContext";

const ContactUs = () => {
  const { t } = useLanguage();

  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title={t.banner.contactTitle} navigation={t.nav.contact} />
      <ContactMain />
    </Layout>
  );
};

export default ContactUs;
