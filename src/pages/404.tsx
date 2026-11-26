import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ErrorMain from "@/components/containers/ErrorMain";
import { useLanguage } from "@/context/LanguageContext";

const ErrorPage = () => {
  const { t } = useLanguage();

  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title={t.banner.errorTitle} navigation={t.banner.errorTitle} />
      <ErrorMain />
    </Layout>
  );
};

export default ErrorPage;
