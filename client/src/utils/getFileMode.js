export const getFileMode = ({ selectedFile }) => {
  const extension = selectedFile.split('.').reverse()[0];

  switch (extension) {
    case 'js':
      return 'javascript';
    case 'py':
      return 'python';
    case 'java':
      return 'java';
    case 'cpp':
      return 'cpp';
    case 'c':
      return 'c';
    case 'json':
      return 'json';
    case 'rs':
      return 'rust';
    default:
      return 'text';
  }
};
