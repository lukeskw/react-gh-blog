import bannerImg from '@/public/banner.png'

export function Header() {
  return (
    <header className="w-full">
      <img src={bannerImg} alt="" className="w-full" />
    </header>
  )
}
