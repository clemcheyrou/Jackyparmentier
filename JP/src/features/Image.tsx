export const Image = () => {
    return (
      <div className="h-[100vh] flex flex-col py-4">
        <div className="flex-1 p-6">
          <img
            src="/img1.jpg"
            alt="img1"
            className="w-full h-full object-cover border"
          />
        </div>
  
        <div className="flex-1 p-6">
          <img
            src="/img2.jpg"
            alt="img2"
            className="w-full h-full object-cover border-[12px] border-tertiary"
          />
        </div>
      </div>
    );
}
  