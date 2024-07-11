import './bootstrap';
import '../css/app.css';
import Layout from "@/Layouts/Layout";

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  title:title=>
    title? `${title} - My App`:"Laravel Inertia React",
  resolve: name => {
      
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    const authPages = import.meta.glob('./Auth/**/*.jsx', { eager: true });// for jsx files under Auth folder
    let page = pages[`./Pages/${name}.jsx`] || authPages[`./Auth/${name}.jsx`];
    // 'or' operator extract the files not only from Pages folder but also the Auth folder
    page.default.layout = page.default.layout || (page => <Layout children={page} />);
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress:{
    color:'#29d',
  }
})
