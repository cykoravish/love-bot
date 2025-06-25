import type React from "react";
import { useNavigate } from "react-router-dom";

const BirthdayLanding: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-x-hidden">
      {/* Organic background blobs */}
      <div className="absolute inset-0 opacity-8">
        <div
          className="absolute top-20 left-10 w-40 h-40 bg-amber-200 blur-3xl"
          style={{
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            transform: "rotate(45deg)",
          }}
        ></div>
        <div
          className="absolute top-96 right-16 w-32 h-32 bg-orange-200 blur-3xl"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            transform: "rotate(-30deg)",
          }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-36 h-36 bg-yellow-200 blur-3xl"
          style={{
            borderRadius: "70% 30% 50% 50% / 50% 60% 40% 50%",
            transform: "rotate(60deg)",
          }}
        ></div>
      </div>

      {/* Scattered artistic elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Organic flower shapes */}
        {/* 💋😘🌹♥️😘🥰🥳💕💗💞💓💖💝💘🩷❣️❤️‍🩹 */}
        <div className="absolute top-32 left-8 text-2xl text-amber-600 opacity-40 transform -rotate-12">
          💖
        </div>
        <div className="absolute top-64 left-16 text-xl text-orange-600 opacity-35 transform rotate-45">
          💞
        </div>
        <div className="absolute top-96 left-4 text-2xl text-amber-700 opacity-40 transform -rotate-6">
          💝
        </div>

        <div className="absolute top-48 right-12 text-2xl text-amber-600 opacity-40 transform rotate-15">
          🥰
        </div>
        <div className="absolute top-80 right-6 text-xl text-orange-600 opacity-35 transform -rotate-30">
          😘
        </div>
        <div className="absolute bottom-32 right-16 text-2xl text-amber-700 opacity-40 transform rotate-8">
          💋
        </div>

        {/* Flowing decorative lines */}
        <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 text-2xl text-amber-500 opacity-25 rotate-45">
          ～～～
        </div>
        <div className="absolute bottom-40 right-1/4 text-xl text-orange-500 opacity-30 -rotate-30">
          ～～
        </div>
        <div className="absolute bottom-60 left-1/3 text-lg text-amber-600 opacity-25 rotate-60">
          ～～～～
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section - Organic Layout */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
          {/* Floating Title - Irregular Shape */}
          <div className="text-center mb-8 sm:mb-12 relative">
            <div
              className="absolute inset-0 bg-white/60 backdrop-blur-sm shadow-2xl -z-10"
              style={{
                borderRadius: "50% 20% 80% 30% / 30% 60% 40% 70%",
                transform: "rotate(-2deg) scale(1.2)",
                padding: "2rem",
              }}
            ></div>

            <div className="relative z-10 py-4 px-4">
              <div className="inline-flex items-center">
                <span className="text-2xl sm:text-3xl text-amber-700">✨</span>
                <h1
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 tracking-tight"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Mahh Babyyy 💞😚
                </h1>
                <span className="text-3xl sm:text-4xl text-amber-700">✨</span>
              </div>

              {/* <div className="text-amber-600 opacity-60 text-3xl">🌹</div> */}
            </div>
          </div>

          {/* Main Content - Grid Layout for Desktop, Stack for Mobile */}
          <div className="w-full max-w-8xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Left Message - Desktop Only */}
              <div className="hidden lg:block">
                <div
                  className="bg-white/95 backdrop-blur-sm shadow-2xl border-3 border-amber-100 p-6 relative"
                  style={{
                    borderRadius: "60% 40% 70% 30% / 40% 60% 40% 60%",
                    transform: "rotate(-2deg)",
                  }}
                >
                  <div className="text-center space-y-4">
                    <h2
                      className="text-xl lg:text-2xl font-bold text-amber-900 leading-tight"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Happy birthday bestuuu
                    </h2>
                    <div className="text-amber-600 opacity-60 text-2xl">
                      😚💋
                    </div>
                    <p
                      className="text-base lg:text-lg text-amber-800 leading-relaxed italic"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      May mahakal bless you dear
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Image - Extra Large */}
              <div className="flex justify-center relative z-20">
                <div className="relative">
                  {/* Organic image container - Enlarged */}
                  <div
                    className="relative bg-white shadow-2xl overflow-hidden border-4 border-amber-100"
                    style={{
                      borderRadius: "20% 80% 30% 70% / 70% 30% 70% 30%",
                      transform: "rotate(-1deg)",
                      padding: "2.5rem sm:3rem lg:4rem",
                    }}
                  >
                    {/* Artistic tape pieces - Larger */}
                    <div
                      className="absolute -top-6 left-16 w-36 h-18 bg-yellow-200 opacity-80 z-10 shadow-lg border border-yellow-300"
                      style={{
                        borderRadius: "20% 80% 60% 40% / 30% 70% 30% 70%",
                        transform: "rotate(15deg)",
                      }}
                    ></div>
                    <div
                      className="absolute -top-6 right-16 w-36 h-18 bg-yellow-200 opacity-80 z-10 shadow-lg border border-yellow-300"
                      style={{
                        borderRadius: "80% 20% 40% 60% / 70% 30% 70% 30%",
                        transform: "rotate(-15deg)",
                      }}
                    ></div>

                    {/* Extra Enlarged Image */}
                    <div className="relative">
                      <img
                        src="/birthday-card.webp"
                        alt="Birthday Card for Deepu"
                        className="w-full h-auto object-cover max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl"
                        style={{
                          borderRadius: "15% 85% 25% 75% / 75% 25% 75% 25%",
                        }}
                      />
                    </div>
                  </div>

                  {/* Organic shadow layers - Larger */}
                  <div
                    className="absolute inset-0 bg-amber-200 -z-10 opacity-30"
                    style={{
                      borderRadius: "25% 75% 35% 65% / 65% 35% 65% 35%",
                      transform: "rotate(-1deg) translate(10px, 10px)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 bg-amber-300 -z-20 opacity-20"
                    style={{
                      borderRadius: "30% 70% 40% 60% / 60% 40% 60% 40%",
                      transform: "rotate(-2deg) translate(20px, 20px)",
                    }}
                  ></div>

                  {/* Floating decorative elements - Larger */}
                  <div className="absolute -top-16 -left-16 text-6xl text-amber-600 opacity-60 transform rotate-12">
                    💕
                  </div>
                  <div className="absolute -top-16 -right-16 text-6xl text-amber-600 opacity-60 transform -rotate-12">
                    🥳
                  </div>
                  <div className="absolute -bottom-16 -left-16 text-6xl text-amber-600 opacity-60 transform -rotate-12">
                    💝
                  </div>
                  <div className="absolute -bottom-16 -right-16 text-6xl text-amber-600 opacity-60 transform rotate-12">
                    😘
                  </div>
                </div>
              </div>

              {/* Right Message - Desktop Only */}
              <div className="hidden lg:block">
                <div
                  className="bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 shadow-xl border-2 border-amber-200 p-6 relative"
                  style={{
                    borderRadius: "30% 70% 50% 50% / 50% 50% 70% 30%",
                    transform: "rotate(3deg)",
                  }}
                >
                  <div className="text-center">
                    <div className="text-4xl text-amber-600 opacity-70 font-serif mb-2">
                      "
                    </div>
                    <p
                      className="text-lg text-amber-900 italic -mt-2"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Babyyyyyyyyyyyyyyyy😘🌹♥️😘🥰🥳💕💗💞💓💖💝💘🩷❣️❤️‍🩹
                    </p>
                    <div className="text-center mt-3 text-amber-700">✧</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Messages - Below Image */}
            <div className="lg:hidden mt-8 space-y-6">
              {/* Main Message - Mobile */}
              <div
                className="bg-white/95 backdrop-blur-sm shadow-2xl border-3 border-amber-100 p-6 relative mx-auto max-w-md"
                style={{
                  borderRadius: "60% 40% 70% 30% / 40% 60% 40% 60%",
                  transform: "rotate(1deg)",
                }}
              >
                <div className="text-center space-y-4">
                  <h2
                    className="text-xl sm:text-2xl font-bold text-amber-900 leading-tight"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Happy birthday bestuuu
                  </h2>
                  <div className="text-amber-600 opacity-60 text-2xl">😚💋</div>
                  <p
                    className="text-sm sm:text-base text-amber-800 leading-relaxed italic"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    May mahakal bless you dear
                  </p>
                </div>
              </div>

              {/* Quote - Mobile */}
              <div
                className="bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 shadow-xl border-2 border-amber-200 p-4 relative mx-auto max-w-sm"
                style={{
                  borderRadius: "30% 70% 50% 50% / 50% 50% 70% 30%",
                  transform: "rotate(-1deg)",
                }}
              >
                <div className="text-center">
                  <div className="text-3xl text-amber-600 opacity-70 font-serif mb-2">
                    "
                  </div>
                  <p
                    className="text-base text-amber-900 italic -mt-2"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Babyyyyyyyyyyyyyyyy😘🌹♥️😘🥰🥳💕💗💞💓💖💝💘🩷❣️❤️‍🩹
                  </p>
                  <div className="text-center mt-3 text-amber-700">✧</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-center mb-10 p-10">
        <button
          className="px-6 py-3 rounded-xl border-2 border-amber-500 text-amber-600 transition-all duration-300 text-lg font-semibold font-serif tracking-wide bg-amber-100
    hover:bg-amber-400 hover:text-white hover:shadow-2xl hover:scale-105 active:scale-95 active:shadow-inner shadow-md shadow-amber-200 relative z-50"
          onClick={() => navigate("/love-talks")}
        >
          ❤️ sun na ❤️
        </button>
      </div>
    </div>
  );
};

export default BirthdayLanding;
