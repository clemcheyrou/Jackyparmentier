export const SetList = () => {
    const titles = [
        "Musique 1",
        "Musique 2",
        "Musique 3",
        "Musique 4",
        "Musique 5",
        "Musique 6",
    ];

    return (
      <div className="w-full h-[100vh] bg-cover bg-center bg-no-repeat m-0 relative" style={{ backgroundImage: "url('/setlist_bg.png')" }}>
      <div className="min-h-[100vh] w-[800px] max-w-full mx-auto px-4 sm:px-8 md:px-20 lg:px-24 pt-32">
      <div className="flex-1 p-6">
          <img
            src="/setlist_img.png"
            alt="img1"
            className="w-full h-full object-cover"
          />
        </div>
  
        <div className="flex-1 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {titles.map((title, index) => (
                <div key={index} className="flex flex-col">
                    <p>{title}</p>
                </div>
                ))}
            </div>
        </div>
      </div>
      </div>
    );
}
