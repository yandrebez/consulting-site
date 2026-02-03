"use client"

type IFrameEmbedProps = {
  src: string
}

export default function IFrameEmbed({ src }: IFrameEmbedProps) {
  return (
    <iframe
      src={src}
      className="w-full h-[1000px] border-0"
    />
  )
}
