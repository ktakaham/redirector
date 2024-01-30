import type { NextPageWithLayout } from "next";

import { UserIndexPageComponents } from "@/components/pageComponents/user/Index";

const Page: NextPageWithLayout = () => <UserIndexPageComponents />;
Page.getLayout = (page) => <>{page}</>;
export default Page;
