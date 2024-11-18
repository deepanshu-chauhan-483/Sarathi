import { Button } from '@mui/material';
import { cardData } from '../Assets/Data';
import CardComponent from '../Components/CardComponent';
import Image1 from '../Assets/illustration1.png';
import Image2 from '../Assets/illustration2.png';
import Image3 from '../Assets/illustration3.png';
import Image4 from '../Assets/illustration4.jpg';

export default function Component() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12">

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Welcome to our website, dedicated to providing assistance and guidance for women in need.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Whether you&apos;re looking for job opportunities, government schemes, health awareness, or a supportive community, we&apos;ve got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="large">
                  Get started
                </Button>
                <Button variant="outlined" size="large">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative">
                <img
                  src={Image1}
                  alt="Illustration of a woman standing"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Search Section */}
      <div className="min-h-screen flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative hidden lg:block">
              <div className="relative">
                <img
                  src={Image2}
                  alt="Illustration of a person looking for jobs"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Find Your Dream Job with Ease
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Discover job opportunities that match your skills and interests. Join thousands of successful job seekers who found their perfect career path with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outlined" size="large">
                  Learn More
                </Button>
                <Button size="large">
                  Sign Up Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Government Schemes Section */}
      <div className="min-h-screen flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="space-y-6 lg:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Discover the Latest Government Schemes for Women and How to Access Them
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Explore a wide range of government schemes designed to empower women. Learn how to easily access these programs and take advantage of the benefits they offer.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">50%</div>
                  <p className="text-sm text-muted-foreground">
                    Find the support you need to thrive and succeed
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">50%</div>
                  <p className="text-sm text-muted-foreground">
                    Find the support you need to thrive and succeed
                  </p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative">
                <img
                  src={Image3}
                  alt="Illustration of a woman with government schemes"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nutrition Section */}
      <div className="min-h-screen flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="space-y-6 lg:w-2/3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Fuel Your Body: Nutrition Tips for Women
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Proper nutrition is essential for women&apos;s health. Our website provides valuable information and resources on the importance of a balanced diet and maintaining healthy eating habits. From tips on managing weight to guidance on meeting specific nutrient needs, we cover it all. Discover how you can optimize your nutrition and take control of your well-being today.
              </p>
            </div>
            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Get started
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full mt-12 hidden lg:block">
          <div className="max-w-7xl mx-auto relative">
            <div className="relative">
              <img
                src={Image4}
                alt="Various fresh fruits, vegetables, grains, and healthy foods arranged on a white surface"
                width={1200}
                height={400}
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Community Features Section */}
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-12">
        <div className="space-y-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
            Connect and Share Experiences with Our Community Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardData.map((card, index) => (
              <CardComponent
                key={index}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Join Section */}
      <div className="w-full h-[200px] shadow-sm py-3 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-grow">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Join our empowering women community
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              Discover resources, support, and opportunities for women
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button className="px-4 py-2 text-sm font-semibold text-white bg-black rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors">
              Get started
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
