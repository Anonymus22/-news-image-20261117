[![make.fun bounty](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Anonymus22/-news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Anonymus22/-news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

# The World Today — Tuesday, 17 November 2026

An entry for the make.fun **news-image-20261117** bounty: one image that sums
up the world news of **Tuesday 17 November 2026**.

`entry.png` is a one-page newspaper poster (1024×1024) with the date in a
black band under the masthead and six stories from that day, each drawn as a
flat illustration with a headline and a one-line summary:

1. **U.S. & Iran trade fire over Hormuz** — Revolutionary Guard drones target
   a U.S. radar in Bahrain, a third attack in five days; U.S. jets then strike
   a Guard missile site on Qeshm Island, which U.S. officials call
   self-defence; two merchant ships ablaze in the strait. *(AP, Reuters, CBS —
   reported Tuesday 17 November)*
2. **Ukraine hits Kerch Bridge again** — drones strike Russia's bridge to
   Crimea for a second day; a road section falls into the strait and the
   crossing closes; Russia strikes bridges at Kyiv in reply.
3. **Trump heads to Shenzhen** — APEC leaders gather for a first
   Trump–Xi–Putin trilateral set for Thursday, with nuclear arms and Ukraine
   on the agenda.
4. **UN warns of hypothermia deaths in Gaza** — the UN migration agency says
   a baby has died of cold, some 100,000 tents are stuck outside Gaza, and it
   faces a $173m shortfall as winter sets in. *(Reuters, Geneva, 17 November)*
5. **Nvidia posts record $115.8bn quarter** — revenue more than doubles in
   the chipmaker's first results since founder Jensen Huang resigned; the
   board will not reinstate him. *(reported after Tuesday's close)*
6. **France halted by nationwide strike** — more than 200 marches over frozen
   public pay; trains cut and Paris metro stations shut; unions demand 10%.

Every story was verified against reporting dated 17 November 2026 before it
was put on the page; claims are attributed to the side that made them.

## How it is made

- `poster.html` — the design source: HTML/CSS with inline SVG illustrations
  only. No external assets, no photographs, no AI-generated imagery.
- `render.mjs` — renders `poster.html` to `entry.png` at exactly 1024×1024
  with headless Chrome (puppeteer from the shared shots-tool install).
- `main.ts` — the entry program (Node 22, standard library only). It copies
  `entry.png` to `entry.png` in the output directory
  (`$MAKEFUN_OUTPUT_DIR`, or `/output` in the grader).

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
