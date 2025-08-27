import Tag from "./tag";

export default function Table() {
    return (
        <div className="flex flex-col justify-center items-center mx-10 gap-y-5">
            <h1 className="text-[var(--color-tex2)] intersect:motion-preset-slide-right-lg" 
            style={{ fontFamily: 'Monocraft',  fontSize: '5rem'}}>
            PROJECTS
            </h1>
            <div className="grid grid-cols-3 gap-10">
                <Tag title="Howl" content="Developed a Web App that allows visualizing and analyzing customer conversations, transcribing in real-time, analyzing emotions, detecting key topics, and generating reports with relevant metrics. Won 1st Place in the Technology Entrepreneurship category at Tecnológico de Monterrey's ExpoIngenierías and Best Development, awarded by our corporate mentor NEORIS." 
                    isWinner={true} image="/images/logos/howl2.png" repo="https://github.com/SantiagoDlrr/howl.git" 
                    video="https://www.youtube.com/watch?v=prt349ptWsQ" 
                    demo="https://howl-eight.vercel.app"/>
                <Tag title="Reciclo App" content="Developed an iOS app promoting responsible recycling with a CoreML-powered waste scanner, MapKit recycling center locator, and SwiftUI interface. The app received positive feedback from judges at Expo Ingenierías ITESM 2024." 
                    image="/images/logos/resiclo2.png" repo="https://github.com/A00837763/ReSicloAPP" 
                    video="https://drive.google.com/file/d/1LLDy2Fqfj3smjwOfSRbnDR2OL1222bPo/view?usp=sharing" />
                <Tag title="Neoris Quest" content="A dynamic website with an interactive game  created to encourage Neoris employees to complete the required courses. React, JavaScript, Firebase Realtime Database, and Unity were used for development." 
                    image="/images/logos/cabra2.png" repo="https://github.com/EmilioVidal/Reto-Bloque.git" />
            </div>
        </div>
    );
}
