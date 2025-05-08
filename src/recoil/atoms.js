
import { atom, atomFamily } from 'recoil'


export const todosCategoriesAtom = atomFamily({
    key: 'todosCategoriesAtom',
    default: []
})

export const categoriesAtom = atom({
    key: 'categoriesAtom',
    default: ['Personal', 'Work']
})