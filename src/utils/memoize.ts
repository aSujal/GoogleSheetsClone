const memoizedContent: { [key: string]: any } = {};

export const memoize = <T>(cellId: string, atomFactory: () => T):T => {
    if (memoizedContent[cellId]) {
        return memoizedContent[cellId];
    };

    memoizedContent[cellId] = atomFactory();
    return memoizedContent[cellId];
}