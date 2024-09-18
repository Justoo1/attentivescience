"use client"

import MDEditor from '@uiw/react-md-editor'
import React, { useEffect, useState } from 'react'
import "@uiw/react-md-editor/markdown-editor.css";

const RenderEditorComponent = ({ content, bgColor  }: { content: string, bgColor: string }) => {
    const [fontSize, setFontSize] = useState('1rem');

    useEffect(() => {
        const updateFontSize = () => {
          const screenWidth = window.innerWidth;
    
          if (screenWidth >= 1536) {
            setFontSize('1.3rem'); // 2xl screens
          } else if (screenWidth >= 1024) {
            setFontSize('1.2rem'); // lg screens
          } else if (screenWidth >= 768) {
            setFontSize('1.1rem'); // md screens
          } else {
            setFontSize('1rem'); // small screens
          }
        };
    
        // Set initial font size
        updateFontSize();
    
        // Update font size on window resize
        window.addEventListener('resize', updateFontSize);
    
        return () => {
          window.removeEventListener('resize', updateFontSize);
        };
      }, []);
    

    return (
        <div data-color-mode="light p-16">

            <MDEditor.Markdown style={{backgroundColor: bgColor, fontSize}} source={content} className='bg-primary-50 2xl:text-5xl'/>
        </div>
    )
}

export default RenderEditorComponent