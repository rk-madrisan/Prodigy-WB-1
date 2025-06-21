
interface TypographySectionProps {
  mousePosition: { x: number; y: number };
  scrollY: number;
}

const TypographySection = ({ mousePosition, scrollY }: TypographySectionProps) => {
  return (
    <>
      {/* Typography */}
      <div className="mb-8">
        <div 
          className="text-2xl md:text-3xl font-light mb-4 text-purple-300 opacity-90"
          style={{
            transform: `translateX(${mousePosition.x * 0.02 - 1}px)`
          }}
        >
          HI THERE, I'M
        </div>
        
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none"
          style={{
            transform: `translateX(${mousePosition.x * -0.02 + 1}px)`
          }}
        >
          <div className="relative">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent blur-sm opacity-50">
              FRONT-END
            </span>
            <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              FRONT-END
            </span>
          </div>
          <div 
            className="relative mt-2"
            style={{
              transform: `translateX(${mousePosition.x * 0.03}px)`
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent blur-sm opacity-50">
              DEVELOPER
            </span>
            <span className="relative bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              DEVELOPER
            </span>
          </div>
        </h1>

        {/* Code Symbol Animation */}
        <div 
          className="flex justify-center items-center gap-4 mb-6"
          style={{
            transform: `scale(${1 + mousePosition.x * 0.0002})`
          }}
        >
          <div className="text-6xl md:text-7xl text-purple-400/70 animate-pulse">{'<'}</div>
          <div className="text-4xl md:text-5xl text-pink-400/70 animate-bounce">/</div>
          <div className="text-6xl md:text-7xl text-purple-400/70 animate-pulse">{'>'}</div>
        </div>
      </div>

      {/* Description */}
      <div 
        className="relative mb-12"
        style={{
          transform: `translateY(${scrollY * -0.05}px)`
        }}
      >
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          I AM A CREATIVE{" "}
          <span className="text-purple-300 font-semibold">FRONT-END DEVELOPER</span>{" "}
          WITH A STRONG FOCUS ON{" "}
          <span className="text-pink-300 font-medium">MOTION AND INTERACTION</span>.
          <br className="hidden md:block" />
          Specializing in{" "}
          <span className="text-blue-300 font-medium">React.js, JavaScript, and Modern Web Technologies</span>.
        </p>
      </div>
    </>
  );
};

export default TypographySection;
