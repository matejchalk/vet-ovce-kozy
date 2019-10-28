export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for
   * representation of dates and times using the Gregorian calendar.
   **/
  Date: any;
};

/** Node of type ContentfulArticle */
export type ContentfulArticle = Node & {
  __typename?: 'ContentfulArticle';
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  internal?: Maybe<Internal_10>;
  node_locale?: Maybe<Scalars['String']>;
};

/** Node of type ContentfulArticle */
export type ContentfulArticleCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type ContentfulArticle */
export type ContentfulArticleUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ContentfulArticleConnection = {
  __typename?: 'ContentfulArticleConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContentfulArticleEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>;
  group?: Maybe<Array<Maybe<ContentfulArticleGroupConnectionConnection>>>;
};

/** A connection to a list of items. */
export type ContentfulArticleConnectionDistinctArgs = {
  field?: Maybe<ContentfulArticleDistinctEnum>;
};

/** A connection to a list of items. */
export type ContentfulArticleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field?: Maybe<ContentfulArticleGroupEnum>;
};

export type ContentfulArticleConnectionContentfulIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionCreatedAtQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionImageContentfulIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionImageDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionImageFileContentTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionImageFileDetailsImageHeightQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentfulArticleConnectionImageFileDetailsImageInputObject_2 = {
  width?: Maybe<
    ContentfulArticleConnectionImageFileDetailsImageWidthQueryInteger_2
  >;
  height?: Maybe<
    ContentfulArticleConnectionImageFileDetailsImageHeightQueryInteger_2
  >;
};

export type ContentfulArticleConnectionImageFileDetailsImageWidthQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentfulArticleConnectionImageFileDetailsInputObject_2 = {
  size?: Maybe<ContentfulArticleConnectionImageFileDetailsSizeQueryInteger_2>;
  image?: Maybe<ContentfulArticleConnectionImageFileDetailsImageInputObject_2>;
};

export type ContentfulArticleConnectionImageFileDetailsSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentfulArticleConnectionImageFileFileNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionImageFileInputObject_2 = {
  url?: Maybe<ContentfulArticleConnectionImageFileUrlQueryString_2>;
  details?: Maybe<ContentfulArticleConnectionImageFileDetailsInputObject_2>;
  fileName?: Maybe<ContentfulArticleConnectionImageFileFileNameQueryString_2>;
  contentType?: Maybe<
    ContentfulArticleConnectionImageFileContentTypeQueryString_2
  >;
};

export type ContentfulArticleConnectionImageFileUrlQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionImageIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionImageInputObject_2 = {
  contentful_id?: Maybe<
    ContentfulArticleConnectionImageContentfulIdQueryString_2
  >;
  id?: Maybe<ContentfulArticleConnectionImageIdQueryString_2>;
  file?: Maybe<ContentfulArticleConnectionImageFileInputObject_2>;
  title?: Maybe<ContentfulArticleConnectionImageTitleQueryString_2>;
  description?: Maybe<ContentfulArticleConnectionImageDescriptionQueryString_2>;
  node_locale?: Maybe<ContentfulArticleConnectionImageNodeLocaleQueryString_2>;
  internal?: Maybe<ContentfulArticleConnectionImageInternalInputObject_2>;
};

export type ContentfulArticleConnectionImageInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionImageInternalInputObject_2 = {
  type?: Maybe<ContentfulArticleConnectionImageInternalTypeQueryString_2>;
  contentDigest?: Maybe<
    ContentfulArticleConnectionImageInternalContentDigestQueryString_2
  >;
  owner?: Maybe<ContentfulArticleConnectionImageInternalOwnerQueryString_2>;
};

export type ContentfulArticleConnectionImageInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionImageInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionImageNodeLocaleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionImageTitleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionInternalInputObject_2 = {
  type?: Maybe<ContentfulArticleConnectionInternalTypeQueryString_2>;
  contentDigest?: Maybe<
    ContentfulArticleConnectionInternalContentDigestQueryString_2
  >;
  owner?: Maybe<ContentfulArticleConnectionInternalOwnerQueryString_2>;
};

export type ContentfulArticleConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionNodeLocaleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionSlugQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionSort = {
  fields: Array<Maybe<ContentfulArticleConnectionSortByFieldsEnum>>;
  order?: Maybe<ContentfulArticleConnectionSortOrderValues>;
};

export enum ContentfulArticleConnectionSortByFieldsEnum {
  title = 'title',
  slug = 'slug',
  image___NODE = 'image___NODE',
  id = 'id',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  node_locale = 'node_locale',
}

export enum ContentfulArticleConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ContentfulArticleConnectionTitleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleConnectionUpdatedAtQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleContentfulIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleCreatedAtQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum ContentfulArticleDistinctEnum {
  title = 'title',
  slug = 'slug',
  image___NODE = 'image___NODE',
  id = 'id',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  node_locale = 'node_locale',
}

/** An edge in a connection. */
export type ContentfulArticleEdge = {
  __typename?: 'ContentfulArticleEdge';
  /** The item at the end of the edge */
  node?: Maybe<ContentfulArticle>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulArticle>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulArticle>;
};

/** A connection to a list of items. */
export type ContentfulArticleGroupConnectionConnection = {
  __typename?: 'contentfulArticleGroupConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContentfulArticleGroupConnectionEdge>>>;
  field?: Maybe<Scalars['String']>;
  fieldValue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type ContentfulArticleGroupConnectionEdge = {
  __typename?: 'contentfulArticleGroupConnectionEdge';
  /** The item at the end of the edge */
  node?: Maybe<ContentfulArticle>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulArticle>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulArticle>;
};

export enum ContentfulArticleGroupEnum {
  title = 'title',
  slug = 'slug',
  image___NODE = 'image___NODE',
  id = 'id',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  node_locale = 'node_locale',
}

export type ContentfulArticleIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleImageContentfulIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleImageDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleImageFileContentTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleImageFileDetailsImageHeightQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentfulArticleImageFileDetailsImageInputObject_2 = {
  width?: Maybe<ContentfulArticleImageFileDetailsImageWidthQueryInteger_2>;
  height?: Maybe<ContentfulArticleImageFileDetailsImageHeightQueryInteger_2>;
};

export type ContentfulArticleImageFileDetailsImageWidthQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentfulArticleImageFileDetailsInputObject_2 = {
  size?: Maybe<ContentfulArticleImageFileDetailsSizeQueryInteger_2>;
  image?: Maybe<ContentfulArticleImageFileDetailsImageInputObject_2>;
};

export type ContentfulArticleImageFileDetailsSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentfulArticleImageFileFileNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleImageFileInputObject_2 = {
  url?: Maybe<ContentfulArticleImageFileUrlQueryString_2>;
  details?: Maybe<ContentfulArticleImageFileDetailsInputObject_2>;
  fileName?: Maybe<ContentfulArticleImageFileFileNameQueryString_2>;
  contentType?: Maybe<ContentfulArticleImageFileContentTypeQueryString_2>;
};

export type ContentfulArticleImageFileUrlQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleImageIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleImageInputObject_2 = {
  contentful_id?: Maybe<ContentfulArticleImageContentfulIdQueryString_2>;
  id?: Maybe<ContentfulArticleImageIdQueryString_2>;
  file?: Maybe<ContentfulArticleImageFileInputObject_2>;
  title?: Maybe<ContentfulArticleImageTitleQueryString_2>;
  description?: Maybe<ContentfulArticleImageDescriptionQueryString_2>;
  node_locale?: Maybe<ContentfulArticleImageNodeLocaleQueryString_2>;
  internal?: Maybe<ContentfulArticleImageInternalInputObject_2>;
};

export type ContentfulArticleImageInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleImageInternalInputObject_2 = {
  type?: Maybe<ContentfulArticleImageInternalTypeQueryString_2>;
  contentDigest?: Maybe<
    ContentfulArticleImageInternalContentDigestQueryString_2
  >;
  owner?: Maybe<ContentfulArticleImageInternalOwnerQueryString_2>;
};

export type ContentfulArticleImageInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleImageInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleImageNodeLocaleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleImageTitleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleInternalInputObject_2 = {
  type?: Maybe<ContentfulArticleInternalTypeQueryString_2>;
  contentDigest?: Maybe<ContentfulArticleInternalContentDigestQueryString_2>;
  owner?: Maybe<ContentfulArticleInternalOwnerQueryString_2>;
};

export type ContentfulArticleInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleNodeLocaleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleSlugQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleTitleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulArticleUpdatedAtQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Node of type ContentfulAsset */
export type ContentfulAsset = Node & {
  __typename?: 'ContentfulAsset';
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<File_2>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  internal?: Maybe<Internal_11>;
  fixed?: Maybe<ContentfulFixed>;
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};

/** Node of type ContentfulAsset */
export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

/** Node of type ContentfulAsset */
export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

/** Node of type ContentfulAsset */
export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};

/** Node of type ContentfulAsset */
export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};

/** Node of type ContentfulAsset */
export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContentfulAssetEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>;
  group?: Maybe<Array<Maybe<ContentfulAssetGroupConnectionConnection>>>;
};

/** A connection to a list of items. */
export type ContentfulAssetConnectionDistinctArgs = {
  field?: Maybe<ContentfulAssetDistinctEnum>;
};

/** A connection to a list of items. */
export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field?: Maybe<ContentfulAssetGroupEnum>;
};

export type ContentfulAssetConnectionContentfulIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetConnectionDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetConnectionFileContentTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetConnectionFileDetailsImageHeightQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentfulAssetConnectionFileDetailsImageInputObject_2 = {
  width?: Maybe<ContentfulAssetConnectionFileDetailsImageWidthQueryInteger_2>;
  height?: Maybe<ContentfulAssetConnectionFileDetailsImageHeightQueryInteger_2>;
};

export type ContentfulAssetConnectionFileDetailsImageWidthQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentfulAssetConnectionFileDetailsInputObject_2 = {
  size?: Maybe<ContentfulAssetConnectionFileDetailsSizeQueryInteger_2>;
  image?: Maybe<ContentfulAssetConnectionFileDetailsImageInputObject_2>;
};

export type ContentfulAssetConnectionFileDetailsSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentfulAssetConnectionFileFileNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetConnectionFileInputObject_2 = {
  url?: Maybe<ContentfulAssetConnectionFileUrlQueryString_2>;
  details?: Maybe<ContentfulAssetConnectionFileDetailsInputObject_2>;
  fileName?: Maybe<ContentfulAssetConnectionFileFileNameQueryString_2>;
  contentType?: Maybe<ContentfulAssetConnectionFileContentTypeQueryString_2>;
};

export type ContentfulAssetConnectionFileUrlQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetConnectionInternalInputObject_2 = {
  type?: Maybe<ContentfulAssetConnectionInternalTypeQueryString_2>;
  contentDigest?: Maybe<
    ContentfulAssetConnectionInternalContentDigestQueryString_2
  >;
  owner?: Maybe<ContentfulAssetConnectionInternalOwnerQueryString_2>;
};

export type ContentfulAssetConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetConnectionNodeLocaleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetConnectionSort = {
  fields: Array<Maybe<ContentfulAssetConnectionSortByFieldsEnum>>;
  order?: Maybe<ContentfulAssetConnectionSortOrderValues>;
};

export enum ContentfulAssetConnectionSortByFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  file___url = 'file___url',
  file___details___size = 'file___details___size',
  file___details___image = 'file___details___image',
  file___fileName = 'file___fileName',
  file___contentType = 'file___contentType',
  title = 'title',
  description = 'description',
  node_locale = 'node_locale',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  resize___base64 = 'resize___base64',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___src = 'resize___src',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
}

export enum ContentfulAssetConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ContentfulAssetConnectionTitleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetContentfulIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum ContentfulAssetDistinctEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  file___url = 'file___url',
  file___details___size = 'file___details___size',
  file___details___image = 'file___details___image',
  file___fileName = 'file___fileName',
  file___contentType = 'file___contentType',
  title = 'title',
  description = 'description',
  node_locale = 'node_locale',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
}

/** An edge in a connection. */
export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge';
  /** The item at the end of the edge */
  node?: Maybe<ContentfulAsset>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulAsset>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFileContentTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetFileDetailsImageHeightQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentfulAssetFileDetailsImageInputObject_2 = {
  width?: Maybe<ContentfulAssetFileDetailsImageWidthQueryInteger_2>;
  height?: Maybe<ContentfulAssetFileDetailsImageHeightQueryInteger_2>;
};

export type ContentfulAssetFileDetailsImageWidthQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentfulAssetFileDetailsInputObject_2 = {
  size?: Maybe<ContentfulAssetFileDetailsSizeQueryInteger_2>;
  image?: Maybe<ContentfulAssetFileDetailsImageInputObject_2>;
};

export type ContentfulAssetFileDetailsSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentfulAssetFileFileNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetFileInputObject_2 = {
  url?: Maybe<ContentfulAssetFileUrlQueryString_2>;
  details?: Maybe<ContentfulAssetFileDetailsInputObject_2>;
  fileName?: Maybe<ContentfulAssetFileFileNameQueryString_2>;
  contentType?: Maybe<ContentfulAssetFileContentTypeQueryString_2>;
};

export type ContentfulAssetFileUrlQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A connection to a list of items. */
export type ContentfulAssetGroupConnectionConnection = {
  __typename?: 'contentfulAssetGroupConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContentfulAssetGroupConnectionEdge>>>;
  field?: Maybe<Scalars['String']>;
  fieldValue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type ContentfulAssetGroupConnectionEdge = {
  __typename?: 'contentfulAssetGroupConnectionEdge';
  /** The item at the end of the edge */
  node?: Maybe<ContentfulAsset>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulAsset>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetGroupEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  file___url = 'file___url',
  file___details___size = 'file___details___size',
  file___details___image = 'file___details___image',
  file___fileName = 'file___fileName',
  file___contentType = 'file___contentType',
  title = 'title',
  description = 'description',
  node_locale = 'node_locale',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
}

export type ContentfulAssetIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetInternalInputObject_2 = {
  type?: Maybe<ContentfulAssetInternalTypeQueryString_2>;
  contentDigest?: Maybe<ContentfulAssetInternalContentDigestQueryString_2>;
  owner?: Maybe<ContentfulAssetInternalOwnerQueryString_2>;
};

export type ContentfulAssetInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetNodeLocaleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulAssetTitleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Node of type ContentfulContentType */
export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType';
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  internal?: Maybe<Internal_9>;
};

/** A connection to a list of items. */
export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContentfulContentTypeEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>;
  group?: Maybe<Array<Maybe<ContentfulContentTypeGroupConnectionConnection>>>;
};

/** A connection to a list of items. */
export type ContentfulContentTypeConnectionDistinctArgs = {
  field?: Maybe<ContentfulContentTypeDistinctEnum>;
};

/** A connection to a list of items. */
export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field?: Maybe<ContentfulContentTypeGroupEnum>;
};

export type ContentfulContentTypeConnectionDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulContentTypeConnectionDisplayFieldQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulContentTypeConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulContentTypeConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulContentTypeConnectionInternalInputObject_2 = {
  type?: Maybe<ContentfulContentTypeConnectionInternalTypeQueryString_2>;
  contentDigest?: Maybe<
    ContentfulContentTypeConnectionInternalContentDigestQueryString_2
  >;
  owner?: Maybe<ContentfulContentTypeConnectionInternalOwnerQueryString_2>;
};

export type ContentfulContentTypeConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulContentTypeConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulContentTypeConnectionNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulContentTypeConnectionSort = {
  fields: Array<Maybe<ContentfulContentTypeConnectionSortByFieldsEnum>>;
  order?: Maybe<ContentfulContentTypeConnectionSortOrderValues>;
};

export enum ContentfulContentTypeConnectionSortByFieldsEnum {
  id = 'id',
  name = 'name',
  displayField = 'displayField',
  description = 'description',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
}

export enum ContentfulContentTypeConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ContentfulContentTypeDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulContentTypeDisplayFieldQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum ContentfulContentTypeDistinctEnum {
  id = 'id',
  name = 'name',
  displayField = 'displayField',
  description = 'description',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
}

/** An edge in a connection. */
export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ContentfulContentType>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulContentType>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulContentType>;
};

/** A connection to a list of items. */
export type ContentfulContentTypeGroupConnectionConnection = {
  __typename?: 'contentfulContentTypeGroupConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContentfulContentTypeGroupConnectionEdge>>>;
  field?: Maybe<Scalars['String']>;
  fieldValue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type ContentfulContentTypeGroupConnectionEdge = {
  __typename?: 'contentfulContentTypeGroupConnectionEdge';
  /** The item at the end of the edge */
  node?: Maybe<ContentfulContentType>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulContentType>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeGroupEnum {
  id = 'id',
  name = 'name',
  displayField = 'displayField',
  description = 'description',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___owner = 'internal___owner',
}

export type ContentfulContentTypeIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulContentTypeInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulContentTypeInternalInputObject_2 = {
  type?: Maybe<ContentfulContentTypeInternalTypeQueryString_2>;
  contentDigest?: Maybe<
    ContentfulContentTypeInternalContentDigestQueryString_2
  >;
  owner?: Maybe<ContentfulContentTypeInternalOwnerQueryString_2>;
};

export type ContentfulContentTypeInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulContentTypeInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulContentTypeNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulFixed = {
  __typename?: 'ContentfulFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFluid = {
  __typename?: 'ContentfulFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};

export enum ContentfulImageCropFocus {
  TOP = 'TOP',
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM = 'BOTTOM',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  FACES = 'FACES',
}

export enum ContentfulImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export type ContentfulResize = {
  __typename?: 'ContentfulResize';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResolutions = {
  __typename?: 'ContentfulResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulSizes = {
  __typename?: 'ContentfulSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};

export type Dependencies_2 = {
  __typename?: 'dependencies_2';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Details_2 = {
  __typename?: 'details_2';
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<Image_2>;
};

export type DevDependencies_2 = {
  __typename?: 'devDependencies_2';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type File_2 = {
  __typename?: 'file_2';
  url?: Maybe<Scalars['String']>;
  details?: Maybe<Details_2>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

/** Filter connection on its fields */
export type FilterContentfulArticle = {
  title?: Maybe<ContentfulArticleConnectionTitleQueryString_2>;
  slug?: Maybe<ContentfulArticleConnectionSlugQueryString_2>;
  image?: Maybe<ContentfulArticleConnectionImageInputObject_2>;
  id?: Maybe<ContentfulArticleConnectionIdQueryString_2>;
  contentful_id?: Maybe<ContentfulArticleConnectionContentfulIdQueryString_2>;
  createdAt?: Maybe<ContentfulArticleConnectionCreatedAtQueryString_2>;
  updatedAt?: Maybe<ContentfulArticleConnectionUpdatedAtQueryString_2>;
  internal?: Maybe<ContentfulArticleConnectionInternalInputObject_2>;
  node_locale?: Maybe<ContentfulArticleConnectionNodeLocaleQueryString_2>;
};

/** Filter connection on its fields */
export type FilterContentfulAsset = {
  contentful_id?: Maybe<ContentfulAssetConnectionContentfulIdQueryString_2>;
  id?: Maybe<ContentfulAssetConnectionIdQueryString_2>;
  file?: Maybe<ContentfulAssetConnectionFileInputObject_2>;
  title?: Maybe<ContentfulAssetConnectionTitleQueryString_2>;
  description?: Maybe<ContentfulAssetConnectionDescriptionQueryString_2>;
  node_locale?: Maybe<ContentfulAssetConnectionNodeLocaleQueryString_2>;
  internal?: Maybe<ContentfulAssetConnectionInternalInputObject_2>;
  fixed?: Maybe<FixedTypeName_4>;
  resolutions?: Maybe<ResolutionsTypeName_4>;
  fluid?: Maybe<FluidTypeName_4>;
  sizes?: Maybe<SizesTypeName_4>;
  resize?: Maybe<ResizeTypeName_4>;
};

/** Filter connection on its fields */
export type FilterContentfulContentType = {
  id?: Maybe<ContentfulContentTypeConnectionIdQueryString_2>;
  name?: Maybe<ContentfulContentTypeConnectionNameQueryString_2>;
  displayField?: Maybe<
    ContentfulContentTypeConnectionDisplayFieldQueryString_2
  >;
  description?: Maybe<ContentfulContentTypeConnectionDescriptionQueryString_2>;
  internal?: Maybe<ContentfulContentTypeConnectionInternalInputObject_2>;
};

/** Filter connection on its fields */
export type FilterSitePage = {
  jsonName?: Maybe<SitePageConnectionJsonNameQueryString>;
  internalComponentName?: Maybe<
    SitePageConnectionInternalComponentNameQueryString
  >;
  path?: Maybe<SitePageConnectionPathQueryString_2>;
  component?: Maybe<SitePageConnectionComponentQueryString>;
  componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>;
  pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>;
  pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>;
  componentPath?: Maybe<SitePageConnectionComponentPathQueryString>;
  id?: Maybe<SitePageConnectionIdQueryString_2>;
  internal?: Maybe<SitePageConnectionInternalInputObject_2>;
};

/** Filter connection on its fields */
export type FilterSitePlugin = {
  resolve?: Maybe<SitePluginConnectionResolveQueryString_2>;
  id?: Maybe<SitePluginConnectionIdQueryString_2>;
  name?: Maybe<SitePluginConnectionNameQueryString_2>;
  version?: Maybe<SitePluginConnectionVersionQueryString_2>;
  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>;
  nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>;
  browserAPIs?: Maybe<SitePluginConnectionBrowserApIsQueryList_2>;
  ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>;
  pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>;
  packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>;
  internal?: Maybe<SitePluginConnectionInternalInputObject_2>;
};

export type FixedAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FixedAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FixedBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedHeightQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FixedHeightQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FixedSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcSetQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcSetQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcSetWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcSetWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedTypeName_3 = {
  base64?: Maybe<FixedBase64QueryString_3>;
  tracedSVG?: Maybe<FixedTracedSvgQueryString_3>;
  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_3>;
  width?: Maybe<FixedWidthQueryFloat_3>;
  height?: Maybe<FixedHeightQueryFloat_3>;
  src?: Maybe<FixedSrcQueryString_3>;
  srcSet?: Maybe<FixedSrcSetQueryString_3>;
  srcWebp?: Maybe<FixedSrcWebpQueryString_3>;
  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_3>;
};

export type FixedTypeName_4 = {
  base64?: Maybe<FixedBase64QueryString_4>;
  tracedSVG?: Maybe<FixedTracedSvgQueryString_4>;
  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_4>;
  width?: Maybe<FixedWidthQueryFloat_4>;
  height?: Maybe<FixedHeightQueryFloat_4>;
  src?: Maybe<FixedSrcQueryString_4>;
  srcSet?: Maybe<FixedSrcSetQueryString_4>;
  srcWebp?: Maybe<FixedSrcWebpQueryString_4>;
  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_4>;
};

export type FixedWidthQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FixedWidthQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FluidAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FluidAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FluidBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSizesQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSizesQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcSetQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcSetQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcSetWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcSetWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidTypeName_3 = {
  base64?: Maybe<FluidBase64QueryString_3>;
  tracedSVG?: Maybe<FluidTracedSvgQueryString_3>;
  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_3>;
  src?: Maybe<FluidSrcQueryString_3>;
  srcSet?: Maybe<FluidSrcSetQueryString_3>;
  srcWebp?: Maybe<FluidSrcWebpQueryString_3>;
  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_3>;
  sizes?: Maybe<FluidSizesQueryString_3>;
};

export type FluidTypeName_4 = {
  base64?: Maybe<FluidBase64QueryString_4>;
  tracedSVG?: Maybe<FluidTracedSvgQueryString_4>;
  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_4>;
  src?: Maybe<FluidSrcQueryString_4>;
  srcSet?: Maybe<FluidSrcSetQueryString_4>;
  srcWebp?: Maybe<FluidSrcWebpQueryString_4>;
  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_4>;
  sizes?: Maybe<FluidSizesQueryString_4>;
};

export type Image_2 = {
  __typename?: 'image_2';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export enum ImageResizingBehavior {
  NO_CHANGE = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  PAD = 'PAD',
  /** Crop a part of the original image to match the specified size. */
  CROP = 'CROP',
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   **/
  FILL = 'FILL',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  THUMB = 'THUMB',
  /** Scale the image regardless of the original aspect ratio. */
  SCALE = 'SCALE',
}

export type Internal_10 = {
  __typename?: 'internal_10';
  type?: Maybe<Scalars['String']>;
  contentDigest?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_11 = {
  __typename?: 'internal_11';
  type?: Maybe<Scalars['String']>;
  contentDigest?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_12 = {
  __typename?: 'internal_12';
  contentDigest?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_7 = {
  __typename?: 'internal_7';
  type?: Maybe<Scalars['String']>;
  contentDigest?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_8 = {
  __typename?: 'internal_8';
  contentDigest?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_9 = {
  __typename?: 'internal_9';
  type?: Maybe<Scalars['String']>;
  contentDigest?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

/** An object with an id, parent, and children */
export type Node = {
  /** The id of the node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
};

export type PackageJson_2 = {
  __typename?: 'packageJson_2';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<Dependencies_2>>>;
  devDependencies?: Maybe<Array<Maybe<DevDependencies_2>>>;
  peerDependencies?: Maybe<Array<Maybe<PeerDependencies_2>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating, are there more items? */
  hasNextPage: Scalars['Boolean'];
};

export type PeerDependencies_2 = {
  __typename?: 'peerDependencies_2';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type PluginOptions_2 = {
  __typename?: 'pluginOptions_2';
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  includePaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  /** Connection to all SitePage nodes */
  allSitePage?: Maybe<SitePageConnection>;
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: Maybe<SitePluginConnection>;
  /** Connection to all ContentfulContentType nodes */
  allContentfulContentType?: Maybe<ContentfulContentTypeConnection>;
  /** Connection to all ContentfulArticle nodes */
  allContentfulArticle?: Maybe<ContentfulArticleConnection>;
  /** Connection to all ContentfulAsset nodes */
  allContentfulAsset?: Maybe<ContentfulAssetConnection>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
  site?: Maybe<Site>;
  contentfulContentType?: Maybe<ContentfulContentType>;
  contentfulArticle?: Maybe<ContentfulArticle>;
  contentfulAsset?: Maybe<ContentfulAsset>;
};

export type QueryAllSitePageArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitePageConnectionSort>;
  filter?: Maybe<FilterSitePage>;
};

export type QueryAllSitePluginArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitePluginConnectionSort>;
  filter?: Maybe<FilterSitePlugin>;
};

export type QueryAllContentfulContentTypeArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ContentfulContentTypeConnectionSort>;
  filter?: Maybe<FilterContentfulContentType>;
};

export type QueryAllContentfulArticleArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ContentfulArticleConnectionSort>;
  filter?: Maybe<FilterContentfulArticle>;
};

export type QueryAllContentfulAssetArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ContentfulAssetConnectionSort>;
  filter?: Maybe<FilterContentfulAsset>;
};

export type QuerySitePageArgs = {
  jsonName?: Maybe<SitePageJsonNameQueryString>;
  internalComponentName?: Maybe<SitePageInternalComponentNameQueryString>;
  path?: Maybe<SitePagePathQueryString_2>;
  component?: Maybe<SitePageComponentQueryString>;
  componentChunkName?: Maybe<SitePageComponentChunkNameQueryString>;
  pluginCreator?: Maybe<SitePagePluginCreatorInputObject>;
  pluginCreatorId?: Maybe<SitePagePluginCreatorIdQueryString_2>;
  componentPath?: Maybe<SitePageComponentPathQueryString>;
  id?: Maybe<SitePageIdQueryString_2>;
  internal?: Maybe<SitePageInternalInputObject_2>;
};

export type QuerySitePluginArgs = {
  resolve?: Maybe<SitePluginResolveQueryString_2>;
  id?: Maybe<SitePluginIdQueryString_2>;
  name?: Maybe<SitePluginNameQueryString_2>;
  version?: Maybe<SitePluginVersionQueryString_2>;
  pluginOptions?: Maybe<SitePluginPluginOptionsInputObject_2>;
  nodeAPIs?: Maybe<SitePluginNodeApIsQueryList_2>;
  browserAPIs?: Maybe<SitePluginBrowserApIsQueryList_2>;
  ssrAPIs?: Maybe<SitePluginSsrApIsQueryList_2>;
  pluginFilepath?: Maybe<SitePluginPluginFilepathQueryString_2>;
  packageJson?: Maybe<SitePluginPackageJsonInputObject_2>;
  internal?: Maybe<SitePluginInternalInputObject_2>;
};

export type QuerySiteArgs = {
  siteMetadata?: Maybe<SiteSiteMetadataInputObject_2>;
  port?: Maybe<SitePortQueryString_2>;
  host?: Maybe<SiteHostQueryString_2>;
  pathPrefix?: Maybe<SitePathPrefixQueryString_2>;
  polyfill?: Maybe<SitePolyfillQueryBoolean_2>;
  buildTime?: Maybe<SiteBuildTimeQueryString_2>;
  id?: Maybe<SiteIdQueryString_2>;
  internal?: Maybe<SiteInternalInputObject_2>;
};

export type QueryContentfulContentTypeArgs = {
  id?: Maybe<ContentfulContentTypeIdQueryString_2>;
  name?: Maybe<ContentfulContentTypeNameQueryString_2>;
  displayField?: Maybe<ContentfulContentTypeDisplayFieldQueryString_2>;
  description?: Maybe<ContentfulContentTypeDescriptionQueryString_2>;
  internal?: Maybe<ContentfulContentTypeInternalInputObject_2>;
};

export type QueryContentfulArticleArgs = {
  title?: Maybe<ContentfulArticleTitleQueryString_2>;
  slug?: Maybe<ContentfulArticleSlugQueryString_2>;
  image?: Maybe<ContentfulArticleImageInputObject_2>;
  id?: Maybe<ContentfulArticleIdQueryString_2>;
  contentful_id?: Maybe<ContentfulArticleContentfulIdQueryString_2>;
  createdAt?: Maybe<ContentfulArticleCreatedAtQueryString_2>;
  updatedAt?: Maybe<ContentfulArticleUpdatedAtQueryString_2>;
  internal?: Maybe<ContentfulArticleInternalInputObject_2>;
  node_locale?: Maybe<ContentfulArticleNodeLocaleQueryString_2>;
};

export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<ContentfulAssetContentfulIdQueryString_2>;
  id?: Maybe<ContentfulAssetIdQueryString_2>;
  file?: Maybe<ContentfulAssetFileInputObject_2>;
  title?: Maybe<ContentfulAssetTitleQueryString_2>;
  description?: Maybe<ContentfulAssetDescriptionQueryString_2>;
  node_locale?: Maybe<ContentfulAssetNodeLocaleQueryString_2>;
  internal?: Maybe<ContentfulAssetInternalInputObject_2>;
  fixed?: Maybe<FixedTypeName_3>;
  resolutions?: Maybe<ResolutionsTypeName_3>;
  fluid?: Maybe<FluidTypeName_3>;
  sizes?: Maybe<SizesTypeName_3>;
  resize?: Maybe<ResizeTypeName_3>;
};

export type ResizeAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResizeAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResizeBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResizeBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResizeHeightQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ResizeHeightQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ResizeSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResizeSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResizeTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResizeTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResizeTypeName_3 = {
  base64?: Maybe<ResizeBase64QueryString_3>;
  tracedSVG?: Maybe<ResizeTracedSvgQueryString_3>;
  src?: Maybe<ResizeSrcQueryString_3>;
  width?: Maybe<ResizeWidthQueryInt_3>;
  height?: Maybe<ResizeHeightQueryInt_3>;
  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_3>;
};

export type ResizeTypeName_4 = {
  base64?: Maybe<ResizeBase64QueryString_4>;
  tracedSVG?: Maybe<ResizeTracedSvgQueryString_4>;
  src?: Maybe<ResizeSrcQueryString_4>;
  width?: Maybe<ResizeWidthQueryInt_4>;
  height?: Maybe<ResizeHeightQueryInt_4>;
  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_4>;
};

export type ResizeWidthQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ResizeWidthQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ResolutionsAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResolutionsAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResolutionsBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsHeightQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResolutionsHeightQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResolutionsSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcSetQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcSetQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcSetWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcSetWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsTypeName_3 = {
  base64?: Maybe<ResolutionsBase64QueryString_3>;
  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_3>;
  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_3>;
  width?: Maybe<ResolutionsWidthQueryFloat_3>;
  height?: Maybe<ResolutionsHeightQueryFloat_3>;
  src?: Maybe<ResolutionsSrcQueryString_3>;
  srcSet?: Maybe<ResolutionsSrcSetQueryString_3>;
  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_3>;
  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_3>;
};

export type ResolutionsTypeName_4 = {
  base64?: Maybe<ResolutionsBase64QueryString_4>;
  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_4>;
  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_4>;
  width?: Maybe<ResolutionsWidthQueryFloat_4>;
  height?: Maybe<ResolutionsHeightQueryFloat_4>;
  src?: Maybe<ResolutionsSrcQueryString_4>;
  srcSet?: Maybe<ResolutionsSrcSetQueryString_4>;
  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_4>;
  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_4>;
};

export type ResolutionsWidthQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResolutionsWidthQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

/** Node of type Site */
export type Site = Node & {
  __typename?: 'Site';
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  siteMetadata?: Maybe<SiteMetadata_2>;
  port?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  buildTime?: Maybe<Scalars['Date']>;
  internal?: Maybe<Internal_12>;
};

/** Node of type Site */
export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Site */
export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteHostQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteInternalInputObject_2 = {
  contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>;
  type?: Maybe<SiteInternalTypeQueryString_2>;
  owner?: Maybe<SiteInternalOwnerQueryString_2>;
};

export type SiteInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteMetadata_2 = {
  __typename?: 'siteMetadata_2';
  title?: Maybe<Scalars['String']>;
};

/** Node of type SitePage */
export type SitePage = Node & {
  __typename?: 'SitePage';
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  jsonName?: Maybe<Scalars['String']>;
  internalComponentName?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  componentChunkName?: Maybe<Scalars['String']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  internal?: Maybe<Internal_7>;
};

export type SitePageComponentChunkNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageComponentPathQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageComponentQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A connection to a list of items. */
export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SitePageEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>;
  group?: Maybe<Array<Maybe<SitePageGroupConnectionConnection>>>;
};

/** A connection to a list of items. */
export type SitePageConnectionDistinctArgs = {
  field?: Maybe<SitePageDistinctEnum>;
};

/** A connection to a list of items. */
export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field?: Maybe<SitePageGroupEnum>;
};

export type SitePageConnectionComponentChunkNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionComponentPathQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionComponentQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionInternalComponentNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionInternalDescriptionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionInternalInputObject_2 = {
  type?: Maybe<SitePageConnectionInternalTypeQueryString_2>;
  contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>;
  description?: Maybe<SitePageConnectionInternalDescriptionQueryString>;
  owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>;
};

export type SitePageConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionJsonNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorBrowserApIsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorIdQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorInputObject = {
  resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>;
  id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>;
  name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>;
  version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>;
  pluginOptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsInputObject
  >;
  nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>;
  browserAPIs?: Maybe<SitePageConnectionPluginCreatorBrowserApIsQueryList>;
  ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>;
  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginFilepathQueryString
  >;
  packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>;
  parent?: Maybe<SitePageConnectionPluginCreatorParentQueryString>;
  internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>;
};

export type SitePageConnectionPluginCreatorInternalContentDigestQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorInternalInputObject = {
  contentDigest?: Maybe<
    SitePageConnectionPluginCreatorInternalContentDigestQueryString
  >;
  type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>;
  owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>;
};

export type SitePageConnectionPluginCreatorInternalOwnerQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorInternalTypeQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorNodeApIsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject = {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString
  >;
  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString
  >;
};

export type SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList = {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject
  >;
};

export type SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject = {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString
  >;
  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
};

export type SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList = {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject
  >;
};

export type SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonInputObject = {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>;
  description?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString
  >;
  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonVersionQueryString>;
  main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>;
  license?: Maybe<SitePageConnectionPluginCreatorPackageJsonLicenseQueryString>;
  dependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList
  >;
  devDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList
  >;
  peerDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList
  >;
  keywords?: Maybe<SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList>;
};

export type SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonLicenseQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonMainQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject = {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString
  >;
  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
};

export type SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList = {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject
  >;
};

export type SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorParentQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginFilepathQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsEnvironmentQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsHostQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsIconQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsIncludePathsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsInputObject = {
  name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsNameQueryString>;
  short_name?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString
  >;
  start_url?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString
  >;
  background_color?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString
  >;
  theme_color?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString
  >;
  display?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString
  >;
  icon?: Maybe<SitePageConnectionPluginCreatorPluginOptionsIconQueryString>;
  spaceId?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsSpaceIdQueryString
  >;
  accessToken?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString
  >;
  host?: Maybe<SitePageConnectionPluginCreatorPluginOptionsHostQueryString>;
  environment?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvironmentQueryString
  >;
  includePaths?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsIncludePathsQueryList
  >;
  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>;
  pathCheck?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean
  >;
};

export type SitePageConnectionPluginCreatorPluginOptionsNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsPathQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsSpaceIdQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorResolveQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorSsrApIsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionSort = {
  fields: Array<Maybe<SitePageConnectionSortByFieldsEnum>>;
  order?: Maybe<SitePageConnectionSortOrderValues>;
};

export enum SitePageConnectionSortByFieldsEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePageDistinctEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

/** An edge in a connection. */
export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  /** The item at the end of the edge */
  node?: Maybe<SitePage>;
  /** The next edge in the connection */
  next?: Maybe<SitePage>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>;
};

/** A connection to a list of items. */
export type SitePageGroupConnectionConnection = {
  __typename?: 'sitePageGroupConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SitePageGroupConnectionEdge>>>;
  field?: Maybe<Scalars['String']>;
  fieldValue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type SitePageGroupConnectionEdge = {
  __typename?: 'sitePageGroupConnectionEdge';
  /** The item at the end of the edge */
  node?: Maybe<SitePage>;
  /** The next edge in the connection */
  next?: Maybe<SitePage>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>;
};

export enum SitePageGroupEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export type SitePageIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageInternalComponentNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageInternalDescriptionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageInternalInputObject_2 = {
  type?: Maybe<SitePageInternalTypeQueryString_2>;
  contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>;
  description?: Maybe<SitePageInternalDescriptionQueryString>;
  owner?: Maybe<SitePageInternalOwnerQueryString_2>;
};

export type SitePageInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageJsonNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorBrowserApIsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorIdQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorInputObject = {
  resolve?: Maybe<SitePagePluginCreatorResolveQueryString>;
  id?: Maybe<SitePagePluginCreatorIdQueryString>;
  name?: Maybe<SitePagePluginCreatorNameQueryString>;
  version?: Maybe<SitePagePluginCreatorVersionQueryString>;
  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>;
  nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>;
  browserAPIs?: Maybe<SitePagePluginCreatorBrowserApIsQueryList>;
  ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>;
  pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>;
  packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>;
  parent?: Maybe<SitePagePluginCreatorParentQueryString>;
  internal?: Maybe<SitePagePluginCreatorInternalInputObject>;
};

export type SitePagePluginCreatorInternalContentDigestQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorInternalInputObject = {
  contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>;
  type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>;
  owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>;
};

export type SitePagePluginCreatorInternalOwnerQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorInternalTypeQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorNodeApIsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonDependenciesInputObject = {
  name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>;
  version?: Maybe<
    SitePagePluginCreatorPackageJsonDependenciesVersionQueryString
  >;
};

export type SitePagePluginCreatorPackageJsonDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonDependenciesQueryList = {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>;
};

export type SitePagePluginCreatorPackageJsonDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonDescriptionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonDevDependenciesInputObject = {
  name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>;
  version?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
};

export type SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonDevDependenciesQueryList = {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesInputObject>;
};

export type SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonInputObject = {
  name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>;
  description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>;
  version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>;
  main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>;
  license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>;
  dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>;
  devDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesQueryList
  >;
  peerDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesQueryList
  >;
  keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>;
};

export type SitePagePluginCreatorPackageJsonKeywordsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonLicenseQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonMainQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonPeerDependenciesInputObject = {
  name?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString>;
  version?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
};

export type SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonPeerDependenciesQueryList = {
  elemMatch?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesInputObject
  >;
};

export type SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorParentQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginFilepathQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsAccessTokenQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsBackgroundColorQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsDisplayQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsEnvironmentQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsHostQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsIconQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsIncludePathsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsInputObject = {
  name?: Maybe<SitePagePluginCreatorPluginOptionsNameQueryString>;
  short_name?: Maybe<SitePagePluginCreatorPluginOptionsShortNameQueryString>;
  start_url?: Maybe<SitePagePluginCreatorPluginOptionsStartUrlQueryString>;
  background_color?: Maybe<
    SitePagePluginCreatorPluginOptionsBackgroundColorQueryString
  >;
  theme_color?: Maybe<SitePagePluginCreatorPluginOptionsThemeColorQueryString>;
  display?: Maybe<SitePagePluginCreatorPluginOptionsDisplayQueryString>;
  icon?: Maybe<SitePagePluginCreatorPluginOptionsIconQueryString>;
  spaceId?: Maybe<SitePagePluginCreatorPluginOptionsSpaceIdQueryString>;
  accessToken?: Maybe<SitePagePluginCreatorPluginOptionsAccessTokenQueryString>;
  host?: Maybe<SitePagePluginCreatorPluginOptionsHostQueryString>;
  environment?: Maybe<SitePagePluginCreatorPluginOptionsEnvironmentQueryString>;
  includePaths?: Maybe<SitePagePluginCreatorPluginOptionsIncludePathsQueryList>;
  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>;
  pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>;
};

export type SitePagePluginCreatorPluginOptionsNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type SitePagePluginCreatorPluginOptionsPathQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsShortNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsSpaceIdQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsStartUrlQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsThemeColorQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorResolveQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorSsrApIsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePathPrefixQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Node of type SitePlugin */
export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<PluginOptions_2>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<PackageJson_2>;
  internal?: Maybe<Internal_8>;
};

export type SitePluginBrowserApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A connection to a list of items. */
export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SitePluginEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>;
  group?: Maybe<Array<Maybe<SitePluginGroupConnectionConnection>>>;
};

/** A connection to a list of items. */
export type SitePluginConnectionDistinctArgs = {
  field?: Maybe<SitePluginDistinctEnum>;
};

/** A connection to a list of items. */
export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field?: Maybe<SitePluginGroupEnum>;
};

export type SitePluginConnectionBrowserApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionInternalInputObject_2 = {
  contentDigest?: Maybe<SitePluginConnectionInternalContentDigestQueryString_2>;
  type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>;
  owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>;
};

export type SitePluginConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionNodeApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonDependenciesInputObject_2 = {
  name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>;
  version?: Maybe<
    SitePluginConnectionPackageJsonDependenciesVersionQueryString_2
  >;
};

export type SitePluginConnectionPackageJsonDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>;
};

export type SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonDevDependenciesInputObject_2 = {
  name?: Maybe<SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2>;
  version?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2
  >;
};

export type SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonDevDependenciesQueryList_2 = {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesInputObject_2
  >;
};

export type SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonInputObject_2 = {
  name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>;
  description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>;
  version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>;
  main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>;
  license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>;
  dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>;
  devDependencies?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesQueryList_2
  >;
  peerDependencies?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesQueryList_2
  >;
  keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>;
};

export type SitePluginConnectionPackageJsonKeywordsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonLicenseQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonMainQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 = {
  name?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2
  >;
  version?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2
  >;
};

export type SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 = {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesInputObject_2
  >;
};

export type SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginFilepathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsAccessTokenQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsDisplayQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsEnvironmentQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsHostQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsIconQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsIncludePathsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsInputObject_2 = {
  name?: Maybe<SitePluginConnectionPluginOptionsNameQueryString_2>;
  short_name?: Maybe<SitePluginConnectionPluginOptionsShortNameQueryString_2>;
  start_url?: Maybe<SitePluginConnectionPluginOptionsStartUrlQueryString_2>;
  background_color?: Maybe<
    SitePluginConnectionPluginOptionsBackgroundColorQueryString_2
  >;
  theme_color?: Maybe<SitePluginConnectionPluginOptionsThemeColorQueryString_2>;
  display?: Maybe<SitePluginConnectionPluginOptionsDisplayQueryString_2>;
  icon?: Maybe<SitePluginConnectionPluginOptionsIconQueryString_2>;
  spaceId?: Maybe<SitePluginConnectionPluginOptionsSpaceIdQueryString_2>;
  accessToken?: Maybe<
    SitePluginConnectionPluginOptionsAccessTokenQueryString_2
  >;
  host?: Maybe<SitePluginConnectionPluginOptionsHostQueryString_2>;
  environment?: Maybe<
    SitePluginConnectionPluginOptionsEnvironmentQueryString_2
  >;
  includePaths?: Maybe<
    SitePluginConnectionPluginOptionsIncludePathsQueryList_2
  >;
  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>;
  pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>;
};

export type SitePluginConnectionPluginOptionsNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type SitePluginConnectionPluginOptionsPathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsShortNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsSpaceIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsStartUrlQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsThemeColorQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionResolveQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionSort = {
  fields: Array<Maybe<SitePluginConnectionSortByFieldsEnum>>;
  order?: Maybe<SitePluginConnectionSortOrderValues>;
};

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___spaceId = 'pluginOptions___spaceId',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___host = 'pluginOptions___host',
  pluginOptions___environment = 'pluginOptions___environment',
  pluginOptions___includePaths = 'pluginOptions___includePaths',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type SitePluginConnectionSsrApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum SitePluginDistinctEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___spaceId = 'pluginOptions___spaceId',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___host = 'pluginOptions___host',
  pluginOptions___environment = 'pluginOptions___environment',
  pluginOptions___includePaths = 'pluginOptions___includePaths',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

/** An edge in a connection. */
export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>;
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>;
};

/** A connection to a list of items. */
export type SitePluginGroupConnectionConnection = {
  __typename?: 'sitePluginGroupConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SitePluginGroupConnectionEdge>>>;
  field?: Maybe<Scalars['String']>;
  fieldValue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type SitePluginGroupConnectionEdge = {
  __typename?: 'sitePluginGroupConnectionEdge';
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>;
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginGroupEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___spaceId = 'pluginOptions___spaceId',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___host = 'pluginOptions___host',
  pluginOptions___environment = 'pluginOptions___environment',
  pluginOptions___includePaths = 'pluginOptions___includePaths',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export type SitePluginIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginInternalInputObject_2 = {
  contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>;
  type?: Maybe<SitePluginInternalTypeQueryString_2>;
  owner?: Maybe<SitePluginInternalOwnerQueryString_2>;
};

export type SitePluginInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginNodeApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependenciesInputObject_2 = {
  name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>;
  version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>;
};

export type SitePluginPackageJsonDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>;
};

export type SitePluginPackageJsonDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDevDependenciesInputObject_2 = {
  name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>;
  version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>;
};

export type SitePluginPackageJsonDevDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDevDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>;
};

export type SitePluginPackageJsonDevDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonInputObject_2 = {
  name?: Maybe<SitePluginPackageJsonNameQueryString_2>;
  description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>;
  version?: Maybe<SitePluginPackageJsonVersionQueryString_2>;
  main?: Maybe<SitePluginPackageJsonMainQueryString_2>;
  license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>;
  keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>;
};

export type SitePluginPackageJsonKeywordsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonLicenseQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonMainQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonPeerDependenciesInputObject_2 = {
  name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>;
  version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>;
};

export type SitePluginPackageJsonPeerDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonPeerDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>;
};

export type SitePluginPackageJsonPeerDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginFilepathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsAccessTokenQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsBackgroundColorQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsDisplayQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsEnvironmentQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsHostQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsIconQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsIncludePathsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsInputObject_2 = {
  name?: Maybe<SitePluginPluginOptionsNameQueryString_2>;
  short_name?: Maybe<SitePluginPluginOptionsShortNameQueryString_2>;
  start_url?: Maybe<SitePluginPluginOptionsStartUrlQueryString_2>;
  background_color?: Maybe<SitePluginPluginOptionsBackgroundColorQueryString_2>;
  theme_color?: Maybe<SitePluginPluginOptionsThemeColorQueryString_2>;
  display?: Maybe<SitePluginPluginOptionsDisplayQueryString_2>;
  icon?: Maybe<SitePluginPluginOptionsIconQueryString_2>;
  spaceId?: Maybe<SitePluginPluginOptionsSpaceIdQueryString_2>;
  accessToken?: Maybe<SitePluginPluginOptionsAccessTokenQueryString_2>;
  host?: Maybe<SitePluginPluginOptionsHostQueryString_2>;
  environment?: Maybe<SitePluginPluginOptionsEnvironmentQueryString_2>;
  includePaths?: Maybe<SitePluginPluginOptionsIncludePathsQueryList_2>;
  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>;
  pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>;
};

export type SitePluginPluginOptionsNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsPathCheckQueryBoolean_2 = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type SitePluginPluginOptionsPathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsShortNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsSpaceIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsStartUrlQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsThemeColorQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginResolveQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginSsrApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePolyfillQueryBoolean_2 = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type SitePortQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteSiteMetadataInputObject_2 = {
  title?: Maybe<SiteSiteMetadataTitleQueryString_2>;
};

export type SiteSiteMetadataTitleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type SizesAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type SizesBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSizesQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSizesQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcSetQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcSetQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcSetWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcSetWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesTypeName_3 = {
  base64?: Maybe<SizesBase64QueryString_3>;
  tracedSVG?: Maybe<SizesTracedSvgQueryString_3>;
  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_3>;
  src?: Maybe<SizesSrcQueryString_3>;
  srcSet?: Maybe<SizesSrcSetQueryString_3>;
  srcWebp?: Maybe<SizesSrcWebpQueryString_3>;
  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_3>;
  sizes?: Maybe<SizesSizesQueryString_3>;
};

export type SizesTypeName_4 = {
  base64?: Maybe<SizesBase64QueryString_4>;
  tracedSVG?: Maybe<SizesTracedSvgQueryString_4>;
  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_4>;
  src?: Maybe<SizesSrcQueryString_4>;
  srcSet?: Maybe<SizesSrcSetQueryString_4>;
  srcWebp?: Maybe<SizesSrcWebpQueryString_4>;
  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_4>;
  sizes?: Maybe<SizesSizesQueryString_4>;
};

export type GatsbyContentfulFixedFragment = {
  __typename?: 'ContentfulFixed';
} & Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = {
  __typename?: 'ContentfulFixed';
} & Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = {
  __typename?: 'ContentfulFixed';
} & Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = {
  __typename?: 'ContentfulFixed';
} & Pick<
  ContentfulFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'ContentfulFixed';
} & Pick<
  ContentfulFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyContentfulFluidFragment = {
  __typename?: 'ContentfulFluid';
} & Pick<
  ContentfulFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyContentfulFluid_TracedSvgFragment = {
  __typename?: 'ContentfulFluid';
} & Pick<
  ContentfulFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyContentfulFluid_NoBase64Fragment = {
  __typename?: 'ContentfulFluid';
} & Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = {
  __typename?: 'ContentfulFluid';
} & Pick<
  ContentfulFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'ContentfulFluid';
} & Pick<
  ContentfulFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyContentfulResolutionsFragment = {
  __typename?: 'ContentfulResolutions';
} & Pick<
  ContentfulResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyContentfulResolutions_TracedSvgFragment = {
  __typename?: 'ContentfulResolutions';
} & Pick<
  ContentfulResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyContentfulResolutions_NoBase64Fragment = {
  __typename?: 'ContentfulResolutions';
} & Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = {
  __typename?: 'ContentfulResolutions';
} & Pick<
  ContentfulResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = {
  __typename?: 'ContentfulResolutions';
} & Pick<
  ContentfulResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyContentfulSizesFragment = {
  __typename?: 'ContentfulSizes';
} & Pick<
  ContentfulSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyContentfulSizes_TracedSvgFragment = {
  __typename?: 'ContentfulSizes';
} & Pick<
  ContentfulSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyContentfulSizes_NoBase64Fragment = {
  __typename?: 'ContentfulSizes';
} & Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = {
  __typename?: 'ContentfulSizes';
} & Pick<
  ContentfulSizes,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = {
  __typename?: 'ContentfulSizes';
} & Pick<
  ContentfulSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type SiteTitleQueryVariables = {};

export type SiteTitleQuery = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<
        { __typename?: 'siteMetadata_2' } & Pick<SiteMetadata_2, 'title'>
      >;
    }
  >;
};
