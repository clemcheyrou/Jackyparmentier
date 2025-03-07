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
      <div className="h-[100vh] flex flex-col py-4">
        <div className="flex-1 p-6">
          <img
            src="/image1.jpg"
            alt="img1"
            className="w-full h-full object-cover border"
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
    );
}
