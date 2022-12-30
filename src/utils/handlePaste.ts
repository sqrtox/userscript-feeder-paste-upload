import { openDropzoneArea } from '~/utils/openDropzoneArea';
import { getDropzone } from '~/utils/getDropzone';
import { type DropzoneFile } from 'dropzone';

export const handlePaste = ({ clipboardData }: ClipboardEvent): void => {
  if (!clipboardData) {
    return;
  }

  const file = clipboardData.files[0];

  if (!file) {
    return;
  }

  openDropzoneArea();

  const dropzone = getDropzone();

  dropzone.addFile(file as DropzoneFile);
};
