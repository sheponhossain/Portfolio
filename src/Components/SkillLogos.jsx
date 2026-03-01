import React from 'react';

import reactLogo from '../assets/logos/react.png';
import nextjsLogo from '../assets/logos/Next.png';
import javascriptLogo from '../assets/logos/javascript.png';
import typescriptLogo from '../assets/logos/TS.png';
import nodeLogo from '../assets/logos/node.png';
import gitLogo from '../assets/logos/Git.png';
import mysqlLogo from '../assets/logos/MySQL.png';
import csslogo from '../assets/logos/css.png';
import figmalogo from '../assets/logos/figma.png';
import htmllogo from '../assets/logos/html.png';
import mongologo from '../assets/logos/mongo.png';
import tailwindLogo from '../assets/logos/TailwindLogo-removebg-preview.png';

// A generic wrapper for all logos
const Logo = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-full object-contain" />
);

export const ReactLogo = () => <Logo src={reactLogo} alt="React" />;
export const Nextjs = () => <Logo src={nextjsLogo} alt="Next.js" />;
export const Javascript = () => <Logo src={javascriptLogo} alt="JavaScript" />;
export const Typescript = () => <Logo src={typescriptLogo} alt="TypeScript" />;
export const Node = () => <Logo src={nodeLogo} alt="Node.js" />;
export const Git = () => <Logo src={gitLogo} alt="Git" />;
export const Tailwind = () => <Logo src={tailwindLogo} alt="Tailwind CSS" />;
export const Figma = () => <Logo src={figmalogo} alt="Figma" />;

export const Mysql = () => <Logo src={mysqlLogo} alt="MySQL" />;

export const Css = () => <Logo src={csslogo} alt="CSS" />;

export const Html = () => <Logo src={htmllogo} alt="HTML" />;
export const MongoDB = () => <Logo src={mongologo} alt="MongoDB" />;
// export const PostgreSQL = () => <Logo src={postgrelogo} alt="PostgreSQL" />;
// export const Postman = () => <Logo src={postmanlogo} alt="Postman" />;
