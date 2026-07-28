import {defineQuery} from 'next-sanity'

const coverImageFields = /* groq */ `
  asset->{
    _id,
    url,
    metadata {
      lqip,
      dimensions {
        width,
        height,
        aspectRatio
      }
    }
  },
  alt,
  crop,
  hotspot
`

export const SHELF_PAGE_QUERY = defineQuery(/* groq */ `
  {
    "settings": *[_id == "siteSettings"][0]{
      siteTitle,
      tagline,
      intro,
      colophon,
      email,
      githubUrl,
      linkedinUrl
    },
    "shelves": *[_type == "shelf"] | order(order asc){
      _id,
      title,
      "slug": slug.current,
      caption,
      itemStyle,
      order,
      items[]{
        _key,
        ...@->{
          _id,
          title,
          "slug": slug.current,
          coverTitle,
          subtitle,
          year,
          presentation,
          clothColor,
          coverMotif,
          coverImage{
            ${coverImageFields}
          }
        }
      }
    }
  }
`)
