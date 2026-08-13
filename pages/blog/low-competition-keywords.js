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
    TrendingDown,
    Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const tocItems = [
    {
        id: 'what-are-low-competition-keywords',
        label: 'What Are Low-Competition Keywords?',
    },
    {
        id: 'why-low-competition-keywords-matter',
        label: 'Why They Matter for SEO',
    },
    {
        id: 'keyword-difficulty-vs-competition',
        label: 'Keyword Difficulty vs. Competition',
    },
    {
        id: 'how-to-find-low-competition-keywords',
        label: 'How to Find Them',
    },
    {
        id: 'start-with-seed-keywords',
        label: 'Start With Seed Keywords',
    },
    {
        id: 'use-long-tail-keywords',
        label: 'Find Long-Tail Keywords',
    },
    {
        id: 'analyze-search-intent',
        label: 'Analyze Search Intent',
    },
    {
        id: 'analyze-search-results',
        label: 'Analyze the Search Results',
    },
    {
        id: 'research-competitors',
        label: 'Research Competitor Keywords',
    },
    {
        id: 'evaluate-keyword-opportunities',
        label: 'Evaluate Opportunities',
    },
    {
        id: 'common-mistakes',
        label: 'Common Mistakes',
    },
    {
        id: 'seo-miner',
        label: 'Find Opportunities With SEO Miner',
    },
    {
        id: 'final-thoughts',
        label: 'Final Thoughts',
    },
];

const keywordChips = [
    'low competition keywords',
    'keyword difficulty',
    'long-tail keywords',
    'easy keywords to rank for',
    'SEO opportunities',
];

const processSteps = [
    {
        number: '01',
        id: 'start-with-seed-keywords',
        title: 'Start With Seed Keywords',
        description:
            'Begin with broad topics related to your business, product, service, or niche. Seed keywords give you a starting point for discovering more specific and potentially less competitive searches.',
        items: [
            'Business topics',
            'Products',
            'Services',
            'Customer problems',
        ],
    },
    {
        number: '02',
        id: 'use-long-tail-keywords',
        title: 'Find Long-Tail Keywords',
        description:
            'Long-tail keywords are more specific search phrases that often reveal clearer search intent. They can help you find highly targeted topics beyond broad, competitive keywords.',
        items: [
            'Specific searches',
            'Question keywords',
            'Problem-based searches',
            'Niche topics',
        ],
    },
    {
        number: '03',
        id: 'analyze-search-intent',
        title: 'Analyze Search Intent',
        description:
            'A keyword is only useful when you can create content that satisfies the searcher. Understand whether the user wants information, a comparison, a product, or a specific action.',
        items: [
            'Informational',
            'Commercial',
            'Transactional',
            'Navigational',
        ],
    },
    {
        number: '04',
        id: 'analyze-search-results',
        title: 'Analyze the Search Results',
        description:
            'Search the keyword and study the pages already ranking. Look at the quality, relevance, depth, authority, and type of content appearing in the results.',
        items: [
            'SERP analysis',
            'Ranking pages',
            'Content quality',
            'Search features',
        ],
    },
    {
        number: '05',
        id: 'research-competitors',
        title: 'Research Competitor Keywords',
        description:
            'Your competitors can reveal keywords and topics you may have overlooked. Compare their keyword profiles with yours to uncover potential opportunities.',
        items: [
            'Competitor keywords',
            'Keyword gaps',
            'Content gaps',
            'Organic opportunities',
        ],
    },
];

const intentCards = [
    {
        label: 'Informational',
        example: 'how to find low competition keywords',
        description:
            'The searcher wants to learn how to solve a problem or understand a topic.',
    },
    {
        label: 'Commercial',
        example: 'best keyword research tools',
        description:
            'The searcher is researching solutions before making a decision.',
    },
    {
        label: 'Transactional',
        example: 'keyword research tool',
        description:
            'The searcher may be ready to use or purchase a solution.',
    },
    {
        label: 'Specific / Long-tail',
        example: 'low competition keywords for a new website',
        description:
            'A more specific query can reveal a highly targeted opportunity.',
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
                className="h-px max-w-[80px] flex-1"
                style={{
                    background: 'var(--accent)',
                    opacity: 0.35,
                }}
            />
        </div>
    );
}

function OpportunityGraphic() {
    return (
        <div
            className="relative mx-auto mt-12 h-[390px] w-full max-w-5xl overflow-hidden rounded-3xl border sm:h-[440px]"
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

            <div className="absolute left-1/2 top-1/2 w-[88%] max-w-3xl -translate-x-1/2 -translate-y-1/2">
                <div className="mb-7 flex items-end justify-between gap-4">
                    <div>
                        <p
                            className="text-[10px] font-bold uppercase tracking-[0.2em]"
                            style={{
                                color: 'var(--text-muted)',
                            }}
                        >
                            Keyword opportunity
                        </p>

                        <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                            Find keywords worth targeting
                        </h3>
                    </div>

                    <div
                        className="hidden rounded-full border px-3 py-1.5 text-xs font-semibold sm:block"
                        style={{
                            borderColor: 'var(--accent)',
                            background: 'var(--accent-light)',
                            color: 'var(--accent)',
                        }}
                    >
                        Opportunity detected
                    </div>
                </div>

                {/* Spectrum */}
                <div className="relative">
                    <div
                        className="h-3 overflow-hidden rounded-full"
                        style={{
                            background:
                                'linear-gradient(90deg, var(--surface-2), var(--accent), var(--foreground))',
                        }}
                    />

                    <motion.div
                        initial={{ left: '20%' }}
                        animate={{ left: '67%' }}
                        transition={{
                            duration: 1.2,
                            ease: 'easeOut',
                        }}
                        className="absolute -top-3 h-9 w-9 -translate-x-1/2 rounded-full border-4 shadow-xl"
                        style={{
                            borderColor: 'var(--background)',
                            background: 'var(--accent)',
                        }}
                    />

                    <div className="mt-4 flex justify-between text-[10px] font-semibold uppercase tracking-widest">
                        <span style={{ color: 'var(--text-muted)' }}>
                            High competition
                        </span>

                        <span style={{ color: 'var(--accent)' }}>
                            Opportunity
                        </span>

                        <span style={{ color: 'var(--text-muted)' }}>
                            Low competition
                        </span>
                    </div>
                </div>

                {/* Keyword cards */}
                <div className="mt-9 grid gap-3 sm:grid-cols-3">
                    {[
                        {
                            keyword: 'SEO',
                            difficulty: 'Very High',
                            volume: 'High',
                        },
                        {
                            keyword: 'keyword research',
                            difficulty: 'Medium',
                            volume: 'High',
                        },
                        {
                            keyword: 'low competition SEO keywords',
                            difficulty: 'Lower',
                            volume: 'Targeted',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={item.keyword}
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2 + index * 0.1,
                            }}
                            className="rounded-xl border p-4"
                            style={{
                                borderColor:
                                    index === 2
                                        ? 'var(--accent)'
                                        : 'var(--border)',
                                background:
                                    index === 2
                                        ? 'var(--accent-light)'
                                        : 'var(--surface)',
                            }}
                        >
                            <p className="truncate text-xs font-semibold">
                                {item.keyword}
                            </p>

                            <div className="mt-3 flex items-center justify-between text-[10px]">
                                <span
                                    style={{
                                        color:
                                            index === 2
                                                ? 'var(--accent)'
                                                : 'var(--text-muted)',
                                    }}
                                >
                                    Difficulty
                                </span>

                                <span className="font-semibold">
                                    {item.difficulty}
                                </span>
                            </div>

                            <div className="mt-1 flex items-center justify-between text-[10px]">
                                <span
                                    style={{
                                        color: 'var(--text-muted)',
                                    }}
                                >
                                    Demand
                                </span>

                                <span className="font-semibold">
                                    {item.volume}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-[10px] font-semibold uppercase tracking-[0.25em] sm:text-xs"
                style={{
                    color: 'var(--text-muted)',
                }}
            >
                Relevance · Difficulty · Intent · Opportunity
            </div>
        </div>
    );
}

function OpportunityDashboard() {
    const rows = [
        {
            keyword: 'low competition keywords',
            volume: '1.9K',
            difficulty: 'Low',
            intent: 'Info',
            opportunity: 'High',
        },
        {
            keyword: 'easy SEO keywords to rank for',
            volume: '880',
            difficulty: 'Low',
            intent: 'Info',
            opportunity: 'High',
        },
        {
            keyword: 'long-tail keyword research',
            volume: '720',
            difficulty: 'Low',
            intent: 'Info',
            opportunity: 'High',
        },
        {
            keyword: 'keyword research for new websites',
            volume: '590',
            difficulty: 'Low',
            intent: 'Info',
            opportunity: 'Medium',
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
                style={{
                    borderColor: 'var(--border)',
                }}
            >
                <div className="flex items-center gap-3">
                    <div
                        className="grid h-9 w-9 place-items-center rounded-lg"
                        style={{
                            background: 'var(--foreground)',
                            color: 'var(--background)',
                        }}
                    >
                        <Zap className="h-4 w-4" />
                    </div>

                    <div>
                        <p className="text-sm font-semibold">
                            Low-Competition Opportunities
                        </p>

                        <p
                            className="text-xs"
                            style={{
                                color: 'var(--text-muted)',
                            }}
                        >
                            Example keyword analysis
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
                <div className="min-w-[700px]">
                    <div
                        className="grid grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr_0.8fr] gap-4 border-b px-5 py-3 text-[10px] font-bold uppercase tracking-widest"
                        style={{
                            borderColor: 'var(--border)',
                            color: 'var(--text-muted)',
                        }}
                    >
                        <span>Keyword</span>
                        <span>Volume</span>
                        <span>Difficulty</span>
                        <span>Intent</span>
                        <span>Opportunity</span>
                    </div>

                    {rows.map((row) => (
                        <div
                            key={row.keyword}
                            className="grid grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr_0.8fr] gap-4 border-b px-5 py-4 last:border-b-0"
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
                                {row.volume}
                            </span>

                            <span
                                className="text-xs font-semibold"
                                style={{
                                    color: 'var(--accent)',
                                }}
                            >
                                {row.difficulty}
                            </span>

                            <span
                                className="text-xs"
                                style={{
                                    color: 'var(--text-muted)',
                                }}
                            >
                                {row.intent}
                            </span>

                            <span
                                className="w-fit rounded-full px-2 py-1 text-[10px] font-semibold"
                                style={{
                                    background:
                                        'var(--accent-light)',
                                    color: 'var(--accent)',
                                }}
                            >
                                {row.opportunity}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function LowCompetitionKeywords() {
    const [activeSection, setActiveSection] = useState(
        'what-are-low-competition-keywords'
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
                    How to Find Low-Competition Keywords for SEO | SEO Miner
                </title>

                <meta
                    name="description"
                    content="Learn how to find low-competition keywords for SEO. Discover keyword difficulty, long-tail keywords, search intent, competitor keywords, search volume, and actionable SEO opportunities."
                />

                <meta
                    name="keywords"
                    content="low competition keywords, low-competition keywords, low competition keywords for SEO, how to find low competition keywords, easy keywords to rank for, low difficulty keywords, keyword difficulty, long-tail keywords, long-tail keyword research, keyword research, SEO keyword research, keyword research tools, keyword analysis, search volume, search intent, competitor keyword research, competitor keywords, keyword gap analysis, SEO competition, keyword opportunities, organic traffic, SEO strategy, content strategy"
                />

                <link
                    rel="canonical"
                    href="https://seominer.vercel.app/blog/low-competition-keywords"
                />

                <meta
                    property="og:title"
                    content="How to Find Low-Competition Keywords for SEO"
                />

                <meta
                    property="og:description"
                    content="Learn how to discover low-competition keywords, analyze keyword difficulty, find long-tail opportunities, and build a smarter SEO strategy."
                />

                <meta
                    property="og:type"
                    content="article"
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
                                        <Zap className="h-3.5 w-3.5" />
                                        SEO Opportunities
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
                                    How to Find{' '}
                                    <span
                                        className="italic"
                                        style={{
                                            color: 'var(--accent)',
                                        }}
                                    >
                                        Low-Competition Keywords
                                    </span>{' '}
                                    for SEO
                                </h1>

                                <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                                    <p
                                        className="max-w-2xl text-lg leading-relaxed sm:text-xl"
                                        style={{
                                            color: 'var(--text-muted)',
                                        }}
                                    >
                                        Discover how to find keywords that
                                        offer realistic ranking opportunities.
                                        Learn how to evaluate keyword
                                        difficulty, search intent, search
                                        volume, competition, and long-tail
                                        opportunities.
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

                            <OpportunityGraphic />
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
                                {/* MOBILE TOC */}
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

                                {/* INTRO */}
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
                                            <Target className="h-5 w-5" />
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
                                                Low-competition keywords aren't
                                                necessarily keywords with zero
                                                competition. They are search
                                                opportunities where the
                                                combination of relevance,
                                                competition, search intent, and
                                                your website's ability to
                                                satisfy the query makes ranking
                                                realistically achievable.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* WHAT ARE */}
                                <section
                                    id="what-are-low-competition-keywords"
                                    className="relative scroll-mt-28"
                                >
                                    <SectionNumber number="01" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        What Are Low-Competition Keywords?
                                    </h2>

                                    <div className="mt-6 space-y-5">
                                        <p>
                                            <strong>
                                                Low-competition keywords
                                            </strong>{' '}
                                            are search terms that may be more
                                            realistic for a website to compete
                                            for than highly competitive,
                                            broad keywords.
                                        </p>

                                        <p>
                                            They are often more specific,
                                            closely aligned with a particular
                                            search intent, or associated with a
                                            narrower topic or audience.
                                        </p>

                                        <p>
                                            The goal isn't simply to find a
                                            keyword with the lowest possible
                                            difficulty. You want to find a
                                            keyword that combines{' '}
                                            <strong>
                                                relevance, realistic
                                                competition, useful demand, and
                                                valuable search intent
                                            </strong>
                                            .
                                        </p>
                                    </div>

                                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                        {[
                                            [
                                                'Relevant',
                                                'Closely matches your audience and offering.',
                                            ],
                                            [
                                                'Specific',
                                                'Often targets a clearer and narrower need.',
                                            ],
                                            [
                                                'Realistic',
                                                'Offers a more achievable SEO opportunity.',
                                            ],
                                        ].map(([title, text]) => (
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
                                                    {text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* WHY */}
                                <section
                                    id="why-low-competition-keywords-matter"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="02" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Why Do Low-Competition Keywords Matter
                                        for SEO?
                                    </h2>

                                    <p className="mt-6">
                                        Established websites often have an
                                        advantage when competing for broad,
                                        high-demand keywords. Newer and smaller
                                        websites may therefore benefit from
                                        targeting more specific opportunities
                                        first.
                                    </p>

                                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                        {[
                                            [
                                                'Build organic traffic',
                                                'Specific keywords can attract highly relevant visitors who are actively searching for a solution.',
                                            ],
                                            [
                                                'Target realistic opportunities',
                                                'Instead of competing immediately for the most difficult terms, focus on achievable searches.',
                                            ],
                                            [
                                                'Reach specific audiences',
                                                'Long-tail and niche searches can reveal users with clearer needs.',
                                            ],
                                            [
                                                'Build topical authority',
                                                'A collection of useful pages around related topics can strengthen your overall content strategy.',
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

                                {/* DIFFICULTY */}
                                <section
                                    id="keyword-difficulty-vs-competition"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="03" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Keyword Difficulty vs. Competition:
                                        What's the Difference?
                                    </h2>

                                    <p className="mt-6">
                                        <strong>
                                            Keyword difficulty
                                        </strong>{' '}
                                        is a metric used by many SEO tools to
                                        estimate how challenging it may be to
                                        rank for a keyword. Competition can
                                        refer more broadly to the websites,
                                        content, authority, and pages competing
                                        for the same search.
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
                                                Keyword difficulty
                                            </p>

                                            <h3 className="mt-3 text-xl font-bold">
                                                A useful metric
                                            </h3>

                                            <p
                                                className="mt-3 text-sm leading-relaxed"
                                                style={{
                                                    color:
                                                        'var(--text-muted)',
                                                }}
                                            >
                                                Helps you compare the relative
                                                difficulty of different
                                                keywords within an SEO tool.
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
                                                Actual competition
                                            </p>

                                            <h3 className="mt-3 text-xl font-bold">
                                                Study the SERP
                                            </h3>

                                            <p
                                                className="mt-3 text-sm leading-relaxed"
                                                style={{
                                                    color:
                                                        'var(--text-muted)',
                                                }}
                                            >
                                                Look at the real pages ranking,
                                                their quality, relevance,
                                                authority, and ability to satisfy
                                                the search.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="mt-6 rounded-xl border p-5"
                                        style={{
                                            borderColor:
                                                'var(--accent)',
                                            background:
                                                'var(--accent-light)',
                                        }}
                                    >
                                        <p className="text-sm font-semibold">
                                            Don't treat a difficulty score as a
                                            guarantee.
                                        </p>

                                        <p
                                            className="mt-1 text-sm leading-relaxed"
                                            style={{
                                                color:
                                                    'var(--text-muted)',
                                            }}
                                        >
                                            Use keyword difficulty as one
                                            signal, then inspect the actual
                                            search results before deciding
                                            whether a keyword is worth
                                            targeting.
                                        </p>
                                    </div>
                                </section>

                                {/* PROCESS */}
                                <section
                                    id="how-to-find-low-competition-keywords"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="04" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        How to Find Low-Competition Keywords
                                    </h2>

                                    <p className="mt-6">
                                        Finding{' '}
                                        <strong>
                                            easy keywords to rank for
                                        </strong>{' '}
                                        requires more than sorting a keyword
                                        list by difficulty. Use a combination
                                        of keyword research, SERP analysis,
                                        search intent, competitor research, and
                                        business relevance.
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

                                {/* LONG TAIL */}
                                <section
                                    id="use-long-tail-keywords"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="05" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Use Long-Tail Keywords to Find Specific
                                        Opportunities
                                    </h2>

                                    <p className="mt-6">
                                        <strong>
                                            Long-tail keywords
                                        </strong>{' '}
                                        are generally more specific search
                                        phrases. They often contain several
                                        words and describe a more precise user
                                        need.
                                    </p>

                                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                        {[
                                            'SEO',
                                            'keyword research',
                                            'low competition keywords for a new website',
                                        ].map((keyword, index) => (
                                            <div
                                                key={keyword}
                                                className="rounded-2xl border p-5"
                                                style={{
                                                    borderColor:
                                                        index === 2
                                                            ? 'var(--accent)'
                                                            : 'var(--border)',
                                                    background:
                                                        index === 2
                                                            ? 'var(--accent-light)'
                                                            : 'var(--surface)',
                                                }}
                                            >
                                                <p
                                                    className="text-[10px] font-bold uppercase tracking-widest"
                                                    style={{
                                                        color:
                                                            index === 2
                                                                ? 'var(--accent)'
                                                                : 'var(--text-muted)',
                                                    }}
                                                >
                                                    {index === 2
                                                        ? 'Specific opportunity'
                                                        : 'Broad topic'}
                                                </p>

                                                <p className="mt-3 text-sm font-semibold">
                                                    {keyword}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="mt-6">
                                        The more specific query may have lower
                                        search demand, but it can also have
                                        clearer intent and stronger relevance.
                                        That's why{' '}
                                        <strong>
                                            long-tail keyword research
                                        </strong>{' '}
                                        is an important part of finding
                                        realistic SEO opportunities.
                                    </p>
                                </section>

                                {/* SEARCH INTENT */}
                                <section
                                    id="analyze-search-intent"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="06" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Analyze Search Intent
                                    </h2>

                                    <p className="mt-6">
                                        A keyword may look easy to rank for but
                                        still be a poor target if the intent
                                        doesn't match your content.
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

                                {/* SERP */}
                                <section
                                    id="analyze-search-results"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="07" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Analyze the Search Results Before
                                        Targeting a Keyword
                                    </h2>

                                    <p className="mt-6">
                                        Keyword metrics are useful, but you
                                        should also inspect the actual search
                                        results. Search your target keyword and
                                        study the pages that currently rank.
                                    </p>

                                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                        {[
                                            [
                                                'Are the results relevant?',
                                                'Check whether the ranking pages closely answer the search query.',
                                            ],
                                            [
                                                'How strong is the content?',
                                                'Look at depth, usefulness, structure, and how well the pages satisfy the searcher.',
                                            ],
                                            [
                                                'Who is ranking?',
                                                'Look at the types of websites appearing in the results.',
                                            ],
                                            [
                                                'What format is Google showing?',
                                                'Understand whether the SERP favors guides, lists, product pages, videos, or other formats.',
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
                                                <Search
                                                    className="h-5 w-5"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                />

                                                <h3 className="mt-4 text-base font-bold">
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

                                {/* COMPETITORS */}
                                <section
                                    id="research-competitors"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="08" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Use Competitor Keyword Research
                                    </h2>

                                    <p className="mt-6">
                                        Your competitors can be one of the best
                                        sources of keyword ideas. Analyze their
                                        organic keywords to discover topics
                                        where they have visibility and your
                                        website may have opportunities.
                                    </p>

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
                                                <TrendingDown className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <p
                                                    className="text-xs font-bold uppercase tracking-widest"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                >
                                                    Competitor opportunity
                                                </p>

                                                <h3 className="mt-2 text-xl font-bold">
                                                    Find keywords competitors
                                                    rank for that you don't.
                                                </h3>

                                                <p
                                                    className="mt-3 text-sm leading-relaxed"
                                                    style={{
                                                        color:
                                                            'var(--text-muted)',
                                                    }}
                                                >
                                                    Combine competitor keyword
                                                    research with keyword gap
                                                    analysis to discover
                                                    relevant searches that may
                                                    be worth targeting.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* EVALUATE */}
                                <section
                                    id="evaluate-keyword-opportunities"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="09" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        How to Evaluate Low-Competition Keyword
                                        Opportunities
                                    </h2>

                                    <p className="mt-6">
                                        Don't automatically choose the keyword
                                        with the lowest difficulty. Evaluate
                                        the entire opportunity.
                                    </p>

                                    <OpportunityDashboard />

                                    <div className="overflow-hidden rounded-2xl border">
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
                                            <span>Question</span>
                                            <span>Goal</span>
                                        </div>

                                        {[
                                            [
                                                'Relevance',
                                                'Does it fit my website?',
                                                'Strong fit',
                                            ],
                                            [
                                                'Difficulty',
                                                'Can I realistically compete?',
                                                'Achievable',
                                            ],
                                            [
                                                'Search volume',
                                                'Is there meaningful demand?',
                                                'Useful demand',
                                            ],
                                            [
                                                'Intent',
                                                'Can I satisfy the query?',
                                                'Clear match',
                                            ],
                                            [
                                                'Business value',
                                                'Can this traffic matter?',
                                                'Potential value',
                                            ],
                                        ].map(
                                            ([factor, question, goal]) => (
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
                                                        {question}
                                                    </span>

                                                    <span
                                                        className="text-xs font-semibold"
                                                        style={{
                                                            color:
                                                                'var(--accent)',
                                                        }}
                                                    >
                                                        {goal}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </section>

                                {/* MISTAKES */}
                                <section
                                    id="common-mistakes"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="10" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Common Mistakes When Finding
                                        Low-Competition Keywords
                                    </h2>

                                    <div className="mt-8 space-y-3">
                                        {[
                                            [
                                                'Choosing keywords only because the difficulty is low',
                                                'Low difficulty does not automatically mean the keyword is valuable or relevant.',
                                            ],
                                            [
                                                'Ignoring search volume completely',
                                                'A keyword can be easy to rank for but generate very little useful search demand.',
                                            ],
                                            [
                                                'Ignoring search intent',
                                                'If your page does not satisfy the intent, ranking for the keyword may not produce useful results.',
                                            ],
                                            [
                                                'Chasing every long-tail keyword',
                                                'Specific does not automatically mean valuable. Evaluate relevance and business value.',
                                            ],
                                            [
                                                'Ignoring the actual SERP',
                                                'Keyword tools provide useful estimates, but the search results show what you are actually competing against.',
                                            ],
                                            [
                                                'Creating thin content',
                                                'A low-competition keyword is still an opportunity to create genuinely useful content—not an excuse for low-quality pages.',
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

                                {/* SEO MINER */}
                                <section
                                    id="seo-miner"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="11" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Find Low-Competition Keywords With SEO
                                        Miner
                                    </h2>

                                    <p className="mt-6">
                                        Finding keyword opportunities manually
                                        can take hours. SEO Miner helps
                                        simplify the research process by
                                        allowing you to discover keywords,
                                        analyze websites, research competitors,
                                        identify keyword gaps, and turn your
                                        findings into actionable SEO
                                        opportunities.
                                    </p>

                                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                        {[
                                            'Discover relevant keyword ideas',
                                            'Identify long-tail opportunities',
                                            'Analyze competitor keywords',
                                            'Find keyword gaps',
                                            'Explore content opportunities',
                                            'Build a focused SEO strategy',
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
                                                <Zap className="h-5 w-5" />
                                            </div>

                                            <p
                                                className="text-xs font-bold uppercase tracking-[0.2em]"
                                                style={{
                                                    color:
                                                        'var(--accent)',
                                                }}
                                            >
                                                Find your next opportunity
                                            </p>

                                            <h2
                                                className="mt-3 text-4xl font-bold leading-tight sm:text-5xl"
                                                style={{
                                                    fontFamily:
                                                        'Instrument Serif, Georgia, serif',
                                                }}
                                            >
                                                Stop chasing the biggest
                                                keywords. Find the{' '}
                                                <span
                                                    className="italic"
                                                    style={{
                                                        color:
                                                            'var(--accent)',
                                                    }}
                                                >
                                                    right opportunities.
                                                </span>
                                            </h2>

                                            <p
                                                className="mt-5 max-w-xl leading-relaxed"
                                                style={{
                                                    color:
                                                        'var(--text-muted)',
                                                }}
                                            >
                                                Discover low-competition
                                                keywords, analyze competitors,
                                                find gaps, and build a smarter
                                                SEO strategy with SEO Miner.
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
                                                Find Keyword Opportunities
                                                <ArrowUpRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </section>

                                {/* FINAL */}
                                <section
                                    id="final-thoughts"
                                    className="relative mt-20 scroll-mt-28"
                                >
                                    <SectionNumber number="12" />

                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Final Thoughts
                                    </h2>

                                    <div className="mt-6 space-y-5">
                                        <p>
                                            Finding{' '}
                                            <strong>
                                                low-competition keywords
                                            </strong>{' '}
                                            is about more than finding the
                                            lowest keyword difficulty score.
                                            The best opportunities combine
                                            relevance, realistic competition,
                                            search intent, useful demand, and
                                            business value.
                                        </p>

                                        <p>
                                            Start with seed keywords, expand
                                            your research, explore{' '}
                                            <strong>
                                                long-tail keywords
                                            </strong>
                                            , analyze search intent, inspect
                                            the actual SERPs, and research what
                                            your competitors are ranking for.
                                        </p>

                                        <p>
                                            Then prioritize the opportunities
                                            where your website can genuinely
                                            provide a better or more useful
                                            result.
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
                                            Don't chase keywords just because
                                            they're popular.
                                            <br />

                                            <span
                                                className="italic"
                                                style={{
                                                    color:
                                                        'var(--accent)',
                                                }}
                                            >
                                                Chase opportunities that make
                                                sense for your website.
                                            </span>
                                        </p>
                                    </div>
                                </section>

                                {/* RELATED */}
                                <div className="mt-10 grid gap-3 sm:grid-cols-2">
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
                                                Previous guide
                                            </p>

                                            <p className="mt-1 font-semibold">
                                                How to Do Keyword Research for
                                                SEO
                                            </p>
                                        </div>

                                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Link>

                                    <Link
                                        href="/blog/keyword-gap-analysis"
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
                                                Next guide
                                            </p>

                                            <p className="mt-1 font-semibold">
                                                What Is Keyword Gap Analysis?
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