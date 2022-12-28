import { ElementIds } from '~/utils/ElementIds';
import { getElement } from '~/utils/getElement';
import { handlePaste } from '~/utils/handlePaste';

export const applyHandlePaste = (): void => {
  const postFormSingle = getElement(ElementIds.PostFormSingle);
  const postFormMultiline = getElement(ElementIds.PostFormMultiline);

  postFormSingle.addEventListener('paste', handlePaste);
  postFormMultiline.addEventListener('paste', handlePaste);
};
