import {atom } from "recoil";

export const SheetSizeState = atom({
    key:'SheetSizeState',
    default: {
        width: 1000,
        height: 600,
    },
});