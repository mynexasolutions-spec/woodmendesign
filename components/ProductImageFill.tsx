import Image from 'next/image';

interface ProductImageFillProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Extra classes for the image (e.g. hover transitions). */
  className?: string;
}

/**
 * Product photo that fills its parent completely (no gaps, no blurred backdrop).
 * The parent must be `relative` and `overflow-hidden`; control how much of the photo is
 * cropped by choosing the parent's aspect ratio (wider/shorter parent = less cropping).
 */
export default function ProductImageFill({
  src,
  alt,
  sizes,
  priority = false,
  className = '',
}: ProductImageFillProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}
