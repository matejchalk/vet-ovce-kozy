export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   **/
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAboutPage = Node & {
  __typename?: 'ContentfulAboutPage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  page?: Maybe<Scalars['String']>;
  teamMembers?: Maybe<Array<Maybe<ContentfulMember>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  node_locale?: Maybe<Scalars['String']>;
};

export type ContentfulAboutPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAboutPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAboutPageConnection = {
  __typename?: 'ContentfulAboutPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutPageEdge>;
  nodes: Array<ContentfulAboutPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAboutPageGroupConnection>;
};

export type ContentfulAboutPageConnectionDistinctArgs = {
  field: ContentfulAboutPageFieldsEnum;
};

export type ContentfulAboutPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAboutPageFieldsEnum;
};

export type ContentfulAboutPageEdge = {
  __typename?: 'ContentfulAboutPageEdge';
  next?: Maybe<ContentfulAboutPage>;
  node: ContentfulAboutPage;
  previous?: Maybe<ContentfulAboutPage>;
};

export enum ContentfulAboutPageFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  page = 'page',
  teamMembers = 'teamMembers',
  teamMembers___id = 'teamMembers___id',
  teamMembers___parent___id = 'teamMembers___parent___id',
  teamMembers___parent___parent___id = 'teamMembers___parent___parent___id',
  teamMembers___parent___parent___children = 'teamMembers___parent___parent___children',
  teamMembers___parent___children = 'teamMembers___parent___children',
  teamMembers___parent___children___id = 'teamMembers___parent___children___id',
  teamMembers___parent___children___children = 'teamMembers___parent___children___children',
  teamMembers___parent___internal___content = 'teamMembers___parent___internal___content',
  teamMembers___parent___internal___contentDigest = 'teamMembers___parent___internal___contentDigest',
  teamMembers___parent___internal___description = 'teamMembers___parent___internal___description',
  teamMembers___parent___internal___fieldOwners = 'teamMembers___parent___internal___fieldOwners',
  teamMembers___parent___internal___ignoreType = 'teamMembers___parent___internal___ignoreType',
  teamMembers___parent___internal___mediaType = 'teamMembers___parent___internal___mediaType',
  teamMembers___parent___internal___owner = 'teamMembers___parent___internal___owner',
  teamMembers___parent___internal___type = 'teamMembers___parent___internal___type',
  teamMembers___children = 'teamMembers___children',
  teamMembers___children___id = 'teamMembers___children___id',
  teamMembers___children___parent___id = 'teamMembers___children___parent___id',
  teamMembers___children___parent___children = 'teamMembers___children___parent___children',
  teamMembers___children___children = 'teamMembers___children___children',
  teamMembers___children___children___id = 'teamMembers___children___children___id',
  teamMembers___children___children___children = 'teamMembers___children___children___children',
  teamMembers___children___internal___content = 'teamMembers___children___internal___content',
  teamMembers___children___internal___contentDigest = 'teamMembers___children___internal___contentDigest',
  teamMembers___children___internal___description = 'teamMembers___children___internal___description',
  teamMembers___children___internal___fieldOwners = 'teamMembers___children___internal___fieldOwners',
  teamMembers___children___internal___ignoreType = 'teamMembers___children___internal___ignoreType',
  teamMembers___children___internal___mediaType = 'teamMembers___children___internal___mediaType',
  teamMembers___children___internal___owner = 'teamMembers___children___internal___owner',
  teamMembers___children___internal___type = 'teamMembers___children___internal___type',
  teamMembers___internal___content = 'teamMembers___internal___content',
  teamMembers___internal___contentDigest = 'teamMembers___internal___contentDigest',
  teamMembers___internal___description = 'teamMembers___internal___description',
  teamMembers___internal___fieldOwners = 'teamMembers___internal___fieldOwners',
  teamMembers___internal___ignoreType = 'teamMembers___internal___ignoreType',
  teamMembers___internal___mediaType = 'teamMembers___internal___mediaType',
  teamMembers___internal___owner = 'teamMembers___internal___owner',
  teamMembers___internal___type = 'teamMembers___internal___type',
  teamMembers___name = 'teamMembers___name',
  teamMembers___photo___id = 'teamMembers___photo___id',
  teamMembers___photo___parent___id = 'teamMembers___photo___parent___id',
  teamMembers___photo___parent___children = 'teamMembers___photo___parent___children',
  teamMembers___photo___children = 'teamMembers___photo___children',
  teamMembers___photo___children___id = 'teamMembers___photo___children___id',
  teamMembers___photo___children___children = 'teamMembers___photo___children___children',
  teamMembers___photo___internal___content = 'teamMembers___photo___internal___content',
  teamMembers___photo___internal___contentDigest = 'teamMembers___photo___internal___contentDigest',
  teamMembers___photo___internal___description = 'teamMembers___photo___internal___description',
  teamMembers___photo___internal___fieldOwners = 'teamMembers___photo___internal___fieldOwners',
  teamMembers___photo___internal___ignoreType = 'teamMembers___photo___internal___ignoreType',
  teamMembers___photo___internal___mediaType = 'teamMembers___photo___internal___mediaType',
  teamMembers___photo___internal___owner = 'teamMembers___photo___internal___owner',
  teamMembers___photo___internal___type = 'teamMembers___photo___internal___type',
  teamMembers___photo___contentful_id = 'teamMembers___photo___contentful_id',
  teamMembers___photo___file___url = 'teamMembers___photo___file___url',
  teamMembers___photo___file___fileName = 'teamMembers___photo___file___fileName',
  teamMembers___photo___file___contentType = 'teamMembers___photo___file___contentType',
  teamMembers___photo___title = 'teamMembers___photo___title',
  teamMembers___photo___description = 'teamMembers___photo___description',
  teamMembers___photo___node_locale = 'teamMembers___photo___node_locale',
  teamMembers___photo___fixed___base64 = 'teamMembers___photo___fixed___base64',
  teamMembers___photo___fixed___tracedSVG = 'teamMembers___photo___fixed___tracedSVG',
  teamMembers___photo___fixed___aspectRatio = 'teamMembers___photo___fixed___aspectRatio',
  teamMembers___photo___fixed___width = 'teamMembers___photo___fixed___width',
  teamMembers___photo___fixed___height = 'teamMembers___photo___fixed___height',
  teamMembers___photo___fixed___src = 'teamMembers___photo___fixed___src',
  teamMembers___photo___fixed___srcSet = 'teamMembers___photo___fixed___srcSet',
  teamMembers___photo___fixed___srcWebp = 'teamMembers___photo___fixed___srcWebp',
  teamMembers___photo___fixed___srcSetWebp = 'teamMembers___photo___fixed___srcSetWebp',
  teamMembers___photo___resolutions___base64 = 'teamMembers___photo___resolutions___base64',
  teamMembers___photo___resolutions___tracedSVG = 'teamMembers___photo___resolutions___tracedSVG',
  teamMembers___photo___resolutions___aspectRatio = 'teamMembers___photo___resolutions___aspectRatio',
  teamMembers___photo___resolutions___width = 'teamMembers___photo___resolutions___width',
  teamMembers___photo___resolutions___height = 'teamMembers___photo___resolutions___height',
  teamMembers___photo___resolutions___src = 'teamMembers___photo___resolutions___src',
  teamMembers___photo___resolutions___srcSet = 'teamMembers___photo___resolutions___srcSet',
  teamMembers___photo___resolutions___srcWebp = 'teamMembers___photo___resolutions___srcWebp',
  teamMembers___photo___resolutions___srcSetWebp = 'teamMembers___photo___resolutions___srcSetWebp',
  teamMembers___photo___fluid___base64 = 'teamMembers___photo___fluid___base64',
  teamMembers___photo___fluid___tracedSVG = 'teamMembers___photo___fluid___tracedSVG',
  teamMembers___photo___fluid___aspectRatio = 'teamMembers___photo___fluid___aspectRatio',
  teamMembers___photo___fluid___src = 'teamMembers___photo___fluid___src',
  teamMembers___photo___fluid___srcSet = 'teamMembers___photo___fluid___srcSet',
  teamMembers___photo___fluid___srcWebp = 'teamMembers___photo___fluid___srcWebp',
  teamMembers___photo___fluid___srcSetWebp = 'teamMembers___photo___fluid___srcSetWebp',
  teamMembers___photo___fluid___sizes = 'teamMembers___photo___fluid___sizes',
  teamMembers___photo___sizes___base64 = 'teamMembers___photo___sizes___base64',
  teamMembers___photo___sizes___tracedSVG = 'teamMembers___photo___sizes___tracedSVG',
  teamMembers___photo___sizes___aspectRatio = 'teamMembers___photo___sizes___aspectRatio',
  teamMembers___photo___sizes___src = 'teamMembers___photo___sizes___src',
  teamMembers___photo___sizes___srcSet = 'teamMembers___photo___sizes___srcSet',
  teamMembers___photo___sizes___srcWebp = 'teamMembers___photo___sizes___srcWebp',
  teamMembers___photo___sizes___srcSetWebp = 'teamMembers___photo___sizes___srcSetWebp',
  teamMembers___photo___sizes___sizes = 'teamMembers___photo___sizes___sizes',
  teamMembers___photo___resize___base64 = 'teamMembers___photo___resize___base64',
  teamMembers___photo___resize___tracedSVG = 'teamMembers___photo___resize___tracedSVG',
  teamMembers___photo___resize___src = 'teamMembers___photo___resize___src',
  teamMembers___photo___resize___width = 'teamMembers___photo___resize___width',
  teamMembers___photo___resize___height = 'teamMembers___photo___resize___height',
  teamMembers___photo___resize___aspectRatio = 'teamMembers___photo___resize___aspectRatio',
  teamMembers___avatar___id = 'teamMembers___avatar___id',
  teamMembers___avatar___parent___id = 'teamMembers___avatar___parent___id',
  teamMembers___avatar___parent___children = 'teamMembers___avatar___parent___children',
  teamMembers___avatar___children = 'teamMembers___avatar___children',
  teamMembers___avatar___children___id = 'teamMembers___avatar___children___id',
  teamMembers___avatar___children___children = 'teamMembers___avatar___children___children',
  teamMembers___avatar___internal___content = 'teamMembers___avatar___internal___content',
  teamMembers___avatar___internal___contentDigest = 'teamMembers___avatar___internal___contentDigest',
  teamMembers___avatar___internal___description = 'teamMembers___avatar___internal___description',
  teamMembers___avatar___internal___fieldOwners = 'teamMembers___avatar___internal___fieldOwners',
  teamMembers___avatar___internal___ignoreType = 'teamMembers___avatar___internal___ignoreType',
  teamMembers___avatar___internal___mediaType = 'teamMembers___avatar___internal___mediaType',
  teamMembers___avatar___internal___owner = 'teamMembers___avatar___internal___owner',
  teamMembers___avatar___internal___type = 'teamMembers___avatar___internal___type',
  teamMembers___avatar___contentful_id = 'teamMembers___avatar___contentful_id',
  teamMembers___avatar___file___url = 'teamMembers___avatar___file___url',
  teamMembers___avatar___file___fileName = 'teamMembers___avatar___file___fileName',
  teamMembers___avatar___file___contentType = 'teamMembers___avatar___file___contentType',
  teamMembers___avatar___title = 'teamMembers___avatar___title',
  teamMembers___avatar___description = 'teamMembers___avatar___description',
  teamMembers___avatar___node_locale = 'teamMembers___avatar___node_locale',
  teamMembers___avatar___fixed___base64 = 'teamMembers___avatar___fixed___base64',
  teamMembers___avatar___fixed___tracedSVG = 'teamMembers___avatar___fixed___tracedSVG',
  teamMembers___avatar___fixed___aspectRatio = 'teamMembers___avatar___fixed___aspectRatio',
  teamMembers___avatar___fixed___width = 'teamMembers___avatar___fixed___width',
  teamMembers___avatar___fixed___height = 'teamMembers___avatar___fixed___height',
  teamMembers___avatar___fixed___src = 'teamMembers___avatar___fixed___src',
  teamMembers___avatar___fixed___srcSet = 'teamMembers___avatar___fixed___srcSet',
  teamMembers___avatar___fixed___srcWebp = 'teamMembers___avatar___fixed___srcWebp',
  teamMembers___avatar___fixed___srcSetWebp = 'teamMembers___avatar___fixed___srcSetWebp',
  teamMembers___avatar___resolutions___base64 = 'teamMembers___avatar___resolutions___base64',
  teamMembers___avatar___resolutions___tracedSVG = 'teamMembers___avatar___resolutions___tracedSVG',
  teamMembers___avatar___resolutions___aspectRatio = 'teamMembers___avatar___resolutions___aspectRatio',
  teamMembers___avatar___resolutions___width = 'teamMembers___avatar___resolutions___width',
  teamMembers___avatar___resolutions___height = 'teamMembers___avatar___resolutions___height',
  teamMembers___avatar___resolutions___src = 'teamMembers___avatar___resolutions___src',
  teamMembers___avatar___resolutions___srcSet = 'teamMembers___avatar___resolutions___srcSet',
  teamMembers___avatar___resolutions___srcWebp = 'teamMembers___avatar___resolutions___srcWebp',
  teamMembers___avatar___resolutions___srcSetWebp = 'teamMembers___avatar___resolutions___srcSetWebp',
  teamMembers___avatar___fluid___base64 = 'teamMembers___avatar___fluid___base64',
  teamMembers___avatar___fluid___tracedSVG = 'teamMembers___avatar___fluid___tracedSVG',
  teamMembers___avatar___fluid___aspectRatio = 'teamMembers___avatar___fluid___aspectRatio',
  teamMembers___avatar___fluid___src = 'teamMembers___avatar___fluid___src',
  teamMembers___avatar___fluid___srcSet = 'teamMembers___avatar___fluid___srcSet',
  teamMembers___avatar___fluid___srcWebp = 'teamMembers___avatar___fluid___srcWebp',
  teamMembers___avatar___fluid___srcSetWebp = 'teamMembers___avatar___fluid___srcSetWebp',
  teamMembers___avatar___fluid___sizes = 'teamMembers___avatar___fluid___sizes',
  teamMembers___avatar___sizes___base64 = 'teamMembers___avatar___sizes___base64',
  teamMembers___avatar___sizes___tracedSVG = 'teamMembers___avatar___sizes___tracedSVG',
  teamMembers___avatar___sizes___aspectRatio = 'teamMembers___avatar___sizes___aspectRatio',
  teamMembers___avatar___sizes___src = 'teamMembers___avatar___sizes___src',
  teamMembers___avatar___sizes___srcSet = 'teamMembers___avatar___sizes___srcSet',
  teamMembers___avatar___sizes___srcWebp = 'teamMembers___avatar___sizes___srcWebp',
  teamMembers___avatar___sizes___srcSetWebp = 'teamMembers___avatar___sizes___srcSetWebp',
  teamMembers___avatar___sizes___sizes = 'teamMembers___avatar___sizes___sizes',
  teamMembers___avatar___resize___base64 = 'teamMembers___avatar___resize___base64',
  teamMembers___avatar___resize___tracedSVG = 'teamMembers___avatar___resize___tracedSVG',
  teamMembers___avatar___resize___src = 'teamMembers___avatar___resize___src',
  teamMembers___avatar___resize___width = 'teamMembers___avatar___resize___width',
  teamMembers___avatar___resize___height = 'teamMembers___avatar___resize___height',
  teamMembers___avatar___resize___aspectRatio = 'teamMembers___avatar___resize___aspectRatio',
  teamMembers___article = 'teamMembers___article',
  teamMembers___article___id = 'teamMembers___article___id',
  teamMembers___article___parent___id = 'teamMembers___article___parent___id',
  teamMembers___article___parent___children = 'teamMembers___article___parent___children',
  teamMembers___article___children = 'teamMembers___article___children',
  teamMembers___article___children___id = 'teamMembers___article___children___id',
  teamMembers___article___children___children = 'teamMembers___article___children___children',
  teamMembers___article___internal___content = 'teamMembers___article___internal___content',
  teamMembers___article___internal___contentDigest = 'teamMembers___article___internal___contentDigest',
  teamMembers___article___internal___description = 'teamMembers___article___internal___description',
  teamMembers___article___internal___fieldOwners = 'teamMembers___article___internal___fieldOwners',
  teamMembers___article___internal___ignoreType = 'teamMembers___article___internal___ignoreType',
  teamMembers___article___internal___mediaType = 'teamMembers___article___internal___mediaType',
  teamMembers___article___internal___owner = 'teamMembers___article___internal___owner',
  teamMembers___article___internal___type = 'teamMembers___article___internal___type',
  teamMembers___article___title = 'teamMembers___article___title',
  teamMembers___article___slug = 'teamMembers___article___slug',
  teamMembers___article___date = 'teamMembers___article___date',
  teamMembers___article___category___id = 'teamMembers___article___category___id',
  teamMembers___article___category___children = 'teamMembers___article___category___children',
  teamMembers___article___category___title = 'teamMembers___article___category___title',
  teamMembers___article___category___spaceId = 'teamMembers___article___category___spaceId',
  teamMembers___article___category___contentful_id = 'teamMembers___article___category___contentful_id',
  teamMembers___article___category___createdAt = 'teamMembers___article___category___createdAt',
  teamMembers___article___category___updatedAt = 'teamMembers___article___category___updatedAt',
  teamMembers___article___category___node_locale = 'teamMembers___article___category___node_locale',
  teamMembers___article___category___article = 'teamMembers___article___category___article',
  teamMembers___article___author___id = 'teamMembers___article___author___id',
  teamMembers___article___author___children = 'teamMembers___article___author___children',
  teamMembers___article___author___name = 'teamMembers___article___author___name',
  teamMembers___article___author___article = 'teamMembers___article___author___article',
  teamMembers___article___author___about_page = 'teamMembers___article___author___about_page',
  teamMembers___article___author___spaceId = 'teamMembers___article___author___spaceId',
  teamMembers___article___author___contentful_id = 'teamMembers___article___author___contentful_id',
  teamMembers___article___author___createdAt = 'teamMembers___article___author___createdAt',
  teamMembers___article___author___updatedAt = 'teamMembers___article___author___updatedAt',
  teamMembers___article___author___node_locale = 'teamMembers___article___author___node_locale',
  teamMembers___article___content___id = 'teamMembers___article___content___id',
  teamMembers___article___content___children = 'teamMembers___article___content___children',
  teamMembers___article___content___content = 'teamMembers___article___content___content',
  teamMembers___article___content___nodeType = 'teamMembers___article___content___nodeType',
  teamMembers___article___content___json = 'teamMembers___article___content___json',
  teamMembers___article___spaceId = 'teamMembers___article___spaceId',
  teamMembers___article___contentful_id = 'teamMembers___article___contentful_id',
  teamMembers___article___createdAt = 'teamMembers___article___createdAt',
  teamMembers___article___updatedAt = 'teamMembers___article___updatedAt',
  teamMembers___article___node_locale = 'teamMembers___article___node_locale',
  teamMembers___article___childContentfulArticleContentRichTextNode___id = 'teamMembers___article___childContentfulArticleContentRichTextNode___id',
  teamMembers___article___childContentfulArticleContentRichTextNode___children = 'teamMembers___article___childContentfulArticleContentRichTextNode___children',
  teamMembers___article___childContentfulArticleContentRichTextNode___content = 'teamMembers___article___childContentfulArticleContentRichTextNode___content',
  teamMembers___article___childContentfulArticleContentRichTextNode___nodeType = 'teamMembers___article___childContentfulArticleContentRichTextNode___nodeType',
  teamMembers___article___childContentfulArticleContentRichTextNode___json = 'teamMembers___article___childContentfulArticleContentRichTextNode___json',
  teamMembers___about_page = 'teamMembers___about_page',
  teamMembers___about_page___id = 'teamMembers___about_page___id',
  teamMembers___about_page___parent___id = 'teamMembers___about_page___parent___id',
  teamMembers___about_page___parent___children = 'teamMembers___about_page___parent___children',
  teamMembers___about_page___children = 'teamMembers___about_page___children',
  teamMembers___about_page___children___id = 'teamMembers___about_page___children___id',
  teamMembers___about_page___children___children = 'teamMembers___about_page___children___children',
  teamMembers___about_page___internal___content = 'teamMembers___about_page___internal___content',
  teamMembers___about_page___internal___contentDigest = 'teamMembers___about_page___internal___contentDigest',
  teamMembers___about_page___internal___description = 'teamMembers___about_page___internal___description',
  teamMembers___about_page___internal___fieldOwners = 'teamMembers___about_page___internal___fieldOwners',
  teamMembers___about_page___internal___ignoreType = 'teamMembers___about_page___internal___ignoreType',
  teamMembers___about_page___internal___mediaType = 'teamMembers___about_page___internal___mediaType',
  teamMembers___about_page___internal___owner = 'teamMembers___about_page___internal___owner',
  teamMembers___about_page___internal___type = 'teamMembers___about_page___internal___type',
  teamMembers___about_page___page = 'teamMembers___about_page___page',
  teamMembers___about_page___teamMembers = 'teamMembers___about_page___teamMembers',
  teamMembers___about_page___teamMembers___id = 'teamMembers___about_page___teamMembers___id',
  teamMembers___about_page___teamMembers___children = 'teamMembers___about_page___teamMembers___children',
  teamMembers___about_page___teamMembers___name = 'teamMembers___about_page___teamMembers___name',
  teamMembers___about_page___teamMembers___article = 'teamMembers___about_page___teamMembers___article',
  teamMembers___about_page___teamMembers___about_page = 'teamMembers___about_page___teamMembers___about_page',
  teamMembers___about_page___teamMembers___spaceId = 'teamMembers___about_page___teamMembers___spaceId',
  teamMembers___about_page___teamMembers___contentful_id = 'teamMembers___about_page___teamMembers___contentful_id',
  teamMembers___about_page___teamMembers___createdAt = 'teamMembers___about_page___teamMembers___createdAt',
  teamMembers___about_page___teamMembers___updatedAt = 'teamMembers___about_page___teamMembers___updatedAt',
  teamMembers___about_page___teamMembers___node_locale = 'teamMembers___about_page___teamMembers___node_locale',
  teamMembers___about_page___spaceId = 'teamMembers___about_page___spaceId',
  teamMembers___about_page___contentful_id = 'teamMembers___about_page___contentful_id',
  teamMembers___about_page___createdAt = 'teamMembers___about_page___createdAt',
  teamMembers___about_page___updatedAt = 'teamMembers___about_page___updatedAt',
  teamMembers___about_page___node_locale = 'teamMembers___about_page___node_locale',
  teamMembers___description___id = 'teamMembers___description___id',
  teamMembers___description___parent___id = 'teamMembers___description___parent___id',
  teamMembers___description___parent___children = 'teamMembers___description___parent___children',
  teamMembers___description___children = 'teamMembers___description___children',
  teamMembers___description___children___id = 'teamMembers___description___children___id',
  teamMembers___description___children___children = 'teamMembers___description___children___children',
  teamMembers___description___internal___content = 'teamMembers___description___internal___content',
  teamMembers___description___internal___contentDigest = 'teamMembers___description___internal___contentDigest',
  teamMembers___description___internal___description = 'teamMembers___description___internal___description',
  teamMembers___description___internal___fieldOwners = 'teamMembers___description___internal___fieldOwners',
  teamMembers___description___internal___ignoreType = 'teamMembers___description___internal___ignoreType',
  teamMembers___description___internal___mediaType = 'teamMembers___description___internal___mediaType',
  teamMembers___description___internal___owner = 'teamMembers___description___internal___owner',
  teamMembers___description___internal___type = 'teamMembers___description___internal___type',
  teamMembers___description___description = 'teamMembers___description___description',
  teamMembers___description___childMarkdownRemark___id = 'teamMembers___description___childMarkdownRemark___id',
  teamMembers___description___childMarkdownRemark___excerpt = 'teamMembers___description___childMarkdownRemark___excerpt',
  teamMembers___description___childMarkdownRemark___rawMarkdownBody = 'teamMembers___description___childMarkdownRemark___rawMarkdownBody',
  teamMembers___description___childMarkdownRemark___html = 'teamMembers___description___childMarkdownRemark___html',
  teamMembers___description___childMarkdownRemark___htmlAst = 'teamMembers___description___childMarkdownRemark___htmlAst',
  teamMembers___description___childMarkdownRemark___excerptAst = 'teamMembers___description___childMarkdownRemark___excerptAst',
  teamMembers___description___childMarkdownRemark___headings = 'teamMembers___description___childMarkdownRemark___headings',
  teamMembers___description___childMarkdownRemark___timeToRead = 'teamMembers___description___childMarkdownRemark___timeToRead',
  teamMembers___description___childMarkdownRemark___tableOfContents = 'teamMembers___description___childMarkdownRemark___tableOfContents',
  teamMembers___description___childMarkdownRemark___children = 'teamMembers___description___childMarkdownRemark___children',
  teamMembers___spaceId = 'teamMembers___spaceId',
  teamMembers___contentful_id = 'teamMembers___contentful_id',
  teamMembers___createdAt = 'teamMembers___createdAt',
  teamMembers___updatedAt = 'teamMembers___updatedAt',
  teamMembers___node_locale = 'teamMembers___node_locale',
  teamMembers___childContentfulMemberDescriptionTextNode___id = 'teamMembers___childContentfulMemberDescriptionTextNode___id',
  teamMembers___childContentfulMemberDescriptionTextNode___parent___id = 'teamMembers___childContentfulMemberDescriptionTextNode___parent___id',
  teamMembers___childContentfulMemberDescriptionTextNode___parent___children = 'teamMembers___childContentfulMemberDescriptionTextNode___parent___children',
  teamMembers___childContentfulMemberDescriptionTextNode___children = 'teamMembers___childContentfulMemberDescriptionTextNode___children',
  teamMembers___childContentfulMemberDescriptionTextNode___children___id = 'teamMembers___childContentfulMemberDescriptionTextNode___children___id',
  teamMembers___childContentfulMemberDescriptionTextNode___children___children = 'teamMembers___childContentfulMemberDescriptionTextNode___children___children',
  teamMembers___childContentfulMemberDescriptionTextNode___internal___content = 'teamMembers___childContentfulMemberDescriptionTextNode___internal___content',
  teamMembers___childContentfulMemberDescriptionTextNode___internal___contentDigest = 'teamMembers___childContentfulMemberDescriptionTextNode___internal___contentDigest',
  teamMembers___childContentfulMemberDescriptionTextNode___internal___description = 'teamMembers___childContentfulMemberDescriptionTextNode___internal___description',
  teamMembers___childContentfulMemberDescriptionTextNode___internal___fieldOwners = 'teamMembers___childContentfulMemberDescriptionTextNode___internal___fieldOwners',
  teamMembers___childContentfulMemberDescriptionTextNode___internal___ignoreType = 'teamMembers___childContentfulMemberDescriptionTextNode___internal___ignoreType',
  teamMembers___childContentfulMemberDescriptionTextNode___internal___mediaType = 'teamMembers___childContentfulMemberDescriptionTextNode___internal___mediaType',
  teamMembers___childContentfulMemberDescriptionTextNode___internal___owner = 'teamMembers___childContentfulMemberDescriptionTextNode___internal___owner',
  teamMembers___childContentfulMemberDescriptionTextNode___internal___type = 'teamMembers___childContentfulMemberDescriptionTextNode___internal___type',
  teamMembers___childContentfulMemberDescriptionTextNode___description = 'teamMembers___childContentfulMemberDescriptionTextNode___description',
  teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___id = 'teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___id',
  teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___excerpt = 'teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___excerpt',
  teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___rawMarkdownBody = 'teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___rawMarkdownBody',
  teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___html = 'teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___html',
  teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___htmlAst = 'teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___htmlAst',
  teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___excerptAst = 'teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___excerptAst',
  teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___headings = 'teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___headings',
  teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___timeToRead = 'teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___timeToRead',
  teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___tableOfContents = 'teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___tableOfContents',
  teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___children = 'teamMembers___childContentfulMemberDescriptionTextNode___childMarkdownRemark___children',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  node_locale = 'node_locale',
}

export type ContentfulAboutPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  page?: Maybe<StringQueryOperatorInput>;
  teamMembers?: Maybe<ContentfulMemberFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAboutPageFilterListInput = {
  elemMatch?: Maybe<ContentfulAboutPageFilterInput>;
};

export type ContentfulAboutPageGroupConnection = {
  __typename?: 'ContentfulAboutPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAboutPageEdge>;
  nodes: Array<ContentfulAboutPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAboutPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAboutPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulArticle = Node & {
  __typename?: 'ContentfulArticle';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  category?: Maybe<ContentfulCategory>;
  author?: Maybe<ContentfulMember>;
  content?: Maybe<ContentfulArticleContentRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulArticleContentRichTextNode?: Maybe<
    ContentfulArticleContentRichTextNode
  >;
};

export type ContentfulArticleDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulArticleCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulArticleUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulArticleConnection = {
  __typename?: 'ContentfulArticleConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulArticleEdge>;
  nodes: Array<ContentfulArticle>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulArticleGroupConnection>;
};

export type ContentfulArticleConnectionDistinctArgs = {
  field: ContentfulArticleFieldsEnum;
};

export type ContentfulArticleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulArticleFieldsEnum;
};

export type ContentfulArticleContentRichTextNode = Node & {
  __typename?: 'contentfulArticleContentRichTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulArticleContentRichTextNodeConnection = {
  __typename?: 'contentfulArticleContentRichTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulArticleContentRichTextNodeEdge>;
  nodes: Array<ContentfulArticleContentRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulArticleContentRichTextNodeGroupConnection>;
};

export type ContentfulArticleContentRichTextNodeConnectionDistinctArgs = {
  field: ContentfulArticleContentRichTextNodeFieldsEnum;
};

export type ContentfulArticleContentRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulArticleContentRichTextNodeFieldsEnum;
};

export type ContentfulArticleContentRichTextNodeEdge = {
  __typename?: 'contentfulArticleContentRichTextNodeEdge';
  next?: Maybe<ContentfulArticleContentRichTextNode>;
  node: ContentfulArticleContentRichTextNode;
  previous?: Maybe<ContentfulArticleContentRichTextNode>;
};

export enum ContentfulArticleContentRichTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  content = 'content',
  nodeType = 'nodeType',
  json = 'json',
}

export type ContentfulArticleContentRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulArticleContentRichTextNodeGroupConnection = {
  __typename?: 'contentfulArticleContentRichTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulArticleContentRichTextNodeEdge>;
  nodes: Array<ContentfulArticleContentRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulArticleContentRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulArticleContentRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulArticleEdge = {
  __typename?: 'ContentfulArticleEdge';
  next?: Maybe<ContentfulArticle>;
  node: ContentfulArticle;
  previous?: Maybe<ContentfulArticle>;
};

export enum ContentfulArticleFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  title = 'title',
  slug = 'slug',
  date = 'date',
  category___id = 'category___id',
  category___parent___id = 'category___parent___id',
  category___parent___parent___id = 'category___parent___parent___id',
  category___parent___parent___children = 'category___parent___parent___children',
  category___parent___children = 'category___parent___children',
  category___parent___children___id = 'category___parent___children___id',
  category___parent___children___children = 'category___parent___children___children',
  category___parent___internal___content = 'category___parent___internal___content',
  category___parent___internal___contentDigest = 'category___parent___internal___contentDigest',
  category___parent___internal___description = 'category___parent___internal___description',
  category___parent___internal___fieldOwners = 'category___parent___internal___fieldOwners',
  category___parent___internal___ignoreType = 'category___parent___internal___ignoreType',
  category___parent___internal___mediaType = 'category___parent___internal___mediaType',
  category___parent___internal___owner = 'category___parent___internal___owner',
  category___parent___internal___type = 'category___parent___internal___type',
  category___children = 'category___children',
  category___children___id = 'category___children___id',
  category___children___parent___id = 'category___children___parent___id',
  category___children___parent___children = 'category___children___parent___children',
  category___children___children = 'category___children___children',
  category___children___children___id = 'category___children___children___id',
  category___children___children___children = 'category___children___children___children',
  category___children___internal___content = 'category___children___internal___content',
  category___children___internal___contentDigest = 'category___children___internal___contentDigest',
  category___children___internal___description = 'category___children___internal___description',
  category___children___internal___fieldOwners = 'category___children___internal___fieldOwners',
  category___children___internal___ignoreType = 'category___children___internal___ignoreType',
  category___children___internal___mediaType = 'category___children___internal___mediaType',
  category___children___internal___owner = 'category___children___internal___owner',
  category___children___internal___type = 'category___children___internal___type',
  category___internal___content = 'category___internal___content',
  category___internal___contentDigest = 'category___internal___contentDigest',
  category___internal___description = 'category___internal___description',
  category___internal___fieldOwners = 'category___internal___fieldOwners',
  category___internal___ignoreType = 'category___internal___ignoreType',
  category___internal___mediaType = 'category___internal___mediaType',
  category___internal___owner = 'category___internal___owner',
  category___internal___type = 'category___internal___type',
  category___title = 'category___title',
  category___image___id = 'category___image___id',
  category___image___parent___id = 'category___image___parent___id',
  category___image___parent___children = 'category___image___parent___children',
  category___image___children = 'category___image___children',
  category___image___children___id = 'category___image___children___id',
  category___image___children___children = 'category___image___children___children',
  category___image___internal___content = 'category___image___internal___content',
  category___image___internal___contentDigest = 'category___image___internal___contentDigest',
  category___image___internal___description = 'category___image___internal___description',
  category___image___internal___fieldOwners = 'category___image___internal___fieldOwners',
  category___image___internal___ignoreType = 'category___image___internal___ignoreType',
  category___image___internal___mediaType = 'category___image___internal___mediaType',
  category___image___internal___owner = 'category___image___internal___owner',
  category___image___internal___type = 'category___image___internal___type',
  category___image___contentful_id = 'category___image___contentful_id',
  category___image___file___url = 'category___image___file___url',
  category___image___file___fileName = 'category___image___file___fileName',
  category___image___file___contentType = 'category___image___file___contentType',
  category___image___title = 'category___image___title',
  category___image___description = 'category___image___description',
  category___image___node_locale = 'category___image___node_locale',
  category___image___fixed___base64 = 'category___image___fixed___base64',
  category___image___fixed___tracedSVG = 'category___image___fixed___tracedSVG',
  category___image___fixed___aspectRatio = 'category___image___fixed___aspectRatio',
  category___image___fixed___width = 'category___image___fixed___width',
  category___image___fixed___height = 'category___image___fixed___height',
  category___image___fixed___src = 'category___image___fixed___src',
  category___image___fixed___srcSet = 'category___image___fixed___srcSet',
  category___image___fixed___srcWebp = 'category___image___fixed___srcWebp',
  category___image___fixed___srcSetWebp = 'category___image___fixed___srcSetWebp',
  category___image___resolutions___base64 = 'category___image___resolutions___base64',
  category___image___resolutions___tracedSVG = 'category___image___resolutions___tracedSVG',
  category___image___resolutions___aspectRatio = 'category___image___resolutions___aspectRatio',
  category___image___resolutions___width = 'category___image___resolutions___width',
  category___image___resolutions___height = 'category___image___resolutions___height',
  category___image___resolutions___src = 'category___image___resolutions___src',
  category___image___resolutions___srcSet = 'category___image___resolutions___srcSet',
  category___image___resolutions___srcWebp = 'category___image___resolutions___srcWebp',
  category___image___resolutions___srcSetWebp = 'category___image___resolutions___srcSetWebp',
  category___image___fluid___base64 = 'category___image___fluid___base64',
  category___image___fluid___tracedSVG = 'category___image___fluid___tracedSVG',
  category___image___fluid___aspectRatio = 'category___image___fluid___aspectRatio',
  category___image___fluid___src = 'category___image___fluid___src',
  category___image___fluid___srcSet = 'category___image___fluid___srcSet',
  category___image___fluid___srcWebp = 'category___image___fluid___srcWebp',
  category___image___fluid___srcSetWebp = 'category___image___fluid___srcSetWebp',
  category___image___fluid___sizes = 'category___image___fluid___sizes',
  category___image___sizes___base64 = 'category___image___sizes___base64',
  category___image___sizes___tracedSVG = 'category___image___sizes___tracedSVG',
  category___image___sizes___aspectRatio = 'category___image___sizes___aspectRatio',
  category___image___sizes___src = 'category___image___sizes___src',
  category___image___sizes___srcSet = 'category___image___sizes___srcSet',
  category___image___sizes___srcWebp = 'category___image___sizes___srcWebp',
  category___image___sizes___srcSetWebp = 'category___image___sizes___srcSetWebp',
  category___image___sizes___sizes = 'category___image___sizes___sizes',
  category___image___resize___base64 = 'category___image___resize___base64',
  category___image___resize___tracedSVG = 'category___image___resize___tracedSVG',
  category___image___resize___src = 'category___image___resize___src',
  category___image___resize___width = 'category___image___resize___width',
  category___image___resize___height = 'category___image___resize___height',
  category___image___resize___aspectRatio = 'category___image___resize___aspectRatio',
  category___spaceId = 'category___spaceId',
  category___contentful_id = 'category___contentful_id',
  category___createdAt = 'category___createdAt',
  category___updatedAt = 'category___updatedAt',
  category___node_locale = 'category___node_locale',
  category___article = 'category___article',
  category___article___id = 'category___article___id',
  category___article___parent___id = 'category___article___parent___id',
  category___article___parent___children = 'category___article___parent___children',
  category___article___children = 'category___article___children',
  category___article___children___id = 'category___article___children___id',
  category___article___children___children = 'category___article___children___children',
  category___article___internal___content = 'category___article___internal___content',
  category___article___internal___contentDigest = 'category___article___internal___contentDigest',
  category___article___internal___description = 'category___article___internal___description',
  category___article___internal___fieldOwners = 'category___article___internal___fieldOwners',
  category___article___internal___ignoreType = 'category___article___internal___ignoreType',
  category___article___internal___mediaType = 'category___article___internal___mediaType',
  category___article___internal___owner = 'category___article___internal___owner',
  category___article___internal___type = 'category___article___internal___type',
  category___article___title = 'category___article___title',
  category___article___slug = 'category___article___slug',
  category___article___date = 'category___article___date',
  category___article___category___id = 'category___article___category___id',
  category___article___category___children = 'category___article___category___children',
  category___article___category___title = 'category___article___category___title',
  category___article___category___spaceId = 'category___article___category___spaceId',
  category___article___category___contentful_id = 'category___article___category___contentful_id',
  category___article___category___createdAt = 'category___article___category___createdAt',
  category___article___category___updatedAt = 'category___article___category___updatedAt',
  category___article___category___node_locale = 'category___article___category___node_locale',
  category___article___category___article = 'category___article___category___article',
  category___article___author___id = 'category___article___author___id',
  category___article___author___children = 'category___article___author___children',
  category___article___author___name = 'category___article___author___name',
  category___article___author___article = 'category___article___author___article',
  category___article___author___about_page = 'category___article___author___about_page',
  category___article___author___spaceId = 'category___article___author___spaceId',
  category___article___author___contentful_id = 'category___article___author___contentful_id',
  category___article___author___createdAt = 'category___article___author___createdAt',
  category___article___author___updatedAt = 'category___article___author___updatedAt',
  category___article___author___node_locale = 'category___article___author___node_locale',
  category___article___content___id = 'category___article___content___id',
  category___article___content___children = 'category___article___content___children',
  category___article___content___content = 'category___article___content___content',
  category___article___content___nodeType = 'category___article___content___nodeType',
  category___article___content___json = 'category___article___content___json',
  category___article___spaceId = 'category___article___spaceId',
  category___article___contentful_id = 'category___article___contentful_id',
  category___article___createdAt = 'category___article___createdAt',
  category___article___updatedAt = 'category___article___updatedAt',
  category___article___node_locale = 'category___article___node_locale',
  category___article___childContentfulArticleContentRichTextNode___id = 'category___article___childContentfulArticleContentRichTextNode___id',
  category___article___childContentfulArticleContentRichTextNode___children = 'category___article___childContentfulArticleContentRichTextNode___children',
  category___article___childContentfulArticleContentRichTextNode___content = 'category___article___childContentfulArticleContentRichTextNode___content',
  category___article___childContentfulArticleContentRichTextNode___nodeType = 'category___article___childContentfulArticleContentRichTextNode___nodeType',
  category___article___childContentfulArticleContentRichTextNode___json = 'category___article___childContentfulArticleContentRichTextNode___json',
  author___id = 'author___id',
  author___parent___id = 'author___parent___id',
  author___parent___parent___id = 'author___parent___parent___id',
  author___parent___parent___children = 'author___parent___parent___children',
  author___parent___children = 'author___parent___children',
  author___parent___children___id = 'author___parent___children___id',
  author___parent___children___children = 'author___parent___children___children',
  author___parent___internal___content = 'author___parent___internal___content',
  author___parent___internal___contentDigest = 'author___parent___internal___contentDigest',
  author___parent___internal___description = 'author___parent___internal___description',
  author___parent___internal___fieldOwners = 'author___parent___internal___fieldOwners',
  author___parent___internal___ignoreType = 'author___parent___internal___ignoreType',
  author___parent___internal___mediaType = 'author___parent___internal___mediaType',
  author___parent___internal___owner = 'author___parent___internal___owner',
  author___parent___internal___type = 'author___parent___internal___type',
  author___children = 'author___children',
  author___children___id = 'author___children___id',
  author___children___parent___id = 'author___children___parent___id',
  author___children___parent___children = 'author___children___parent___children',
  author___children___children = 'author___children___children',
  author___children___children___id = 'author___children___children___id',
  author___children___children___children = 'author___children___children___children',
  author___children___internal___content = 'author___children___internal___content',
  author___children___internal___contentDigest = 'author___children___internal___contentDigest',
  author___children___internal___description = 'author___children___internal___description',
  author___children___internal___fieldOwners = 'author___children___internal___fieldOwners',
  author___children___internal___ignoreType = 'author___children___internal___ignoreType',
  author___children___internal___mediaType = 'author___children___internal___mediaType',
  author___children___internal___owner = 'author___children___internal___owner',
  author___children___internal___type = 'author___children___internal___type',
  author___internal___content = 'author___internal___content',
  author___internal___contentDigest = 'author___internal___contentDigest',
  author___internal___description = 'author___internal___description',
  author___internal___fieldOwners = 'author___internal___fieldOwners',
  author___internal___ignoreType = 'author___internal___ignoreType',
  author___internal___mediaType = 'author___internal___mediaType',
  author___internal___owner = 'author___internal___owner',
  author___internal___type = 'author___internal___type',
  author___name = 'author___name',
  author___photo___id = 'author___photo___id',
  author___photo___parent___id = 'author___photo___parent___id',
  author___photo___parent___children = 'author___photo___parent___children',
  author___photo___children = 'author___photo___children',
  author___photo___children___id = 'author___photo___children___id',
  author___photo___children___children = 'author___photo___children___children',
  author___photo___internal___content = 'author___photo___internal___content',
  author___photo___internal___contentDigest = 'author___photo___internal___contentDigest',
  author___photo___internal___description = 'author___photo___internal___description',
  author___photo___internal___fieldOwners = 'author___photo___internal___fieldOwners',
  author___photo___internal___ignoreType = 'author___photo___internal___ignoreType',
  author___photo___internal___mediaType = 'author___photo___internal___mediaType',
  author___photo___internal___owner = 'author___photo___internal___owner',
  author___photo___internal___type = 'author___photo___internal___type',
  author___photo___contentful_id = 'author___photo___contentful_id',
  author___photo___file___url = 'author___photo___file___url',
  author___photo___file___fileName = 'author___photo___file___fileName',
  author___photo___file___contentType = 'author___photo___file___contentType',
  author___photo___title = 'author___photo___title',
  author___photo___description = 'author___photo___description',
  author___photo___node_locale = 'author___photo___node_locale',
  author___photo___fixed___base64 = 'author___photo___fixed___base64',
  author___photo___fixed___tracedSVG = 'author___photo___fixed___tracedSVG',
  author___photo___fixed___aspectRatio = 'author___photo___fixed___aspectRatio',
  author___photo___fixed___width = 'author___photo___fixed___width',
  author___photo___fixed___height = 'author___photo___fixed___height',
  author___photo___fixed___src = 'author___photo___fixed___src',
  author___photo___fixed___srcSet = 'author___photo___fixed___srcSet',
  author___photo___fixed___srcWebp = 'author___photo___fixed___srcWebp',
  author___photo___fixed___srcSetWebp = 'author___photo___fixed___srcSetWebp',
  author___photo___resolutions___base64 = 'author___photo___resolutions___base64',
  author___photo___resolutions___tracedSVG = 'author___photo___resolutions___tracedSVG',
  author___photo___resolutions___aspectRatio = 'author___photo___resolutions___aspectRatio',
  author___photo___resolutions___width = 'author___photo___resolutions___width',
  author___photo___resolutions___height = 'author___photo___resolutions___height',
  author___photo___resolutions___src = 'author___photo___resolutions___src',
  author___photo___resolutions___srcSet = 'author___photo___resolutions___srcSet',
  author___photo___resolutions___srcWebp = 'author___photo___resolutions___srcWebp',
  author___photo___resolutions___srcSetWebp = 'author___photo___resolutions___srcSetWebp',
  author___photo___fluid___base64 = 'author___photo___fluid___base64',
  author___photo___fluid___tracedSVG = 'author___photo___fluid___tracedSVG',
  author___photo___fluid___aspectRatio = 'author___photo___fluid___aspectRatio',
  author___photo___fluid___src = 'author___photo___fluid___src',
  author___photo___fluid___srcSet = 'author___photo___fluid___srcSet',
  author___photo___fluid___srcWebp = 'author___photo___fluid___srcWebp',
  author___photo___fluid___srcSetWebp = 'author___photo___fluid___srcSetWebp',
  author___photo___fluid___sizes = 'author___photo___fluid___sizes',
  author___photo___sizes___base64 = 'author___photo___sizes___base64',
  author___photo___sizes___tracedSVG = 'author___photo___sizes___tracedSVG',
  author___photo___sizes___aspectRatio = 'author___photo___sizes___aspectRatio',
  author___photo___sizes___src = 'author___photo___sizes___src',
  author___photo___sizes___srcSet = 'author___photo___sizes___srcSet',
  author___photo___sizes___srcWebp = 'author___photo___sizes___srcWebp',
  author___photo___sizes___srcSetWebp = 'author___photo___sizes___srcSetWebp',
  author___photo___sizes___sizes = 'author___photo___sizes___sizes',
  author___photo___resize___base64 = 'author___photo___resize___base64',
  author___photo___resize___tracedSVG = 'author___photo___resize___tracedSVG',
  author___photo___resize___src = 'author___photo___resize___src',
  author___photo___resize___width = 'author___photo___resize___width',
  author___photo___resize___height = 'author___photo___resize___height',
  author___photo___resize___aspectRatio = 'author___photo___resize___aspectRatio',
  author___avatar___id = 'author___avatar___id',
  author___avatar___parent___id = 'author___avatar___parent___id',
  author___avatar___parent___children = 'author___avatar___parent___children',
  author___avatar___children = 'author___avatar___children',
  author___avatar___children___id = 'author___avatar___children___id',
  author___avatar___children___children = 'author___avatar___children___children',
  author___avatar___internal___content = 'author___avatar___internal___content',
  author___avatar___internal___contentDigest = 'author___avatar___internal___contentDigest',
  author___avatar___internal___description = 'author___avatar___internal___description',
  author___avatar___internal___fieldOwners = 'author___avatar___internal___fieldOwners',
  author___avatar___internal___ignoreType = 'author___avatar___internal___ignoreType',
  author___avatar___internal___mediaType = 'author___avatar___internal___mediaType',
  author___avatar___internal___owner = 'author___avatar___internal___owner',
  author___avatar___internal___type = 'author___avatar___internal___type',
  author___avatar___contentful_id = 'author___avatar___contentful_id',
  author___avatar___file___url = 'author___avatar___file___url',
  author___avatar___file___fileName = 'author___avatar___file___fileName',
  author___avatar___file___contentType = 'author___avatar___file___contentType',
  author___avatar___title = 'author___avatar___title',
  author___avatar___description = 'author___avatar___description',
  author___avatar___node_locale = 'author___avatar___node_locale',
  author___avatar___fixed___base64 = 'author___avatar___fixed___base64',
  author___avatar___fixed___tracedSVG = 'author___avatar___fixed___tracedSVG',
  author___avatar___fixed___aspectRatio = 'author___avatar___fixed___aspectRatio',
  author___avatar___fixed___width = 'author___avatar___fixed___width',
  author___avatar___fixed___height = 'author___avatar___fixed___height',
  author___avatar___fixed___src = 'author___avatar___fixed___src',
  author___avatar___fixed___srcSet = 'author___avatar___fixed___srcSet',
  author___avatar___fixed___srcWebp = 'author___avatar___fixed___srcWebp',
  author___avatar___fixed___srcSetWebp = 'author___avatar___fixed___srcSetWebp',
  author___avatar___resolutions___base64 = 'author___avatar___resolutions___base64',
  author___avatar___resolutions___tracedSVG = 'author___avatar___resolutions___tracedSVG',
  author___avatar___resolutions___aspectRatio = 'author___avatar___resolutions___aspectRatio',
  author___avatar___resolutions___width = 'author___avatar___resolutions___width',
  author___avatar___resolutions___height = 'author___avatar___resolutions___height',
  author___avatar___resolutions___src = 'author___avatar___resolutions___src',
  author___avatar___resolutions___srcSet = 'author___avatar___resolutions___srcSet',
  author___avatar___resolutions___srcWebp = 'author___avatar___resolutions___srcWebp',
  author___avatar___resolutions___srcSetWebp = 'author___avatar___resolutions___srcSetWebp',
  author___avatar___fluid___base64 = 'author___avatar___fluid___base64',
  author___avatar___fluid___tracedSVG = 'author___avatar___fluid___tracedSVG',
  author___avatar___fluid___aspectRatio = 'author___avatar___fluid___aspectRatio',
  author___avatar___fluid___src = 'author___avatar___fluid___src',
  author___avatar___fluid___srcSet = 'author___avatar___fluid___srcSet',
  author___avatar___fluid___srcWebp = 'author___avatar___fluid___srcWebp',
  author___avatar___fluid___srcSetWebp = 'author___avatar___fluid___srcSetWebp',
  author___avatar___fluid___sizes = 'author___avatar___fluid___sizes',
  author___avatar___sizes___base64 = 'author___avatar___sizes___base64',
  author___avatar___sizes___tracedSVG = 'author___avatar___sizes___tracedSVG',
  author___avatar___sizes___aspectRatio = 'author___avatar___sizes___aspectRatio',
  author___avatar___sizes___src = 'author___avatar___sizes___src',
  author___avatar___sizes___srcSet = 'author___avatar___sizes___srcSet',
  author___avatar___sizes___srcWebp = 'author___avatar___sizes___srcWebp',
  author___avatar___sizes___srcSetWebp = 'author___avatar___sizes___srcSetWebp',
  author___avatar___sizes___sizes = 'author___avatar___sizes___sizes',
  author___avatar___resize___base64 = 'author___avatar___resize___base64',
  author___avatar___resize___tracedSVG = 'author___avatar___resize___tracedSVG',
  author___avatar___resize___src = 'author___avatar___resize___src',
  author___avatar___resize___width = 'author___avatar___resize___width',
  author___avatar___resize___height = 'author___avatar___resize___height',
  author___avatar___resize___aspectRatio = 'author___avatar___resize___aspectRatio',
  author___article = 'author___article',
  author___article___id = 'author___article___id',
  author___article___parent___id = 'author___article___parent___id',
  author___article___parent___children = 'author___article___parent___children',
  author___article___children = 'author___article___children',
  author___article___children___id = 'author___article___children___id',
  author___article___children___children = 'author___article___children___children',
  author___article___internal___content = 'author___article___internal___content',
  author___article___internal___contentDigest = 'author___article___internal___contentDigest',
  author___article___internal___description = 'author___article___internal___description',
  author___article___internal___fieldOwners = 'author___article___internal___fieldOwners',
  author___article___internal___ignoreType = 'author___article___internal___ignoreType',
  author___article___internal___mediaType = 'author___article___internal___mediaType',
  author___article___internal___owner = 'author___article___internal___owner',
  author___article___internal___type = 'author___article___internal___type',
  author___article___title = 'author___article___title',
  author___article___slug = 'author___article___slug',
  author___article___date = 'author___article___date',
  author___article___category___id = 'author___article___category___id',
  author___article___category___children = 'author___article___category___children',
  author___article___category___title = 'author___article___category___title',
  author___article___category___spaceId = 'author___article___category___spaceId',
  author___article___category___contentful_id = 'author___article___category___contentful_id',
  author___article___category___createdAt = 'author___article___category___createdAt',
  author___article___category___updatedAt = 'author___article___category___updatedAt',
  author___article___category___node_locale = 'author___article___category___node_locale',
  author___article___category___article = 'author___article___category___article',
  author___article___author___id = 'author___article___author___id',
  author___article___author___children = 'author___article___author___children',
  author___article___author___name = 'author___article___author___name',
  author___article___author___article = 'author___article___author___article',
  author___article___author___about_page = 'author___article___author___about_page',
  author___article___author___spaceId = 'author___article___author___spaceId',
  author___article___author___contentful_id = 'author___article___author___contentful_id',
  author___article___author___createdAt = 'author___article___author___createdAt',
  author___article___author___updatedAt = 'author___article___author___updatedAt',
  author___article___author___node_locale = 'author___article___author___node_locale',
  author___article___content___id = 'author___article___content___id',
  author___article___content___children = 'author___article___content___children',
  author___article___content___content = 'author___article___content___content',
  author___article___content___nodeType = 'author___article___content___nodeType',
  author___article___content___json = 'author___article___content___json',
  author___article___spaceId = 'author___article___spaceId',
  author___article___contentful_id = 'author___article___contentful_id',
  author___article___createdAt = 'author___article___createdAt',
  author___article___updatedAt = 'author___article___updatedAt',
  author___article___node_locale = 'author___article___node_locale',
  author___article___childContentfulArticleContentRichTextNode___id = 'author___article___childContentfulArticleContentRichTextNode___id',
  author___article___childContentfulArticleContentRichTextNode___children = 'author___article___childContentfulArticleContentRichTextNode___children',
  author___article___childContentfulArticleContentRichTextNode___content = 'author___article___childContentfulArticleContentRichTextNode___content',
  author___article___childContentfulArticleContentRichTextNode___nodeType = 'author___article___childContentfulArticleContentRichTextNode___nodeType',
  author___article___childContentfulArticleContentRichTextNode___json = 'author___article___childContentfulArticleContentRichTextNode___json',
  author___about_page = 'author___about_page',
  author___about_page___id = 'author___about_page___id',
  author___about_page___parent___id = 'author___about_page___parent___id',
  author___about_page___parent___children = 'author___about_page___parent___children',
  author___about_page___children = 'author___about_page___children',
  author___about_page___children___id = 'author___about_page___children___id',
  author___about_page___children___children = 'author___about_page___children___children',
  author___about_page___internal___content = 'author___about_page___internal___content',
  author___about_page___internal___contentDigest = 'author___about_page___internal___contentDigest',
  author___about_page___internal___description = 'author___about_page___internal___description',
  author___about_page___internal___fieldOwners = 'author___about_page___internal___fieldOwners',
  author___about_page___internal___ignoreType = 'author___about_page___internal___ignoreType',
  author___about_page___internal___mediaType = 'author___about_page___internal___mediaType',
  author___about_page___internal___owner = 'author___about_page___internal___owner',
  author___about_page___internal___type = 'author___about_page___internal___type',
  author___about_page___page = 'author___about_page___page',
  author___about_page___teamMembers = 'author___about_page___teamMembers',
  author___about_page___teamMembers___id = 'author___about_page___teamMembers___id',
  author___about_page___teamMembers___children = 'author___about_page___teamMembers___children',
  author___about_page___teamMembers___name = 'author___about_page___teamMembers___name',
  author___about_page___teamMembers___article = 'author___about_page___teamMembers___article',
  author___about_page___teamMembers___about_page = 'author___about_page___teamMembers___about_page',
  author___about_page___teamMembers___spaceId = 'author___about_page___teamMembers___spaceId',
  author___about_page___teamMembers___contentful_id = 'author___about_page___teamMembers___contentful_id',
  author___about_page___teamMembers___createdAt = 'author___about_page___teamMembers___createdAt',
  author___about_page___teamMembers___updatedAt = 'author___about_page___teamMembers___updatedAt',
  author___about_page___teamMembers___node_locale = 'author___about_page___teamMembers___node_locale',
  author___about_page___spaceId = 'author___about_page___spaceId',
  author___about_page___contentful_id = 'author___about_page___contentful_id',
  author___about_page___createdAt = 'author___about_page___createdAt',
  author___about_page___updatedAt = 'author___about_page___updatedAt',
  author___about_page___node_locale = 'author___about_page___node_locale',
  author___description___id = 'author___description___id',
  author___description___parent___id = 'author___description___parent___id',
  author___description___parent___children = 'author___description___parent___children',
  author___description___children = 'author___description___children',
  author___description___children___id = 'author___description___children___id',
  author___description___children___children = 'author___description___children___children',
  author___description___internal___content = 'author___description___internal___content',
  author___description___internal___contentDigest = 'author___description___internal___contentDigest',
  author___description___internal___description = 'author___description___internal___description',
  author___description___internal___fieldOwners = 'author___description___internal___fieldOwners',
  author___description___internal___ignoreType = 'author___description___internal___ignoreType',
  author___description___internal___mediaType = 'author___description___internal___mediaType',
  author___description___internal___owner = 'author___description___internal___owner',
  author___description___internal___type = 'author___description___internal___type',
  author___description___description = 'author___description___description',
  author___description___childMarkdownRemark___id = 'author___description___childMarkdownRemark___id',
  author___description___childMarkdownRemark___excerpt = 'author___description___childMarkdownRemark___excerpt',
  author___description___childMarkdownRemark___rawMarkdownBody = 'author___description___childMarkdownRemark___rawMarkdownBody',
  author___description___childMarkdownRemark___html = 'author___description___childMarkdownRemark___html',
  author___description___childMarkdownRemark___htmlAst = 'author___description___childMarkdownRemark___htmlAst',
  author___description___childMarkdownRemark___excerptAst = 'author___description___childMarkdownRemark___excerptAst',
  author___description___childMarkdownRemark___headings = 'author___description___childMarkdownRemark___headings',
  author___description___childMarkdownRemark___timeToRead = 'author___description___childMarkdownRemark___timeToRead',
  author___description___childMarkdownRemark___tableOfContents = 'author___description___childMarkdownRemark___tableOfContents',
  author___description___childMarkdownRemark___children = 'author___description___childMarkdownRemark___children',
  author___spaceId = 'author___spaceId',
  author___contentful_id = 'author___contentful_id',
  author___createdAt = 'author___createdAt',
  author___updatedAt = 'author___updatedAt',
  author___node_locale = 'author___node_locale',
  author___childContentfulMemberDescriptionTextNode___id = 'author___childContentfulMemberDescriptionTextNode___id',
  author___childContentfulMemberDescriptionTextNode___parent___id = 'author___childContentfulMemberDescriptionTextNode___parent___id',
  author___childContentfulMemberDescriptionTextNode___parent___children = 'author___childContentfulMemberDescriptionTextNode___parent___children',
  author___childContentfulMemberDescriptionTextNode___children = 'author___childContentfulMemberDescriptionTextNode___children',
  author___childContentfulMemberDescriptionTextNode___children___id = 'author___childContentfulMemberDescriptionTextNode___children___id',
  author___childContentfulMemberDescriptionTextNode___children___children = 'author___childContentfulMemberDescriptionTextNode___children___children',
  author___childContentfulMemberDescriptionTextNode___internal___content = 'author___childContentfulMemberDescriptionTextNode___internal___content',
  author___childContentfulMemberDescriptionTextNode___internal___contentDigest = 'author___childContentfulMemberDescriptionTextNode___internal___contentDigest',
  author___childContentfulMemberDescriptionTextNode___internal___description = 'author___childContentfulMemberDescriptionTextNode___internal___description',
  author___childContentfulMemberDescriptionTextNode___internal___fieldOwners = 'author___childContentfulMemberDescriptionTextNode___internal___fieldOwners',
  author___childContentfulMemberDescriptionTextNode___internal___ignoreType = 'author___childContentfulMemberDescriptionTextNode___internal___ignoreType',
  author___childContentfulMemberDescriptionTextNode___internal___mediaType = 'author___childContentfulMemberDescriptionTextNode___internal___mediaType',
  author___childContentfulMemberDescriptionTextNode___internal___owner = 'author___childContentfulMemberDescriptionTextNode___internal___owner',
  author___childContentfulMemberDescriptionTextNode___internal___type = 'author___childContentfulMemberDescriptionTextNode___internal___type',
  author___childContentfulMemberDescriptionTextNode___description = 'author___childContentfulMemberDescriptionTextNode___description',
  author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___id = 'author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___id',
  author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___excerpt = 'author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___excerpt',
  author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___rawMarkdownBody = 'author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___rawMarkdownBody',
  author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___html = 'author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___html',
  author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___htmlAst = 'author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___htmlAst',
  author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___excerptAst = 'author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___excerptAst',
  author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___headings = 'author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___headings',
  author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___timeToRead = 'author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___timeToRead',
  author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___tableOfContents = 'author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___tableOfContents',
  author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___children = 'author___childContentfulMemberDescriptionTextNode___childMarkdownRemark___children',
  content___id = 'content___id',
  content___parent___id = 'content___parent___id',
  content___parent___parent___id = 'content___parent___parent___id',
  content___parent___parent___children = 'content___parent___parent___children',
  content___parent___children = 'content___parent___children',
  content___parent___children___id = 'content___parent___children___id',
  content___parent___children___children = 'content___parent___children___children',
  content___parent___internal___content = 'content___parent___internal___content',
  content___parent___internal___contentDigest = 'content___parent___internal___contentDigest',
  content___parent___internal___description = 'content___parent___internal___description',
  content___parent___internal___fieldOwners = 'content___parent___internal___fieldOwners',
  content___parent___internal___ignoreType = 'content___parent___internal___ignoreType',
  content___parent___internal___mediaType = 'content___parent___internal___mediaType',
  content___parent___internal___owner = 'content___parent___internal___owner',
  content___parent___internal___type = 'content___parent___internal___type',
  content___children = 'content___children',
  content___children___id = 'content___children___id',
  content___children___parent___id = 'content___children___parent___id',
  content___children___parent___children = 'content___children___parent___children',
  content___children___children = 'content___children___children',
  content___children___children___id = 'content___children___children___id',
  content___children___children___children = 'content___children___children___children',
  content___children___internal___content = 'content___children___internal___content',
  content___children___internal___contentDigest = 'content___children___internal___contentDigest',
  content___children___internal___description = 'content___children___internal___description',
  content___children___internal___fieldOwners = 'content___children___internal___fieldOwners',
  content___children___internal___ignoreType = 'content___children___internal___ignoreType',
  content___children___internal___mediaType = 'content___children___internal___mediaType',
  content___children___internal___owner = 'content___children___internal___owner',
  content___children___internal___type = 'content___children___internal___type',
  content___internal___content = 'content___internal___content',
  content___internal___contentDigest = 'content___internal___contentDigest',
  content___internal___description = 'content___internal___description',
  content___internal___fieldOwners = 'content___internal___fieldOwners',
  content___internal___ignoreType = 'content___internal___ignoreType',
  content___internal___mediaType = 'content___internal___mediaType',
  content___internal___owner = 'content___internal___owner',
  content___internal___type = 'content___internal___type',
  content___content = 'content___content',
  content___nodeType = 'content___nodeType',
  content___json = 'content___json',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  node_locale = 'node_locale',
  childContentfulArticleContentRichTextNode___id = 'childContentfulArticleContentRichTextNode___id',
  childContentfulArticleContentRichTextNode___parent___id = 'childContentfulArticleContentRichTextNode___parent___id',
  childContentfulArticleContentRichTextNode___parent___parent___id = 'childContentfulArticleContentRichTextNode___parent___parent___id',
  childContentfulArticleContentRichTextNode___parent___parent___children = 'childContentfulArticleContentRichTextNode___parent___parent___children',
  childContentfulArticleContentRichTextNode___parent___children = 'childContentfulArticleContentRichTextNode___parent___children',
  childContentfulArticleContentRichTextNode___parent___children___id = 'childContentfulArticleContentRichTextNode___parent___children___id',
  childContentfulArticleContentRichTextNode___parent___children___children = 'childContentfulArticleContentRichTextNode___parent___children___children',
  childContentfulArticleContentRichTextNode___parent___internal___content = 'childContentfulArticleContentRichTextNode___parent___internal___content',
  childContentfulArticleContentRichTextNode___parent___internal___contentDigest = 'childContentfulArticleContentRichTextNode___parent___internal___contentDigest',
  childContentfulArticleContentRichTextNode___parent___internal___description = 'childContentfulArticleContentRichTextNode___parent___internal___description',
  childContentfulArticleContentRichTextNode___parent___internal___fieldOwners = 'childContentfulArticleContentRichTextNode___parent___internal___fieldOwners',
  childContentfulArticleContentRichTextNode___parent___internal___ignoreType = 'childContentfulArticleContentRichTextNode___parent___internal___ignoreType',
  childContentfulArticleContentRichTextNode___parent___internal___mediaType = 'childContentfulArticleContentRichTextNode___parent___internal___mediaType',
  childContentfulArticleContentRichTextNode___parent___internal___owner = 'childContentfulArticleContentRichTextNode___parent___internal___owner',
  childContentfulArticleContentRichTextNode___parent___internal___type = 'childContentfulArticleContentRichTextNode___parent___internal___type',
  childContentfulArticleContentRichTextNode___children = 'childContentfulArticleContentRichTextNode___children',
  childContentfulArticleContentRichTextNode___children___id = 'childContentfulArticleContentRichTextNode___children___id',
  childContentfulArticleContentRichTextNode___children___parent___id = 'childContentfulArticleContentRichTextNode___children___parent___id',
  childContentfulArticleContentRichTextNode___children___parent___children = 'childContentfulArticleContentRichTextNode___children___parent___children',
  childContentfulArticleContentRichTextNode___children___children = 'childContentfulArticleContentRichTextNode___children___children',
  childContentfulArticleContentRichTextNode___children___children___id = 'childContentfulArticleContentRichTextNode___children___children___id',
  childContentfulArticleContentRichTextNode___children___children___children = 'childContentfulArticleContentRichTextNode___children___children___children',
  childContentfulArticleContentRichTextNode___children___internal___content = 'childContentfulArticleContentRichTextNode___children___internal___content',
  childContentfulArticleContentRichTextNode___children___internal___contentDigest = 'childContentfulArticleContentRichTextNode___children___internal___contentDigest',
  childContentfulArticleContentRichTextNode___children___internal___description = 'childContentfulArticleContentRichTextNode___children___internal___description',
  childContentfulArticleContentRichTextNode___children___internal___fieldOwners = 'childContentfulArticleContentRichTextNode___children___internal___fieldOwners',
  childContentfulArticleContentRichTextNode___children___internal___ignoreType = 'childContentfulArticleContentRichTextNode___children___internal___ignoreType',
  childContentfulArticleContentRichTextNode___children___internal___mediaType = 'childContentfulArticleContentRichTextNode___children___internal___mediaType',
  childContentfulArticleContentRichTextNode___children___internal___owner = 'childContentfulArticleContentRichTextNode___children___internal___owner',
  childContentfulArticleContentRichTextNode___children___internal___type = 'childContentfulArticleContentRichTextNode___children___internal___type',
  childContentfulArticleContentRichTextNode___internal___content = 'childContentfulArticleContentRichTextNode___internal___content',
  childContentfulArticleContentRichTextNode___internal___contentDigest = 'childContentfulArticleContentRichTextNode___internal___contentDigest',
  childContentfulArticleContentRichTextNode___internal___description = 'childContentfulArticleContentRichTextNode___internal___description',
  childContentfulArticleContentRichTextNode___internal___fieldOwners = 'childContentfulArticleContentRichTextNode___internal___fieldOwners',
  childContentfulArticleContentRichTextNode___internal___ignoreType = 'childContentfulArticleContentRichTextNode___internal___ignoreType',
  childContentfulArticleContentRichTextNode___internal___mediaType = 'childContentfulArticleContentRichTextNode___internal___mediaType',
  childContentfulArticleContentRichTextNode___internal___owner = 'childContentfulArticleContentRichTextNode___internal___owner',
  childContentfulArticleContentRichTextNode___internal___type = 'childContentfulArticleContentRichTextNode___internal___type',
  childContentfulArticleContentRichTextNode___content = 'childContentfulArticleContentRichTextNode___content',
  childContentfulArticleContentRichTextNode___nodeType = 'childContentfulArticleContentRichTextNode___nodeType',
  childContentfulArticleContentRichTextNode___json = 'childContentfulArticleContentRichTextNode___json',
}

export type ContentfulArticleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  category?: Maybe<ContentfulCategoryFilterInput>;
  author?: Maybe<ContentfulMemberFilterInput>;
  content?: Maybe<ContentfulArticleContentRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulArticleContentRichTextNode?: Maybe<
    ContentfulArticleContentRichTextNodeFilterInput
  >;
};

export type ContentfulArticleFilterListInput = {
  elemMatch?: Maybe<ContentfulArticleFilterInput>;
};

export type ContentfulArticleGroupConnection = {
  __typename?: 'ContentfulArticleGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulArticleEdge>;
  nodes: Array<ContentfulArticle>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulArticleSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulArticleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAsset = Node & {
  __typename?: 'ContentfulAsset';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  fixed?: Maybe<ContentfulFixed>;
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};

export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

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

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge';
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  contentful_id = 'contentful_id',
  file___url = 'file___url',
  file___details___size = 'file___details___size',
  file___details___image___width = 'file___details___image___width',
  file___details___image___height = 'file___details___image___height',
  file___fileName = 'file___fileName',
  file___contentType = 'file___contentType',
  title = 'title',
  description = 'description',
  node_locale = 'node_locale',
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

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile';
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails';
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCategory = Node & {
  __typename?: 'ContentfulCategory';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  node_locale?: Maybe<Scalars['String']>;
  article?: Maybe<Array<Maybe<ContentfulArticle>>>;
};

export type ContentfulCategoryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCategoryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCategoryConnection = {
  __typename?: 'ContentfulCategoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCategoryEdge>;
  nodes: Array<ContentfulCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCategoryGroupConnection>;
};

export type ContentfulCategoryConnectionDistinctArgs = {
  field: ContentfulCategoryFieldsEnum;
};

export type ContentfulCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCategoryFieldsEnum;
};

export type ContentfulCategoryEdge = {
  __typename?: 'ContentfulCategoryEdge';
  next?: Maybe<ContentfulCategory>;
  node: ContentfulCategory;
  previous?: Maybe<ContentfulCategory>;
};

export enum ContentfulCategoryFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  title = 'title',
  image___id = 'image___id',
  image___parent___id = 'image___parent___id',
  image___parent___parent___id = 'image___parent___parent___id',
  image___parent___parent___children = 'image___parent___parent___children',
  image___parent___children = 'image___parent___children',
  image___parent___children___id = 'image___parent___children___id',
  image___parent___children___children = 'image___parent___children___children',
  image___parent___internal___content = 'image___parent___internal___content',
  image___parent___internal___contentDigest = 'image___parent___internal___contentDigest',
  image___parent___internal___description = 'image___parent___internal___description',
  image___parent___internal___fieldOwners = 'image___parent___internal___fieldOwners',
  image___parent___internal___ignoreType = 'image___parent___internal___ignoreType',
  image___parent___internal___mediaType = 'image___parent___internal___mediaType',
  image___parent___internal___owner = 'image___parent___internal___owner',
  image___parent___internal___type = 'image___parent___internal___type',
  image___children = 'image___children',
  image___children___id = 'image___children___id',
  image___children___parent___id = 'image___children___parent___id',
  image___children___parent___children = 'image___children___parent___children',
  image___children___children = 'image___children___children',
  image___children___children___id = 'image___children___children___id',
  image___children___children___children = 'image___children___children___children',
  image___children___internal___content = 'image___children___internal___content',
  image___children___internal___contentDigest = 'image___children___internal___contentDigest',
  image___children___internal___description = 'image___children___internal___description',
  image___children___internal___fieldOwners = 'image___children___internal___fieldOwners',
  image___children___internal___ignoreType = 'image___children___internal___ignoreType',
  image___children___internal___mediaType = 'image___children___internal___mediaType',
  image___children___internal___owner = 'image___children___internal___owner',
  image___children___internal___type = 'image___children___internal___type',
  image___internal___content = 'image___internal___content',
  image___internal___contentDigest = 'image___internal___contentDigest',
  image___internal___description = 'image___internal___description',
  image___internal___fieldOwners = 'image___internal___fieldOwners',
  image___internal___ignoreType = 'image___internal___ignoreType',
  image___internal___mediaType = 'image___internal___mediaType',
  image___internal___owner = 'image___internal___owner',
  image___internal___type = 'image___internal___type',
  image___contentful_id = 'image___contentful_id',
  image___file___url = 'image___file___url',
  image___file___details___size = 'image___file___details___size',
  image___file___fileName = 'image___file___fileName',
  image___file___contentType = 'image___file___contentType',
  image___title = 'image___title',
  image___description = 'image___description',
  image___node_locale = 'image___node_locale',
  image___fixed___base64 = 'image___fixed___base64',
  image___fixed___tracedSVG = 'image___fixed___tracedSVG',
  image___fixed___aspectRatio = 'image___fixed___aspectRatio',
  image___fixed___width = 'image___fixed___width',
  image___fixed___height = 'image___fixed___height',
  image___fixed___src = 'image___fixed___src',
  image___fixed___srcSet = 'image___fixed___srcSet',
  image___fixed___srcWebp = 'image___fixed___srcWebp',
  image___fixed___srcSetWebp = 'image___fixed___srcSetWebp',
  image___resolutions___base64 = 'image___resolutions___base64',
  image___resolutions___tracedSVG = 'image___resolutions___tracedSVG',
  image___resolutions___aspectRatio = 'image___resolutions___aspectRatio',
  image___resolutions___width = 'image___resolutions___width',
  image___resolutions___height = 'image___resolutions___height',
  image___resolutions___src = 'image___resolutions___src',
  image___resolutions___srcSet = 'image___resolutions___srcSet',
  image___resolutions___srcWebp = 'image___resolutions___srcWebp',
  image___resolutions___srcSetWebp = 'image___resolutions___srcSetWebp',
  image___fluid___base64 = 'image___fluid___base64',
  image___fluid___tracedSVG = 'image___fluid___tracedSVG',
  image___fluid___aspectRatio = 'image___fluid___aspectRatio',
  image___fluid___src = 'image___fluid___src',
  image___fluid___srcSet = 'image___fluid___srcSet',
  image___fluid___srcWebp = 'image___fluid___srcWebp',
  image___fluid___srcSetWebp = 'image___fluid___srcSetWebp',
  image___fluid___sizes = 'image___fluid___sizes',
  image___sizes___base64 = 'image___sizes___base64',
  image___sizes___tracedSVG = 'image___sizes___tracedSVG',
  image___sizes___aspectRatio = 'image___sizes___aspectRatio',
  image___sizes___src = 'image___sizes___src',
  image___sizes___srcSet = 'image___sizes___srcSet',
  image___sizes___srcWebp = 'image___sizes___srcWebp',
  image___sizes___srcSetWebp = 'image___sizes___srcSetWebp',
  image___sizes___sizes = 'image___sizes___sizes',
  image___resize___base64 = 'image___resize___base64',
  image___resize___tracedSVG = 'image___resize___tracedSVG',
  image___resize___src = 'image___resize___src',
  image___resize___width = 'image___resize___width',
  image___resize___height = 'image___resize___height',
  image___resize___aspectRatio = 'image___resize___aspectRatio',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  node_locale = 'node_locale',
  article = 'article',
  article___id = 'article___id',
  article___parent___id = 'article___parent___id',
  article___parent___parent___id = 'article___parent___parent___id',
  article___parent___parent___children = 'article___parent___parent___children',
  article___parent___children = 'article___parent___children',
  article___parent___children___id = 'article___parent___children___id',
  article___parent___children___children = 'article___parent___children___children',
  article___parent___internal___content = 'article___parent___internal___content',
  article___parent___internal___contentDigest = 'article___parent___internal___contentDigest',
  article___parent___internal___description = 'article___parent___internal___description',
  article___parent___internal___fieldOwners = 'article___parent___internal___fieldOwners',
  article___parent___internal___ignoreType = 'article___parent___internal___ignoreType',
  article___parent___internal___mediaType = 'article___parent___internal___mediaType',
  article___parent___internal___owner = 'article___parent___internal___owner',
  article___parent___internal___type = 'article___parent___internal___type',
  article___children = 'article___children',
  article___children___id = 'article___children___id',
  article___children___parent___id = 'article___children___parent___id',
  article___children___parent___children = 'article___children___parent___children',
  article___children___children = 'article___children___children',
  article___children___children___id = 'article___children___children___id',
  article___children___children___children = 'article___children___children___children',
  article___children___internal___content = 'article___children___internal___content',
  article___children___internal___contentDigest = 'article___children___internal___contentDigest',
  article___children___internal___description = 'article___children___internal___description',
  article___children___internal___fieldOwners = 'article___children___internal___fieldOwners',
  article___children___internal___ignoreType = 'article___children___internal___ignoreType',
  article___children___internal___mediaType = 'article___children___internal___mediaType',
  article___children___internal___owner = 'article___children___internal___owner',
  article___children___internal___type = 'article___children___internal___type',
  article___internal___content = 'article___internal___content',
  article___internal___contentDigest = 'article___internal___contentDigest',
  article___internal___description = 'article___internal___description',
  article___internal___fieldOwners = 'article___internal___fieldOwners',
  article___internal___ignoreType = 'article___internal___ignoreType',
  article___internal___mediaType = 'article___internal___mediaType',
  article___internal___owner = 'article___internal___owner',
  article___internal___type = 'article___internal___type',
  article___title = 'article___title',
  article___slug = 'article___slug',
  article___date = 'article___date',
  article___category___id = 'article___category___id',
  article___category___parent___id = 'article___category___parent___id',
  article___category___parent___children = 'article___category___parent___children',
  article___category___children = 'article___category___children',
  article___category___children___id = 'article___category___children___id',
  article___category___children___children = 'article___category___children___children',
  article___category___internal___content = 'article___category___internal___content',
  article___category___internal___contentDigest = 'article___category___internal___contentDigest',
  article___category___internal___description = 'article___category___internal___description',
  article___category___internal___fieldOwners = 'article___category___internal___fieldOwners',
  article___category___internal___ignoreType = 'article___category___internal___ignoreType',
  article___category___internal___mediaType = 'article___category___internal___mediaType',
  article___category___internal___owner = 'article___category___internal___owner',
  article___category___internal___type = 'article___category___internal___type',
  article___category___title = 'article___category___title',
  article___category___image___id = 'article___category___image___id',
  article___category___image___children = 'article___category___image___children',
  article___category___image___contentful_id = 'article___category___image___contentful_id',
  article___category___image___title = 'article___category___image___title',
  article___category___image___description = 'article___category___image___description',
  article___category___image___node_locale = 'article___category___image___node_locale',
  article___category___spaceId = 'article___category___spaceId',
  article___category___contentful_id = 'article___category___contentful_id',
  article___category___createdAt = 'article___category___createdAt',
  article___category___updatedAt = 'article___category___updatedAt',
  article___category___node_locale = 'article___category___node_locale',
  article___category___article = 'article___category___article',
  article___category___article___id = 'article___category___article___id',
  article___category___article___children = 'article___category___article___children',
  article___category___article___title = 'article___category___article___title',
  article___category___article___slug = 'article___category___article___slug',
  article___category___article___date = 'article___category___article___date',
  article___category___article___spaceId = 'article___category___article___spaceId',
  article___category___article___contentful_id = 'article___category___article___contentful_id',
  article___category___article___createdAt = 'article___category___article___createdAt',
  article___category___article___updatedAt = 'article___category___article___updatedAt',
  article___category___article___node_locale = 'article___category___article___node_locale',
  article___author___id = 'article___author___id',
  article___author___parent___id = 'article___author___parent___id',
  article___author___parent___children = 'article___author___parent___children',
  article___author___children = 'article___author___children',
  article___author___children___id = 'article___author___children___id',
  article___author___children___children = 'article___author___children___children',
  article___author___internal___content = 'article___author___internal___content',
  article___author___internal___contentDigest = 'article___author___internal___contentDigest',
  article___author___internal___description = 'article___author___internal___description',
  article___author___internal___fieldOwners = 'article___author___internal___fieldOwners',
  article___author___internal___ignoreType = 'article___author___internal___ignoreType',
  article___author___internal___mediaType = 'article___author___internal___mediaType',
  article___author___internal___owner = 'article___author___internal___owner',
  article___author___internal___type = 'article___author___internal___type',
  article___author___name = 'article___author___name',
  article___author___photo___id = 'article___author___photo___id',
  article___author___photo___children = 'article___author___photo___children',
  article___author___photo___contentful_id = 'article___author___photo___contentful_id',
  article___author___photo___title = 'article___author___photo___title',
  article___author___photo___description = 'article___author___photo___description',
  article___author___photo___node_locale = 'article___author___photo___node_locale',
  article___author___avatar___id = 'article___author___avatar___id',
  article___author___avatar___children = 'article___author___avatar___children',
  article___author___avatar___contentful_id = 'article___author___avatar___contentful_id',
  article___author___avatar___title = 'article___author___avatar___title',
  article___author___avatar___description = 'article___author___avatar___description',
  article___author___avatar___node_locale = 'article___author___avatar___node_locale',
  article___author___article = 'article___author___article',
  article___author___article___id = 'article___author___article___id',
  article___author___article___children = 'article___author___article___children',
  article___author___article___title = 'article___author___article___title',
  article___author___article___slug = 'article___author___article___slug',
  article___author___article___date = 'article___author___article___date',
  article___author___article___spaceId = 'article___author___article___spaceId',
  article___author___article___contentful_id = 'article___author___article___contentful_id',
  article___author___article___createdAt = 'article___author___article___createdAt',
  article___author___article___updatedAt = 'article___author___article___updatedAt',
  article___author___article___node_locale = 'article___author___article___node_locale',
  article___author___about_page = 'article___author___about_page',
  article___author___about_page___id = 'article___author___about_page___id',
  article___author___about_page___children = 'article___author___about_page___children',
  article___author___about_page___page = 'article___author___about_page___page',
  article___author___about_page___teamMembers = 'article___author___about_page___teamMembers',
  article___author___about_page___spaceId = 'article___author___about_page___spaceId',
  article___author___about_page___contentful_id = 'article___author___about_page___contentful_id',
  article___author___about_page___createdAt = 'article___author___about_page___createdAt',
  article___author___about_page___updatedAt = 'article___author___about_page___updatedAt',
  article___author___about_page___node_locale = 'article___author___about_page___node_locale',
  article___author___description___id = 'article___author___description___id',
  article___author___description___children = 'article___author___description___children',
  article___author___description___description = 'article___author___description___description',
  article___author___spaceId = 'article___author___spaceId',
  article___author___contentful_id = 'article___author___contentful_id',
  article___author___createdAt = 'article___author___createdAt',
  article___author___updatedAt = 'article___author___updatedAt',
  article___author___node_locale = 'article___author___node_locale',
  article___author___childContentfulMemberDescriptionTextNode___id = 'article___author___childContentfulMemberDescriptionTextNode___id',
  article___author___childContentfulMemberDescriptionTextNode___children = 'article___author___childContentfulMemberDescriptionTextNode___children',
  article___author___childContentfulMemberDescriptionTextNode___description = 'article___author___childContentfulMemberDescriptionTextNode___description',
  article___content___id = 'article___content___id',
  article___content___parent___id = 'article___content___parent___id',
  article___content___parent___children = 'article___content___parent___children',
  article___content___children = 'article___content___children',
  article___content___children___id = 'article___content___children___id',
  article___content___children___children = 'article___content___children___children',
  article___content___internal___content = 'article___content___internal___content',
  article___content___internal___contentDigest = 'article___content___internal___contentDigest',
  article___content___internal___description = 'article___content___internal___description',
  article___content___internal___fieldOwners = 'article___content___internal___fieldOwners',
  article___content___internal___ignoreType = 'article___content___internal___ignoreType',
  article___content___internal___mediaType = 'article___content___internal___mediaType',
  article___content___internal___owner = 'article___content___internal___owner',
  article___content___internal___type = 'article___content___internal___type',
  article___content___content = 'article___content___content',
  article___content___nodeType = 'article___content___nodeType',
  article___content___json = 'article___content___json',
  article___spaceId = 'article___spaceId',
  article___contentful_id = 'article___contentful_id',
  article___createdAt = 'article___createdAt',
  article___updatedAt = 'article___updatedAt',
  article___node_locale = 'article___node_locale',
  article___childContentfulArticleContentRichTextNode___id = 'article___childContentfulArticleContentRichTextNode___id',
  article___childContentfulArticleContentRichTextNode___parent___id = 'article___childContentfulArticleContentRichTextNode___parent___id',
  article___childContentfulArticleContentRichTextNode___parent___children = 'article___childContentfulArticleContentRichTextNode___parent___children',
  article___childContentfulArticleContentRichTextNode___children = 'article___childContentfulArticleContentRichTextNode___children',
  article___childContentfulArticleContentRichTextNode___children___id = 'article___childContentfulArticleContentRichTextNode___children___id',
  article___childContentfulArticleContentRichTextNode___children___children = 'article___childContentfulArticleContentRichTextNode___children___children',
  article___childContentfulArticleContentRichTextNode___internal___content = 'article___childContentfulArticleContentRichTextNode___internal___content',
  article___childContentfulArticleContentRichTextNode___internal___contentDigest = 'article___childContentfulArticleContentRichTextNode___internal___contentDigest',
  article___childContentfulArticleContentRichTextNode___internal___description = 'article___childContentfulArticleContentRichTextNode___internal___description',
  article___childContentfulArticleContentRichTextNode___internal___fieldOwners = 'article___childContentfulArticleContentRichTextNode___internal___fieldOwners',
  article___childContentfulArticleContentRichTextNode___internal___ignoreType = 'article___childContentfulArticleContentRichTextNode___internal___ignoreType',
  article___childContentfulArticleContentRichTextNode___internal___mediaType = 'article___childContentfulArticleContentRichTextNode___internal___mediaType',
  article___childContentfulArticleContentRichTextNode___internal___owner = 'article___childContentfulArticleContentRichTextNode___internal___owner',
  article___childContentfulArticleContentRichTextNode___internal___type = 'article___childContentfulArticleContentRichTextNode___internal___type',
  article___childContentfulArticleContentRichTextNode___content = 'article___childContentfulArticleContentRichTextNode___content',
  article___childContentfulArticleContentRichTextNode___nodeType = 'article___childContentfulArticleContentRichTextNode___nodeType',
  article___childContentfulArticleContentRichTextNode___json = 'article___childContentfulArticleContentRichTextNode___json',
}

export type ContentfulCategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  article?: Maybe<ContentfulArticleFilterListInput>;
};

export type ContentfulCategoryGroupConnection = {
  __typename?: 'ContentfulCategoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCategoryEdge>;
  nodes: Array<ContentfulCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCategorySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge';
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  displayField = 'displayField',
  description = 'description',
}

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
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

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulGoal = Node & {
  __typename?: 'ContentfulGoal';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  home_page?: Maybe<Array<Maybe<ContentfulHomePage>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  node_locale?: Maybe<Scalars['String']>;
};

export type ContentfulGoalCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulGoalUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulGoalConnection = {
  __typename?: 'ContentfulGoalConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGoalEdge>;
  nodes: Array<ContentfulGoal>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulGoalGroupConnection>;
};

export type ContentfulGoalConnectionDistinctArgs = {
  field: ContentfulGoalFieldsEnum;
};

export type ContentfulGoalConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulGoalFieldsEnum;
};

export type ContentfulGoalEdge = {
  __typename?: 'ContentfulGoalEdge';
  next?: Maybe<ContentfulGoal>;
  node: ContentfulGoal;
  previous?: Maybe<ContentfulGoal>;
};

export enum ContentfulGoalFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  title = 'title',
  image___id = 'image___id',
  image___parent___id = 'image___parent___id',
  image___parent___parent___id = 'image___parent___parent___id',
  image___parent___parent___children = 'image___parent___parent___children',
  image___parent___children = 'image___parent___children',
  image___parent___children___id = 'image___parent___children___id',
  image___parent___children___children = 'image___parent___children___children',
  image___parent___internal___content = 'image___parent___internal___content',
  image___parent___internal___contentDigest = 'image___parent___internal___contentDigest',
  image___parent___internal___description = 'image___parent___internal___description',
  image___parent___internal___fieldOwners = 'image___parent___internal___fieldOwners',
  image___parent___internal___ignoreType = 'image___parent___internal___ignoreType',
  image___parent___internal___mediaType = 'image___parent___internal___mediaType',
  image___parent___internal___owner = 'image___parent___internal___owner',
  image___parent___internal___type = 'image___parent___internal___type',
  image___children = 'image___children',
  image___children___id = 'image___children___id',
  image___children___parent___id = 'image___children___parent___id',
  image___children___parent___children = 'image___children___parent___children',
  image___children___children = 'image___children___children',
  image___children___children___id = 'image___children___children___id',
  image___children___children___children = 'image___children___children___children',
  image___children___internal___content = 'image___children___internal___content',
  image___children___internal___contentDigest = 'image___children___internal___contentDigest',
  image___children___internal___description = 'image___children___internal___description',
  image___children___internal___fieldOwners = 'image___children___internal___fieldOwners',
  image___children___internal___ignoreType = 'image___children___internal___ignoreType',
  image___children___internal___mediaType = 'image___children___internal___mediaType',
  image___children___internal___owner = 'image___children___internal___owner',
  image___children___internal___type = 'image___children___internal___type',
  image___internal___content = 'image___internal___content',
  image___internal___contentDigest = 'image___internal___contentDigest',
  image___internal___description = 'image___internal___description',
  image___internal___fieldOwners = 'image___internal___fieldOwners',
  image___internal___ignoreType = 'image___internal___ignoreType',
  image___internal___mediaType = 'image___internal___mediaType',
  image___internal___owner = 'image___internal___owner',
  image___internal___type = 'image___internal___type',
  image___contentful_id = 'image___contentful_id',
  image___file___url = 'image___file___url',
  image___file___details___size = 'image___file___details___size',
  image___file___fileName = 'image___file___fileName',
  image___file___contentType = 'image___file___contentType',
  image___title = 'image___title',
  image___description = 'image___description',
  image___node_locale = 'image___node_locale',
  image___fixed___base64 = 'image___fixed___base64',
  image___fixed___tracedSVG = 'image___fixed___tracedSVG',
  image___fixed___aspectRatio = 'image___fixed___aspectRatio',
  image___fixed___width = 'image___fixed___width',
  image___fixed___height = 'image___fixed___height',
  image___fixed___src = 'image___fixed___src',
  image___fixed___srcSet = 'image___fixed___srcSet',
  image___fixed___srcWebp = 'image___fixed___srcWebp',
  image___fixed___srcSetWebp = 'image___fixed___srcSetWebp',
  image___resolutions___base64 = 'image___resolutions___base64',
  image___resolutions___tracedSVG = 'image___resolutions___tracedSVG',
  image___resolutions___aspectRatio = 'image___resolutions___aspectRatio',
  image___resolutions___width = 'image___resolutions___width',
  image___resolutions___height = 'image___resolutions___height',
  image___resolutions___src = 'image___resolutions___src',
  image___resolutions___srcSet = 'image___resolutions___srcSet',
  image___resolutions___srcWebp = 'image___resolutions___srcWebp',
  image___resolutions___srcSetWebp = 'image___resolutions___srcSetWebp',
  image___fluid___base64 = 'image___fluid___base64',
  image___fluid___tracedSVG = 'image___fluid___tracedSVG',
  image___fluid___aspectRatio = 'image___fluid___aspectRatio',
  image___fluid___src = 'image___fluid___src',
  image___fluid___srcSet = 'image___fluid___srcSet',
  image___fluid___srcWebp = 'image___fluid___srcWebp',
  image___fluid___srcSetWebp = 'image___fluid___srcSetWebp',
  image___fluid___sizes = 'image___fluid___sizes',
  image___sizes___base64 = 'image___sizes___base64',
  image___sizes___tracedSVG = 'image___sizes___tracedSVG',
  image___sizes___aspectRatio = 'image___sizes___aspectRatio',
  image___sizes___src = 'image___sizes___src',
  image___sizes___srcSet = 'image___sizes___srcSet',
  image___sizes___srcWebp = 'image___sizes___srcWebp',
  image___sizes___srcSetWebp = 'image___sizes___srcSetWebp',
  image___sizes___sizes = 'image___sizes___sizes',
  image___resize___base64 = 'image___resize___base64',
  image___resize___tracedSVG = 'image___resize___tracedSVG',
  image___resize___src = 'image___resize___src',
  image___resize___width = 'image___resize___width',
  image___resize___height = 'image___resize___height',
  image___resize___aspectRatio = 'image___resize___aspectRatio',
  home_page = 'home_page',
  home_page___id = 'home_page___id',
  home_page___parent___id = 'home_page___parent___id',
  home_page___parent___parent___id = 'home_page___parent___parent___id',
  home_page___parent___parent___children = 'home_page___parent___parent___children',
  home_page___parent___children = 'home_page___parent___children',
  home_page___parent___children___id = 'home_page___parent___children___id',
  home_page___parent___children___children = 'home_page___parent___children___children',
  home_page___parent___internal___content = 'home_page___parent___internal___content',
  home_page___parent___internal___contentDigest = 'home_page___parent___internal___contentDigest',
  home_page___parent___internal___description = 'home_page___parent___internal___description',
  home_page___parent___internal___fieldOwners = 'home_page___parent___internal___fieldOwners',
  home_page___parent___internal___ignoreType = 'home_page___parent___internal___ignoreType',
  home_page___parent___internal___mediaType = 'home_page___parent___internal___mediaType',
  home_page___parent___internal___owner = 'home_page___parent___internal___owner',
  home_page___parent___internal___type = 'home_page___parent___internal___type',
  home_page___children = 'home_page___children',
  home_page___children___id = 'home_page___children___id',
  home_page___children___parent___id = 'home_page___children___parent___id',
  home_page___children___parent___children = 'home_page___children___parent___children',
  home_page___children___children = 'home_page___children___children',
  home_page___children___children___id = 'home_page___children___children___id',
  home_page___children___children___children = 'home_page___children___children___children',
  home_page___children___internal___content = 'home_page___children___internal___content',
  home_page___children___internal___contentDigest = 'home_page___children___internal___contentDigest',
  home_page___children___internal___description = 'home_page___children___internal___description',
  home_page___children___internal___fieldOwners = 'home_page___children___internal___fieldOwners',
  home_page___children___internal___ignoreType = 'home_page___children___internal___ignoreType',
  home_page___children___internal___mediaType = 'home_page___children___internal___mediaType',
  home_page___children___internal___owner = 'home_page___children___internal___owner',
  home_page___children___internal___type = 'home_page___children___internal___type',
  home_page___internal___content = 'home_page___internal___content',
  home_page___internal___contentDigest = 'home_page___internal___contentDigest',
  home_page___internal___description = 'home_page___internal___description',
  home_page___internal___fieldOwners = 'home_page___internal___fieldOwners',
  home_page___internal___ignoreType = 'home_page___internal___ignoreType',
  home_page___internal___mediaType = 'home_page___internal___mediaType',
  home_page___internal___owner = 'home_page___internal___owner',
  home_page___internal___type = 'home_page___internal___type',
  home_page___page = 'home_page___page',
  home_page___goals = 'home_page___goals',
  home_page___goals___id = 'home_page___goals___id',
  home_page___goals___parent___id = 'home_page___goals___parent___id',
  home_page___goals___parent___children = 'home_page___goals___parent___children',
  home_page___goals___children = 'home_page___goals___children',
  home_page___goals___children___id = 'home_page___goals___children___id',
  home_page___goals___children___children = 'home_page___goals___children___children',
  home_page___goals___internal___content = 'home_page___goals___internal___content',
  home_page___goals___internal___contentDigest = 'home_page___goals___internal___contentDigest',
  home_page___goals___internal___description = 'home_page___goals___internal___description',
  home_page___goals___internal___fieldOwners = 'home_page___goals___internal___fieldOwners',
  home_page___goals___internal___ignoreType = 'home_page___goals___internal___ignoreType',
  home_page___goals___internal___mediaType = 'home_page___goals___internal___mediaType',
  home_page___goals___internal___owner = 'home_page___goals___internal___owner',
  home_page___goals___internal___type = 'home_page___goals___internal___type',
  home_page___goals___title = 'home_page___goals___title',
  home_page___goals___image___id = 'home_page___goals___image___id',
  home_page___goals___image___children = 'home_page___goals___image___children',
  home_page___goals___image___contentful_id = 'home_page___goals___image___contentful_id',
  home_page___goals___image___title = 'home_page___goals___image___title',
  home_page___goals___image___description = 'home_page___goals___image___description',
  home_page___goals___image___node_locale = 'home_page___goals___image___node_locale',
  home_page___goals___home_page = 'home_page___goals___home_page',
  home_page___goals___home_page___id = 'home_page___goals___home_page___id',
  home_page___goals___home_page___children = 'home_page___goals___home_page___children',
  home_page___goals___home_page___page = 'home_page___goals___home_page___page',
  home_page___goals___home_page___goals = 'home_page___goals___home_page___goals',
  home_page___goals___home_page___spaceId = 'home_page___goals___home_page___spaceId',
  home_page___goals___home_page___contentful_id = 'home_page___goals___home_page___contentful_id',
  home_page___goals___home_page___createdAt = 'home_page___goals___home_page___createdAt',
  home_page___goals___home_page___updatedAt = 'home_page___goals___home_page___updatedAt',
  home_page___goals___home_page___node_locale = 'home_page___goals___home_page___node_locale',
  home_page___goals___spaceId = 'home_page___goals___spaceId',
  home_page___goals___contentful_id = 'home_page___goals___contentful_id',
  home_page___goals___createdAt = 'home_page___goals___createdAt',
  home_page___goals___updatedAt = 'home_page___goals___updatedAt',
  home_page___goals___node_locale = 'home_page___goals___node_locale',
  home_page___spaceId = 'home_page___spaceId',
  home_page___contentful_id = 'home_page___contentful_id',
  home_page___createdAt = 'home_page___createdAt',
  home_page___updatedAt = 'home_page___updatedAt',
  home_page___node_locale = 'home_page___node_locale',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  node_locale = 'node_locale',
}

export type ContentfulGoalFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  home_page?: Maybe<ContentfulHomePageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulGoalFilterListInput = {
  elemMatch?: Maybe<ContentfulGoalFilterInput>;
};

export type ContentfulGoalGroupConnection = {
  __typename?: 'ContentfulGoalGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGoalEdge>;
  nodes: Array<ContentfulGoal>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulGoalSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulGoalFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHomePage = Node & {
  __typename?: 'ContentfulHomePage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  page?: Maybe<Scalars['String']>;
  goals?: Maybe<Array<Maybe<ContentfulGoal>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  node_locale?: Maybe<Scalars['String']>;
};

export type ContentfulHomePageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulHomePageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulHomePageConnection = {
  __typename?: 'ContentfulHomePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHomePageEdge>;
  nodes: Array<ContentfulHomePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHomePageGroupConnection>;
};

export type ContentfulHomePageConnectionDistinctArgs = {
  field: ContentfulHomePageFieldsEnum;
};

export type ContentfulHomePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHomePageFieldsEnum;
};

export type ContentfulHomePageEdge = {
  __typename?: 'ContentfulHomePageEdge';
  next?: Maybe<ContentfulHomePage>;
  node: ContentfulHomePage;
  previous?: Maybe<ContentfulHomePage>;
};

export enum ContentfulHomePageFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  page = 'page',
  goals = 'goals',
  goals___id = 'goals___id',
  goals___parent___id = 'goals___parent___id',
  goals___parent___parent___id = 'goals___parent___parent___id',
  goals___parent___parent___children = 'goals___parent___parent___children',
  goals___parent___children = 'goals___parent___children',
  goals___parent___children___id = 'goals___parent___children___id',
  goals___parent___children___children = 'goals___parent___children___children',
  goals___parent___internal___content = 'goals___parent___internal___content',
  goals___parent___internal___contentDigest = 'goals___parent___internal___contentDigest',
  goals___parent___internal___description = 'goals___parent___internal___description',
  goals___parent___internal___fieldOwners = 'goals___parent___internal___fieldOwners',
  goals___parent___internal___ignoreType = 'goals___parent___internal___ignoreType',
  goals___parent___internal___mediaType = 'goals___parent___internal___mediaType',
  goals___parent___internal___owner = 'goals___parent___internal___owner',
  goals___parent___internal___type = 'goals___parent___internal___type',
  goals___children = 'goals___children',
  goals___children___id = 'goals___children___id',
  goals___children___parent___id = 'goals___children___parent___id',
  goals___children___parent___children = 'goals___children___parent___children',
  goals___children___children = 'goals___children___children',
  goals___children___children___id = 'goals___children___children___id',
  goals___children___children___children = 'goals___children___children___children',
  goals___children___internal___content = 'goals___children___internal___content',
  goals___children___internal___contentDigest = 'goals___children___internal___contentDigest',
  goals___children___internal___description = 'goals___children___internal___description',
  goals___children___internal___fieldOwners = 'goals___children___internal___fieldOwners',
  goals___children___internal___ignoreType = 'goals___children___internal___ignoreType',
  goals___children___internal___mediaType = 'goals___children___internal___mediaType',
  goals___children___internal___owner = 'goals___children___internal___owner',
  goals___children___internal___type = 'goals___children___internal___type',
  goals___internal___content = 'goals___internal___content',
  goals___internal___contentDigest = 'goals___internal___contentDigest',
  goals___internal___description = 'goals___internal___description',
  goals___internal___fieldOwners = 'goals___internal___fieldOwners',
  goals___internal___ignoreType = 'goals___internal___ignoreType',
  goals___internal___mediaType = 'goals___internal___mediaType',
  goals___internal___owner = 'goals___internal___owner',
  goals___internal___type = 'goals___internal___type',
  goals___title = 'goals___title',
  goals___image___id = 'goals___image___id',
  goals___image___parent___id = 'goals___image___parent___id',
  goals___image___parent___children = 'goals___image___parent___children',
  goals___image___children = 'goals___image___children',
  goals___image___children___id = 'goals___image___children___id',
  goals___image___children___children = 'goals___image___children___children',
  goals___image___internal___content = 'goals___image___internal___content',
  goals___image___internal___contentDigest = 'goals___image___internal___contentDigest',
  goals___image___internal___description = 'goals___image___internal___description',
  goals___image___internal___fieldOwners = 'goals___image___internal___fieldOwners',
  goals___image___internal___ignoreType = 'goals___image___internal___ignoreType',
  goals___image___internal___mediaType = 'goals___image___internal___mediaType',
  goals___image___internal___owner = 'goals___image___internal___owner',
  goals___image___internal___type = 'goals___image___internal___type',
  goals___image___contentful_id = 'goals___image___contentful_id',
  goals___image___file___url = 'goals___image___file___url',
  goals___image___file___fileName = 'goals___image___file___fileName',
  goals___image___file___contentType = 'goals___image___file___contentType',
  goals___image___title = 'goals___image___title',
  goals___image___description = 'goals___image___description',
  goals___image___node_locale = 'goals___image___node_locale',
  goals___image___fixed___base64 = 'goals___image___fixed___base64',
  goals___image___fixed___tracedSVG = 'goals___image___fixed___tracedSVG',
  goals___image___fixed___aspectRatio = 'goals___image___fixed___aspectRatio',
  goals___image___fixed___width = 'goals___image___fixed___width',
  goals___image___fixed___height = 'goals___image___fixed___height',
  goals___image___fixed___src = 'goals___image___fixed___src',
  goals___image___fixed___srcSet = 'goals___image___fixed___srcSet',
  goals___image___fixed___srcWebp = 'goals___image___fixed___srcWebp',
  goals___image___fixed___srcSetWebp = 'goals___image___fixed___srcSetWebp',
  goals___image___resolutions___base64 = 'goals___image___resolutions___base64',
  goals___image___resolutions___tracedSVG = 'goals___image___resolutions___tracedSVG',
  goals___image___resolutions___aspectRatio = 'goals___image___resolutions___aspectRatio',
  goals___image___resolutions___width = 'goals___image___resolutions___width',
  goals___image___resolutions___height = 'goals___image___resolutions___height',
  goals___image___resolutions___src = 'goals___image___resolutions___src',
  goals___image___resolutions___srcSet = 'goals___image___resolutions___srcSet',
  goals___image___resolutions___srcWebp = 'goals___image___resolutions___srcWebp',
  goals___image___resolutions___srcSetWebp = 'goals___image___resolutions___srcSetWebp',
  goals___image___fluid___base64 = 'goals___image___fluid___base64',
  goals___image___fluid___tracedSVG = 'goals___image___fluid___tracedSVG',
  goals___image___fluid___aspectRatio = 'goals___image___fluid___aspectRatio',
  goals___image___fluid___src = 'goals___image___fluid___src',
  goals___image___fluid___srcSet = 'goals___image___fluid___srcSet',
  goals___image___fluid___srcWebp = 'goals___image___fluid___srcWebp',
  goals___image___fluid___srcSetWebp = 'goals___image___fluid___srcSetWebp',
  goals___image___fluid___sizes = 'goals___image___fluid___sizes',
  goals___image___sizes___base64 = 'goals___image___sizes___base64',
  goals___image___sizes___tracedSVG = 'goals___image___sizes___tracedSVG',
  goals___image___sizes___aspectRatio = 'goals___image___sizes___aspectRatio',
  goals___image___sizes___src = 'goals___image___sizes___src',
  goals___image___sizes___srcSet = 'goals___image___sizes___srcSet',
  goals___image___sizes___srcWebp = 'goals___image___sizes___srcWebp',
  goals___image___sizes___srcSetWebp = 'goals___image___sizes___srcSetWebp',
  goals___image___sizes___sizes = 'goals___image___sizes___sizes',
  goals___image___resize___base64 = 'goals___image___resize___base64',
  goals___image___resize___tracedSVG = 'goals___image___resize___tracedSVG',
  goals___image___resize___src = 'goals___image___resize___src',
  goals___image___resize___width = 'goals___image___resize___width',
  goals___image___resize___height = 'goals___image___resize___height',
  goals___image___resize___aspectRatio = 'goals___image___resize___aspectRatio',
  goals___home_page = 'goals___home_page',
  goals___home_page___id = 'goals___home_page___id',
  goals___home_page___parent___id = 'goals___home_page___parent___id',
  goals___home_page___parent___children = 'goals___home_page___parent___children',
  goals___home_page___children = 'goals___home_page___children',
  goals___home_page___children___id = 'goals___home_page___children___id',
  goals___home_page___children___children = 'goals___home_page___children___children',
  goals___home_page___internal___content = 'goals___home_page___internal___content',
  goals___home_page___internal___contentDigest = 'goals___home_page___internal___contentDigest',
  goals___home_page___internal___description = 'goals___home_page___internal___description',
  goals___home_page___internal___fieldOwners = 'goals___home_page___internal___fieldOwners',
  goals___home_page___internal___ignoreType = 'goals___home_page___internal___ignoreType',
  goals___home_page___internal___mediaType = 'goals___home_page___internal___mediaType',
  goals___home_page___internal___owner = 'goals___home_page___internal___owner',
  goals___home_page___internal___type = 'goals___home_page___internal___type',
  goals___home_page___page = 'goals___home_page___page',
  goals___home_page___goals = 'goals___home_page___goals',
  goals___home_page___goals___id = 'goals___home_page___goals___id',
  goals___home_page___goals___children = 'goals___home_page___goals___children',
  goals___home_page___goals___title = 'goals___home_page___goals___title',
  goals___home_page___goals___home_page = 'goals___home_page___goals___home_page',
  goals___home_page___goals___spaceId = 'goals___home_page___goals___spaceId',
  goals___home_page___goals___contentful_id = 'goals___home_page___goals___contentful_id',
  goals___home_page___goals___createdAt = 'goals___home_page___goals___createdAt',
  goals___home_page___goals___updatedAt = 'goals___home_page___goals___updatedAt',
  goals___home_page___goals___node_locale = 'goals___home_page___goals___node_locale',
  goals___home_page___spaceId = 'goals___home_page___spaceId',
  goals___home_page___contentful_id = 'goals___home_page___contentful_id',
  goals___home_page___createdAt = 'goals___home_page___createdAt',
  goals___home_page___updatedAt = 'goals___home_page___updatedAt',
  goals___home_page___node_locale = 'goals___home_page___node_locale',
  goals___spaceId = 'goals___spaceId',
  goals___contentful_id = 'goals___contentful_id',
  goals___createdAt = 'goals___createdAt',
  goals___updatedAt = 'goals___updatedAt',
  goals___node_locale = 'goals___node_locale',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  node_locale = 'node_locale',
}

export type ContentfulHomePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  page?: Maybe<StringQueryOperatorInput>;
  goals?: Maybe<ContentfulGoalFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHomePageFilterListInput = {
  elemMatch?: Maybe<ContentfulHomePageFilterInput>;
};

export type ContentfulHomePageGroupConnection = {
  __typename?: 'ContentfulHomePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHomePageEdge>;
  nodes: Array<ContentfulHomePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHomePageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHomePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  FACE = 'FACE',
  FACES = 'FACES',
  CENTER = 'CENTER',
}

export enum ContentfulImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export type ContentfulMember = Node & {
  __typename?: 'ContentfulMember';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<ContentfulAsset>;
  avatar?: Maybe<ContentfulAsset>;
  article?: Maybe<Array<Maybe<ContentfulArticle>>>;
  about_page?: Maybe<Array<Maybe<ContentfulAboutPage>>>;
  description?: Maybe<ContentfulMemberDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulMemberDescriptionTextNode?: Maybe<
    ContentfulMemberDescriptionTextNode
  >;
};

export type ContentfulMemberCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulMemberUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulMemberConnection = {
  __typename?: 'ContentfulMemberConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMemberEdge>;
  nodes: Array<ContentfulMember>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMemberGroupConnection>;
};

export type ContentfulMemberConnectionDistinctArgs = {
  field: ContentfulMemberFieldsEnum;
};

export type ContentfulMemberConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMemberFieldsEnum;
};

export type ContentfulMemberDescriptionTextNode = Node & {
  __typename?: 'contentfulMemberDescriptionTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulMemberDescriptionTextNodeConnection = {
  __typename?: 'contentfulMemberDescriptionTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMemberDescriptionTextNodeEdge>;
  nodes: Array<ContentfulMemberDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMemberDescriptionTextNodeGroupConnection>;
};

export type ContentfulMemberDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulMemberDescriptionTextNodeFieldsEnum;
};

export type ContentfulMemberDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMemberDescriptionTextNodeFieldsEnum;
};

export type ContentfulMemberDescriptionTextNodeEdge = {
  __typename?: 'contentfulMemberDescriptionTextNodeEdge';
  next?: Maybe<ContentfulMemberDescriptionTextNode>;
  node: ContentfulMemberDescriptionTextNode;
  previous?: Maybe<ContentfulMemberDescriptionTextNode>;
};

export enum ContentfulMemberDescriptionTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  description = 'description',
  childMarkdownRemark___id = 'childMarkdownRemark___id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark___frontmatter___title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark___excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark___html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark___htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark___excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark___headings',
  childMarkdownRemark___headings___value = 'childMarkdownRemark___headings___value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark___headings___depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark___timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark___tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark___wordCount___paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark___wordCount___sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark___wordCount___words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark___parent___id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark___parent___parent___id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark___parent___parent___children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark___parent___children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark___parent___children___id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark___parent___children___children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark___parent___internal___content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark___parent___internal___description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark___parent___internal___mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark___parent___internal___owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark___parent___internal___type',
  childMarkdownRemark___children = 'childMarkdownRemark___children',
  childMarkdownRemark___children___id = 'childMarkdownRemark___children___id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark___children___parent___id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark___children___parent___children',
  childMarkdownRemark___children___children = 'childMarkdownRemark___children___children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark___children___children___id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark___children___children___children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark___children___internal___content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark___children___internal___description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark___children___internal___ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark___children___internal___mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark___children___internal___owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark___children___internal___type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark___internal___content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark___internal___contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark___internal___description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark___internal___ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark___internal___mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark___internal___owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark___internal___type',
}

export type ContentfulMemberDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulMemberDescriptionTextNodeGroupConnection = {
  __typename?: 'contentfulMemberDescriptionTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMemberDescriptionTextNodeEdge>;
  nodes: Array<ContentfulMemberDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMemberDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMemberDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMemberEdge = {
  __typename?: 'ContentfulMemberEdge';
  next?: Maybe<ContentfulMember>;
  node: ContentfulMember;
  previous?: Maybe<ContentfulMember>;
};

export enum ContentfulMemberFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  photo___id = 'photo___id',
  photo___parent___id = 'photo___parent___id',
  photo___parent___parent___id = 'photo___parent___parent___id',
  photo___parent___parent___children = 'photo___parent___parent___children',
  photo___parent___children = 'photo___parent___children',
  photo___parent___children___id = 'photo___parent___children___id',
  photo___parent___children___children = 'photo___parent___children___children',
  photo___parent___internal___content = 'photo___parent___internal___content',
  photo___parent___internal___contentDigest = 'photo___parent___internal___contentDigest',
  photo___parent___internal___description = 'photo___parent___internal___description',
  photo___parent___internal___fieldOwners = 'photo___parent___internal___fieldOwners',
  photo___parent___internal___ignoreType = 'photo___parent___internal___ignoreType',
  photo___parent___internal___mediaType = 'photo___parent___internal___mediaType',
  photo___parent___internal___owner = 'photo___parent___internal___owner',
  photo___parent___internal___type = 'photo___parent___internal___type',
  photo___children = 'photo___children',
  photo___children___id = 'photo___children___id',
  photo___children___parent___id = 'photo___children___parent___id',
  photo___children___parent___children = 'photo___children___parent___children',
  photo___children___children = 'photo___children___children',
  photo___children___children___id = 'photo___children___children___id',
  photo___children___children___children = 'photo___children___children___children',
  photo___children___internal___content = 'photo___children___internal___content',
  photo___children___internal___contentDigest = 'photo___children___internal___contentDigest',
  photo___children___internal___description = 'photo___children___internal___description',
  photo___children___internal___fieldOwners = 'photo___children___internal___fieldOwners',
  photo___children___internal___ignoreType = 'photo___children___internal___ignoreType',
  photo___children___internal___mediaType = 'photo___children___internal___mediaType',
  photo___children___internal___owner = 'photo___children___internal___owner',
  photo___children___internal___type = 'photo___children___internal___type',
  photo___internal___content = 'photo___internal___content',
  photo___internal___contentDigest = 'photo___internal___contentDigest',
  photo___internal___description = 'photo___internal___description',
  photo___internal___fieldOwners = 'photo___internal___fieldOwners',
  photo___internal___ignoreType = 'photo___internal___ignoreType',
  photo___internal___mediaType = 'photo___internal___mediaType',
  photo___internal___owner = 'photo___internal___owner',
  photo___internal___type = 'photo___internal___type',
  photo___contentful_id = 'photo___contentful_id',
  photo___file___url = 'photo___file___url',
  photo___file___details___size = 'photo___file___details___size',
  photo___file___fileName = 'photo___file___fileName',
  photo___file___contentType = 'photo___file___contentType',
  photo___title = 'photo___title',
  photo___description = 'photo___description',
  photo___node_locale = 'photo___node_locale',
  photo___fixed___base64 = 'photo___fixed___base64',
  photo___fixed___tracedSVG = 'photo___fixed___tracedSVG',
  photo___fixed___aspectRatio = 'photo___fixed___aspectRatio',
  photo___fixed___width = 'photo___fixed___width',
  photo___fixed___height = 'photo___fixed___height',
  photo___fixed___src = 'photo___fixed___src',
  photo___fixed___srcSet = 'photo___fixed___srcSet',
  photo___fixed___srcWebp = 'photo___fixed___srcWebp',
  photo___fixed___srcSetWebp = 'photo___fixed___srcSetWebp',
  photo___resolutions___base64 = 'photo___resolutions___base64',
  photo___resolutions___tracedSVG = 'photo___resolutions___tracedSVG',
  photo___resolutions___aspectRatio = 'photo___resolutions___aspectRatio',
  photo___resolutions___width = 'photo___resolutions___width',
  photo___resolutions___height = 'photo___resolutions___height',
  photo___resolutions___src = 'photo___resolutions___src',
  photo___resolutions___srcSet = 'photo___resolutions___srcSet',
  photo___resolutions___srcWebp = 'photo___resolutions___srcWebp',
  photo___resolutions___srcSetWebp = 'photo___resolutions___srcSetWebp',
  photo___fluid___base64 = 'photo___fluid___base64',
  photo___fluid___tracedSVG = 'photo___fluid___tracedSVG',
  photo___fluid___aspectRatio = 'photo___fluid___aspectRatio',
  photo___fluid___src = 'photo___fluid___src',
  photo___fluid___srcSet = 'photo___fluid___srcSet',
  photo___fluid___srcWebp = 'photo___fluid___srcWebp',
  photo___fluid___srcSetWebp = 'photo___fluid___srcSetWebp',
  photo___fluid___sizes = 'photo___fluid___sizes',
  photo___sizes___base64 = 'photo___sizes___base64',
  photo___sizes___tracedSVG = 'photo___sizes___tracedSVG',
  photo___sizes___aspectRatio = 'photo___sizes___aspectRatio',
  photo___sizes___src = 'photo___sizes___src',
  photo___sizes___srcSet = 'photo___sizes___srcSet',
  photo___sizes___srcWebp = 'photo___sizes___srcWebp',
  photo___sizes___srcSetWebp = 'photo___sizes___srcSetWebp',
  photo___sizes___sizes = 'photo___sizes___sizes',
  photo___resize___base64 = 'photo___resize___base64',
  photo___resize___tracedSVG = 'photo___resize___tracedSVG',
  photo___resize___src = 'photo___resize___src',
  photo___resize___width = 'photo___resize___width',
  photo___resize___height = 'photo___resize___height',
  photo___resize___aspectRatio = 'photo___resize___aspectRatio',
  avatar___id = 'avatar___id',
  avatar___parent___id = 'avatar___parent___id',
  avatar___parent___parent___id = 'avatar___parent___parent___id',
  avatar___parent___parent___children = 'avatar___parent___parent___children',
  avatar___parent___children = 'avatar___parent___children',
  avatar___parent___children___id = 'avatar___parent___children___id',
  avatar___parent___children___children = 'avatar___parent___children___children',
  avatar___parent___internal___content = 'avatar___parent___internal___content',
  avatar___parent___internal___contentDigest = 'avatar___parent___internal___contentDigest',
  avatar___parent___internal___description = 'avatar___parent___internal___description',
  avatar___parent___internal___fieldOwners = 'avatar___parent___internal___fieldOwners',
  avatar___parent___internal___ignoreType = 'avatar___parent___internal___ignoreType',
  avatar___parent___internal___mediaType = 'avatar___parent___internal___mediaType',
  avatar___parent___internal___owner = 'avatar___parent___internal___owner',
  avatar___parent___internal___type = 'avatar___parent___internal___type',
  avatar___children = 'avatar___children',
  avatar___children___id = 'avatar___children___id',
  avatar___children___parent___id = 'avatar___children___parent___id',
  avatar___children___parent___children = 'avatar___children___parent___children',
  avatar___children___children = 'avatar___children___children',
  avatar___children___children___id = 'avatar___children___children___id',
  avatar___children___children___children = 'avatar___children___children___children',
  avatar___children___internal___content = 'avatar___children___internal___content',
  avatar___children___internal___contentDigest = 'avatar___children___internal___contentDigest',
  avatar___children___internal___description = 'avatar___children___internal___description',
  avatar___children___internal___fieldOwners = 'avatar___children___internal___fieldOwners',
  avatar___children___internal___ignoreType = 'avatar___children___internal___ignoreType',
  avatar___children___internal___mediaType = 'avatar___children___internal___mediaType',
  avatar___children___internal___owner = 'avatar___children___internal___owner',
  avatar___children___internal___type = 'avatar___children___internal___type',
  avatar___internal___content = 'avatar___internal___content',
  avatar___internal___contentDigest = 'avatar___internal___contentDigest',
  avatar___internal___description = 'avatar___internal___description',
  avatar___internal___fieldOwners = 'avatar___internal___fieldOwners',
  avatar___internal___ignoreType = 'avatar___internal___ignoreType',
  avatar___internal___mediaType = 'avatar___internal___mediaType',
  avatar___internal___owner = 'avatar___internal___owner',
  avatar___internal___type = 'avatar___internal___type',
  avatar___contentful_id = 'avatar___contentful_id',
  avatar___file___url = 'avatar___file___url',
  avatar___file___details___size = 'avatar___file___details___size',
  avatar___file___fileName = 'avatar___file___fileName',
  avatar___file___contentType = 'avatar___file___contentType',
  avatar___title = 'avatar___title',
  avatar___description = 'avatar___description',
  avatar___node_locale = 'avatar___node_locale',
  avatar___fixed___base64 = 'avatar___fixed___base64',
  avatar___fixed___tracedSVG = 'avatar___fixed___tracedSVG',
  avatar___fixed___aspectRatio = 'avatar___fixed___aspectRatio',
  avatar___fixed___width = 'avatar___fixed___width',
  avatar___fixed___height = 'avatar___fixed___height',
  avatar___fixed___src = 'avatar___fixed___src',
  avatar___fixed___srcSet = 'avatar___fixed___srcSet',
  avatar___fixed___srcWebp = 'avatar___fixed___srcWebp',
  avatar___fixed___srcSetWebp = 'avatar___fixed___srcSetWebp',
  avatar___resolutions___base64 = 'avatar___resolutions___base64',
  avatar___resolutions___tracedSVG = 'avatar___resolutions___tracedSVG',
  avatar___resolutions___aspectRatio = 'avatar___resolutions___aspectRatio',
  avatar___resolutions___width = 'avatar___resolutions___width',
  avatar___resolutions___height = 'avatar___resolutions___height',
  avatar___resolutions___src = 'avatar___resolutions___src',
  avatar___resolutions___srcSet = 'avatar___resolutions___srcSet',
  avatar___resolutions___srcWebp = 'avatar___resolutions___srcWebp',
  avatar___resolutions___srcSetWebp = 'avatar___resolutions___srcSetWebp',
  avatar___fluid___base64 = 'avatar___fluid___base64',
  avatar___fluid___tracedSVG = 'avatar___fluid___tracedSVG',
  avatar___fluid___aspectRatio = 'avatar___fluid___aspectRatio',
  avatar___fluid___src = 'avatar___fluid___src',
  avatar___fluid___srcSet = 'avatar___fluid___srcSet',
  avatar___fluid___srcWebp = 'avatar___fluid___srcWebp',
  avatar___fluid___srcSetWebp = 'avatar___fluid___srcSetWebp',
  avatar___fluid___sizes = 'avatar___fluid___sizes',
  avatar___sizes___base64 = 'avatar___sizes___base64',
  avatar___sizes___tracedSVG = 'avatar___sizes___tracedSVG',
  avatar___sizes___aspectRatio = 'avatar___sizes___aspectRatio',
  avatar___sizes___src = 'avatar___sizes___src',
  avatar___sizes___srcSet = 'avatar___sizes___srcSet',
  avatar___sizes___srcWebp = 'avatar___sizes___srcWebp',
  avatar___sizes___srcSetWebp = 'avatar___sizes___srcSetWebp',
  avatar___sizes___sizes = 'avatar___sizes___sizes',
  avatar___resize___base64 = 'avatar___resize___base64',
  avatar___resize___tracedSVG = 'avatar___resize___tracedSVG',
  avatar___resize___src = 'avatar___resize___src',
  avatar___resize___width = 'avatar___resize___width',
  avatar___resize___height = 'avatar___resize___height',
  avatar___resize___aspectRatio = 'avatar___resize___aspectRatio',
  article = 'article',
  article___id = 'article___id',
  article___parent___id = 'article___parent___id',
  article___parent___parent___id = 'article___parent___parent___id',
  article___parent___parent___children = 'article___parent___parent___children',
  article___parent___children = 'article___parent___children',
  article___parent___children___id = 'article___parent___children___id',
  article___parent___children___children = 'article___parent___children___children',
  article___parent___internal___content = 'article___parent___internal___content',
  article___parent___internal___contentDigest = 'article___parent___internal___contentDigest',
  article___parent___internal___description = 'article___parent___internal___description',
  article___parent___internal___fieldOwners = 'article___parent___internal___fieldOwners',
  article___parent___internal___ignoreType = 'article___parent___internal___ignoreType',
  article___parent___internal___mediaType = 'article___parent___internal___mediaType',
  article___parent___internal___owner = 'article___parent___internal___owner',
  article___parent___internal___type = 'article___parent___internal___type',
  article___children = 'article___children',
  article___children___id = 'article___children___id',
  article___children___parent___id = 'article___children___parent___id',
  article___children___parent___children = 'article___children___parent___children',
  article___children___children = 'article___children___children',
  article___children___children___id = 'article___children___children___id',
  article___children___children___children = 'article___children___children___children',
  article___children___internal___content = 'article___children___internal___content',
  article___children___internal___contentDigest = 'article___children___internal___contentDigest',
  article___children___internal___description = 'article___children___internal___description',
  article___children___internal___fieldOwners = 'article___children___internal___fieldOwners',
  article___children___internal___ignoreType = 'article___children___internal___ignoreType',
  article___children___internal___mediaType = 'article___children___internal___mediaType',
  article___children___internal___owner = 'article___children___internal___owner',
  article___children___internal___type = 'article___children___internal___type',
  article___internal___content = 'article___internal___content',
  article___internal___contentDigest = 'article___internal___contentDigest',
  article___internal___description = 'article___internal___description',
  article___internal___fieldOwners = 'article___internal___fieldOwners',
  article___internal___ignoreType = 'article___internal___ignoreType',
  article___internal___mediaType = 'article___internal___mediaType',
  article___internal___owner = 'article___internal___owner',
  article___internal___type = 'article___internal___type',
  article___title = 'article___title',
  article___slug = 'article___slug',
  article___date = 'article___date',
  article___category___id = 'article___category___id',
  article___category___parent___id = 'article___category___parent___id',
  article___category___parent___children = 'article___category___parent___children',
  article___category___children = 'article___category___children',
  article___category___children___id = 'article___category___children___id',
  article___category___children___children = 'article___category___children___children',
  article___category___internal___content = 'article___category___internal___content',
  article___category___internal___contentDigest = 'article___category___internal___contentDigest',
  article___category___internal___description = 'article___category___internal___description',
  article___category___internal___fieldOwners = 'article___category___internal___fieldOwners',
  article___category___internal___ignoreType = 'article___category___internal___ignoreType',
  article___category___internal___mediaType = 'article___category___internal___mediaType',
  article___category___internal___owner = 'article___category___internal___owner',
  article___category___internal___type = 'article___category___internal___type',
  article___category___title = 'article___category___title',
  article___category___image___id = 'article___category___image___id',
  article___category___image___children = 'article___category___image___children',
  article___category___image___contentful_id = 'article___category___image___contentful_id',
  article___category___image___title = 'article___category___image___title',
  article___category___image___description = 'article___category___image___description',
  article___category___image___node_locale = 'article___category___image___node_locale',
  article___category___spaceId = 'article___category___spaceId',
  article___category___contentful_id = 'article___category___contentful_id',
  article___category___createdAt = 'article___category___createdAt',
  article___category___updatedAt = 'article___category___updatedAt',
  article___category___node_locale = 'article___category___node_locale',
  article___category___article = 'article___category___article',
  article___category___article___id = 'article___category___article___id',
  article___category___article___children = 'article___category___article___children',
  article___category___article___title = 'article___category___article___title',
  article___category___article___slug = 'article___category___article___slug',
  article___category___article___date = 'article___category___article___date',
  article___category___article___spaceId = 'article___category___article___spaceId',
  article___category___article___contentful_id = 'article___category___article___contentful_id',
  article___category___article___createdAt = 'article___category___article___createdAt',
  article___category___article___updatedAt = 'article___category___article___updatedAt',
  article___category___article___node_locale = 'article___category___article___node_locale',
  article___author___id = 'article___author___id',
  article___author___parent___id = 'article___author___parent___id',
  article___author___parent___children = 'article___author___parent___children',
  article___author___children = 'article___author___children',
  article___author___children___id = 'article___author___children___id',
  article___author___children___children = 'article___author___children___children',
  article___author___internal___content = 'article___author___internal___content',
  article___author___internal___contentDigest = 'article___author___internal___contentDigest',
  article___author___internal___description = 'article___author___internal___description',
  article___author___internal___fieldOwners = 'article___author___internal___fieldOwners',
  article___author___internal___ignoreType = 'article___author___internal___ignoreType',
  article___author___internal___mediaType = 'article___author___internal___mediaType',
  article___author___internal___owner = 'article___author___internal___owner',
  article___author___internal___type = 'article___author___internal___type',
  article___author___name = 'article___author___name',
  article___author___photo___id = 'article___author___photo___id',
  article___author___photo___children = 'article___author___photo___children',
  article___author___photo___contentful_id = 'article___author___photo___contentful_id',
  article___author___photo___title = 'article___author___photo___title',
  article___author___photo___description = 'article___author___photo___description',
  article___author___photo___node_locale = 'article___author___photo___node_locale',
  article___author___avatar___id = 'article___author___avatar___id',
  article___author___avatar___children = 'article___author___avatar___children',
  article___author___avatar___contentful_id = 'article___author___avatar___contentful_id',
  article___author___avatar___title = 'article___author___avatar___title',
  article___author___avatar___description = 'article___author___avatar___description',
  article___author___avatar___node_locale = 'article___author___avatar___node_locale',
  article___author___article = 'article___author___article',
  article___author___article___id = 'article___author___article___id',
  article___author___article___children = 'article___author___article___children',
  article___author___article___title = 'article___author___article___title',
  article___author___article___slug = 'article___author___article___slug',
  article___author___article___date = 'article___author___article___date',
  article___author___article___spaceId = 'article___author___article___spaceId',
  article___author___article___contentful_id = 'article___author___article___contentful_id',
  article___author___article___createdAt = 'article___author___article___createdAt',
  article___author___article___updatedAt = 'article___author___article___updatedAt',
  article___author___article___node_locale = 'article___author___article___node_locale',
  article___author___about_page = 'article___author___about_page',
  article___author___about_page___id = 'article___author___about_page___id',
  article___author___about_page___children = 'article___author___about_page___children',
  article___author___about_page___page = 'article___author___about_page___page',
  article___author___about_page___teamMembers = 'article___author___about_page___teamMembers',
  article___author___about_page___spaceId = 'article___author___about_page___spaceId',
  article___author___about_page___contentful_id = 'article___author___about_page___contentful_id',
  article___author___about_page___createdAt = 'article___author___about_page___createdAt',
  article___author___about_page___updatedAt = 'article___author___about_page___updatedAt',
  article___author___about_page___node_locale = 'article___author___about_page___node_locale',
  article___author___description___id = 'article___author___description___id',
  article___author___description___children = 'article___author___description___children',
  article___author___description___description = 'article___author___description___description',
  article___author___spaceId = 'article___author___spaceId',
  article___author___contentful_id = 'article___author___contentful_id',
  article___author___createdAt = 'article___author___createdAt',
  article___author___updatedAt = 'article___author___updatedAt',
  article___author___node_locale = 'article___author___node_locale',
  article___author___childContentfulMemberDescriptionTextNode___id = 'article___author___childContentfulMemberDescriptionTextNode___id',
  article___author___childContentfulMemberDescriptionTextNode___children = 'article___author___childContentfulMemberDescriptionTextNode___children',
  article___author___childContentfulMemberDescriptionTextNode___description = 'article___author___childContentfulMemberDescriptionTextNode___description',
  article___content___id = 'article___content___id',
  article___content___parent___id = 'article___content___parent___id',
  article___content___parent___children = 'article___content___parent___children',
  article___content___children = 'article___content___children',
  article___content___children___id = 'article___content___children___id',
  article___content___children___children = 'article___content___children___children',
  article___content___internal___content = 'article___content___internal___content',
  article___content___internal___contentDigest = 'article___content___internal___contentDigest',
  article___content___internal___description = 'article___content___internal___description',
  article___content___internal___fieldOwners = 'article___content___internal___fieldOwners',
  article___content___internal___ignoreType = 'article___content___internal___ignoreType',
  article___content___internal___mediaType = 'article___content___internal___mediaType',
  article___content___internal___owner = 'article___content___internal___owner',
  article___content___internal___type = 'article___content___internal___type',
  article___content___content = 'article___content___content',
  article___content___nodeType = 'article___content___nodeType',
  article___content___json = 'article___content___json',
  article___spaceId = 'article___spaceId',
  article___contentful_id = 'article___contentful_id',
  article___createdAt = 'article___createdAt',
  article___updatedAt = 'article___updatedAt',
  article___node_locale = 'article___node_locale',
  article___childContentfulArticleContentRichTextNode___id = 'article___childContentfulArticleContentRichTextNode___id',
  article___childContentfulArticleContentRichTextNode___parent___id = 'article___childContentfulArticleContentRichTextNode___parent___id',
  article___childContentfulArticleContentRichTextNode___parent___children = 'article___childContentfulArticleContentRichTextNode___parent___children',
  article___childContentfulArticleContentRichTextNode___children = 'article___childContentfulArticleContentRichTextNode___children',
  article___childContentfulArticleContentRichTextNode___children___id = 'article___childContentfulArticleContentRichTextNode___children___id',
  article___childContentfulArticleContentRichTextNode___children___children = 'article___childContentfulArticleContentRichTextNode___children___children',
  article___childContentfulArticleContentRichTextNode___internal___content = 'article___childContentfulArticleContentRichTextNode___internal___content',
  article___childContentfulArticleContentRichTextNode___internal___contentDigest = 'article___childContentfulArticleContentRichTextNode___internal___contentDigest',
  article___childContentfulArticleContentRichTextNode___internal___description = 'article___childContentfulArticleContentRichTextNode___internal___description',
  article___childContentfulArticleContentRichTextNode___internal___fieldOwners = 'article___childContentfulArticleContentRichTextNode___internal___fieldOwners',
  article___childContentfulArticleContentRichTextNode___internal___ignoreType = 'article___childContentfulArticleContentRichTextNode___internal___ignoreType',
  article___childContentfulArticleContentRichTextNode___internal___mediaType = 'article___childContentfulArticleContentRichTextNode___internal___mediaType',
  article___childContentfulArticleContentRichTextNode___internal___owner = 'article___childContentfulArticleContentRichTextNode___internal___owner',
  article___childContentfulArticleContentRichTextNode___internal___type = 'article___childContentfulArticleContentRichTextNode___internal___type',
  article___childContentfulArticleContentRichTextNode___content = 'article___childContentfulArticleContentRichTextNode___content',
  article___childContentfulArticleContentRichTextNode___nodeType = 'article___childContentfulArticleContentRichTextNode___nodeType',
  article___childContentfulArticleContentRichTextNode___json = 'article___childContentfulArticleContentRichTextNode___json',
  about_page = 'about_page',
  about_page___id = 'about_page___id',
  about_page___parent___id = 'about_page___parent___id',
  about_page___parent___parent___id = 'about_page___parent___parent___id',
  about_page___parent___parent___children = 'about_page___parent___parent___children',
  about_page___parent___children = 'about_page___parent___children',
  about_page___parent___children___id = 'about_page___parent___children___id',
  about_page___parent___children___children = 'about_page___parent___children___children',
  about_page___parent___internal___content = 'about_page___parent___internal___content',
  about_page___parent___internal___contentDigest = 'about_page___parent___internal___contentDigest',
  about_page___parent___internal___description = 'about_page___parent___internal___description',
  about_page___parent___internal___fieldOwners = 'about_page___parent___internal___fieldOwners',
  about_page___parent___internal___ignoreType = 'about_page___parent___internal___ignoreType',
  about_page___parent___internal___mediaType = 'about_page___parent___internal___mediaType',
  about_page___parent___internal___owner = 'about_page___parent___internal___owner',
  about_page___parent___internal___type = 'about_page___parent___internal___type',
  about_page___children = 'about_page___children',
  about_page___children___id = 'about_page___children___id',
  about_page___children___parent___id = 'about_page___children___parent___id',
  about_page___children___parent___children = 'about_page___children___parent___children',
  about_page___children___children = 'about_page___children___children',
  about_page___children___children___id = 'about_page___children___children___id',
  about_page___children___children___children = 'about_page___children___children___children',
  about_page___children___internal___content = 'about_page___children___internal___content',
  about_page___children___internal___contentDigest = 'about_page___children___internal___contentDigest',
  about_page___children___internal___description = 'about_page___children___internal___description',
  about_page___children___internal___fieldOwners = 'about_page___children___internal___fieldOwners',
  about_page___children___internal___ignoreType = 'about_page___children___internal___ignoreType',
  about_page___children___internal___mediaType = 'about_page___children___internal___mediaType',
  about_page___children___internal___owner = 'about_page___children___internal___owner',
  about_page___children___internal___type = 'about_page___children___internal___type',
  about_page___internal___content = 'about_page___internal___content',
  about_page___internal___contentDigest = 'about_page___internal___contentDigest',
  about_page___internal___description = 'about_page___internal___description',
  about_page___internal___fieldOwners = 'about_page___internal___fieldOwners',
  about_page___internal___ignoreType = 'about_page___internal___ignoreType',
  about_page___internal___mediaType = 'about_page___internal___mediaType',
  about_page___internal___owner = 'about_page___internal___owner',
  about_page___internal___type = 'about_page___internal___type',
  about_page___page = 'about_page___page',
  about_page___teamMembers = 'about_page___teamMembers',
  about_page___teamMembers___id = 'about_page___teamMembers___id',
  about_page___teamMembers___parent___id = 'about_page___teamMembers___parent___id',
  about_page___teamMembers___parent___children = 'about_page___teamMembers___parent___children',
  about_page___teamMembers___children = 'about_page___teamMembers___children',
  about_page___teamMembers___children___id = 'about_page___teamMembers___children___id',
  about_page___teamMembers___children___children = 'about_page___teamMembers___children___children',
  about_page___teamMembers___internal___content = 'about_page___teamMembers___internal___content',
  about_page___teamMembers___internal___contentDigest = 'about_page___teamMembers___internal___contentDigest',
  about_page___teamMembers___internal___description = 'about_page___teamMembers___internal___description',
  about_page___teamMembers___internal___fieldOwners = 'about_page___teamMembers___internal___fieldOwners',
  about_page___teamMembers___internal___ignoreType = 'about_page___teamMembers___internal___ignoreType',
  about_page___teamMembers___internal___mediaType = 'about_page___teamMembers___internal___mediaType',
  about_page___teamMembers___internal___owner = 'about_page___teamMembers___internal___owner',
  about_page___teamMembers___internal___type = 'about_page___teamMembers___internal___type',
  about_page___teamMembers___name = 'about_page___teamMembers___name',
  about_page___teamMembers___photo___id = 'about_page___teamMembers___photo___id',
  about_page___teamMembers___photo___children = 'about_page___teamMembers___photo___children',
  about_page___teamMembers___photo___contentful_id = 'about_page___teamMembers___photo___contentful_id',
  about_page___teamMembers___photo___title = 'about_page___teamMembers___photo___title',
  about_page___teamMembers___photo___description = 'about_page___teamMembers___photo___description',
  about_page___teamMembers___photo___node_locale = 'about_page___teamMembers___photo___node_locale',
  about_page___teamMembers___avatar___id = 'about_page___teamMembers___avatar___id',
  about_page___teamMembers___avatar___children = 'about_page___teamMembers___avatar___children',
  about_page___teamMembers___avatar___contentful_id = 'about_page___teamMembers___avatar___contentful_id',
  about_page___teamMembers___avatar___title = 'about_page___teamMembers___avatar___title',
  about_page___teamMembers___avatar___description = 'about_page___teamMembers___avatar___description',
  about_page___teamMembers___avatar___node_locale = 'about_page___teamMembers___avatar___node_locale',
  about_page___teamMembers___article = 'about_page___teamMembers___article',
  about_page___teamMembers___article___id = 'about_page___teamMembers___article___id',
  about_page___teamMembers___article___children = 'about_page___teamMembers___article___children',
  about_page___teamMembers___article___title = 'about_page___teamMembers___article___title',
  about_page___teamMembers___article___slug = 'about_page___teamMembers___article___slug',
  about_page___teamMembers___article___date = 'about_page___teamMembers___article___date',
  about_page___teamMembers___article___spaceId = 'about_page___teamMembers___article___spaceId',
  about_page___teamMembers___article___contentful_id = 'about_page___teamMembers___article___contentful_id',
  about_page___teamMembers___article___createdAt = 'about_page___teamMembers___article___createdAt',
  about_page___teamMembers___article___updatedAt = 'about_page___teamMembers___article___updatedAt',
  about_page___teamMembers___article___node_locale = 'about_page___teamMembers___article___node_locale',
  about_page___teamMembers___about_page = 'about_page___teamMembers___about_page',
  about_page___teamMembers___about_page___id = 'about_page___teamMembers___about_page___id',
  about_page___teamMembers___about_page___children = 'about_page___teamMembers___about_page___children',
  about_page___teamMembers___about_page___page = 'about_page___teamMembers___about_page___page',
  about_page___teamMembers___about_page___teamMembers = 'about_page___teamMembers___about_page___teamMembers',
  about_page___teamMembers___about_page___spaceId = 'about_page___teamMembers___about_page___spaceId',
  about_page___teamMembers___about_page___contentful_id = 'about_page___teamMembers___about_page___contentful_id',
  about_page___teamMembers___about_page___createdAt = 'about_page___teamMembers___about_page___createdAt',
  about_page___teamMembers___about_page___updatedAt = 'about_page___teamMembers___about_page___updatedAt',
  about_page___teamMembers___about_page___node_locale = 'about_page___teamMembers___about_page___node_locale',
  about_page___teamMembers___description___id = 'about_page___teamMembers___description___id',
  about_page___teamMembers___description___children = 'about_page___teamMembers___description___children',
  about_page___teamMembers___description___description = 'about_page___teamMembers___description___description',
  about_page___teamMembers___spaceId = 'about_page___teamMembers___spaceId',
  about_page___teamMembers___contentful_id = 'about_page___teamMembers___contentful_id',
  about_page___teamMembers___createdAt = 'about_page___teamMembers___createdAt',
  about_page___teamMembers___updatedAt = 'about_page___teamMembers___updatedAt',
  about_page___teamMembers___node_locale = 'about_page___teamMembers___node_locale',
  about_page___teamMembers___childContentfulMemberDescriptionTextNode___id = 'about_page___teamMembers___childContentfulMemberDescriptionTextNode___id',
  about_page___teamMembers___childContentfulMemberDescriptionTextNode___children = 'about_page___teamMembers___childContentfulMemberDescriptionTextNode___children',
  about_page___teamMembers___childContentfulMemberDescriptionTextNode___description = 'about_page___teamMembers___childContentfulMemberDescriptionTextNode___description',
  about_page___spaceId = 'about_page___spaceId',
  about_page___contentful_id = 'about_page___contentful_id',
  about_page___createdAt = 'about_page___createdAt',
  about_page___updatedAt = 'about_page___updatedAt',
  about_page___node_locale = 'about_page___node_locale',
  description___id = 'description___id',
  description___parent___id = 'description___parent___id',
  description___parent___parent___id = 'description___parent___parent___id',
  description___parent___parent___children = 'description___parent___parent___children',
  description___parent___children = 'description___parent___children',
  description___parent___children___id = 'description___parent___children___id',
  description___parent___children___children = 'description___parent___children___children',
  description___parent___internal___content = 'description___parent___internal___content',
  description___parent___internal___contentDigest = 'description___parent___internal___contentDigest',
  description___parent___internal___description = 'description___parent___internal___description',
  description___parent___internal___fieldOwners = 'description___parent___internal___fieldOwners',
  description___parent___internal___ignoreType = 'description___parent___internal___ignoreType',
  description___parent___internal___mediaType = 'description___parent___internal___mediaType',
  description___parent___internal___owner = 'description___parent___internal___owner',
  description___parent___internal___type = 'description___parent___internal___type',
  description___children = 'description___children',
  description___children___id = 'description___children___id',
  description___children___parent___id = 'description___children___parent___id',
  description___children___parent___children = 'description___children___parent___children',
  description___children___children = 'description___children___children',
  description___children___children___id = 'description___children___children___id',
  description___children___children___children = 'description___children___children___children',
  description___children___internal___content = 'description___children___internal___content',
  description___children___internal___contentDigest = 'description___children___internal___contentDigest',
  description___children___internal___description = 'description___children___internal___description',
  description___children___internal___fieldOwners = 'description___children___internal___fieldOwners',
  description___children___internal___ignoreType = 'description___children___internal___ignoreType',
  description___children___internal___mediaType = 'description___children___internal___mediaType',
  description___children___internal___owner = 'description___children___internal___owner',
  description___children___internal___type = 'description___children___internal___type',
  description___internal___content = 'description___internal___content',
  description___internal___contentDigest = 'description___internal___contentDigest',
  description___internal___description = 'description___internal___description',
  description___internal___fieldOwners = 'description___internal___fieldOwners',
  description___internal___ignoreType = 'description___internal___ignoreType',
  description___internal___mediaType = 'description___internal___mediaType',
  description___internal___owner = 'description___internal___owner',
  description___internal___type = 'description___internal___type',
  description___description = 'description___description',
  description___childMarkdownRemark___id = 'description___childMarkdownRemark___id',
  description___childMarkdownRemark___frontmatter___title = 'description___childMarkdownRemark___frontmatter___title',
  description___childMarkdownRemark___excerpt = 'description___childMarkdownRemark___excerpt',
  description___childMarkdownRemark___rawMarkdownBody = 'description___childMarkdownRemark___rawMarkdownBody',
  description___childMarkdownRemark___html = 'description___childMarkdownRemark___html',
  description___childMarkdownRemark___htmlAst = 'description___childMarkdownRemark___htmlAst',
  description___childMarkdownRemark___excerptAst = 'description___childMarkdownRemark___excerptAst',
  description___childMarkdownRemark___headings = 'description___childMarkdownRemark___headings',
  description___childMarkdownRemark___headings___value = 'description___childMarkdownRemark___headings___value',
  description___childMarkdownRemark___headings___depth = 'description___childMarkdownRemark___headings___depth',
  description___childMarkdownRemark___timeToRead = 'description___childMarkdownRemark___timeToRead',
  description___childMarkdownRemark___tableOfContents = 'description___childMarkdownRemark___tableOfContents',
  description___childMarkdownRemark___wordCount___paragraphs = 'description___childMarkdownRemark___wordCount___paragraphs',
  description___childMarkdownRemark___wordCount___sentences = 'description___childMarkdownRemark___wordCount___sentences',
  description___childMarkdownRemark___wordCount___words = 'description___childMarkdownRemark___wordCount___words',
  description___childMarkdownRemark___parent___id = 'description___childMarkdownRemark___parent___id',
  description___childMarkdownRemark___parent___children = 'description___childMarkdownRemark___parent___children',
  description___childMarkdownRemark___children = 'description___childMarkdownRemark___children',
  description___childMarkdownRemark___children___id = 'description___childMarkdownRemark___children___id',
  description___childMarkdownRemark___children___children = 'description___childMarkdownRemark___children___children',
  description___childMarkdownRemark___internal___content = 'description___childMarkdownRemark___internal___content',
  description___childMarkdownRemark___internal___contentDigest = 'description___childMarkdownRemark___internal___contentDigest',
  description___childMarkdownRemark___internal___description = 'description___childMarkdownRemark___internal___description',
  description___childMarkdownRemark___internal___fieldOwners = 'description___childMarkdownRemark___internal___fieldOwners',
  description___childMarkdownRemark___internal___ignoreType = 'description___childMarkdownRemark___internal___ignoreType',
  description___childMarkdownRemark___internal___mediaType = 'description___childMarkdownRemark___internal___mediaType',
  description___childMarkdownRemark___internal___owner = 'description___childMarkdownRemark___internal___owner',
  description___childMarkdownRemark___internal___type = 'description___childMarkdownRemark___internal___type',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  node_locale = 'node_locale',
  childContentfulMemberDescriptionTextNode___id = 'childContentfulMemberDescriptionTextNode___id',
  childContentfulMemberDescriptionTextNode___parent___id = 'childContentfulMemberDescriptionTextNode___parent___id',
  childContentfulMemberDescriptionTextNode___parent___parent___id = 'childContentfulMemberDescriptionTextNode___parent___parent___id',
  childContentfulMemberDescriptionTextNode___parent___parent___children = 'childContentfulMemberDescriptionTextNode___parent___parent___children',
  childContentfulMemberDescriptionTextNode___parent___children = 'childContentfulMemberDescriptionTextNode___parent___children',
  childContentfulMemberDescriptionTextNode___parent___children___id = 'childContentfulMemberDescriptionTextNode___parent___children___id',
  childContentfulMemberDescriptionTextNode___parent___children___children = 'childContentfulMemberDescriptionTextNode___parent___children___children',
  childContentfulMemberDescriptionTextNode___parent___internal___content = 'childContentfulMemberDescriptionTextNode___parent___internal___content',
  childContentfulMemberDescriptionTextNode___parent___internal___contentDigest = 'childContentfulMemberDescriptionTextNode___parent___internal___contentDigest',
  childContentfulMemberDescriptionTextNode___parent___internal___description = 'childContentfulMemberDescriptionTextNode___parent___internal___description',
  childContentfulMemberDescriptionTextNode___parent___internal___fieldOwners = 'childContentfulMemberDescriptionTextNode___parent___internal___fieldOwners',
  childContentfulMemberDescriptionTextNode___parent___internal___ignoreType = 'childContentfulMemberDescriptionTextNode___parent___internal___ignoreType',
  childContentfulMemberDescriptionTextNode___parent___internal___mediaType = 'childContentfulMemberDescriptionTextNode___parent___internal___mediaType',
  childContentfulMemberDescriptionTextNode___parent___internal___owner = 'childContentfulMemberDescriptionTextNode___parent___internal___owner',
  childContentfulMemberDescriptionTextNode___parent___internal___type = 'childContentfulMemberDescriptionTextNode___parent___internal___type',
  childContentfulMemberDescriptionTextNode___children = 'childContentfulMemberDescriptionTextNode___children',
  childContentfulMemberDescriptionTextNode___children___id = 'childContentfulMemberDescriptionTextNode___children___id',
  childContentfulMemberDescriptionTextNode___children___parent___id = 'childContentfulMemberDescriptionTextNode___children___parent___id',
  childContentfulMemberDescriptionTextNode___children___parent___children = 'childContentfulMemberDescriptionTextNode___children___parent___children',
  childContentfulMemberDescriptionTextNode___children___children = 'childContentfulMemberDescriptionTextNode___children___children',
  childContentfulMemberDescriptionTextNode___children___children___id = 'childContentfulMemberDescriptionTextNode___children___children___id',
  childContentfulMemberDescriptionTextNode___children___children___children = 'childContentfulMemberDescriptionTextNode___children___children___children',
  childContentfulMemberDescriptionTextNode___children___internal___content = 'childContentfulMemberDescriptionTextNode___children___internal___content',
  childContentfulMemberDescriptionTextNode___children___internal___contentDigest = 'childContentfulMemberDescriptionTextNode___children___internal___contentDigest',
  childContentfulMemberDescriptionTextNode___children___internal___description = 'childContentfulMemberDescriptionTextNode___children___internal___description',
  childContentfulMemberDescriptionTextNode___children___internal___fieldOwners = 'childContentfulMemberDescriptionTextNode___children___internal___fieldOwners',
  childContentfulMemberDescriptionTextNode___children___internal___ignoreType = 'childContentfulMemberDescriptionTextNode___children___internal___ignoreType',
  childContentfulMemberDescriptionTextNode___children___internal___mediaType = 'childContentfulMemberDescriptionTextNode___children___internal___mediaType',
  childContentfulMemberDescriptionTextNode___children___internal___owner = 'childContentfulMemberDescriptionTextNode___children___internal___owner',
  childContentfulMemberDescriptionTextNode___children___internal___type = 'childContentfulMemberDescriptionTextNode___children___internal___type',
  childContentfulMemberDescriptionTextNode___internal___content = 'childContentfulMemberDescriptionTextNode___internal___content',
  childContentfulMemberDescriptionTextNode___internal___contentDigest = 'childContentfulMemberDescriptionTextNode___internal___contentDigest',
  childContentfulMemberDescriptionTextNode___internal___description = 'childContentfulMemberDescriptionTextNode___internal___description',
  childContentfulMemberDescriptionTextNode___internal___fieldOwners = 'childContentfulMemberDescriptionTextNode___internal___fieldOwners',
  childContentfulMemberDescriptionTextNode___internal___ignoreType = 'childContentfulMemberDescriptionTextNode___internal___ignoreType',
  childContentfulMemberDescriptionTextNode___internal___mediaType = 'childContentfulMemberDescriptionTextNode___internal___mediaType',
  childContentfulMemberDescriptionTextNode___internal___owner = 'childContentfulMemberDescriptionTextNode___internal___owner',
  childContentfulMemberDescriptionTextNode___internal___type = 'childContentfulMemberDescriptionTextNode___internal___type',
  childContentfulMemberDescriptionTextNode___description = 'childContentfulMemberDescriptionTextNode___description',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___id = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___id',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___frontmatter___title',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___excerpt = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___excerpt',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___rawMarkdownBody',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___html = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___html',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___htmlAst = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___htmlAst',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___excerptAst = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___excerptAst',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___headings = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___headings',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___headings___value = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___headings___value',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___headings___depth = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___headings___depth',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___timeToRead = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___timeToRead',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___tableOfContents = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___tableOfContents',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___wordCount___sentences',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___wordCount___words = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___wordCount___words',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___parent___id = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___parent___id',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___parent___children = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___parent___children',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___children = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___children',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___children___id = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___children___id',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___children___children = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___children___children',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___content = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___content',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___contentDigest',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___description = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___description',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___fieldOwners',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___ignoreType',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___mediaType',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___owner = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___owner',
  childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___type = 'childContentfulMemberDescriptionTextNode___childMarkdownRemark___internal___type',
}

export type ContentfulMemberFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<ContentfulAssetFilterInput>;
  avatar?: Maybe<ContentfulAssetFilterInput>;
  article?: Maybe<ContentfulArticleFilterListInput>;
  about_page?: Maybe<ContentfulAboutPageFilterListInput>;
  description?: Maybe<ContentfulMemberDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulMemberDescriptionTextNode?: Maybe<
    ContentfulMemberDescriptionTextNodeFilterInput
  >;
};

export type ContentfulMemberFilterListInput = {
  elemMatch?: Maybe<ContentfulMemberFilterInput>;
};

export type ContentfulMemberGroupConnection = {
  __typename?: 'ContentfulMemberGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMemberEdge>;
  nodes: Array<ContentfulMember>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMemberSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMemberFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulResize = {
  __typename?: 'ContentfulResize';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
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

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulService = Node & {
  __typename?: 'ContentfulService';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  services_page?: Maybe<Array<Maybe<ContentfulServicesPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  node_locale?: Maybe<Scalars['String']>;
  examples?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentfulServiceCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulServiceUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulServiceConnection = {
  __typename?: 'ContentfulServiceConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulServiceEdge>;
  nodes: Array<ContentfulService>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulServiceGroupConnection>;
};

export type ContentfulServiceConnectionDistinctArgs = {
  field: ContentfulServiceFieldsEnum;
};

export type ContentfulServiceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulServiceFieldsEnum;
};

export type ContentfulServiceEdge = {
  __typename?: 'ContentfulServiceEdge';
  next?: Maybe<ContentfulService>;
  node: ContentfulService;
  previous?: Maybe<ContentfulService>;
};

export enum ContentfulServiceFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  title = 'title',
  services_page = 'services_page',
  services_page___id = 'services_page___id',
  services_page___parent___id = 'services_page___parent___id',
  services_page___parent___parent___id = 'services_page___parent___parent___id',
  services_page___parent___parent___children = 'services_page___parent___parent___children',
  services_page___parent___children = 'services_page___parent___children',
  services_page___parent___children___id = 'services_page___parent___children___id',
  services_page___parent___children___children = 'services_page___parent___children___children',
  services_page___parent___internal___content = 'services_page___parent___internal___content',
  services_page___parent___internal___contentDigest = 'services_page___parent___internal___contentDigest',
  services_page___parent___internal___description = 'services_page___parent___internal___description',
  services_page___parent___internal___fieldOwners = 'services_page___parent___internal___fieldOwners',
  services_page___parent___internal___ignoreType = 'services_page___parent___internal___ignoreType',
  services_page___parent___internal___mediaType = 'services_page___parent___internal___mediaType',
  services_page___parent___internal___owner = 'services_page___parent___internal___owner',
  services_page___parent___internal___type = 'services_page___parent___internal___type',
  services_page___children = 'services_page___children',
  services_page___children___id = 'services_page___children___id',
  services_page___children___parent___id = 'services_page___children___parent___id',
  services_page___children___parent___children = 'services_page___children___parent___children',
  services_page___children___children = 'services_page___children___children',
  services_page___children___children___id = 'services_page___children___children___id',
  services_page___children___children___children = 'services_page___children___children___children',
  services_page___children___internal___content = 'services_page___children___internal___content',
  services_page___children___internal___contentDigest = 'services_page___children___internal___contentDigest',
  services_page___children___internal___description = 'services_page___children___internal___description',
  services_page___children___internal___fieldOwners = 'services_page___children___internal___fieldOwners',
  services_page___children___internal___ignoreType = 'services_page___children___internal___ignoreType',
  services_page___children___internal___mediaType = 'services_page___children___internal___mediaType',
  services_page___children___internal___owner = 'services_page___children___internal___owner',
  services_page___children___internal___type = 'services_page___children___internal___type',
  services_page___internal___content = 'services_page___internal___content',
  services_page___internal___contentDigest = 'services_page___internal___contentDigest',
  services_page___internal___description = 'services_page___internal___description',
  services_page___internal___fieldOwners = 'services_page___internal___fieldOwners',
  services_page___internal___ignoreType = 'services_page___internal___ignoreType',
  services_page___internal___mediaType = 'services_page___internal___mediaType',
  services_page___internal___owner = 'services_page___internal___owner',
  services_page___internal___type = 'services_page___internal___type',
  services_page___page = 'services_page___page',
  services_page___services = 'services_page___services',
  services_page___services___id = 'services_page___services___id',
  services_page___services___parent___id = 'services_page___services___parent___id',
  services_page___services___parent___children = 'services_page___services___parent___children',
  services_page___services___children = 'services_page___services___children',
  services_page___services___children___id = 'services_page___services___children___id',
  services_page___services___children___children = 'services_page___services___children___children',
  services_page___services___internal___content = 'services_page___services___internal___content',
  services_page___services___internal___contentDigest = 'services_page___services___internal___contentDigest',
  services_page___services___internal___description = 'services_page___services___internal___description',
  services_page___services___internal___fieldOwners = 'services_page___services___internal___fieldOwners',
  services_page___services___internal___ignoreType = 'services_page___services___internal___ignoreType',
  services_page___services___internal___mediaType = 'services_page___services___internal___mediaType',
  services_page___services___internal___owner = 'services_page___services___internal___owner',
  services_page___services___internal___type = 'services_page___services___internal___type',
  services_page___services___title = 'services_page___services___title',
  services_page___services___services_page = 'services_page___services___services_page',
  services_page___services___services_page___id = 'services_page___services___services_page___id',
  services_page___services___services_page___children = 'services_page___services___services_page___children',
  services_page___services___services_page___page = 'services_page___services___services_page___page',
  services_page___services___services_page___services = 'services_page___services___services_page___services',
  services_page___services___services_page___spaceId = 'services_page___services___services_page___spaceId',
  services_page___services___services_page___contentful_id = 'services_page___services___services_page___contentful_id',
  services_page___services___services_page___createdAt = 'services_page___services___services_page___createdAt',
  services_page___services___services_page___updatedAt = 'services_page___services___services_page___updatedAt',
  services_page___services___services_page___node_locale = 'services_page___services___services_page___node_locale',
  services_page___services___spaceId = 'services_page___services___spaceId',
  services_page___services___contentful_id = 'services_page___services___contentful_id',
  services_page___services___createdAt = 'services_page___services___createdAt',
  services_page___services___updatedAt = 'services_page___services___updatedAt',
  services_page___services___node_locale = 'services_page___services___node_locale',
  services_page___services___examples = 'services_page___services___examples',
  services_page___spaceId = 'services_page___spaceId',
  services_page___contentful_id = 'services_page___contentful_id',
  services_page___createdAt = 'services_page___createdAt',
  services_page___updatedAt = 'services_page___updatedAt',
  services_page___node_locale = 'services_page___node_locale',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  node_locale = 'node_locale',
  examples = 'examples',
}

export type ContentfulServiceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  services_page?: Maybe<ContentfulServicesPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  examples?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulServiceFilterListInput = {
  elemMatch?: Maybe<ContentfulServiceFilterInput>;
};

export type ContentfulServiceGroupConnection = {
  __typename?: 'ContentfulServiceGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulServiceEdge>;
  nodes: Array<ContentfulService>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulServiceSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulServiceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulServicesPage = Node & {
  __typename?: 'ContentfulServicesPage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  page?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<ContentfulService>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  node_locale?: Maybe<Scalars['String']>;
};

export type ContentfulServicesPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulServicesPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulServicesPageConnection = {
  __typename?: 'ContentfulServicesPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulServicesPageEdge>;
  nodes: Array<ContentfulServicesPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulServicesPageGroupConnection>;
};

export type ContentfulServicesPageConnectionDistinctArgs = {
  field: ContentfulServicesPageFieldsEnum;
};

export type ContentfulServicesPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulServicesPageFieldsEnum;
};

export type ContentfulServicesPageEdge = {
  __typename?: 'ContentfulServicesPageEdge';
  next?: Maybe<ContentfulServicesPage>;
  node: ContentfulServicesPage;
  previous?: Maybe<ContentfulServicesPage>;
};

export enum ContentfulServicesPageFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  page = 'page',
  services = 'services',
  services___id = 'services___id',
  services___parent___id = 'services___parent___id',
  services___parent___parent___id = 'services___parent___parent___id',
  services___parent___parent___children = 'services___parent___parent___children',
  services___parent___children = 'services___parent___children',
  services___parent___children___id = 'services___parent___children___id',
  services___parent___children___children = 'services___parent___children___children',
  services___parent___internal___content = 'services___parent___internal___content',
  services___parent___internal___contentDigest = 'services___parent___internal___contentDigest',
  services___parent___internal___description = 'services___parent___internal___description',
  services___parent___internal___fieldOwners = 'services___parent___internal___fieldOwners',
  services___parent___internal___ignoreType = 'services___parent___internal___ignoreType',
  services___parent___internal___mediaType = 'services___parent___internal___mediaType',
  services___parent___internal___owner = 'services___parent___internal___owner',
  services___parent___internal___type = 'services___parent___internal___type',
  services___children = 'services___children',
  services___children___id = 'services___children___id',
  services___children___parent___id = 'services___children___parent___id',
  services___children___parent___children = 'services___children___parent___children',
  services___children___children = 'services___children___children',
  services___children___children___id = 'services___children___children___id',
  services___children___children___children = 'services___children___children___children',
  services___children___internal___content = 'services___children___internal___content',
  services___children___internal___contentDigest = 'services___children___internal___contentDigest',
  services___children___internal___description = 'services___children___internal___description',
  services___children___internal___fieldOwners = 'services___children___internal___fieldOwners',
  services___children___internal___ignoreType = 'services___children___internal___ignoreType',
  services___children___internal___mediaType = 'services___children___internal___mediaType',
  services___children___internal___owner = 'services___children___internal___owner',
  services___children___internal___type = 'services___children___internal___type',
  services___internal___content = 'services___internal___content',
  services___internal___contentDigest = 'services___internal___contentDigest',
  services___internal___description = 'services___internal___description',
  services___internal___fieldOwners = 'services___internal___fieldOwners',
  services___internal___ignoreType = 'services___internal___ignoreType',
  services___internal___mediaType = 'services___internal___mediaType',
  services___internal___owner = 'services___internal___owner',
  services___internal___type = 'services___internal___type',
  services___title = 'services___title',
  services___services_page = 'services___services_page',
  services___services_page___id = 'services___services_page___id',
  services___services_page___parent___id = 'services___services_page___parent___id',
  services___services_page___parent___children = 'services___services_page___parent___children',
  services___services_page___children = 'services___services_page___children',
  services___services_page___children___id = 'services___services_page___children___id',
  services___services_page___children___children = 'services___services_page___children___children',
  services___services_page___internal___content = 'services___services_page___internal___content',
  services___services_page___internal___contentDigest = 'services___services_page___internal___contentDigest',
  services___services_page___internal___description = 'services___services_page___internal___description',
  services___services_page___internal___fieldOwners = 'services___services_page___internal___fieldOwners',
  services___services_page___internal___ignoreType = 'services___services_page___internal___ignoreType',
  services___services_page___internal___mediaType = 'services___services_page___internal___mediaType',
  services___services_page___internal___owner = 'services___services_page___internal___owner',
  services___services_page___internal___type = 'services___services_page___internal___type',
  services___services_page___page = 'services___services_page___page',
  services___services_page___services = 'services___services_page___services',
  services___services_page___services___id = 'services___services_page___services___id',
  services___services_page___services___children = 'services___services_page___services___children',
  services___services_page___services___title = 'services___services_page___services___title',
  services___services_page___services___services_page = 'services___services_page___services___services_page',
  services___services_page___services___spaceId = 'services___services_page___services___spaceId',
  services___services_page___services___contentful_id = 'services___services_page___services___contentful_id',
  services___services_page___services___createdAt = 'services___services_page___services___createdAt',
  services___services_page___services___updatedAt = 'services___services_page___services___updatedAt',
  services___services_page___services___node_locale = 'services___services_page___services___node_locale',
  services___services_page___services___examples = 'services___services_page___services___examples',
  services___services_page___spaceId = 'services___services_page___spaceId',
  services___services_page___contentful_id = 'services___services_page___contentful_id',
  services___services_page___createdAt = 'services___services_page___createdAt',
  services___services_page___updatedAt = 'services___services_page___updatedAt',
  services___services_page___node_locale = 'services___services_page___node_locale',
  services___spaceId = 'services___spaceId',
  services___contentful_id = 'services___contentful_id',
  services___createdAt = 'services___createdAt',
  services___updatedAt = 'services___updatedAt',
  services___node_locale = 'services___node_locale',
  services___examples = 'services___examples',
  spaceId = 'spaceId',
  contentful_id = 'contentful_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  node_locale = 'node_locale',
}

export type ContentfulServicesPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  page?: Maybe<StringQueryOperatorInput>;
  services?: Maybe<ContentfulServiceFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulServicesPageFilterListInput = {
  elemMatch?: Maybe<ContentfulServicesPageFilterInput>;
};

export type ContentfulServicesPageGroupConnection = {
  __typename?: 'ContentfulServicesPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulServicesPageEdge>;
  nodes: Array<ContentfulServicesPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulServicesPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulServicesPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
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

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
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

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  birthtime?: Maybe<Scalars['Date']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
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
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
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
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp___resolutions___base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp___resolutions___tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp___resolutions___aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp___resolutions___width',
  childImageSharp___resolutions___height = 'childImageSharp___resolutions___height',
  childImageSharp___resolutions___src = 'childImageSharp___resolutions___src',
  childImageSharp___resolutions___srcSet = 'childImageSharp___resolutions___srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp___resolutions___srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp___resolutions___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp___sizes___base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp___sizes___tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp___sizes___aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp___sizes___src',
  childImageSharp___sizes___srcSet = 'childImageSharp___sizes___srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp___sizes___srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp___sizes___sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp___sizes___originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp___sizes___originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp___sizes___presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp___sizes___presentationHeight',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type FileFilterInput = {
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION',
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

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

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  sizes___presentationWidth = 'sizes___presentationWidth',
  sizes___presentationHeight = 'sizes___presentationHeight',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN',
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarkTableOfContentsArgs = {
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___title = 'frontmatter___title',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
}

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  contentfulArticle?: Maybe<ContentfulArticle>;
  allContentfulArticle: ContentfulArticleConnection;
  contentfulArticleContentRichTextNode?: Maybe<
    ContentfulArticleContentRichTextNode
  >;
  allContentfulArticleContentRichTextNode: ContentfulArticleContentRichTextNodeConnection;
  contentfulMember?: Maybe<ContentfulMember>;
  allContentfulMember: ContentfulMemberConnection;
  contentfulMemberDescriptionTextNode?: Maybe<
    ContentfulMemberDescriptionTextNode
  >;
  allContentfulMemberDescriptionTextNode: ContentfulMemberDescriptionTextNodeConnection;
  contentfulGoal?: Maybe<ContentfulGoal>;
  allContentfulGoal: ContentfulGoalConnection;
  contentfulHomePage?: Maybe<ContentfulHomePage>;
  allContentfulHomePage: ContentfulHomePageConnection;
  contentfulAboutPage?: Maybe<ContentfulAboutPage>;
  allContentfulAboutPage: ContentfulAboutPageConnection;
  contentfulService?: Maybe<ContentfulService>;
  allContentfulService: ContentfulServiceConnection;
  contentfulServicesPage?: Maybe<ContentfulServicesPage>;
  allContentfulServicesPage: ContentfulServicesPageConnection;
  contentfulCategory?: Maybe<ContentfulCategory>;
  allContentfulCategory: ContentfulCategoryConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
};

export type QueryFileArgs = {
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentfulArticleArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  category?: Maybe<ContentfulCategoryFilterInput>;
  author?: Maybe<ContentfulMemberFilterInput>;
  content?: Maybe<ContentfulArticleContentRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulArticleContentRichTextNode?: Maybe<
    ContentfulArticleContentRichTextNodeFilterInput
  >;
};

export type QueryAllContentfulArticleArgs = {
  filter?: Maybe<ContentfulArticleFilterInput>;
  sort?: Maybe<ContentfulArticleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentfulArticleContentRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type QueryAllContentfulArticleContentRichTextNodeArgs = {
  filter?: Maybe<ContentfulArticleContentRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulArticleContentRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentfulMemberArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<ContentfulAssetFilterInput>;
  avatar?: Maybe<ContentfulAssetFilterInput>;
  article?: Maybe<ContentfulArticleFilterListInput>;
  about_page?: Maybe<ContentfulAboutPageFilterListInput>;
  description?: Maybe<ContentfulMemberDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulMemberDescriptionTextNode?: Maybe<
    ContentfulMemberDescriptionTextNodeFilterInput
  >;
};

export type QueryAllContentfulMemberArgs = {
  filter?: Maybe<ContentfulMemberFilterInput>;
  sort?: Maybe<ContentfulMemberSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentfulMemberDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type QueryAllContentfulMemberDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulMemberDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulMemberDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentfulGoalArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  home_page?: Maybe<ContentfulHomePageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulGoalArgs = {
  filter?: Maybe<ContentfulGoalFilterInput>;
  sort?: Maybe<ContentfulGoalSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentfulHomePageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  page?: Maybe<StringQueryOperatorInput>;
  goals?: Maybe<ContentfulGoalFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulHomePageArgs = {
  filter?: Maybe<ContentfulHomePageFilterInput>;
  sort?: Maybe<ContentfulHomePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentfulAboutPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  page?: Maybe<StringQueryOperatorInput>;
  teamMembers?: Maybe<ContentfulMemberFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulAboutPageArgs = {
  filter?: Maybe<ContentfulAboutPageFilterInput>;
  sort?: Maybe<ContentfulAboutPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentfulServiceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  services_page?: Maybe<ContentfulServicesPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  examples?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulServiceArgs = {
  filter?: Maybe<ContentfulServiceFilterInput>;
  sort?: Maybe<ContentfulServiceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentfulServicesPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  page?: Maybe<StringQueryOperatorInput>;
  services?: Maybe<ContentfulServiceFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulServicesPageArgs = {
  filter?: Maybe<ContentfulServicesPageFilterInput>;
  sort?: Maybe<ContentfulServicesPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentfulCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  article?: Maybe<ContentfulArticleFilterListInput>;
};

export type QueryAllContentfulCategoryArgs = {
  filter?: Maybe<ContentfulCategoryFilterInput>;
  sort?: Maybe<ContentfulCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  siteMetadata___title = 'siteMetadata___title',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  buildTime = 'buildTime',
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  path?: Maybe<Scalars['String']>;
  internalComponentName?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  componentChunkName?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  path = 'path',
  internalComponentName = 'internalComponentName',
  component = 'component',
  componentChunkName = 'componentChunkName',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___short_name = 'pluginCreator___pluginOptions___short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator___pluginOptions___start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator___pluginOptions___background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator___pluginOptions___theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator___pluginOptions___display',
  pluginCreator___pluginOptions___icon = 'pluginCreator___pluginOptions___icon',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___spaceId = 'pluginCreator___pluginOptions___spaceId',
  pluginCreator___pluginOptions___accessToken = 'pluginCreator___pluginOptions___accessToken',
  pluginCreator___pluginOptions___includePaths = 'pluginCreator___pluginOptions___includePaths',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
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
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
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
  includePaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  includePaths?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
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

export type GatsbyImageSharpFixedFragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
} & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFluidFragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<
  ImageSharpFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<
  ImageSharpFluid,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
} & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpResolutionsFragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebpFragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions';
} & Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpSizesFragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<
  ImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebpFragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<
  ImageSharpSizes,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<
  ImageSharpSizes,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes';
} & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type LogoQueryVariables = {};

export type LogoQuery = { __typename?: 'Query' } & {
  file: Maybe<
    { __typename?: 'File' } & {
      childImageSharp: Maybe<
        { __typename?: 'ImageSharp' } & {
          fixed: Maybe<
            { __typename?: 'ImageSharpFixed' } & Pick<
              ImageSharpFixed,
              'width' | 'height' | 'src' | 'srcSet'
            >
          >;
        }
      >;
    }
  >;
};

export type SiteTitleQueryVariables = {};

export type SiteTitleQuery = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'title'>
      >;
    }
  >;
};

export type HomePageQueryVariables = {};

export type HomePageQuery = { __typename?: 'Query' } & {
  file: Maybe<
    { __typename?: 'File' } & {
      childImageSharp: Maybe<
        { __typename?: 'ImageSharp' } & {
          fluid: Maybe<
            { __typename?: 'ImageSharpFluid' } & Pick<
              ImageSharpFluid,
              'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'
            >
          >;
        }
      >;
    }
  >;
  contentfulHomePage: Maybe<
    { __typename?: 'ContentfulHomePage' } & {
      goals: Maybe<
        Array<
          Maybe<
            { __typename?: 'ContentfulGoal' } & Pick<
              ContentfulGoal,
              'title'
            > & {
                image: Maybe<
                  { __typename?: 'ContentfulAsset' } & {
                    fluid: Maybe<
                      { __typename?: 'ContentfulFluid' } & Pick<
                        ContentfulFluid,
                        'src' | 'srcSet' | 'aspectRatio' | 'sizes' | 'base64'
                      >
                    >;
                  }
                >;
              }
          >
        >
      >;
    }
  >;
};
