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
  internal?: Maybe<Internal_14>;
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
  internal?: Maybe<Internal_15>;
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
  internal?: Maybe<Internal_13>;
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

/** Node of type Directory */
export type Directory = Node & {
  __typename?: 'Directory';
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  internal?: Maybe<Internal_11>;
  sourceInstanceName?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  blksize?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
};

/** Node of type Directory */
export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAbsolutePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryAccessTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryAtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryAtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryBaseQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryBirthtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryBirthtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryBirthTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryBlksizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryBlocksQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryChangeTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A connection to a list of items. */
export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DirectoryEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>;
  group?: Maybe<Array<Maybe<DirectoryGroupConnectionConnection>>>;
};

/** A connection to a list of items. */
export type DirectoryConnectionDistinctArgs = {
  field?: Maybe<DirectoryDistinctEnum>;
};

/** A connection to a list of items. */
export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field?: Maybe<DirectoryGroupEnum>;
};

export type DirectoryConnectionAbsolutePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionAccessTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionAtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryConnectionAtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionBaseQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionBirthtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryConnectionBirthtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionBirthTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionBlksizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionBlocksQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionChangeTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionCtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryConnectionCtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionDevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionDirQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionExtensionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionExtQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionGidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionInoQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionInternalDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionInternalInputObject_2 = {
  contentDigest?: Maybe<DirectoryConnectionInternalContentDigestQueryString_2>;
  type?: Maybe<DirectoryConnectionInternalTypeQueryString_2>;
  description?: Maybe<DirectoryConnectionInternalDescriptionQueryString_2>;
  owner?: Maybe<DirectoryConnectionInternalOwnerQueryString_2>;
};

export type DirectoryConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionModeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionModifiedTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionMtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryConnectionMtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionNlinkQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionPrettySizeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionRdevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionRelativeDirectoryQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionRelativePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionRootQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionSort = {
  fields: Array<Maybe<DirectoryConnectionSortByFieldsEnum>>;
  order?: Maybe<DirectoryConnectionSortOrderValues>;
};

export enum DirectoryConnectionSortByFieldsEnum {
  id = 'id',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum DirectoryConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type DirectoryConnectionSourceInstanceNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionUidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryCtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryCtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryDevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryDirQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum DirectoryDistinctEnum {
  id = 'id',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

/** An edge in a connection. */
export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  /** The item at the end of the edge */
  node?: Maybe<Directory>;
  /** The next edge in the connection */
  next?: Maybe<Directory>;
  /** The previous edge in the connection */
  previous?: Maybe<Directory>;
};

export type DirectoryExtensionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryExtQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryGidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** A connection to a list of items. */
export type DirectoryGroupConnectionConnection = {
  __typename?: 'directoryGroupConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DirectoryGroupConnectionEdge>>>;
  field?: Maybe<Scalars['String']>;
  fieldValue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type DirectoryGroupConnectionEdge = {
  __typename?: 'directoryGroupConnectionEdge';
  /** The item at the end of the edge */
  node?: Maybe<Directory>;
  /** The next edge in the connection */
  next?: Maybe<Directory>;
  /** The previous edge in the connection */
  previous?: Maybe<Directory>;
};

export enum DirectoryGroupEnum {
  id = 'id',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export type DirectoryIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryInoQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryInternalDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryInternalInputObject_2 = {
  contentDigest?: Maybe<DirectoryInternalContentDigestQueryString_2>;
  type?: Maybe<DirectoryInternalTypeQueryString_2>;
  description?: Maybe<DirectoryInternalDescriptionQueryString_2>;
  owner?: Maybe<DirectoryInternalOwnerQueryString_2>;
};

export type DirectoryInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryModeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryModifiedTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryMtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryMtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryNlinkQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryPrettySizeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryRdevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryRelativeDirectoryQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryRelativePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryRootQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectorySizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectorySourceInstanceNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryUidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** Node of type File */
export type File = Node & {
  __typename?: 'File';
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  internal?: Maybe<Internal_12>;
  sourceInstanceName?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  blksize?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type File_2 = {
  __typename?: 'file_2';
  url?: Maybe<Scalars['String']>;
  details?: Maybe<Details_2>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type FileAbsolutePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileAccessTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileAtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileAtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileBaseQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileBirthtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileBirthtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileBirthTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileBlksizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileBlocksQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileChangeTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A connection to a list of items. */
export type FileConnection = {
  __typename?: 'FileConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FileEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>;
  group?: Maybe<Array<Maybe<FileGroupConnectionConnection>>>;
};

/** A connection to a list of items. */
export type FileConnectionDistinctArgs = {
  field?: Maybe<FileDistinctEnum>;
};

/** A connection to a list of items. */
export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field?: Maybe<FileGroupEnum>;
};

export type FileConnectionAbsolutePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionAccessTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionAtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileConnectionAtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionBaseQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionBirthtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileConnectionBirthtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionBirthTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionBlksizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionBlocksQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionChangeTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionCtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileConnectionCtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionDevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionDirQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionExtensionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionExtQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionGidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionInoQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionInternalDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionInternalInputObject_2 = {
  contentDigest?: Maybe<FileConnectionInternalContentDigestQueryString_2>;
  type?: Maybe<FileConnectionInternalTypeQueryString_2>;
  mediaType?: Maybe<FileConnectionInternalMediaTypeQueryString_2>;
  description?: Maybe<FileConnectionInternalDescriptionQueryString_2>;
  owner?: Maybe<FileConnectionInternalOwnerQueryString_2>;
};

export type FileConnectionInternalMediaTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionModeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionModifiedTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionMtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileConnectionMtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionNlinkQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionPrettySizeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionRdevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionRelativeDirectoryQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionRelativePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionRootQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionSort = {
  fields: Array<Maybe<FileConnectionSortByFieldsEnum>>;
  order?: Maybe<FileConnectionSortOrderValues>;
};

export enum FileConnectionSortByFieldsEnum {
  id = 'id',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  publicURL = 'publicURL',
}

export enum FileConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type FileConnectionSourceInstanceNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionUidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileCtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileCtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileDevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileDirQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum FileDistinctEnum {
  id = 'id',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

/** An edge in a connection. */
export type FileEdge = {
  __typename?: 'FileEdge';
  /** The item at the end of the edge */
  node?: Maybe<File>;
  /** The next edge in the connection */
  next?: Maybe<File>;
  /** The previous edge in the connection */
  previous?: Maybe<File>;
};

export type FileExtensionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileExtQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileGidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** A connection to a list of items. */
export type FileGroupConnectionConnection = {
  __typename?: 'fileGroupConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FileGroupConnectionEdge>>>;
  field?: Maybe<Scalars['String']>;
  fieldValue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type FileGroupConnectionEdge = {
  __typename?: 'fileGroupConnectionEdge';
  /** The item at the end of the edge */
  node?: Maybe<File>;
  /** The next edge in the connection */
  next?: Maybe<File>;
  /** The previous edge in the connection */
  previous?: Maybe<File>;
};

export enum FileGroupEnum {
  id = 'id',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export type FileIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileInoQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileInternalDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileInternalInputObject_2 = {
  contentDigest?: Maybe<FileInternalContentDigestQueryString_2>;
  type?: Maybe<FileInternalTypeQueryString_2>;
  mediaType?: Maybe<FileInternalMediaTypeQueryString_2>;
  description?: Maybe<FileInternalDescriptionQueryString_2>;
  owner?: Maybe<FileInternalOwnerQueryString_2>;
};

export type FileInternalMediaTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileModeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileModifiedTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileMtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileMtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileNlinkQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FilePrettySizeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileRdevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileRelativeDirectoryQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileRelativePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileRootQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileSourceInstanceNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileUidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
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
export type FilterDirectory = {
  id?: Maybe<DirectoryConnectionIdQueryString_2>;
  internal?: Maybe<DirectoryConnectionInternalInputObject_2>;
  sourceInstanceName?: Maybe<
    DirectoryConnectionSourceInstanceNameQueryString_2
  >;
  absolutePath?: Maybe<DirectoryConnectionAbsolutePathQueryString_2>;
  relativePath?: Maybe<DirectoryConnectionRelativePathQueryString_2>;
  extension?: Maybe<DirectoryConnectionExtensionQueryString_2>;
  size?: Maybe<DirectoryConnectionSizeQueryInteger_2>;
  prettySize?: Maybe<DirectoryConnectionPrettySizeQueryString_2>;
  modifiedTime?: Maybe<DirectoryConnectionModifiedTimeQueryString_2>;
  accessTime?: Maybe<DirectoryConnectionAccessTimeQueryString_2>;
  changeTime?: Maybe<DirectoryConnectionChangeTimeQueryString_2>;
  birthTime?: Maybe<DirectoryConnectionBirthTimeQueryString_2>;
  root?: Maybe<DirectoryConnectionRootQueryString_2>;
  dir?: Maybe<DirectoryConnectionDirQueryString_2>;
  base?: Maybe<DirectoryConnectionBaseQueryString_2>;
  ext?: Maybe<DirectoryConnectionExtQueryString_2>;
  name?: Maybe<DirectoryConnectionNameQueryString_2>;
  relativeDirectory?: Maybe<DirectoryConnectionRelativeDirectoryQueryString_2>;
  dev?: Maybe<DirectoryConnectionDevQueryInteger_2>;
  mode?: Maybe<DirectoryConnectionModeQueryInteger_2>;
  nlink?: Maybe<DirectoryConnectionNlinkQueryInteger_2>;
  uid?: Maybe<DirectoryConnectionUidQueryInteger_2>;
  gid?: Maybe<DirectoryConnectionGidQueryInteger_2>;
  rdev?: Maybe<DirectoryConnectionRdevQueryInteger_2>;
  blksize?: Maybe<DirectoryConnectionBlksizeQueryInteger_2>;
  ino?: Maybe<DirectoryConnectionInoQueryInteger_2>;
  blocks?: Maybe<DirectoryConnectionBlocksQueryInteger_2>;
  atimeMs?: Maybe<DirectoryConnectionAtimeMsQueryFloat_2>;
  mtimeMs?: Maybe<DirectoryConnectionMtimeMsQueryFloat_2>;
  ctimeMs?: Maybe<DirectoryConnectionCtimeMsQueryFloat_2>;
  birthtimeMs?: Maybe<DirectoryConnectionBirthtimeMsQueryFloat_2>;
  atime?: Maybe<DirectoryConnectionAtimeQueryString_2>;
  mtime?: Maybe<DirectoryConnectionMtimeQueryString_2>;
  ctime?: Maybe<DirectoryConnectionCtimeQueryString_2>;
  birthtime?: Maybe<DirectoryConnectionBirthtimeQueryString_2>;
};

/** Filter connection on its fields */
export type FilterFile = {
  id?: Maybe<FileConnectionIdQueryString_2>;
  internal?: Maybe<FileConnectionInternalInputObject_2>;
  sourceInstanceName?: Maybe<FileConnectionSourceInstanceNameQueryString_2>;
  absolutePath?: Maybe<FileConnectionAbsolutePathQueryString_2>;
  relativePath?: Maybe<FileConnectionRelativePathQueryString_2>;
  extension?: Maybe<FileConnectionExtensionQueryString_2>;
  size?: Maybe<FileConnectionSizeQueryInteger_2>;
  prettySize?: Maybe<FileConnectionPrettySizeQueryString_2>;
  modifiedTime?: Maybe<FileConnectionModifiedTimeQueryString_2>;
  accessTime?: Maybe<FileConnectionAccessTimeQueryString_2>;
  changeTime?: Maybe<FileConnectionChangeTimeQueryString_2>;
  birthTime?: Maybe<FileConnectionBirthTimeQueryString_2>;
  root?: Maybe<FileConnectionRootQueryString_2>;
  dir?: Maybe<FileConnectionDirQueryString_2>;
  base?: Maybe<FileConnectionBaseQueryString_2>;
  ext?: Maybe<FileConnectionExtQueryString_2>;
  name?: Maybe<FileConnectionNameQueryString_2>;
  relativeDirectory?: Maybe<FileConnectionRelativeDirectoryQueryString_2>;
  dev?: Maybe<FileConnectionDevQueryInteger_2>;
  mode?: Maybe<FileConnectionModeQueryInteger_2>;
  nlink?: Maybe<FileConnectionNlinkQueryInteger_2>;
  uid?: Maybe<FileConnectionUidQueryInteger_2>;
  gid?: Maybe<FileConnectionGidQueryInteger_2>;
  rdev?: Maybe<FileConnectionRdevQueryInteger_2>;
  blksize?: Maybe<FileConnectionBlksizeQueryInteger_2>;
  ino?: Maybe<FileConnectionInoQueryInteger_2>;
  blocks?: Maybe<FileConnectionBlocksQueryInteger_2>;
  atimeMs?: Maybe<FileConnectionAtimeMsQueryFloat_2>;
  mtimeMs?: Maybe<FileConnectionMtimeMsQueryFloat_2>;
  ctimeMs?: Maybe<FileConnectionCtimeMsQueryFloat_2>;
  birthtimeMs?: Maybe<FileConnectionBirthtimeMsQueryFloat_2>;
  atime?: Maybe<FileConnectionAtimeQueryString_2>;
  mtime?: Maybe<FileConnectionMtimeQueryString_2>;
  ctime?: Maybe<FileConnectionCtimeQueryString_2>;
  birthtime?: Maybe<FileConnectionBirthtimeQueryString_2>;
  publicURL?: Maybe<PublicUrlQueryString_4>;
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
  contentDigest?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_11 = {
  __typename?: 'internal_11';
  contentDigest?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_12 = {
  __typename?: 'internal_12';
  contentDigest?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  mediaType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_13 = {
  __typename?: 'internal_13';
  type?: Maybe<Scalars['String']>;
  contentDigest?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_14 = {
  __typename?: 'internal_14';
  type?: Maybe<Scalars['String']>;
  contentDigest?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_15 = {
  __typename?: 'internal_15';
  type?: Maybe<Scalars['String']>;
  contentDigest?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_16 = {
  __typename?: 'internal_16';
  contentDigest?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_9 = {
  __typename?: 'internal_9';
  type?: Maybe<Scalars['String']>;
  contentDigest?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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
  path?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  includePaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type PublicUrlQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PublicUrlQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Connection to all SitePage nodes */
  allSitePage?: Maybe<SitePageConnection>;
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: Maybe<SitePluginConnection>;
  /** Connection to all Directory nodes */
  allDirectory?: Maybe<DirectoryConnection>;
  /** Connection to all File nodes */
  allFile?: Maybe<FileConnection>;
  /** Connection to all ContentfulContentType nodes */
  allContentfulContentType?: Maybe<ContentfulContentTypeConnection>;
  /** Connection to all ContentfulArticle nodes */
  allContentfulArticle?: Maybe<ContentfulArticleConnection>;
  /** Connection to all ContentfulAsset nodes */
  allContentfulAsset?: Maybe<ContentfulAssetConnection>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
  site?: Maybe<Site>;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
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

export type QueryAllDirectoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<DirectoryConnectionSort>;
  filter?: Maybe<FilterDirectory>;
};

export type QueryAllFileArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileConnectionSort>;
  filter?: Maybe<FilterFile>;
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

export type QueryDirectoryArgs = {
  id?: Maybe<DirectoryIdQueryString_2>;
  internal?: Maybe<DirectoryInternalInputObject_2>;
  sourceInstanceName?: Maybe<DirectorySourceInstanceNameQueryString_2>;
  absolutePath?: Maybe<DirectoryAbsolutePathQueryString_2>;
  relativePath?: Maybe<DirectoryRelativePathQueryString_2>;
  extension?: Maybe<DirectoryExtensionQueryString_2>;
  size?: Maybe<DirectorySizeQueryInteger_2>;
  prettySize?: Maybe<DirectoryPrettySizeQueryString_2>;
  modifiedTime?: Maybe<DirectoryModifiedTimeQueryString_2>;
  accessTime?: Maybe<DirectoryAccessTimeQueryString_2>;
  changeTime?: Maybe<DirectoryChangeTimeQueryString_2>;
  birthTime?: Maybe<DirectoryBirthTimeQueryString_2>;
  root?: Maybe<DirectoryRootQueryString_2>;
  dir?: Maybe<DirectoryDirQueryString_2>;
  base?: Maybe<DirectoryBaseQueryString_2>;
  ext?: Maybe<DirectoryExtQueryString_2>;
  name?: Maybe<DirectoryNameQueryString_2>;
  relativeDirectory?: Maybe<DirectoryRelativeDirectoryQueryString_2>;
  dev?: Maybe<DirectoryDevQueryInteger_2>;
  mode?: Maybe<DirectoryModeQueryInteger_2>;
  nlink?: Maybe<DirectoryNlinkQueryInteger_2>;
  uid?: Maybe<DirectoryUidQueryInteger_2>;
  gid?: Maybe<DirectoryGidQueryInteger_2>;
  rdev?: Maybe<DirectoryRdevQueryInteger_2>;
  blksize?: Maybe<DirectoryBlksizeQueryInteger_2>;
  ino?: Maybe<DirectoryInoQueryInteger_2>;
  blocks?: Maybe<DirectoryBlocksQueryInteger_2>;
  atimeMs?: Maybe<DirectoryAtimeMsQueryFloat_2>;
  mtimeMs?: Maybe<DirectoryMtimeMsQueryFloat_2>;
  ctimeMs?: Maybe<DirectoryCtimeMsQueryFloat_2>;
  birthtimeMs?: Maybe<DirectoryBirthtimeMsQueryFloat_2>;
  atime?: Maybe<DirectoryAtimeQueryString_2>;
  mtime?: Maybe<DirectoryMtimeQueryString_2>;
  ctime?: Maybe<DirectoryCtimeQueryString_2>;
  birthtime?: Maybe<DirectoryBirthtimeQueryString_2>;
};

export type QueryFileArgs = {
  id?: Maybe<FileIdQueryString_2>;
  internal?: Maybe<FileInternalInputObject_2>;
  sourceInstanceName?: Maybe<FileSourceInstanceNameQueryString_2>;
  absolutePath?: Maybe<FileAbsolutePathQueryString_2>;
  relativePath?: Maybe<FileRelativePathQueryString_2>;
  extension?: Maybe<FileExtensionQueryString_2>;
  size?: Maybe<FileSizeQueryInteger_2>;
  prettySize?: Maybe<FilePrettySizeQueryString_2>;
  modifiedTime?: Maybe<FileModifiedTimeQueryString_2>;
  accessTime?: Maybe<FileAccessTimeQueryString_2>;
  changeTime?: Maybe<FileChangeTimeQueryString_2>;
  birthTime?: Maybe<FileBirthTimeQueryString_2>;
  root?: Maybe<FileRootQueryString_2>;
  dir?: Maybe<FileDirQueryString_2>;
  base?: Maybe<FileBaseQueryString_2>;
  ext?: Maybe<FileExtQueryString_2>;
  name?: Maybe<FileNameQueryString_2>;
  relativeDirectory?: Maybe<FileRelativeDirectoryQueryString_2>;
  dev?: Maybe<FileDevQueryInteger_2>;
  mode?: Maybe<FileModeQueryInteger_2>;
  nlink?: Maybe<FileNlinkQueryInteger_2>;
  uid?: Maybe<FileUidQueryInteger_2>;
  gid?: Maybe<FileGidQueryInteger_2>;
  rdev?: Maybe<FileRdevQueryInteger_2>;
  blksize?: Maybe<FileBlksizeQueryInteger_2>;
  ino?: Maybe<FileInoQueryInteger_2>;
  blocks?: Maybe<FileBlocksQueryInteger_2>;
  atimeMs?: Maybe<FileAtimeMsQueryFloat_2>;
  mtimeMs?: Maybe<FileMtimeMsQueryFloat_2>;
  ctimeMs?: Maybe<FileCtimeMsQueryFloat_2>;
  birthtimeMs?: Maybe<FileBirthtimeMsQueryFloat_2>;
  atime?: Maybe<FileAtimeQueryString_2>;
  mtime?: Maybe<FileMtimeQueryString_2>;
  ctime?: Maybe<FileCtimeQueryString_2>;
  birthtime?: Maybe<FileBirthtimeQueryString_2>;
  publicURL?: Maybe<PublicUrlQueryString_3>;
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
  internal?: Maybe<Internal_16>;
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
  internal?: Maybe<Internal_9>;
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
  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>;
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
  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>;
  spaceId?: Maybe<SitePagePluginCreatorPluginOptionsSpaceIdQueryString>;
  accessToken?: Maybe<SitePagePluginCreatorPluginOptionsAccessTokenQueryString>;
  host?: Maybe<SitePagePluginCreatorPluginOptionsHostQueryString>;
  environment?: Maybe<SitePagePluginCreatorPluginOptionsEnvironmentQueryString>;
  includePaths?: Maybe<SitePagePluginCreatorPluginOptionsIncludePathsQueryList>;
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
  internal?: Maybe<Internal_10>;
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
  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>;
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
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___spaceId = 'pluginOptions___spaceId',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___host = 'pluginOptions___host',
  pluginOptions___environment = 'pluginOptions___environment',
  pluginOptions___includePaths = 'pluginOptions___includePaths',
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
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___spaceId = 'pluginOptions___spaceId',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___host = 'pluginOptions___host',
  pluginOptions___environment = 'pluginOptions___environment',
  pluginOptions___includePaths = 'pluginOptions___includePaths',
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
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___spaceId = 'pluginOptions___spaceId',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___host = 'pluginOptions___host',
  pluginOptions___environment = 'pluginOptions___environment',
  pluginOptions___includePaths = 'pluginOptions___includePaths',
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
  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>;
  spaceId?: Maybe<SitePluginPluginOptionsSpaceIdQueryString_2>;
  accessToken?: Maybe<SitePluginPluginOptionsAccessTokenQueryString_2>;
  host?: Maybe<SitePluginPluginOptionsHostQueryString_2>;
  environment?: Maybe<SitePluginPluginOptionsEnvironmentQueryString_2>;
  includePaths?: Maybe<SitePluginPluginOptionsIncludePathsQueryList_2>;
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
