"use client";

import React, { useState, useMemo, useCallback, memo } from "react";
const AccordionItem = memo(function AccordionItem({
  title,
  content,
  isOpen,
  onClick,
  isLast
}) {
  const uniqueId = useMemo(() => title.replace(/\s+/g, "-"), [title]);
  const containerClasses = useMemo(() => !isLast ? "border-b border-orange-200   " : "", [isLast]);
  const buttonClasses = useMemo(() => "w-full flex justify-between items-center p-5 text-left text-lg font-medium text-orange-800   hover:bg-orange-100  focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75 transition-colors duration-300", []);
  const iconClasses = useMemo(() => `w-5 h-5 text-orange-500  transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`, [isOpen]);
  const contentClasses = useMemo(() => `grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`, [isOpen]);
  return <div className={containerClasses}>
      <button type="button" className={buttonClasses} onClick={onClick} aria-expanded={isOpen} aria-controls={`accordion-content-${uniqueId}`} id={`accordion-header-${uniqueId}`}>
        <span>{title}</span>
        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
          <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </button>

      <div id={`accordion-content-${uniqueId}`} role="region" aria-labelledby={`accordion-header-${uniqueId}`} className={contentClasses}>
        <div className="overflow-hidden">
          <div className="p-5 pt-2 text-orange-600  ">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>;
});
export default function Accordion({
  items
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const handleClick = useCallback(index => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  }, []);
  const containerClasses = useMemo(() => "rounded-xl shadow-lg bg-orange-50 border border-orange-200    backdrop-blur-sm", []);
  return <div className={containerClasses}>
      {items.map((item, index) => <AccordionItem key={`${item.title}-${index}`} title={item.title} content={item.content} isOpen={openIndex === index} onClick={() => handleClick(index)} isLast={index === items.length - 1} />)}
    </div>;
}