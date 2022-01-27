import React from "react";

export default function About({ articles }) {
  console.log(articles);
  return (
    <>
      <div>
        <h1>Hello from About</h1>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  //
  // API Docs : https://api.domainsdb.info/v1/
  //
  const res = await fetch(
    `https://api.domainsdb.info/v1/domains/search?limit=50&domain=facebook`
  );
  const articles = await res.json();
  //
  return {
    props: { articles },
  };
};
