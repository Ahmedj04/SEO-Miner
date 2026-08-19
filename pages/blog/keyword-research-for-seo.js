import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    ArrowLeft,
    ArrowUpRight,
    BarChart3,
    CheckCircle2,
    ChevronRight,
    Clock,
    Search,
    Sparkles,
    Target,
    TrendingUp,
    HelpCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const tocItems = [
    { id: 'what-is-keyword-research', label: 'What Is Keyword Research?' },
    { id: 'why-keyword-research-matters', label: 'Why It Matters for SEO' },
    { id: 'research-vs-analysis', label: 'Research vs. Analysis' },
    { id: 'keyword-research-process', label: 'The Keyword Research Process' },
    { id: 'seed-keywords', label: 'Start With Seed Keywords' },
    { id: 'expand-keywords', label: 'Expand Your Keyword List' },
    { id: 'search-volume', label: 'Check Search Volume' },
    { id: 'keyword-difficulty', label: 'Analyze Keyword Difficulty' },
    { id: 'long-tail-keywords', label: 'Find Long-Tail Keywords' },
    { id: 'search-intent', label: 'Understand Search Intent' },
    { id: 'competitor-research', label: 'Analyze Competitors' },
    { id: 'keyword-clustering', label: 'Group Related Keywords' },
    { id: 'common-mistakes', label: 'Common Mistakes' },
    { id: 'faq-section', label: 'Frequently Asked Questions' },
    { id: 'final-thoughts', label: 'Final Thoughts' },
];

const keywordChips = [
    'keyword research',
    'SEO keyword research',
    'long-tail keywords',
    'keyword difficulty',
    'search intent',
];

const steps = [
    {
        number: '01',
        id: 'seed-keywords',
        title: 'Start With Seed Keywords',
        text: 'A seed keyword is a broad term that defines your niche or core topic pillars.To find seed keywords: 1) List your core products, services, and topic categories. 2) Study community forums(Reddit, Quora) and customer support tickets for natural phrasing. 3) Analyze competitor top- level navigation categories.For an SEO website, seed keywords include: SEO, keyword research, SEO tools, content marketing, and technical SEO.',
        items: ['SEO', 'keyword research', 'SEO tools', 'content marketing'],
    },
    {
        number: '02',
        id: 'expand-keywords',
        title: 'Expand Your Keyword List',
        text: 'Once you have your seed keywords, expand them into more specific search queries.Look for related keywords, question keywords, long - tail keywords, commercial keywords, informational keywords, comparison searches, and problem - based searches.',
        items: [
            'Related keywords',
            'Question keywords',
            'Long-tail keywords',
            'Commercial keywords',
        ],
    },
    {
        number: '03',
        id: 'search-volume',
        title: 'Check Search Volume',
        text: 'Search volume estimates how frequently a keyword is searched over a particular period.It can help you estimate demand, but search volume should never be the only factor you use when selecting a keyword.',
        items: ['Demand', 'Relevance', 'Competition', 'Business value'],
    },
    {
        number: '04',
        id: 'keyword-difficulty',
        title: 'Analyze Keyword Difficulty',
        text: 'Keyword difficulty is an estimate of how difficult it may be to rank for a particular keyword.If the search results are dominated by large established websites, newer websites may want to prioritize more specific and less competitive keywords.',
        items: ['Competition', 'Domain authority', 'Existing results', 'Content quality'],
    },
    {
        number: '05',
        id: 'long-tail-keywords',
        title: 'Find Long-Tail Keywords',
        text: 'Long - tail keywords are generally more specific search phrases, often containing several words.They can reveal a clearer user need and help you discover highly targeted content opportunities.',
        items: [
            'best keyword research tool for beginners',
            'how to find low competition keywords',
            'keyword research for a new website',
        ],
    },
];

const intentCards = [
    {
        label: 'Informational',
        example: 'what is keyword research',
        description: 'The searcher wants to learn something.',
    },
    {
        label: 'Commercial',
        example: 'best keyword research tools',
        description: 'The searcher is comparing available options.',
    },
    {
        label: 'Transactional',
        example: 'keyword research tool pricing',
        description: 'The searcher is ready to take action.',
    },
    {
        label: 'Navigational',
        example: 'SEO Miner',
        description: 'The searcher wants to reach a specific destination.',
    },
];

const faqData = [
    {
        question: 'What are seed keywords in keyword research?',
        answer: 'Seed keywords are broad terms that represent your industry or business offerings. They act as the foundational starting point to discover longer-tail search terms and question queries.',
    },
    {
        question: 'How do you analyze keyword difficulty for SEO?',
        answer: 'Evaluate keyword difficulty by inspecting the top 10 Google search results for your target keyword. Look at domain authority, backlink quality, search intent match, and content depth of existing ranking pages.',
    },
    {
        question: 'What is the difference between keyword research and keyword analysis?',
        answer: 'Keyword research is the initial discovery phase of finding search terms. Keyword analysis is the evaluation phase where you assess intent, volume, difficulty, SERP features, and business value before creating content.',
    },
    {
        question: 'How long does it take for keyword research to show results?',
        answer: 'For a new site, targeted long-tail keywords usually start gaining search impressions within 2–4 weeks. Moving into top ranking positions (Page 1) typically takes 3 to 6 months depending on competition and domain authority.',
    },
];

function SectionNumber({ number }) {
    return (
        <div
            className="mb-4 flex items-center gap-4"
            aria-hidden="true"
        >
            <span
                className="text-sm font-bold tracking-[0.2em]"
                style={{
                    color: 'var(--accent)',
                }}
            >
                {number}
            </span>

            <span
                className="h-px flex-1 max-w-[80px]"
                style={{
                    background: 'var(--accent)',
                    opacity: 0.35,
                }}
            />
        </div>
    );
}

function KeywordGraphic() {
    return (
        <div
            className="relative mx-auto mt-12 h-[360px] w-full max-w-5xl overflow-hidden rounded-3xl border sm:h-[420px]"
            style={{
                borderColor: 'var(--border)',
                background:
                    'linear-gradient(145deg, var(--surface) 0%, var(--surface-2) 100%)',
                boxShadow: 'var(--shadow-xl)',
            }}
        >


            <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
                style={{
                    background:
                        'radial-gradient(circle, #2ea870 0%, transparent 70%)',
                }}
            />

            {/* Connecting lines */}
            <div
                className="absolute left-1/2 top-1/2 h-px w-[65%] -translate-x-1/2"
                style={{
                    background:
                        'linear-gradient(90deg, transparent, var(--accent), transparent)',
                    opacity: 0.3,
                }}
            />

            <div
                className="absolute left-1/2 top-1/2 h-[65%] w-px -translate-x-1/2 -translate-y-1/2"
                style={{
                    background:
                        'linear-gradient(180deg, transparent, var(--accent), transparent)',
                    opacity: 0.3,
                }}
            />

            {/* Center */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            >
                <div
                    className="flex h-28 w-28 flex-col items-center justify-center rounded-2xl border shadow-2xl sm:h-36 sm:w-36"
                    style={{
                        borderColor: 'var(--accent)',
                        background: 'var(--foreground)',
                        color: 'var(--background)',
                    }}
                >
                    <Search className="mb-2 h-6 w-6" />
                    <span className="text-xs font-semibold uppercase tracking-widest">
                        Research
                    </span>
                    <span className="mt-1 text-sm font-bold">
                        Keywords
                    </span>
                </div>
            </motion.div>

            {/* Keyword nodes */}
            {[
                {
                    text: 'Search Volume',
                    className: 'left-[6%] top-[18%] sm:left-[13%]',
                },
                {
                    text: 'Search Intent',
                    className: 'right-[6%] top-[18%] sm:right-[13%]',
                },
                {
                    text: 'Competition',
                    className: 'bottom-[18%] left-[6%] sm:left-[13%]',
                },
                {
                    text: 'Content Ideas',
                    className: 'bottom-[18%] right-[6%] sm:right-[13%]',
                },
            ].map((item, index) => (
                <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.15 + index * 0.1,
                    }}
                    className={`absolute ${item.className}`}
                >
                    <div
                        className="rounded-xl border px-3 py-2 text-xs font-semibold shadow-lg sm:px-5 sm:py-3 sm:text-sm"
                        style={{
                            borderColor: 'var(--border)',
                            background: 'var(--surface)',
                            color: 'var(--foreground)',
                        }}
                    >
                        <span
                            className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
                            style={{ background: 'var(--accent)' }}
                        />
                        {item.text}
                    </div>
                </motion.div>
            ))}

            <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-[10px] font-semibold uppercase tracking-[0.25em] sm:text-xs"
                style={{ color: 'var(--text-muted)' }}
            >
                Discover · Analyze · Prioritize · Create
            </div>
        </div>
    );


}

function KeywordDashboard() {
    return (
        <div
            className="my-12 overflow-hidden rounded-2xl border"
            style={{
                borderColor: 'var(--border)',
                background: 'var(--surface-2)',
            }}
        >
            <div
                className="flex items-center justify-between border-b px-5 py-4"
                style={{ borderColor: 'var(--border)' }}
            >

                <div className="flex items-center gap-3">
                    <div
                        className="grid h-9 w-9 place-items-center rounded-lg"
                        style={{
                            background: 'var(--foreground)',
                            color: 'var(--background)',
                        }}
                    >
                        <BarChart3 className="h-4 w-4" />
                    </div>

                    <div>
                        <p className="text-sm font-semibold">
                            Keyword Opportunity
                        </p>
                        <p
                            className="text-xs"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            Example analysis
                        </p>
                    </div>
                </div>

                <div
                    className="hidden rounded-full border px-3 py-1 text-xs font-medium sm:block"
                    style={{
                        borderColor: 'var(--border)',
                        color: 'var(--text-muted)',
                    }}
                >
                    SEO Research
                </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="p-5 sm:p-7">
                    <p
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: 'var(--accent)' }}
                    >
                        Target keyword
                    </p>

                    <div className="mt-2 flex items-center gap-3">
                        <span className="text-2xl font-bold">
                            keyword research
                        </span>
                        <span
                            className="rounded-full px-2.5 py-1 text-[10px] font-semibold"
                            style={{
                                background: 'var(--accent-light)',
                                color: 'var(--accent)',
                            }}
                        >
                            Opportunity
                        </span>
                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {[
                            ['Volume', '12.1K'],
                            ['Difficulty', '42'],
                            ['Intent', 'Info'],
                            ['Trend', 'Growing'],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="rounded-xl border p-4"
                                style={{
                                    borderColor: 'var(--border)',
                                    background: 'var(--surface)',
                                }}
                            >
                                <p
                                    className="text-[10px] font-semibold uppercase tracking-widest"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    {label}
                                </p>
                                <p className="mt-2 text-sm font-bold">
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="border-t p-5 lg:border-l lg:border-t-0 sm:p-7"
                    style={{ borderColor: 'var(--border)' }}
                >
                    <p className="text-sm font-semibold">
                        Related opportunities
                    </p>

                    <div className="mt-4 space-y-3">
                        {[
                            ['SEO keyword research', '2.9K'],
                            ['keyword research tool', '4.4K'],
                            ['keyword analysis', '1.9K'],
                            ['long-tail keywords', '2.4K'],
                        ].map(([keyword, volume]) => (
                            <div
                                key={keyword}
                                className="flex items-center justify-between gap-3"
                            >
                                <span
                                    className="text-xs"
                                    style={{
                                        color: 'var(--text-secondary)',
                                    }}
                                >
                                    {keyword}
                                </span>
                                <span
                                    className="text-xs font-semibold"
                                    style={{
                                        color: 'var(--accent)',
                                    }}
                                >
                                    {volume}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );


}

export default function KeywordResearchForSEO() {
    const [activeSection, setActiveSection] = useState(
        'what-is-keyword-research'
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top -
                            b.boundingClientRect.top
                    );

                if (visible[0]) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                rootMargin: '-120px 0px -65% 0px',
                threshold: 0,
            }
        );

        tocItems.forEach((item) => {
            const element = document.getElementById(item.id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How to Do Keyword Research for SEO (2026 Step-by-Step Guide)',
        description:
            'Learn how to do keyword research for SEO, find seed keywords, analyze search intent, evaluate keyword difficulty, research competitors, and build an effective keyword strategy.',
        url: 'https://seominer.vercel.app/blog/keyword-research-for-seo',
        publisher: {
            '@type': 'Organization',
            name: 'SEO Miner',
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <Head>
                <title>
                    How to Do Keyword Research for SEO (2026 Step-by-Step Guide) | SEO Miner
                </title>

                <meta
                    name="description"
                    content="Learn how to do keyword research for SEO, find long-tail keywords, analyze search intent, evaluate keyword difficulty, research competitors, and build an effective keyword strategy."
                />

                <meta
                    name="keywords"
                    content="keyword research, keyword research for SEO, SEO keyword research, keyword research tools, keyword analysis, long-tail keywords, keyword difficulty, search intent, competitor keyword research, keyword gap analysis, keyword clustering, SEO content strategy"
                />

                <link
                    rel="canonical"
                    href="https://seominer.vercel.app/blog/keyword-research-for-seo"
                />

                <meta
                    property="og:title"
                    content="How to Do Keyword Research for SEO (2026 Step-by-Step Guide)"
                />

                <meta
                    property="og:description"
                    content="Learn how to find valuable keywords, understand search intent, analyze competition, and build an effective SEO keyword strategy."
                />

                <meta property="og:type" content="article" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(articleSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                />
            </Head>

            <div
                className="min-h-screen overflow-x-clip"
                style={{
                    background: 'var(--background)',
                    color: 'var(--foreground)',
                }}
            >
                <Header />

                <main>
                    {/* HERO */}
                    <section className="relative overflow-hidden px-4 pb-12 pt-14 sm:px-8 sm:pt-20">
                        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

                        <div
                            className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-20"
                            style={{
                                background:
                                    'radial-gradient(circle, #2ea870 0%, transparent 70%)',
                            }}
                        />

                        <div
                            className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full opacity-10"
                            style={{
                                background:
                                    'radial-gradient(circle, #1a7a52 0%, transparent 70%)',
                            }}
                        />

                        <div className="relative mx-auto max-w-6xl">
                            <Link
                                href="/blog"
                                className="mb-10 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
                                style={{ color: 'var(--text-muted)' }}
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Blog
                            </Link>

                            <div className="max-w-5xl">
                                <div className="mb-6 flex flex-wrap items-center gap-3">
                                    <span
                                        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
                                        style={{
                                            background:
                                                'var(--accent-light)',
                                            color: 'var(--accent)',
                                        }}
                                    >
                                        <Sparkles className="h-3.5 w-3.5" />
                                        SEO Guide
                                    </span>

                                    <span
                                        className="flex items-center gap-1.5 text-xs"
                                        style={{
                                            color: 'var(--text-muted)',
                                        }}
                                    >
                                        <Clock className="h-3.5 w-3.5" />
                                        12 min read
                                    </span>

                                    <span
                                        className="text-xs"
                                        style={{
                                            color: 'var(--text-muted)',
                                        }}
                                    >
                                        August 2026
                                    </span>
                                </div>

                                <h1
                                    className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-8xl"
                                    style={{
                                        fontFamily:
                                            'Instrument Serif, Georgia, serif',
                                    }}
                                >
                                    How to Do Keyword Research{' '}
                                    <span
                                        className="italic"
                                        style={{
                                            color: 'var(--accent)',
                                        }}
                                    >
                                        for SEO
                                    </span>
                                </h1>

                                <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                                    <p
                                        className="max-w-2xl text-lg leading-relaxed sm:text-xl"
                                        style={{
                                            color: 'var(--text-muted)',
                                        }}
                                    >
                                        A complete guide to finding valuable
                                        keywords, understanding search intent,
                                        analyzing competition, discovering
                                        long-tail opportunities, and building a
                                        smarter SEO content strategy.
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {keywordChips.map((chip) => (
                                            <span
                                                key={chip}
                                                className="rounded-full border px-3 py-1.5 text-xs font-medium"
                                                style={{
                                                    borderColor:
                                                        'var(--border)',
                                                    background:
                                                        'var(--surface)',
                                                    color:
                                                        'var(--text-secondary)',
                                                }}
                                            >
                                                {chip}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <KeywordGraphic />
                        </div>
                    </section>

                    {/* CONTENT AREA */}
                    <section className="px-4 py-24 sm:px-8">
                        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
                            {/* TOC */}
                            <aside className="hidden lg:block">
                                <div className="sticky top-28">
                                    <p
                                        className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em]"
                                        style={{
                                            color: 'var(--accent)',
                                        }}
                                    >
                                        On this page
                                    </p>

                                    <nav className="space-y-1 border-l pl-4">
                                        {tocItems.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className="block border-l-2 py-1.5 pl-3 text-xs leading-relaxed transition-all"
                                                style={{
                                                    marginLeft: '-18px',
                                                    borderColor:
                                                        activeSection ===
                                                            item.id
                                                            ? 'var(--accent)'
                                                            : 'transparent',
                                                    color:
                                                        activeSection ===
                                                            item.id
                                                            ? 'var(--foreground)'
                                                            : 'var(--text-muted)',
                                                    fontWeight:
                                                        activeSection ===
                                                            item.id
                                                            ? 600
                                                            : 400,
                                                }}
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </aside>

                            {/* ARTICLE */}
                            <article className="min-w-0">
                                {/* Mobile TOC */}
                                <details
                                    className="mb-10 rounded-2xl border p-5 lg:hidden"
                                    style={{
                                        borderColor: 'var(--border)',
                                        background: 'var(--surface)',
                                    }}
                                >
                                    <summary className="cursor-pointer text-sm font-semibold">
                                        Table of contents
                                    </summary>

                                    <nav className="mt-4 space-y-2">
                                        {tocItems.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className="block border-l-2 py-1 pl-3 text-sm"
                                                style={{
                                                    borderColor:
                                                        'var(--border)',
                                                    color:
                                                        'var(--text-muted)',
                                                }}
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </nav>
                                </details>

                                {/* Intro */}
                                <div
                                    className="mb-16 rounded-2xl border p-6 sm:p-8"
                                    style={{
                                        borderColor: 'var(--border)',
                                        background: 'var(--surface-2)',
                                    }}
                                >
                                    <div className="flex gap-4">
                                        <div
                                            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:flex"
                                            style={{
                                                background:
                                                    'var(--foreground)',
                                                color: 'var(--background)',
                                            }}
                                        >
                                            <Target className="h-5 w-5" />
                                        </div>

                                        <div>
                                            <p
                                                className="text-xs font-bold uppercase tracking-widest"
                                                style={{
                                                    color: 'var(--accent)',
                                                }}
                                            >
                                                The short version
                                            </p>

                                            <p
                                                className="mt-2 text-base leading-relaxed"
                                                style={{
                                                    color:
                                                        'var(--text-secondary)',
                                                }}
                                            >
                                                Good keyword research isn't
                                                about collecting hundreds of
                                                keywords. It's about finding
                                                the search terms that connect
                                                your audience's needs with what
                                                your website can genuinely
                                                provide.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* What is keyword research */}
                                <section
                                    id="what-is-keyword-research"
                                    className="relative scroll-mt-28"
                                >
                                    <SectionNumber number="01" />

                                    <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
                                        What Is Keyword Research?
                                    </h2>

                                    <div className="mt-6 space-y-5">
                                        <p>
                                            <strong>Keyword research</strong>{' '}
                                            is the process of discovering and
                                            analyzing the words and phrases
                                            people enter into search engines
                                            such as Google when looking for
                                            information, products, services,
                                            or solutions.
                                        </p>

                                        <p>
                                            For example, someone interested in
                                            improving their website's
                                            visibility might search for
                                            <strong>
                                                {' '}
                                                SEO keyword research
                                            </strong>
                                            ,{' '}
                                            <strong>
                                                keyword research tools
                                            </strong>
                                            ,{' '}
                                            <strong>
                                                how to do keyword research
                                            </strong>
                                            , or{' '}
                                            <strong>
                                                long-tail keywords
                                            </strong>
                                            .
                                        </p>

                                        <p>
                                            These searches reveal what people
                                            want to know and what type of
                                            content they expect to find.
                                        </p>
                                    </div>

                                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                        {[
                                            'What your audience searches for',
                                            'How competitive a topic is',
                                            'What search intent lies behind a query',
                                            'Where content opportunities exist',
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex gap-3 rounded-xl border p-4"
                                                style={{
                                                    borderColor:
                                                        'var(--border)',
                                                    background:
                                                        'var(--surface)',
                                                }}
                                            >
                                                <CheckCircle2
                                                    className="mt-0.5 h-4 w-4 shrink-0"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                />
                                                <span className="text-sm">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Why it matters */}
                                <section
                                    id="why-keyword-research-matters"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="02" />

                                    <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
                                        Why Is Keyword Research Important for
                                        SEO?
                                    </h2>

                                    <div className="mt-6 space-y-5">
                                        <p>
                                            Without keyword research, you may
                                            create content based entirely on
                                            assumptions. You could write an
                                            excellent article about a topic
                                            almost nobody searches for or
                                            target a highly competitive
                                            keyword where your website has
                                            little chance of competing.
                                        </p>
                                    </div>

                                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                        {[
                                            [
                                                '01',
                                                'Find your audience',
                                                'Understand the questions, problems, and topics your potential customers care about.',
                                            ],
                                            [
                                                '02',
                                                'Discover content ideas',
                                                'Turn one seed keyword into dozens of relevant topics and content opportunities.',
                                            ],
                                            [
                                                '03',
                                                'Understand intent',
                                                'Create pages that match what people actually want when they search.',
                                            ],
                                            [
                                                '04',
                                                'Find opportunities',
                                                'Identify specific keywords where relevance and competition create a realistic opportunity.',
                                            ],
                                        ].map(([number, title, text]) => (
                                            <div
                                                key={number}
                                                className="group rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1"
                                                style={{
                                                    borderColor:
                                                        'var(--border)',
                                                    background:
                                                        'var(--surface)',
                                                }}
                                            >
                                                <span
                                                    className="text-xs font-bold"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                >
                                                    {number}
                                                </span>

                                                <h3 className="mt-3 text-lg font-bold">
                                                    {title}
                                                </h3>

                                                <p
                                                    className="mt-2 text-sm leading-relaxed"
                                                    style={{
                                                        color:
                                                            'var(--text-muted)',
                                                    }}
                                                >
                                                    {text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Research vs analysis */}
                                <section
                                    id="research-vs-analysis"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="03" />

                                    <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
                                        Keyword Research vs. Keyword Analysis
                                    </h2>

                                    <p className="mt-6">
                                        While <strong>keyword research</strong> is about discovering potential search terms, <strong>keyword analysis</strong> is the process of evaluating those terms against key metrics before writing:
                                    </p>

                                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                        {[
                                            ['Search Intent Alignment', 'Determine whether searchers expect an informational article, comparison chart, or tool.'],
                                            ['Difficulty vs Authority', 'Compare SERP backlink counts against your website authority before targeting.'],
                                            ['Business Conversion Value', 'Prioritize keywords that bring active leads, not just passive traffic.'],
                                            ['SERP Feature Layout', 'Check if search results are dominated by ads, video carousels, or AI Overviews.'],
                                        ].map(([title, desc]) => (
                                            <div
                                                key={title}
                                                className="rounded-xl border p-4"
                                                style={{
                                                    borderColor: 'var(--border)',
                                                    background: 'var(--surface)',
                                                }}
                                            >
                                                <p className="text-sm font-bold">{title}</p>
                                                <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 grid overflow-hidden rounded-2xl border sm:grid-cols-2">
                                        <div
                                            className="border-b p-6 sm:border-b-0 sm:border-r"
                                            style={{
                                                borderColor:
                                                    'var(--border)',
                                                background:
                                                    'var(--surface)',
                                            }}
                                        >
                                            <p
                                                className="text-xs font-bold uppercase tracking-widest"
                                                style={{
                                                    color:
                                                        'var(--accent)',
                                                }}
                                            >
                                                Research
                                            </p>

                                            <h3 className="mt-3 text-xl font-bold">
                                                Discover possibilities
                                            </h3>

                                            <p
                                                className="mt-3 text-sm leading-relaxed"
                                                style={{
                                                    color:
                                                        'var(--text-muted)',
                                                }}
                                            >
                                                Find potential keywords,
                                                questions, topics, competitors,
                                                and search queries.
                                            </p>
                                        </div>

                                        <div
                                            className="p-6"
                                            style={{
                                                background:
                                                    'var(--surface-2)',
                                            }}
                                        >
                                            <p
                                                className="text-xs font-bold uppercase tracking-widest"
                                                style={{
                                                    color:
                                                        'var(--accent)',
                                                }}
                                            >
                                                Analysis
                                            </p>

                                            <h3 className="mt-3 text-xl font-bold">
                                                Evaluate opportunities
                                            </h3>

                                            <p
                                                className="mt-3 text-sm leading-relaxed"
                                                style={{
                                                    color:
                                                        'var(--text-muted)',
                                                }}
                                            >
                                                Evaluate volume, competition,
                                                difficulty, intent, relevance,
                                                and business value.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Process */}
                                <section
                                    id="keyword-research-process"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="04" />

                                    <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
                                        Step-by-Step: How to Do Keyword
                                        Research for SEO
                                    </h2>

                                    <p className="mt-6">
                                        Use this workflow to turn a broad topic
                                        into a prioritized list of SEO
                                        opportunities.
                                    </p>

                                    <div className="mt-10 space-y-6">
                                        {steps.map((step) => (
                                            <div
                                                key={step.number}
                                                id={step.id}
                                                className="relative scroll-mt-28 overflow-hidden rounded-2xl border"
                                                style={{
                                                    borderColor:
                                                        'var(--border)',
                                                    background:
                                                        'var(--surface)',
                                                }}
                                            >
                                                <div className="grid lg:grid-cols-[110px_1fr]">
                                                    <div
                                                        className="flex items-center justify-center border-b p-6 lg:border-b-0 lg:border-r"
                                                        style={{
                                                            borderColor:
                                                                'var(--border)',
                                                            background:
                                                                'var(--surface-2)',
                                                        }}
                                                    >
                                                        <span
                                                            className="text-5xl font-bold"
                                                            style={{
                                                                color:
                                                                    'var(--accent)',
                                                                opacity: 0.8,
                                                            }}
                                                        >
                                                            {step.number}
                                                        </span>
                                                    </div>

                                                    <div className="p-6 sm:p-8">
                                                        <h3 className="text-xl font-bold sm:text-2xl">
                                                            {step.title}
                                                        </h3>

                                                        <p
                                                            className="mt-3 leading-relaxed"
                                                            style={{
                                                                color:
                                                                    'var(--text-muted)',
                                                            }}
                                                        >
                                                            {step.text}
                                                        </p>

                                                        <div className="mt-5 flex flex-wrap gap-2">
                                                            {step.items.map(
                                                                (item) => (
                                                                    <span
                                                                        key={
                                                                            item
                                                                        }
                                                                        className="rounded-lg border px-3 py-1.5 text-xs font-medium"
                                                                        style={{
                                                                            borderColor:
                                                                                'var(--border)',
                                                                            background:
                                                                                'var(--surface-2)',
                                                                        }}
                                                                    >
                                                                        {
                                                                            item
                                                                        }
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <KeywordDashboard />
                                </section>

                                {/* Search intent */}
                                <section
                                    id="search-intent"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="05" />

                                    <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
                                        Understand Search Intent
                                    </h2>

                                    <p className="mt-6">
                                        <strong>Search intent</strong> is the
                                        reason behind a user's search. Before
                                        targeting a keyword, ask what the
                                        person is actually trying to accomplish.
                                    </p>

                                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                        {intentCards.map((card) => (
                                            <div
                                                key={card.label}
                                                className="rounded-2xl border p-5"
                                                style={{
                                                    borderColor:
                                                        'var(--border)',
                                                    background:
                                                        'var(--surface)',
                                                }}
                                            >
                                                <div className="flex items-center justify-between gap-4">
                                                    <h3 className="font-bold">
                                                        {card.label}
                                                    </h3>

                                                    <ChevronRight
                                                        className="h-4 w-4"
                                                        style={{
                                                            color:
                                                                'var(--accent)',
                                                        }}
                                                    />
                                                </div>

                                                <div
                                                    className="mt-4 rounded-lg px-3 py-2 text-xs font-medium"
                                                    style={{
                                                        background:
                                                            'var(--surface-2)',
                                                        color:
                                                            'var(--foreground)',
                                                    }}
                                                >
                                                    "{card.example}"
                                                </div>

                                                <p
                                                    className="mt-3 text-sm"
                                                    style={{
                                                        color:
                                                            'var(--text-muted)',
                                                    }}
                                                >
                                                    {card.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Competitor research */}
                                <section
                                    id="competitor-research"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="06" />

                                    <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
                                        Analyze Your Competitors' Keywords
                                    </h2>

                                    <div className="mt-6 space-y-5">
                                        <p>
                                            Your competitors can be an
                                            excellent source of keyword ideas.
                                            Find websites that rank for topics
                                            related to your business and
                                            investigate which keywords they
                                            target, what topics they cover,
                                            and which questions they answer.
                                        </p>

                                        <p>
                                            This process is often called{' '}
                                            <strong>
                                                competitor keyword research
                                            </strong>{' '}
                                            or{' '}
                                            <strong>
                                                competitor keyword analysis
                                            </strong>
                                            .
                                        </p>
                                    </div>

                                    <div
                                        className="mt-8 rounded-2xl border p-6 sm:p-8"
                                        style={{
                                            borderColor: 'var(--border)',
                                            background:
                                                'var(--surface-2)',
                                        }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div
                                                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                                                style={{
                                                    background:
                                                        'var(--foreground)',
                                                    color:
                                                        'var(--background)',
                                                }}
                                            >
                                                <TrendingUp className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <p
                                                    className="text-xs font-bold uppercase tracking-widest"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                >
                                                    Keyword gap opportunity
                                                </p>

                                                <h3 className="mt-2 text-xl font-bold">
                                                    Find what competitors rank
                                                    for that you don't.
                                                </h3>

                                                <p
                                                    className="mt-3 text-sm leading-relaxed"
                                                    style={{
                                                        color:
                                                            'var(--text-muted)',
                                                    }}
                                                >
                                                    A keyword gap analysis can
                                                    reveal opportunities for
                                                    new blog posts, landing
                                                    pages, supporting content,
                                                    and topic clusters.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Keyword clustering */}
                                <section
                                    id="keyword-clustering"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="07" />

                                    <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
                                        Group Related Keywords
                                    </h2>

                                    <p className="mt-6">
                                        Don't create a separate page for every
                                        slight variation of a keyword. Instead,
                                        group closely related keywords based on
                                        their meaning and search intent.
                                    </p>

                                    <div className="my-8 grid gap-3 sm:grid-cols-3">
                                        {[
                                            'keyword research',
                                            'SEO keyword research',
                                            'keyword research tool',
                                            'keyword analysis',
                                            'keyword clustering',
                                            'keyword strategy',
                                        ].map((keyword, index) => (
                                            <div
                                                key={keyword}
                                                className="relative rounded-xl border p-4"
                                                style={{
                                                    borderColor:
                                                        'var(--border)',
                                                    background:
                                                        'var(--surface)',
                                                }}
                                            >
                                                <span
                                                    className="absolute right-3 top-3 text-[10px] font-bold"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                >
                                                    {String(index + 1).padStart(
                                                        2,
                                                        '0'
                                                    )}
                                                </span>

                                                <Search
                                                    className="h-4 w-4"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                />

                                                <p className="mt-3 text-sm font-semibold">
                                                    {keyword}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <p>
                                        This process is known as{' '}
                                        <strong>keyword clustering</strong> or{' '}
                                        <strong>keyword grouping</strong>. It
                                        helps you build organized content
                                        around broader topics rather than
                                        creating hundreds of thin pages.
                                    </p>
                                </section>

                                {/* Mistakes */}
                                <section
                                    id="common-mistakes"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="08" />

                                    <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
                                        Common Keyword Research Mistakes
                                    </h2>

                                    <div className="mt-8 space-y-3">
                                        {[
                                            [
                                                'Targeting only high-volume keywords',
                                                "High search volume looks attractive, but it doesn't guarantee useful traffic.",
                                            ],
                                            [
                                                'Ignoring search intent',
                                                'A keyword can be relevant to your industry but still have the wrong intent for your page.',
                                            ],
                                            [
                                                'Keyword stuffing',
                                                "Repeating a keyword unnaturally throughout an article doesn't make the page better.",
                                            ],
                                            [
                                                'Creating one page for every variation',
                                                'One strong resource can often be more useful than several thin pages targeting nearly identical intent.',
                                            ],
                                            [
                                                'Ignoring competitors',
                                                'Competitor keyword research can reveal topics and queries you may not have considered.',
                                            ],
                                            [
                                                'Choosing keywords without considering your business',
                                                'Traffic is not the only goal. Consider whether the visitor could become a customer.',
                                            ],
                                        ].map(([title, text], index) => (
                                            <div
                                                key={title}
                                                className="flex gap-4 rounded-xl border p-5"
                                                style={{
                                                    borderColor:
                                                        'var(--border)',
                                                    background:
                                                        'var(--surface)',
                                                }}
                                            >
                                                <span
                                                    className="mt-0.5 text-xs font-bold"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                >
                                                    {String(index + 1).padStart(
                                                        2,
                                                        '0'
                                                    )}
                                                </span>

                                                <div>
                                                    <h3 className="text-sm font-bold">
                                                        {title}
                                                    </h3>

                                                    <p
                                                        className="mt-1 text-sm leading-relaxed"
                                                        style={{
                                                            color:
                                                                'var(--text-muted)',
                                                        }}
                                                    >
                                                        {text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* FAQ Section */}
                                <section
                                    id="faq-section"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="09" />

                                    <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
                                        Frequently Asked Questions
                                    </h2>

                                    <div className="mt-8 space-y-4">
                                        {faqData.map((faq) => (
                                            <div
                                                key={faq.question}
                                                className="rounded-2xl border p-6"
                                                style={{
                                                    borderColor: 'var(--border)',
                                                    background: 'var(--surface)',
                                                }}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <HelpCircle
                                                        className="mt-0.5 h-5 w-5 shrink-0"
                                                        style={{ color: 'var(--accent)' }}
                                                    />
                                                    <div>
                                                        <h3 className="text-lg font-bold">
                                                            {faq.question}
                                                        </h3>
                                                        <p
                                                            className="mt-2 text-sm leading-relaxed"
                                                            style={{ color: 'var(--text-muted)' }}
                                                        >
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Final thoughts */}
                                <section
                                    id="final-thoughts"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="10" />

                                    <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
                                        Final Thoughts
                                    </h2>

                                    <div className="mt-6 space-y-5">
                                        <p>
                                            Effective keyword research isn't
                                            about finding the keyword with the
                                            biggest search volume and repeating
                                            it throughout your website.
                                        </p>

                                        <p>
                                            It's about understanding what
                                            people search for, why they search
                                            for it, how competitive the search
                                            results are, and whether your
                                            website can provide the best
                                            answer.
                                        </p>

                                        <p>
                                            A strong{' '}
                                            <strong>
                                                keyword research strategy
                                            </strong>{' '}
                                            combines keyword discovery, search
                                            volume, keyword difficulty, search
                                            intent, long-tail keywords,
                                            competitor keyword research,
                                            keyword gap analysis, keyword
                                            clustering, content opportunities,
                                            and business relevance.
                                        </p>
                                    </div>

                                    <div
                                        className="mt-8 rounded-2xl border p-6 sm:p-8"
                                        style={{
                                            borderColor:
                                                'var(--accent)',
                                            background:
                                                'var(--accent-light)',
                                        }}
                                    >
                                        <p
                                            className="text-2xl font-bold leading-tight sm:text-3xl"
                                            style={{
                                                fontFamily:
                                                    'Instrument Serif, Georgia, serif',
                                            }}
                                        >
                                            The goal isn't to rank for every
                                            keyword.
                                            <br />
                                            <span
                                                className="italic"
                                                style={{
                                                    color:
                                                        'var(--accent)',
                                                }}
                                            >
                                                The goal is to rank for the
                                                right keywords.
                                            </span>
                                        </p>
                                    </div>
                                </section>

                                {/* CTA */}
                                <section className="relative mt-20 overflow-hidden rounded-3xl border">
                                    <div
                                        className="absolute inset-0 opacity-20"
                                        style={{
                                            background:
                                                'radial-gradient(circle at 70% 30%, #2ea870 0%, transparent 45%)',
                                        }}
                                    />

                                    <div className="relative p-7 sm:p-10 lg:p-12">
                                        <div className="max-w-2xl">
                                            <div
                                                className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                                                style={{
                                                    background:
                                                        'var(--foreground)',
                                                    color:
                                                        'var(--background)',
                                                }}
                                            >
                                                <Sparkles className="h-5 w-5" />
                                            </div>

                                            <p
                                                className="text-xs font-bold uppercase tracking-[0.2em]"
                                                style={{
                                                    color:
                                                        'var(--accent)',
                                                }}
                                            >
                                                Ready to research?
                                            </p>

                                            <h2
                                                className="mt-3 text-4xl font-bold leading-tight sm:text-5xl"
                                                style={{
                                                    fontFamily:
                                                        'Instrument Serif, Georgia, serif',
                                                }}
                                            >
                                                Find the keywords your next
                                                page should{' '}
                                                <span
                                                    className="italic"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                >
                                                    own.
                                                </span>
                                            </h2>

                                            <p
                                                className="mt-5 max-w-xl leading-relaxed"
                                                style={{
                                                    color:
                                                        'var(--text-muted)',
                                                }}
                                            >
                                                Extract keywords, discover
                                                competitors, identify keyword
                                                gaps, and turn your SEO research
                                                into better content opportunities.
                                            </p>

                                            <Link
                                                href="/"
                                                className="mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                                                style={{
                                                    background:
                                                        'var(--foreground)',
                                                    color:
                                                        'var(--background)',
                                                }}
                                            >
                                                Try SEO Miner
                                                <ArrowUpRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </section>

                                {/* Related article */}
                                <div className="mt-10">
                                    <Link
                                        href="/blog"
                                        className="group flex items-center justify-between rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5"
                                        style={{
                                            borderColor: 'var(--border)',
                                            background: 'var(--surface)',
                                        }}
                                    >
                                        <div>
                                            <p
                                                className="text-xs font-semibold uppercase tracking-widest"
                                                style={{
                                                    color:
                                                        'var(--accent)',
                                                }}
                                            >
                                                More from SEO Miner
                                            </p>

                                            <p className="mt-1 font-semibold">
                                                Explore more SEO guides
                                            </p>
                                        </div>

                                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Link>
                                </div>
                            </article>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>

            <style jsx>{`
            .prose-seo {
                color: var(--text-secondary);
                font-size: 17px;
                line-height: 1.85;
            }

            .prose-seo p {
                margin-top: 0;
                margin-bottom: 20px;
            }

            .prose-seo strong {
                color: var(--foreground);
                font-weight: 700;
            }

            @media (max-width: 640px) {
                .prose-seo {
                    font-size: 16px;
                }
            }
        `}</style>
        </>
    );


}