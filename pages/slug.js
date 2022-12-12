// # [slug].js

import { useRouter } from "next/router";
import Layout from "../src/layout/Layout";

export default function DynamicPage() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return <Layout>The dynamic route is {id}</Layout>;
}
