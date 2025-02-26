import Page from "@/components/common/Page";
import Row from "@/components/common/Row";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const TemplatePageContent = () => {
  return (
    <>
      <Head>
        <title>TemplatePageContent</title>
        <meta name="description" content="This is the template page" />
      </Head>
      <Page className={""} FULL={false}>
        <Link className="float-end" href="/">
          <Button className="bg-gray-700 hover:bg-gray-600 text-white">
            Create Event
          </Button>
        </Link>
        <Row className="prose max-w-3xl mx-auto">
          <h1 className="h1">This is TemplatePageContent (Copy Me)</h1>
          <h2 className="h2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </h2>
          <h3 className="h3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </h3>
          <p className="dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            molestias pariatur earum praesentium tempore natus asperiores alias
            facere delectus ullam? At in ducimus et delectus, autem veniam quas
            natus quam?
          </p>
        </Row>
      </Page>
    </>
  );
};

export default TemplatePageContent;
