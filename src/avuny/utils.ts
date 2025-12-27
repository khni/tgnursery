import { Dialog, Media } from '@/payload-types'

const getPayloadMedia = (m: number | Media | null | undefined): m is Media => {
  return m !== null && m !== undefined && typeof m === 'object' && 'url' in m
}

export const getPayloadMediaUrl = (media: number | Media | null | undefined) => {
  if (getPayloadMedia(media)) {
    return media.url
  }
  return undefined
}
export const getPayloadDialog = (d: number | Dialog | null | undefined) => {
  const isDialog = d !== null && d !== undefined && typeof d === 'object' && 'dialogId' in d
  if (isDialog) {
    return d
  }
}
