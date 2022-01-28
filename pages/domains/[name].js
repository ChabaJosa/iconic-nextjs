import { useRouter } from "next/router";
import { List } from "semantic-ui-react";

export default function Domain({ res }) {
  const router = useRouter();
  const { name } = router.query;
  console.log(res);
  return (
    <>
      <div>
        <h1>Domains related to {name} </h1>
        <div >
          <List divided relaxed style={{ maxHeight: "50vh" }}>
            {res.domains.map((item) => {
              return (
                <>
                  <List.Item>
                    <List.Icon
                      name="globe"
                      size="large"
                      verticalAlign="middle"
                    />
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
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(
    `https://api.domainsdb.info/v1/domains/search?limit=50&domain=${params.name}&country=us`
  );
  const data = await req.json();

  return {
    props: { res: data },
  };
}
