import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">सुधार Setu</h1>
        <p className="text-xl md:text-2xl mb-8">Empowering citizens to build a brighter future for our nation</p>
        <Link href="/get-involved" className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-dark transition-colors">
          Join the Movement
        </Link>
      </div>
    </div>
  )
}