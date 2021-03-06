import { FixedObject, FluidObject } from 'gatsby-image';
import { oc } from 'ts-optchain';
import { ContentfulAsset, ImageSharp, Maybe } from './types/graphql';
import { BLOCKS, Document, Text } from '@contentful/rich-text-types';

export function exists<T>(value: T | null | undefined): value is T {
  return value != null;
}

/* Safely traverses GraphQL fixed image response */
export function getFixedImage(
  image?: Maybe<Pick<ImageSharp, 'fixed'> | Pick<ContentfulAsset, 'fixed'>>
): FixedObject | undefined {
  const fixed = oc(image).fixed();
  if (fixed != null) {
    const { width, height, src, srcSet, base64 } = fixed;
    if (width != null && height != null && src != null && srcSet != null) {
      return { width, height, src, srcSet, base64: base64 || undefined };
    }
  }
  return undefined;
}

/* Safely traverses GraphQL fluid image response */
export function getFluidImage(
  image?: Maybe<Pick<ImageSharp, 'fluid'> | Pick<ContentfulAsset, 'fluid'>>
): FluidObject | undefined {
  const fluid = oc(image).fluid();
  if (fluid != null) {
    const { src, srcSet, aspectRatio, sizes, base64 } = fluid;
    if (src != null && srcSet != null && aspectRatio != null && sizes != null) {
      return { src, srcSet, aspectRatio, sizes, base64: base64 || undefined };
    }
  }
  return undefined;
}

export function getFirstParagraphFromRichText(
  document: Document
): string | undefined {
  const firstParagraphNode = document.content.find(
    ({ nodeType }) => nodeType === BLOCKS.PARAGRAPH
  );
  if (firstParagraphNode == null) {
    return undefined;
  }
  return firstParagraphNode.content
    .filter((node): node is Text => node.nodeType === 'text')
    .map(({ value }) => value)
    .join('');
}

export function forceEndingPeriod(text: string): string {
  return text.replace(/([^.])$/, '$1.');
}
