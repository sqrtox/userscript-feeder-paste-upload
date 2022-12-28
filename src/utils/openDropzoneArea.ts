import { getElement } from '~/utils/getElement';
import { ElementIds } from '~/utils/ElementIds';
import { ImageSizes } from '~/utils/ImageSizes';

export const openDropzoneArea = () => {
  const dropzoneArea = getElement(ElementIds.DropzoneArea);
  const dropzoneAreaIsHidden = (
    // If nothing is set, it's hidden
    !dropzoneArea.style.display ||
    dropzoneArea.style.display === 'none'
  );

  // If hidden, show and set size to unscaled
  if (dropzoneAreaIsHidden) {
    const openDropzoneAreaButton = getElement(ElementIds.OpenDropzoneAreaButton);

    openDropzoneAreaButton.click();

    const imageSizeSelect = getElement<HTMLSelectElement>(ElementIds.ImageSizeSelect);

    imageSizeSelect.value = ImageSizes.Original;
  }
};
