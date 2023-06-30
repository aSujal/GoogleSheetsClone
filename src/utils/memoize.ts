const memoizedContent: { [key: string]: any } = {};

export const memoize = <T>(cellId: string, atomFactory: () => T): T => {
  if (memoizedContent[cellId]) {
    return memoizedContent[cellId];
  }

  const value = atomFactory();
  memoizedContent[cellId] = value;
  return value;
};
