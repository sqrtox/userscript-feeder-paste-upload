export const isFeederRoomUrl = (href: string): boolean => {
  const { protocol, hostname, pathname } = new URL(href);

  if (protocol !== 'https:') {
    return false;
  }

  if (!/^www[12]\.x-feeder\.info$/.test(hostname)) {
    return false;
  }

  if (!/^\/\w{4,16}\/$/.test(pathname)) {
    return false;
  }

  return true;
};
