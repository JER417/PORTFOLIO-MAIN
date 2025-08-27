
export default function Hackatons() {
    return (
        <div className="flex flex-col justify-center items-center bg-secondary rounded-md p-10 gap-y-4">
            <h1 className="text-[var(--color-background)]" style={{ fontFamily: 'Monocraft',  fontSize: '2.5rem'}}>
            Hackathons & Participations
            </h1>
            <div className="flex flex-row justify-center gap-5">
                <div className='flex flex-col items-center'>
                    <span className="text-[var(--color-background)]" style={{ fontFamily: 'Monocraft',  fontSize: '2rem', textAlign: 'center' }}>
                    2023
                    </span>

                </div>
                <div className='flex flex-col'>
                    <h2 className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                    Expo ingenierias ITESM Monterrey – 2023
                    </h2>
                    <ul className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                    <li>Designed and implemented a smart security house equipped with proximity, infrared, and RFID sensors, as well as servo-motor controlled mechanisms.</li>
                    <li>Programmed the system using Arduino (C++) for hardware integration and Python for data processing and automation.</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-5">
                <div className='flex flex-col items-center'>
                    <span className="text-[var(--color-background)]" style={{ fontFamily: 'Monocraft',  fontSize: '2rem', textAlign: 'center' }}>
                    2024
                    </span>
                </div>
                <div className='flex flex-col'>
                    <h2 className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                    Hackathon Monterrey - 2024
                    </h2>
                    <ul className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                    <li>Redesigned Banorte’s mobile banking application with a modernized UI/UX to improve customer experience and engagement.</li>
                    <li>Integrated AI-driven automation to personalize credit card promotions and offers, dynamically adjusting them based on user behavior and preferences.</li>
                    </ul>

                    <h2 className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                    Expo ingenierias ITESM Monterrey – 2024
                    </h2>
                    <ul className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                    <li>Developed an iOS app promoting responsible recycling with a CoreML-powered waste scanner, MapKit recycling center locator, and SwiftUI interface. The app received positive feedback from judges at Expo Ingenierías ITESM 2024.</li>
                    <li> Presented the project to the Government of Monterrey after being invited to showcase the app’s potential impact on sustainable urban initiatives. </li>
                    </ul>
                </div>
            </div>



            <div className="flex flex-row justify-center gap-5">
                <div className='flex flex-col items-center'>
                    <span className="text-[var(--color-background)]" style={{ fontFamily: 'Monocraft',  fontSize: '2rem', textAlign: 'center' }}>
                    2025
                    </span>
                </div>
                <div className='flex flex-col'>
                    <h2 className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                    </h2>
                    <li></li>
                    

                    <h2 className="text-[var(--color-background)] flex items-center gap-2" style={{ fontFamily: 'InriaSans-Bold', fontSize: '1.5rem' }}>
                        Expo ingenierias ITESM Monterrey – 2025
                        <span className="bg-primary text-black px-2 py-1 rounded font-bold text-xs" style={{ fontFamily: 'InriaSans-Bold' }}>
                            WINNER
                        </span>
                    </h2>
                    <ul className="text-[var(--color-background)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                    <li>Developed a Web App that allows visualizing and analyzing customer conversations, transcribing in real-time, analyzing emotions, detecting key topics, and generating reports with relevant metrics.</li>
                    <li>Won 1st Place in the Technology Entrepreneurship category at Tecnológico de Monterrey ExpoIngenierías and Best Development, awarded by our corporate mentor NEORIS.</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}
