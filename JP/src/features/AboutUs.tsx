export const AboutUs = () => {

    return (
      <div className="w-full h-[100vh] bg-cover bg-center bg-no-repeat m-0 relative" style={{ backgroundImage: "url('/presentation_bg.png')" }}>
      <div className="min-h-[100vh] w-[800px] max-w-full mx-auto px-4 sm:px-8 md:px-20 lg:px-24">
      <div className="h-[100vh] flex flex-col py-4">
        <div className="flex-1 p-6">
          <img
            src="/presentation_img.png"
            alt="img1"
            className="w-full h-full object-cover"
          />
        </div>
  
        <div className="flex-1 p-6">
          <p className="leading-loose">Issus de la tradition des Fanfares des Beaux-arts, avec énergie et rythme, les Jacky Parmentier enjaillent toutes sortes d'évènements. De la soirée mondaine (mais pas trop quand même) au pique-nique dans l'herbe, les Jacky Parmentier sauront transmettre de la bonne humeur!
Née en 2007 d'une idée farfelue et d'une école d'architecture, après plus de 14 ans, la fanfare continue d'explorer un répertoire varié et populaire.
Morceaux d'apéro, festivals rigolos, mariages pluvieux ou bals de village heureux, la rue est notre maison et notre engagement pour répondre en toute occasion par un air joyeux. Mais ne vous y trompez-pas, Jacky est aussi romatnique et dramatique, il saura vous envoûter à gros coups de Parmentier!</p>
        </div>
      </div>
      </div>
      </div>
    );
}