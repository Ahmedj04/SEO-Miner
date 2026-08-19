import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const posts = [
    {
        slug: 'keyword-research-for-seo',
        category: 'SEO Guide',
        title: 'How to Do Keyword Research for SEO: A Complete Guide',
        description:
            'Learn how to do keyword research for SEO, find long-tail keywords, analyze search intent, evaluate keyword difficulty, research competitors, and build an effective keyword strategy.',
        readTime: '12 min read',
        date: 'August 2026',
    },
    {
        slug: 'low-competition-keywords',
        category: 'SEO Opportunities',
        title: 'How to Find Low-Competition Keywords for SEO',
        description:
            'Learn how to find low-competition keywords, evaluate keyword difficulty, discover long-tail opportunities, analyze search intent, and build a smarter SEO strategy.',
        readTime: '10 min read',
        date: 'August 2026',
    },
    {
        slug: 'keyword-gap-analysis',
        category: 'Competitor SEO',
        title: 'What Is Keyword Gap Analysis? How to Find Keywords Your Competitors Rank For',
        description:
            'Discover how keyword gap analysis can uncover keywords your competitors rank for but your website does not. Learn how to analyze competitor keywords and find actionable SEO opportunities.',
        readTime: '10 min read',
        date: 'August 2026',
    },
    
];

export default function Blog() {
    return (
        <>
            <Head>
                <title>SEO Blog | Keyword Research, SEO & Content Strategy | SEO Miner</title>

                <meta
                    name="description"
                    content="Learn keyword research, SEO, competitor analysis, keyword gap analysis, search intent, long-tail keywords, and content strategy with SEO Miner."
                />

                <meta
                    name="keywords"
                    content="keyword research, SEO keyword research, keyword research tools, keyword analysis, long-tail keywords, keyword gap analysis, competitor keyword research, SEO content strategy"
                />

                <link
                    rel="canonical"
                    href="https://seominer.vercel.app/blog"
                />
            </Head>

            <div
                className="min-h-screen"
                style={{
                    background: 'var(--background)',
                    color: 'var(--foreground)',
                }}
            >
                <Header />

                <main>
                    {/* Hero */}
                    <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-8 sm:pt-24">
                        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

                        <div
                            className="pointer-events-none absolute right-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full opacity-20"
                            style={{
                                background:
                                    'radial-gradient(circle, #2ea870 0%, transparent 70%)',
                            }}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative mx-auto max-w-4xl text-center"
                        >
                            <div
                                className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
                                style={{
                                    borderColor: 'var(--border)',
                                    background: 'var(--surface)',
                                    color: 'var(--accent)',
                                }}
                            >
                                <Sparkles className="h-3.5 w-3.5" />
                                SEO Miner Blog
                            </div>

                            <h1
                                className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
                                style={{
                                    fontFamily: 'Instrument Serif, Georgia, serif',
                                }}
                            >
                                Learn SEO.
                                <br />
                                <span
                                    className="italic"
                                    style={{ color: 'var(--accent)' }}
                                >
                                    Find better opportunities.
                                </span>
                            </h1>

                            <p
                                className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
                                style={{ color: 'var(--text-muted)' }}
                            >
                                Practical guides on keyword research, competitor
                                analysis, content strategy, search intent, and SEO.
                            </p>
                        </motion.div>
                    </section>

                    {/* Blog posts */}
                    <section className="px-4 pb-24 sm:px-8">
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-8 flex items-center justify-between">
                                <div>
                                    <p
                                        className="text-xs font-semibold uppercase tracking-widest"
                                        style={{ color: 'var(--accent)' }}
                                    >
                                        Latest guide
                                    </p>

                                    <h2 className="mt-2 text-2xl font-bold">
                                        SEO Resources
                                    </h2>
                                </div>
                            </div>

                            <div className="grid gap-6">
                                {posts.map((post, index) => (
                                    <motion.div
                                        key={post.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.08,
                                        }}
                                    >
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="group block"
                                        >
                                            <article
                                                className="rounded-2xl border p-6 transition-all duration-300 sm:p-8"
                                                style={{
                                                    borderColor: 'var(--border)',
                                                    background: 'var(--surface)',
                                                    boxShadow: 'var(--shadow-sm)',
                                                }}
                                            >
                                                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                                    <div className="max-w-3xl">
                                                        <div className="mb-4 flex flex-wrap items-center gap-3">
                                                            <span
                                                                className="rounded-full px-3 py-1 text-xs font-semibold"
                                                                style={{
                                                                    background:
                                                                        'var(--accent-light)',
                                                                    color: 'var(--accent)',
                                                                }}
                                                            >
                                                                {post.category}
                                                            </span>

                                                            <span
                                                                className="flex items-center gap-1.5 text-xs"
                                                                style={{
                                                                    color: 'var(--text-muted)',
                                                                }}
                                                            >
                                                                <Clock className="h-3.5 w-3.5" />
                                                                {post.readTime}
                                                            </span>

                                                            <span
                                                                className="text-xs"
                                                                style={{
                                                                    color: 'var(--text-muted)',
                                                                }}
                                                            >
                                                                {post.date}
                                                            </span>
                                                        </div>

                                                        <h2
                                                            className="text-2xl font-bold leading-tight transition-colors duration-200 group-hover:text-[var(--accent)] sm:text-3xl"
                                                        >
                                                            {post.title}
                                                        </h2>

                                                        <p
                                                            className="mt-4 text-base leading-relaxed"
                                                            style={{
                                                                color: 'var(--text-muted)',
                                                            }}
                                                        >
                                                            {post.description}
                                                        </p>
                                                    </div>

                                                    <div
                                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)]"
                                                        style={{
                                                            borderColor: 'var(--border)',
                                                        }}
                                                    >
                                                        <ArrowUpRight className="h-5 w-5" />
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}