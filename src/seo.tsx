import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/**
 * SEO المركزي: يحقن title/description/canonical/OG/Twitter + robots
 * بدون تعديل كل صفحة.
 *
 * غيّر BASE_URL + SITE_NAME فقط.
 */
const BASE_URL = 'https://ico.bolt.host';
const SITE_NAME = 'ICODE';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og.jpg`; // اختياري

type Meta = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noindex?: boolean;
};

const ROUTES: Record<string, Meta> = {
  '/': {
    title: 'حلول برمجية احترافية بالذكاء الاصطناعي',
    description:
      'ICODE شركة برمجة تقدم حلولًا احترافية تعتمد على الذكاء الاصطناعي لبناء مواقع وأنظمة سريعة ودقيقة بأقل أخطاء ممكنة.',
    canonical: `${BASE_URL}/`,
  },
  '/services': {
    title: 'الخدمات | تطوير مواقع وأنظمة بالذكاء الاصطناعي',
    description:
      'تطوير مواقع وتطبيقات وأنظمة مخصصة باستخدام الذكاء الاصطناعي لتقليل الأخطاء وتسريع التنفيذ ورفع الكفاءة.',
    canonical: `${BASE_URL}/services`,
  },
  '/pricing': {
    title: 'الأسعار | باقات مرنة للمشاريع البرمجية',
    description:
      'باقات وأسعار مرنة لتطوير المواقع والأنظمة الذكية. اختر الخطة المناسبة لمرحلتك وميزانيتك.',
    canonical: `${BASE_URL}/pricing`,
  },
  '/portfolio': {
    title: 'الأعمال | نماذج مشاريع برمجية احترافية',
    description:
      'نماذج من أعمال ICODE في تطوير المواقع والأنظمة باستخدام تقنيات حديثة ومعايير أداء قوية.',
    canonical: `${BASE_URL}/portfolio`,
  },
  '/about': {
    title: 'من نحن | فريق برمجة يعتمد على الذكاء الاصطناعي',
    description:
      'ICODE فريق متخصص في بناء حلول برمجية ذكية تقلّل الأخطاء وتسرّع تنفيذ المشاريع وتزيد جودة المنتج.',
    canonical: `${BASE_URL}/about`,
  },
  '/contact': {
    title: 'تواصل | ابدأ مشروعك مع ICODE',
    description:
      'تواصل مع ICODE لبدء مشروعك أو طلب استشارة تقنية احترافية وتحويل فكرتك إلى نظام يعمل.',
    canonical: `${BASE_URL}/contact`,
  },
  '/consultation': {
    title: 'احجز استشارة | خطة تنفيذ دقيقة وسريعة',
    description:
      'احجز استشارة لتحديد المتطلبات وبناء خطة تنفيذ واضحة بأقل وقت وأعلى جودة.',
    canonical: `${BASE_URL}/consultation`,
  },
};

const FALLBACK: Meta = {
  title: 'حلول برمجية احترافية',
  description:
    'ICODE تقدم تطوير مواقع وأنظمة وحلول برمجية تعتمد على الذكاء الاصطناعي لتقليل الأخطاء وتسريع التنفيذ.',
  canonical: `${BASE_URL}/`,
};

function normalizePath(pathname: string) {
  // إزالة السلاش الأخير لو موجود
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
}

function getMeta(pathname: string): Meta {
  const p = normalizePath(pathname);

  // تطابق مباشر
  if (ROUTES[p]) return ROUTES[p];

  // دعم مسارات ديناميكية (لو عندك مستقبلاً /portfolio/:id مثلاً)
  // هنا نعمل fallback على أقرب prefix معروف
  const candidates = Object.keys(ROUTES).filter((k) => k !== '/' && p.startsWith(k + '/'));
  if (candidates.length) {
    const best = candidates.sort((a, b) => b.length - a.length)[0];
    return ROUTES[best];
  }

  return FALLBACK;
}

export default function SEO() {
  const { pathname } = useLocation();

  const meta = useMemo(() => getMeta(pathname), [pathname]);

  // Canonical ديناميكي حتى لو صفحات SPA
  const canonical = meta.canonical || `${BASE_URL}${pathname}`;

  // تحديث lang/dir تلقائيًا (اختياري لكن مفيد عربي)
  useEffect(() => {
    document.documentElement.setAttribute('lang', 'ar');
    document.documentElement.setAttribute('dir', 'rtl');
  }, []);

  const fullTitle = `${meta.title} | ${SITE_NAME}`;
  const ogImage = meta.ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />

      {/* robots */}
      {meta.noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="ar_AR" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={meta.description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* تحسينات إضافية */}
      <meta name="theme-color" content="#0ea5e9" />
    </Helmet>
  );
}
