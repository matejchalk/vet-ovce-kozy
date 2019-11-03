import { FixedObject, FluidObject } from 'gatsby-image';
import { oc } from 'ts-optchain';
import { ContentfulAsset, ImageSharp, Maybe } from './types/graphql';

/* Safely traverses GraphQL fixed image response */
export function getFixedImage(
  image?: Maybe<Pick<ImageSharp, 'fixed'> | Pick<ContentfulAsset, 'fixed'>>
): FixedObject | undefined {
  const fixed = oc(image).fixed();
  if (fixed != null) {
    const { width, height, src, srcSet } = fixed;
    if (width != null && height != null && src != null && srcSet != null) {
      return { width, height, src, srcSet };
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
    const { src, srcSet, aspectRatio, sizes } = fluid;
    if (src != null && srcSet != null && aspectRatio != null && sizes != null) {
      return { src, srcSet, aspectRatio, sizes };
    }
  }
  return undefined;
}
