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
    X,
} from 'lucide-react';
import { motion } from 'framer-motion';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const tocItems = [
    { id: 'what-is-keyword-gap', label: 'What Is Keyword Gap Analysis?' },
    { id: 'why-keyword-gap-matters', label: 'Why Keyword Gaps Matter' },
    { id: 'keyword-gap-vs-content-gap', label: 'Keyword Gap vs Content Gap' },
    { id: 'how-keyword-gap-works', label: 'How Keyword Gap Analysis Works' },
    { id: 'find-competitors', label: 'Find Your SEO Competitors' },
    { id: 'collect-competitor-keywords', label: 'Find Competitor Keywords' },
    { id: 'compare-keywords', label: 'Compare Keyword Rankings' },
    { id: 'evaluate-opportunities', label: 'Evaluate Opportunities' },
    { id: 'search-intent', label: 'Analyze Search Intent' },
    { id: 'prioritize-gaps', label: 'Prioritize Keyword Gaps' },
    { id: 'common-mistakes', label: 'Common Mistakes' },
    { id: 'seo-miner', label: 'Find Keyword Gaps With SEO Miner' },
    { id: 'final-thoughts', label: 'Final Thoughts' },
];

const keywordChips = [
    'keyword gap analysis',
    'competitor keywords',
    'SEO competitor analysis',
    'content gap',
    'keyword opportunities',
];

const processSteps = [
    {
        number: '01',
        id: 'find-competitors',
        title: 'Find Your SEO Competitors',
        description:
            'Start by identifying websites that compete with you in organic search. Your SEO competitors may not always be your direct business competitors.',
        items: [
            'Search competitors',
            'Organic competitors',
            'Top-ranking websites',
        ],
    },
    {
        number: '02',
        id: 'collect-competitor-keywords',
        title: 'Find Competitor Keywords',
        description:
            'Analyze the keywords your competitors rank for. Look for topics, queries, long-tail keywords, and commercial searches that are relevant to your website.',
        items: [
            'Organic keywords',
            'Long-tail keywords',
            'Commercial keywords',
        ],
    },
    {
        number: '03',
        id: 'compare-keywords',
        title: 'Compare Keyword Rankings',
        description:
            'Compare your keyword profile with your competitors. Look for keywords where competitors rank but your website has little or no visibility.',
        items: [
            'Missing keywords',
            'Shared keywords',
            'Competitor rankings',
        ],
    },
    {
        number: '04',
        id: 'evaluate-opportunities',
        title: 'Evaluate the Opportunities',
        description:
            'Not every keyword gap is worth pursuing. Evaluate search volume, keyword difficulty, relevance, search intent, and potential business value.',
        items: [
            'Search volume',
            'Keyword difficulty',
            'Search intent',
            'Business value',
        ],
    },
    {
        number: '05',
        id: 'prioritize-gaps',
        title: 'Prioritize Your Keyword Gaps',
        description:
            'Turn your keyword gap report into an actionable SEO strategy. Prioritize keywords that combine relevance, realistic competition, and valuable search intent.',
        items: [
            'High-value gaps',
            'Quick wins',
            'Content opportunities',
        ],
    },
];

const intentCards = [
    {
        label: 'Informational',
        example: 'how to do keyword research',
        description:
            'Useful for educational content, guides, tutorials, and awareness.',
    },
    {
        label: 'Commercial',
        example: 'best keyword research tools',
        description:
            'Useful for comparison pages, product research, and buying decisions.',
    },
    {
        label: 'Transactional',
        example: 'keyword research tool',
        description:
            'Often indicates stronger action or conversion potential.',
    },
    {
        label: 'Long-tail',
        example: 'keyword gap analysis for small websites',
        description:
            'More specific searches can reveal highly targeted opportunities.',
    },
];
    
// function SectionNumber({ number }) {
//     return (
//         <div
//             className="pointer-events-none absolute -left-3 -top-10 select-none text-7xl font-bold leading-none sm:-left-6 sm:text-8xl"
//             style={{
//                 color: 'var(--accent)',
//                 opacity: 0.07,
//             }}
//         >
//             {number}
//         </div>
//     );
// }
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
                className="h-px max-w-[80px] flex-1"
                style={{
                    background: 'var(--accent)',
                    opacity: 0.35,
                }}
            />
        </div>
    );
}

function CompetitorGraphic() {
    return (
        <div
            className="relative mx-auto mt-12 h-[380px] w-full max-w-5xl overflow-hidden rounded-3xl border sm:h-[440px]"
            style={{
                borderColor: 'var(--border)',
                background:
                    'linear-gradient(145deg, var(--surface) 0%, var(--surface-2) 100%)',
                boxShadow: 'var(--shadow-xl)',
            }}
        >
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

            <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
                style={{
                    background:
                        'radial-gradient(circle, #2ea870 0%, transparent 70%)',
                }}
            />

            <div
                className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border shadow-2xl sm:h-32 sm:w-32"
                style={{
                    borderColor: 'var(--accent)',
                    background: 'var(--foreground)',
                    color: 'var(--background)',
                }}
            >
                <Target className="mb-1 h-5 w-5" />
                <span className="text-[10px] font-semibold uppercase tracking-widest">
                    Keyword
                </span>
                <span className="mt-1 text-xs font-bold">
                    Gap
                </span>
            </div>

            {/* Left competitor panel */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute left-[5%] top-1/2 w-[36%] -translate-y-1/2 sm:left-[10%] sm:w-[30%]"
            >
                <div
                    className="rounded-2xl border p-4 sm:p-6"
                    style={{
                        borderColor: 'var(--border)',
                        background: 'var(--surface)',
                    }}
                >
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">
                            Competitor
                        </span>

                        <TrendingUp
                            className="h-4 w-4"
                            style={{ color: 'var(--accent)' }}
                        />
                    </div>

                    <div className="mt-5 space-y-3">
                        {[
                            'keyword research',
                            'SEO tools',
                            'keyword analysis',
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-lg border px-3 py-2 text-[10px] sm:text-xs"
                                style={{
                                    borderColor: 'var(--border)',
                                    background: 'var(--surface-2)',
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Right your website panel */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute right-[5%] top-1/2 w-[36%] -translate-y-1/2 sm:right-[10%] sm:w-[30%]"
            >
                <div
                    className="rounded-2xl border p-4 sm:p-6"
                    style={{
                        borderColor: 'var(--border)',
                        background: 'var(--surface)',
                    }}
                >
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">
                            Your Website
                        </span>

                        <Search
                            className="h-4 w-4"
                            style={{ color: 'var(--text-muted)' }}
                        />
                    </div>

                    <div className="mt-5 space-y-3">
                        <div
                            className="rounded-lg border px-3 py-2 text-[10px] opacity-60 sm:text-xs"
                            style={{
                                borderColor: 'var(--border)',
                            }}
                        >
                            SEO basics
                        </div>

                        <div
                            className="flex items-center justify-between rounded-lg border px-3 py-2 text-[10px] sm:text-xs"
                            style={{
                                borderColor: 'var(--accent)',
                                background: 'var(--accent-light)',
                                color: 'var(--accent)',
                            }}
                        >
                            <span>keyword gap</span>
                            <X className="h-3 w-3" />
                        </div>

                        <div
                            className="rounded-lg border px-3 py-2 text-[10px] opacity-60 sm:text-xs"
                            style={{
                                borderColor: 'var(--border)',
                            }}
                        >
                            content strategy
                        </div>
                    </div>
                </div>
            </motion.div>

            <div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-[10px] font-semibold uppercase tracking-[0.25em] sm:text-xs"
                style={{ color: 'var(--text-muted)' }}
            >
                Compare · Discover · Prioritize
            </div>
        </div>
    );
}

function GapDashboard() {
    const rows = [
        {
            keyword: 'keyword research tool',
            competitor: 'Position 4',
            yours: 'Not ranking',
            type: 'Missing',
        },
        {
            keyword: 'keyword analysis',
            competitor: 'Position 7',
            yours: 'Position 43',
            type: 'Improve',
        },
        {
            keyword: 'SEO keyword research',
            competitor: 'Position 9',
            yours: 'Not ranking',
            type: 'Missing',
        },
        {
            keyword: 'long-tail keywords',
            competitor: 'Position 12',
            yours: 'Position 31',
            type: 'Improve',
        },
    ];

    return (
        <div
            className="my-12 overflow-hidden rounded-2xl border"
            style={{
                borderColor: 'var(--border)',
                background: 'var(--surface-2)',
            }}
        >
            <div
                className="flex flex-col gap-4 border-b p-5 sm:flex-row sm:items-center sm:justify-between"
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
                            Keyword Gap
                        </p>

                        <p
                            className="text-xs"
                            style={{
                                color: 'var(--text-muted)',
                            }}
                        >
                            Competitor comparison
                        </p>
                    </div>
                </div>

                <div
                    className="inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium"
                    style={{
                        borderColor: 'var(--border)',
                        color: 'var(--text-muted)',
                    }}
                >
                    4 opportunities
                </div>
            </div>

            <div className="overflow-x-auto">
                <div className="min-w-[650px]">
                    <div
                        className="grid grid-cols-[1.5fr_1fr_1fr_100px] gap-4 border-b px-5 py-3 text-[10px] font-bold uppercase tracking-widest"
                        style={{
                            borderColor: 'var(--border)',
                            color: 'var(--text-muted)',
                        }}
                    >
                        <span>Keyword</span>
                        <span>Competitor</span>
                        <span>Your site</span>
                        <span>Status</span>
                    </div>

                    {rows.map((row) => (
                        <div
                            key={row.keyword}
                            className="grid grid-cols-[1.5fr_1fr_1fr_100px] gap-4 border-b px-5 py-4 last:border-b-0"
                            style={{
                                borderColor: 'var(--border)',
                            }}
                        >
                            <span className="text-xs font-semibold">
                                {row.keyword}
                            </span>

                            <span
                                className="text-xs"
                                style={{
                                    color: 'var(--text-muted)',
                                }}
                            >
                                {row.competitor}
                            </span>

                            <span
                                className="text-xs"
                                style={{
                                    color:
                                        row.yours === 'Not ranking'
                                            ? 'var(--text-muted)'
                                            : 'var(--foreground)',
                                }}
                            >
                                {row.yours}
                            </span>

                            <span
                                className="w-fit rounded-full px-2 py-1 text-[10px] font-semibold"
                                style={{
                                    background:
                                        row.type === 'Missing'
                                            ? 'var(--accent-light)'
                                            : 'var(--surface)',
                                    color:
                                        row.type === 'Missing'
                                            ? 'var(--accent)'
                                            : 'var(--text-muted)',
                                }}
                            >
                                {row.type}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function KeywordGapAnalysis() {
    const [activeSection, setActiveSection] = useState(
        'what-is-keyword-gap'
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

    return (
        <>
            <Head>
                <title>
                    What Is Keyword Gap Analysis? How to Find Keywords Your
                    Competitors Rank For | SEO Miner
                </title>

                <meta
                    name="description"
                    content="Learn what keyword gap analysis is and how to find keywords your competitors rank for. Discover competitor keywords, SEO opportunities, content gaps, search intent, and actionable keyword strategies."
                />

                <meta
                    name="keywords"
                    content="keyword gap analysis, keyword gap, competitor keyword analysis, competitor keyword research, competitor keywords, keywords your competitors rank for, SEO competitor analysis, competitor SEO analysis, content gap analysis, keyword research, SEO keyword research, keyword opportunities, keyword difficulty, search volume, search intent, long-tail keywords, competitor analysis tool, keyword gap tool"
                />

                <link
                    rel="canonical"
                    href="https://seominer.vercel.app/blog/keyword-gap-analysis"
                />

                <meta
                    property="og:title"
                    content="What Is Keyword Gap Analysis? How to Find Keywords Your Competitors Rank For"
                />

                <meta
                    property="og:description"
                    content="Discover how keyword gap analysis can uncover keywords your competitors rank for but your website doesn't."
                />

                <meta property="og:type" content="article" />
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

                        <div className="relative mx-auto max-w-6xl">
                            <Link
                                href="/blog"
                                className="mb-10 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
                                style={{
                                    color: 'var(--text-muted)',
                                }}
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
                                        <Target className="h-3.5 w-3.5" />
                                        Competitor SEO
                                    </span>

                                    <span
                                        className="flex items-center gap-1.5 text-xs"
                                        style={{
                                            color: 'var(--text-muted)',
                                        }}
                                    >
                                        <Clock className="h-3.5 w-3.5" />
                                        10 min read
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
                                    What Is Keyword Gap Analysis?{' '}
                                    <span
                                        className="italic"
                                        style={{
                                            color: 'var(--accent)',
                                        }}
                                    >
                                        Find the Keywords Your Competitors
                                        Rank For
                                    </span>
                                </h1>

                                <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                                    <p
                                        className="max-w-2xl text-lg leading-relaxed sm:text-xl"
                                        style={{
                                            color: 'var(--text-muted)',
                                        }}
                                    >
                                        Discover the keywords your competitors
                                        rank for but your website doesn't.
                                        Learn how to identify keyword gaps,
                                        evaluate opportunities, and turn
                                        competitor research into an actionable
                                        SEO strategy.
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

                            <CompetitorGraphic />
                        </div>
                    </section>

                    {/* CONTENT */}
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
                                                color:
                                                    'var(--background)',
                                            }}
                                        >
                                            <Search className="h-5 w-5" />
                                        </div>

                                        <div>
                                            <p
                                                className="text-xs font-bold uppercase tracking-widest"
                                                style={{
                                                    color:
                                                        'var(--accent)',
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
                                                A keyword gap is an opportunity
                                                hiding between your website and
                                                your competitors. By comparing
                                                keyword rankings, you can
                                                discover relevant searches where
                                                competitors have visibility and
                                                your website doesn't.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* What is */}
                                <section
                                    id="what-is-keyword-gap"
                                    className="relative scroll-mt-28"
                                >
                                    <SectionNumber number="01" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        What Is Keyword Gap Analysis?
                                    </h2>

                                    <div className="mt-6 space-y-5">
                                        <p>
                                            <strong>
                                                Keyword gap analysis
                                            </strong>{' '}
                                            is an SEO research process that
                                            compares the keywords your website
                                            ranks for against the keywords your
                                            competitors rank for.
                                        </p>

                                        <p>
                                            The goal is to discover{' '}
                                            <strong>
                                                keywords your competitors rank
                                                for
                                            </strong>{' '}
                                            but your website doesn't, or
                                            keywords where your competitors
                                            have significantly stronger
                                            rankings.
                                        </p>

                                        <p>
                                            These differences are called
                                            <strong> keyword gaps</strong>.
                                            They can reveal opportunities for
                                            new content, existing-page
                                            optimization, landing pages, and
                                            broader SEO strategies.
                                        </p>
                                    </div>

                                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                        {[
                                            [
                                                'Missing',
                                                'Competitor ranks. You do not.',
                                            ],
                                            [
                                                'Improve',
                                                'Both rank, but your competitor is stronger.',
                                            ],
                                            [
                                                'Win',
                                                'You already outperform them.',
                                            ],
                                        ].map(([title, description]) => (
                                            <div
                                                key={title}
                                                className="rounded-2xl border p-5"
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
                                                    {title}
                                                </p>

                                                <p
                                                    className="mt-3 text-sm leading-relaxed"
                                                    style={{
                                                        color:
                                                            'var(--text-muted)',
                                                    }}
                                                >
                                                    {description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Why */}
                                <section
                                    id="why-keyword-gap-matters"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="02" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Why Does Keyword Gap Analysis Matter?
                                    </h2>

                                    <p className="mt-6">
                                        Your competitors have already spent
                                        time researching topics, creating
                                        content, and earning rankings. Their
                                        organic keyword data can therefore
                                        provide valuable clues about what works
                                        in your market.
                                    </p>

                                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                        {[
                                            [
                                                'Discover missed opportunities',
                                                'Find relevant keywords that are already generating visibility for competitors.',
                                            ],
                                            [
                                                'Improve your content strategy',
                                                'Use competitor keywords to identify topics worth covering on your own website.',
                                            ],
                                            [
                                                'Find quick wins',
                                                'Identify keywords where your website already ranks but could potentially improve.',
                                            ],
                                            [
                                                'Understand your market',
                                                'See which topics and search terms dominate your competitive landscape.',
                                            ],
                                        ].map(([title, text]) => (
                                            <div
                                                key={title}
                                                className="rounded-2xl border p-6"
                                                style={{
                                                    borderColor:
                                                        'var(--border)',
                                                    background:
                                                        'var(--surface)',
                                                }}
                                            >
                                                <CheckCircle2
                                                    className="h-5 w-5"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                />

                                                <h3 className="mt-4 text-lg font-bold">
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

                                {/* Keyword vs content gap */}
                                <section
                                    id="keyword-gap-vs-content-gap"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="03" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Keyword Gap vs. Content Gap
                                    </h2>

                                    <p className="mt-6">
                                        Keyword gap analysis and content gap
                                        analysis are closely related, but they
                                        aren't exactly the same.
                                    </p>

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
                                                Keyword Gap
                                            </p>

                                            <h3 className="mt-3 text-xl font-bold">
                                                What keywords are missing?
                                            </h3>

                                            <p
                                                className="mt-3 text-sm leading-relaxed"
                                                style={{
                                                    color:
                                                        'var(--text-muted)',
                                                }}
                                            >
                                                Focuses on the actual search
                                                terms and rankings that differ
                                                between websites.
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
                                                Content Gap
                                            </p>

                                            <h3 className="mt-3 text-xl font-bold">
                                                What topics are missing?
                                            </h3>

                                            <p
                                                className="mt-3 text-sm leading-relaxed"
                                                style={{
                                                    color:
                                                        'var(--text-muted)',
                                                }}
                                            >
                                                Focuses more broadly on topics,
                                                questions, formats, and content
                                                your audience may expect.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* How it works */}
                                <section
                                    id="how-keyword-gap-works"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="04" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        How Does Keyword Gap Analysis Work?
                                    </h2>

                                    <p className="mt-6">
                                        A practical{' '}
                                        <strong>
                                            competitor keyword analysis
                                        </strong>{' '}
                                        can be broken down into a simple
                                        workflow.
                                    </p>

                                    <div className="mt-10 space-y-6">
                                        {processSteps.map((step) => (
                                            <div
                                                key={step.number}
                                                className="overflow-hidden rounded-2xl border"
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
                                                            {
                                                                step.description
                                                            }
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
                                </section>

                                {/* Dashboard */}
                                <section className="mt-20">
                                    <GapDashboard />

                                    <div
                                        className="rounded-xl border p-5"
                                        style={{
                                            borderColor:
                                                'var(--border)',
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
                                            The opportunity
                                        </p>

                                        <p
                                            className="mt-2 text-sm leading-relaxed"
                                            style={{
                                                color:
                                                    'var(--text-secondary)',
                                            }}
                                        >
                                            A useful keyword gap report
                                            doesn't simply tell you what your
                                            competitors rank for. It helps you
                                            determine which of those keywords
                                            are actually worth pursuing.
                                        </p>
                                    </div>
                                </section>

                                {/* Search intent */}
                                <section
                                    id="search-intent"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="05" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Analyze Search Intent Before Targeting
                                        a Keyword
                                    </h2>

                                    <p className="mt-6">
                                        Finding a competitor keyword is only
                                        the beginning. Before creating content,
                                        understand what the searcher actually
                                        wants.
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
                                                    className="mt-3 text-sm leading-relaxed"
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

                                {/* Prioritization */}
                                <section className="relative mt-20">
                                    <SectionNumber number="06" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        How to Prioritize Keyword Gaps
                                    </h2>

                                    <p className="mt-6">
                                        You may discover hundreds or even
                                        thousands of competitor keywords. The
                                        challenge is deciding which ones
                                        deserve your attention first.
                                    </p>

                                    <div className="mt-8 overflow-hidden rounded-2xl border">
                                        <div
                                            className="grid grid-cols-[1.3fr_1fr_1fr] border-b px-5 py-3 text-[10px] font-bold uppercase tracking-widest"
                                            style={{
                                                borderColor:
                                                    'var(--border)',
                                                background:
                                                    'var(--surface-2)',
                                                color:
                                                    'var(--text-muted)',
                                            }}
                                        >
                                            <span>Factor</span>
                                            <span>Look for</span>
                                            <span>Priority</span>
                                        </div>

                                        {[
                                            [
                                                'Relevance',
                                                'Strong topic fit',
                                                'High',
                                            ],
                                            [
                                                'Search intent',
                                                'Matches your page',
                                                'High',
                                            ],
                                            [
                                                'Difficulty',
                                                'Realistic competition',
                                                'Medium',
                                            ],
                                            [
                                                'Search volume',
                                                'Meaningful demand',
                                                'Medium',
                                            ],
                                            [
                                                'Business value',
                                                'Potential customers',
                                                'High',
                                            ],
                                        ].map(
                                            ([factor, lookFor, priority]) => (
                                                <div
                                                    key={factor}
                                                    className="grid grid-cols-[1.3fr_1fr_1fr] border-b px-5 py-4 last:border-b-0"
                                                    style={{
                                                        borderColor:
                                                            'var(--border)',
                                                    }}
                                                >
                                                    <span className="text-xs font-semibold">
                                                        {factor}
                                                    </span>

                                                    <span
                                                        className="text-xs"
                                                        style={{
                                                            color:
                                                                'var(--text-muted)',
                                                        }}
                                                    >
                                                        {lookFor}
                                                    </span>

                                                    <span
                                                        className="text-xs font-semibold"
                                                        style={{
                                                            color:
                                                                priority ===
                                                                'High'
                                                                    ? 'var(--accent)'
                                                                    : 'var(--text-secondary)',
                                                        }}
                                                    >
                                                        {priority}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </section>

                                {/* Common mistakes */}
                                <section
                                    id="common-mistakes"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="07" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Common Keyword Gap Analysis Mistakes
                                    </h2>

                                    <div className="mt-8 space-y-3">
                                        {[
                                            [
                                                'Copying every competitor keyword',
                                                'Not every keyword your competitors rank for is relevant to your business.',
                                            ],
                                            [
                                                'Ignoring search intent',
                                                'A keyword gap is only useful when the intent matches the content you can provide.',
                                            ],
                                            [
                                                'Focusing only on search volume',
                                                'High-volume keywords can be extremely competitive and may not generate valuable traffic.',
                                            ],
                                            [
                                                'Ignoring your existing rankings',
                                                'Some of your biggest opportunities may be keywords where you already rank on page two or three.',
                                            ],
                                            [
                                                'Creating thin content',
                                                'Finding a keyword gap does not mean you should publish low-value content just to target it.',
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

                                {/* SEO Miner */}
                                <section
                                    id="seo-miner"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="08" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Find Keyword Gaps With SEO Miner
                                    </h2>

                                    <p className="mt-6">
                                        Manually comparing competitor
                                        keywords can take hours. SEO Miner is
                                        designed to make this process easier by
                                        helping you discover keywords, analyze
                                        competitors, identify gaps, and turn
                                        those findings into actionable content
                                        opportunities.
                                    </p>

                                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                        {[
                                            'Discover competitor keywords',
                                            'Find missing keyword opportunities',
                                            'Analyze keyword gaps',
                                            'Identify content opportunities',
                                            'Explore related keywords',
                                            'Build a stronger SEO strategy',
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-3 rounded-xl border p-4"
                                                style={{
                                                    borderColor:
                                                        'var(--border)',
                                                    background:
                                                        'var(--surface)',
                                                }}
                                            >
                                                <CheckCircle2
                                                    className="h-4 w-4 shrink-0"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                />

                                                <span className="text-sm font-medium">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* CTA */}
                                <section className="relative mt-12 overflow-hidden rounded-3xl border">
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
                                                Find your gaps
                                            </p>

                                            <h2
                                                className="mt-3 text-4xl font-bold leading-tight sm:text-5xl"
                                                style={{
                                                    fontFamily:
                                                        'Instrument Serif, Georgia, serif',
                                                }}
                                            >
                                                Discover what your competitors
                                                rank for —{' '}
                                                <span
                                                    className="italic"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                >
                                                    and you don't.
                                                </span>
                                            </h2>

                                            <p
                                                className="mt-5 max-w-xl leading-relaxed"
                                                style={{
                                                    color:
                                                        'var(--text-muted)',
                                                }}
                                            >
                                                Turn competitor keyword research
                                                into a clear list of SEO
                                                opportunities.
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
                                                Find Keyword Gaps
                                                <ArrowUpRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </section>

                                {/* Final thoughts */}
                                <section
                                    id="final-thoughts"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="09" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Final Thoughts
                                    </h2>

                                    <div className="mt-6 space-y-5">
                                        <p>
                                            <strong>
                                                Keyword gap analysis
                                            </strong>{' '}
                                            gives you a practical way to
                                            understand what your competitors
                                            are doing in organic search and
                                            where your own website may have
                                            opportunities.
                                        </p>

                                        <p>
                                            The most valuable keyword gaps are
                                            not necessarily the ones with the
                                            highest search volume. Look for
                                            keywords that are relevant to your
                                            audience, match search intent, have
                                            realistic competition, and can
                                            contribute to your business goals.
                                        </p>

                                        <p>
                                            Combine{' '}
                                            <strong>
                                                competitor keyword research
                                            </strong>
                                            , search intent, keyword
                                            difficulty, search volume,
                                            long-tail keywords, and content
                                            analysis to build a more focused
                                            SEO strategy.
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
                                            Your competitors have already
                                            revealed opportunities.
                                            <br />

                                            <span
                                                className="italic"
                                                style={{
                                                    color:
                                                        'var(--accent)',
                                                }}
                                            >
                                                Your job is to find them.
                                            </span>
                                        </p>
                                    </div>
                                </section>

                                {/* Related */}
                                <div className="mt-10">
                                    <Link
                                        href="/blog/keyword-research-for-seo"
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
        </>
    );
}