import React from 'react';
import ReactMarkdown from 'react-markdown';

// Custom Paragraph Component
const CustomParagraph: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({ children, ...props }) => (
  <p style={{ marginBottom: '1rem' }} {...props}>
    {children}
  </p>
);

// Custom Link Component
const CustomLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} style={{ color: 'blue', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

const MarkdownPreview = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      components={{
        p: CustomParagraph as any,
        a: CustomLink as any,
        br: () => <br />,   // Render <br /> correctly
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownPreview;
