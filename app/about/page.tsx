import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">About Voices of Change</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/images/hero-bg.jpg" alt="About Us" width={800} height={600} className="rounded-lg shadow-md" />
        </div>
        <div>
          <p className="text-lg mb-6">
            Voices of Change is a grassroots movement dedicated to empowering citizens and fostering positive change across India. Our mission is to address critical social issues and create a more inclusive, equitable, and sustainable future for all.
          </p>
          <p className="text-lg mb-6">
            Founded in 2020, our organization brings together passionate individuals, community leaders, and experts from various fields to tackle pressing challenges facing our nation. Through innovative initiatives, community engagement, and advocacy, we strive to make a lasting impact on the lives of millions.
          </p>
          <p className="text-lg">
            Join us in our journey to create a better India. Together, we can amplify the voices of change and build a brighter future for generations to come.
          </p>
        </div>
      </div>
    </div>
  )
}