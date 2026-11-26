import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import FaqMain from "@/components/containers/FaqMain";
import { useLanguage } from "@/context/LanguageContext";

const FaqPage = () => {
  const { t } = useLanguage();

  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title={t.banner.faqTitle} navigation={t.nav.faq} />
      <FaqMain />
    </Layout>
  );
};

export default FaqPage;
