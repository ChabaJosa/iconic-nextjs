import { List } from "semantic-ui-react";

export default function DomainSArrearch({ domainsArr }) {
  console.log(domainsArr);
  //
  // Need to use: https://nextjs.org/docs/api-reference/data-fetching/get-static-paths 
  // for search
  //
  if (domainsArr !== undefined) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // minHeight: "90vh",
          width: "90vw",
          justifyContent: "flex-start",
          // border: "1px red solid",
        }}
      >
        <h1>Hello from Domain Search</h1>
        <List divided relaxed>
          {domainsArr.domains.map((item) => {
            return (
              <>
                <List.Item>
                  <List.Icon name="globe" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header as="a">{item.domain}</List.Header>
                    <List.Description as="a">
                      Last Updated {item.update_date}
                    </List.Description>
                  </List.Content>
                </List.Item>
              </>
            );
          })}
        </List>
      </div>
    );
  } else {
    return (
      <>
        <div>Loading</div>
      </>
    );
  }
}

//
// Gets Req on Build Time
export const getServerSideProps = async () => {
  //
  // API Docs : https://api.domainsdb.info/v1/
  //
  const res = await fetch(
    `https://api.domainsdb.info/v1/domains/search?limit=50&domain=iconic&country=us`
  );
  const domainsArr = await res.json();
  //
  return {
    props: { domainsArr },
  };
};
