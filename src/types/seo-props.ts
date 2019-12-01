type SEOProps = {
  title?: string;
  image?: {
    src: string;
    alt?: string;
  };
  description?: string;
  keywords?: string[];
  path?: string;
  isArticle?: boolean;
  author?: string;
  datePublished?: string;
};
