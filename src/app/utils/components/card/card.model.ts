export type TCardItem = {
    title: string,
    author: TAuthor,
    tags: TTag[],
    createdAt: string,
    description: string
}

export type TAuthor = {
    name: string,
    avatarUrl: string
}


export type TTag = {
    title: string,
    bgColor: string,
    textColor: string
}