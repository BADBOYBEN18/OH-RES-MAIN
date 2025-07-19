// src/components/SeoHead.tsx
import { Helmet } from 'react-helmet';

type SeoHeadProps = {
  title: string;
  description: string;
};

export const SeoHead = ({ title, description }: SeoHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href="/ed.jpg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
    </Helmet>
  );
};
