import { create } from "zustand";

const useIndexStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({count: state.count + 1})), 
    decrement: () => set((state) => ({count: state.count -1}))
}))

const useActiveLinkStore = create((set) => ({
    activeLink: 'the brand', 
    setActiveLink: (activeLink) => set({activeLink})
}))

const useThemeStore = create((set) => ({
    theme: "",
    setTheme: (theme) => set({theme}), 
}))

const useSearchResultStore = create((set) => ({
    searchResult: "",
    setSearchResult: (searchResult) => set({searchResult}), 
}))

export {useIndexStore, useActiveLinkStore, useThemeStore, useSearchResultStore}