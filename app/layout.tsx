import React from 'react';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>SEO AI Assistant</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;