import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Collections from '@/pages/Collections';
import LatestCollections from '@/pages/LatestCollections';
import Gallery from '@/pages/Gallery';
import Manufacturing from '@/pages/Manufacturing';
import GoldRate from '@/pages/GoldRate';
import Blog from '@/pages/Blog';
import Testimonials from '@/pages/Testimonials';
import WhyChooseUs from '@/pages/WhyChooseUs';
import Certifications from '@/pages/Certifications';
import FAQ from '@/pages/FAQ';
import Inquiry from '@/pages/Inquiry';
import Contact from '@/pages/Contact';

import { Route as R } from '@/constants/enum';
import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/ScrollToTop';

import '@/styles/khodiyar.css';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Layout>
      <Routes>
        <Route path={R.Home}              element={<Home />} />
        <Route path={R.About}             element={<About />} />
        <Route path={R.Collections}       element={<Collections />} />
        <Route path={R.LatestCollections} element={<LatestCollections />} />
        <Route path={R.Gallery}           element={<Gallery />} />
        <Route path={R.Manufacturing}     element={<Manufacturing />} />
        <Route path={R.GoldRate}          element={<GoldRate />} />
        <Route path={R.Blog}              element={<Blog />} />
        <Route path={R.Testimonials}      element={<Testimonials />} />
        <Route path={R.WhyChooseUs}       element={<WhyChooseUs />} />
        <Route path={R.Certifications}    element={<Certifications />} />
        <Route path={R.Faq}               element={<FAQ />} />
        <Route path={R.Inquiry}           element={<Inquiry />} />
        <Route path={R.Contact}           element={<Contact />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
