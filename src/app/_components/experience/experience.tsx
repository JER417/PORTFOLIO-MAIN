"use client";
import SvgIcon from '../svgIcon';

export default function Experience() {
  return (
    <div className="flex flex-col justify-center items-center  gap-y-10">
        <h1 className="text-[var(--color-text)] intersect:motion-preset-slide-down-md" style={{ fontFamily: 'Monocraft',  fontSize: '3rem'}}>
        Experience
        </h1>
        <div className="flex flex-row justify-center gap-20">
            <div className='flex flex-col items-center intersect:motion-preset-pop'>
                  <SvgIcon 
                    src={'/images/logos/Sevita.svg'} 
                    alt={"Sevita Logo"} 
                    color='var(--color-text)'
                    size={150}
                  />
                  <span className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light',  fontSize: '1rem', opacity: 0.8, textAlign: 'center' }}>
                  Aug 2025 - Present
                  <br />
                  Freelance Project
                  </span>

            </div>
            <div className='flex flex-col'>
                <h2 className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
                Sevita Orthesis - Web & Mobile App.
                </h2>
                <ul className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                  <li>Web Development: Built responsive web applications using React, Next.js, and Tailwind, focusing on patient management and clinical workflows.</li>
                  <li>Mobile Development: Designed and developed mobile solutions with FlutterFlow and Firebase for secure data handling and real-time access.</li>
                  <li> Fullstack Engineering: Collaborated in a two-person team to deliver scalable web and mobile platforms for Cevita Orthesis, integrating clinical data, reporting features, and user-friendly interfaces.</li>
                </ul>
            </div>
        </div>



        <div className="flex flex-row justify-center gap-20">
          <div className='flex flex-col items-center intersect:motion-preset-pop'>
                <SvgIcon 
                  src={'/images/logos/Outlier.svg'} 
                  alt={"Outlier Logo"} 
                  color='var(--color-text)'
                  size={150}
                />
                <span className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light',  fontSize: '1rem', opacity: 0.8, textAlign: 'center' }}>
                Aug 2024 - Present
                <br />
                Freelance job
                </span>
          </div>
          <div className='flex flex-col'>
              <h2 className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Bold',  fontSize: '1.5rem'}}>
              Outlier - AI Writing Evaluator and Training                 
              </h2>
              <ul className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
                <li>Collaborated with Outlier AI to improve the accuracy and performance of AI models by curating datasets, annotating edge cases, and providing structured feedback on model outputs.</li>
              </ul>
          <div>
          
          </div>
          </div>
        </div>
        <h1 className="text-[var(--color-text)] intersect:motion-preset-slide-down-md" style={{ fontFamily: 'Monocraft',  fontSize: '3rem'}}>
        Badges & Certifications
        </h1>
        <ul className="text-[var(--color-text)]" style={{ fontFamily: 'InriaSans-Light', listStyleType: 'disc', paddingLeft: '1rem' }}>
        <li>Badge of GSL Classroom – 2022</li>
                  <li>Neoris Game Project – 2024</li>
                  <li>Google Day - AI in Action by IBM</li>
                  <li>Ikusi Network design - 2024</li>
                  <li>Engineering Expo - 2024</li>
                  <li>Engineering Expo - 2025 WINNER</li>
                  <li>Best development - 2025 Neoris</li>      
              </ul>
    </div>
    
  );
}
