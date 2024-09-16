export type Author = {
    id: number,
    name: string
}

export type Place = {
    id: number,
    name: string
}

export type Painting = {
    id: number,
    file: string,
    name: string,
    authors: Author[],
    year: string,
    place: Place
}
