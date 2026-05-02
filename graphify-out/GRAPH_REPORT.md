# Graph Report - v0-ieee-student-branch-website  (2026-05-02)

## Corpus Check
- 17 files · ~633,129 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 33 nodes · 20 edges · 3 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]

## God Nodes (most connected - your core abstractions)
1. `useInView()` - 3 edges
2. `Counter()` - 2 edges
3. `Reveal()` - 2 edges
4. `useReveal()` - 2 edges
5. `RevealSection()` - 2 edges
6. `useReveal()` - 2 edges
7. `RevealCard()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 0.83
Nodes (3): Counter(), Reveal(), useInView()

### Community 2 - "Community 2"
Cohesion: 1.0
Nodes (2): RevealSection(), useReveal()

### Community 3 - "Community 3"
Cohesion: 1.0
Nodes (2): RevealCard(), useReveal()

## Knowledge Gaps
- **Thin community `Community 2`** (3 nodes): `page.tsx`, `RevealSection()`, `useReveal()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 3`** (3 nodes): `page.tsx`, `RevealCard()`, `useReveal()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._