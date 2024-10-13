import video from '~/database/video'
export default defineEventHandler((e: any) => {
  const { id } = e.context.params || {}
  return video.find((v)=>v.bvid === id)
})