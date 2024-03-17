---
title: Privacy Services DB
---

| Research | Info | Link |
| ------------- | ------------- | ------------- |
| Privacy marke DB | _Privacy services x web3 initial market DB aggregation: segmentation, key links (web, git, docs), ecosystem, product liveliness etc. 600 projects in the DB._ | [link](https://github.com/web3privacy/web3privacy) |

### Current status
600 projects in the DB (basic data aggregated)

### Internal need (regular basis)
- actualise current data
- add new projects
- moved sunset projects into "Sunset" category
- fix broken links

### Ultimate need
- aggregate reach data to match explorer project [profile](https://explorer.web3privacy.info)

### 📖 Contributor guide 
_Maintaining privacy services database example: PR at GitHub_

### actualization
_goal_: up to date information in the database
_algorhithm_:
1. Open database https://github.com/web3privacy/web3privacy
2. Pick up a category (from DeFi to Infrastructure)
3. Check

- product-readiness (actual state: devnet, testnet, mainnet)
- team status (public, anon)
- github/docs-readiness (available/not)
- ecosystem
- token (yes/no/Coinmarketcap link).
4. Add missing data & make a PR.

### categorisation
_goal_: broader list of categories within the privacy market.
_algorhithm_:
1. Open database https://github.com/web3privacy/web3privacy
2. Check ["other"](https://github.com/web3privacy/web3privacy#Other) & ["dapps"](https://github.com/web3privacy/web3privacy#dapps) categories.
3. Find sub-categories (min 3-4 projects per category). Examples: "marketplaces" or "data lakes".
4. Once a new sub-category has been found - create it & move those projects under it.

### sunset
_goal_: actual information on terminated or abandoned projects.
_algorhithm_:
1. Open database https://github.com/web3privacy/web3privacy
2. Check sunset projects (Twitter &/or Discord activity, GitHub activity).
3. 6 months hiatus - mark them with an icon of the moon next to them.

### category accuracy
_goal_: check Infrastructure, dApps, Other categories if projects really belong there (some projects misslead readers pretending to be infrastructure, for example)
_algorhithm_:
1. Open database https://github.com/web3privacy/web3privacy
2. Check projects' website, documentation.
3. Make observations if a projects belongs to particular category (infrastructure - providing broader protocol toolkit for different decentralised implementations).
4. If project nature differs from category where it exists - move it to the right category.
