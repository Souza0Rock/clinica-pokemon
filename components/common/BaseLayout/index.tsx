import React from "react";
import Head from "next/head";
import * as S from "./styles";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../Banner";

export type TProps = {
  children: React.ReactNode;
  pageTitle: string;
  backgroundImage?: string;
  centerChildVertically?: boolean;
  showBanner?: boolean;
};

const BaseLayout: React.FC<TProps> = ({
  children,
  pageTitle,
  backgroundImage,
  centerChildVertically,
  showBanner,
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle} - Centro Pokemón</title>
        <meta name="description" content="Centro Pokemón" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Container>
        <Header />
        {showBanner && <Banner />}
        <S.ChildrenContent
          centerChildVertically={centerChildVertically}
          backgroundImage={backgroundImage}
        >
          {children}
        </S.ChildrenContent>
        <Footer />
      </S.Container>
    </>
  );
};

export default BaseLayout;
