
export type ArticleSection = {
  title: string,
  body?: string[],
  list?: string[],
  code?: string,
  note?: string,
  noteCode?: string,
  moreText?: string,
  subSections?: ArticleSection[],
  images?: string[],
}