export const getDropzone = () => {
  const dropzone = unsafeWindow.Dropzone.instances[0];

  if (!dropzone) {
    throw new Error('Dropzone instance not found');
  }

  return dropzone;
};
