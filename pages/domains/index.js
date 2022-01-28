import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Input, Button } from "semantic-ui-react";
//
export default function DomainList() {
  //
  const input = useRef("");
  const router = useRouter();
  //
  return (
    <>
      <div style={{ width: "90vw", height: "100%" }}>
        <h1>Domain List</h1>
        <div>
          <Input
            fluid
            placeholder="Search..."
            onChange={(e) => {
              input.current = e.target.value;
            }}
          />
          <Button
            fluid
            onClick={() => {
              router.push(`/domains/${input.current}`);
            }}
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
}
