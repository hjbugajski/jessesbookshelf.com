/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import { RootPage } from '@payloadcms/next/views';

import config from '@/payload/payload.config';

type Args = {
  params: {
    segments: string[];
  };
  searchParams: {
    [key: string]: string | string[];
  };
};

const Page = ({ params, searchParams }: Args) => RootPage({ config, params, searchParams });

export default Page;
