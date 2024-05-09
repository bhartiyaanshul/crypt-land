import { useState } from "react";
import './Accordion.css';
import { Vector } from "./Vector.js";


// import pulse, { Vector } from './Vector.js'
// import dropdown from './Vector (1).png'

const accordionData = [
    {
      title: "What is Team Newsify?",
      content: `
      It is alomost completely automated as a system . You can schedule plan and create
        calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
        a smooth business plan for your and your teamateswith one click!
    `,
    },
    {
      title: "How is the team Newsify",
      content: `
      It is alomost completely automated as a system . You can schedule plan and create
        calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
        a smooth business plan for your and your teamateswith one click!
    `,
    },
    {
      title: "What does the technology work?",
      content: `
      It is alomost completely automated as a system . You can schedule plan and create
        calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
        a smooth business plan for your and your teamateswith one click!
    `,
    },
    {
      title: "How often will i get team Newsify?",
      content: `
      It is alomost completely automated as a system . You can schedule plan and create
        calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
        a smooth business plan for your and your teamateswith one click!
    `,
    },
    {
      title: "How automated is this?",
      content: `
      It is alomost completely automated as a system . You can schedule plan and create
        calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
        a smooth business plan for your and your teamateswith one click!
    `,
    },
    {
      title: "It is close to news letter regular?",
      content: `
      It is alomost completely automated as a system . You can schedule plan and create
        calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
        a smooth business plan for your and your teamateswith one click!
    `,
    },
    {
      title: "Can i get a live demo of Newsify in action?",
      content: `
      It is alomost completely automated as a system . You can schedule plan and create
        calenders for your upcoming males. You can Anylzer Ai, tracker , Ai reporter, Ai to create
        a smooth business plan for your and your teamateswith one click!
    `,
    },
  ];

const AccordionSection = ({
    section,
    isActiveSection,
    setActiveIndex,
    sectionIndex,
}) => {
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex);
    };
    return (
        <div className="accordion-data">
            
            <div className='accordionTitleStyles' onClick={toggleSection}>
                <div className="accordions-title">{section.title}</div>
                <div className="accordion-button" style={{'background-color': isActiveSection ? '#1668E8' : '#F7F7F7', 'rotate': isActiveSection ? '45deg' : null }}>
                    <Vector fill={isActiveSection && 'white'} size={isActiveSection && 30} />
                </div>
            </div>
            {isActiveSection && (
                <div className='accordionContentStyles'>{section.content}</div>
            )}
            <div className="accordion-line"></div>
        </div>
    );
};

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="accordion">
            <div className="accordion-content">
                <div className="accordion-title">Freequently asked questions</div>
                <div className="accordion-subtext">We`re happy to answer your questions</div>
                
            </div>
            {/* <div className="accordion-line-last"></div> */}
            <div className='accordionStyles'>
            {accordionData.map((section, index) => (
                <AccordionSection
                    section={section}
                    key={index}
                    isActiveSection={index === activeIndex}
                    setActiveIndex={setActiveIndex}
                    sectionIndex={index}
                />
            ))}
            </div>
        </div>
        
    );
};

export default Accordion;