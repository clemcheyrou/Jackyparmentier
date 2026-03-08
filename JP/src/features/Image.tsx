export const Image = () => {
  return (
    <div className="w-full h-[100vh] bg-cover bg-center bg-no-repeat m-0 relative " style={{ backgroundImage: "url('/photos_bg.png')" }}>
    <div className="min-h-[100vh] w-[800px] max-w-full mx-auto px-4 sm:px-8 md:px-20 lg:px-24 pt-16">
    <div className="h-[100vh] flex flex-col py-4">
      <div className="flex-1 px-6 flex justify-center">
        <img
          src="/photos_img.png"
          alt="img1"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 px-6 flex justify-center">
        <img
          src="/photos_img2.jpg"
          alt="img2"
          className="w-full h-full object-cover border-[12px] border-tertiary"
        />
      </div>
    </div>
    </div>
    </div>
  );
}