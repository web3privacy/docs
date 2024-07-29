---
title: Hackathon use-cases generator
---

**Problem**: usually hackers don't know what to build or develop not applicable to life solutions. Leading to poor post-hackathon product, project liveliness ratio.

**Solution**: create a tool helping hackers generate use-cases around privacy. Powered by real product necessity & hundreds of previously created demos.

1 click away from the privacy use-case.

![alt text](https://github.com/web3privacy/docs/blob/main/src/content/docs/assets/privacy%20idea%20generator.png)

## Useful links
- [web](https://ideas.web3privacy.info)
- Main repo: [link](https://github.com/web3privacy/hackathonusecases)
- Current repo: [link](https://github.com/web3privacy/hackathonusecases/tree/master)
- Use-cases repo: [link](https://github.com/web3privacy/web3privacy/blob/main/Market%20overview/Ethereum%20Ecosystem/Hackathon%20projects.md)
- Ideas json-files (community & experts): [link](https://github.com/web3privacy/hackathonusecases/tree/master/public/ideas)

**Project components**:
- use cases DB with Git repos: hundreds of hackathon projects around privacy built through the years
- Expert recommendations: up to date key privacy protocols & teams product nevessity
- Generator mechanism based on filters from specific chains, domains to complexity
- community recommended use-cases in the future versions

## Use-cases diversity

![alt text](https://github.com/web3privacy/docs/blob/main/src/content/docs/assets/3%20types%20of%20use-cases.png)
1. Orgs ideas: [Waku](https://github.com/waku-org/ideas/), [Aztec](https://github.com/AztecProtocol/dev-rel/blob/main/hackathons/INSPIRATION.md)
2. hackathon use-cases like Whisper
3. Expert recommendations: [ETHBerlin example](https://cryptpad.fr/pad/#/2/pad/view/sKQtC07xhA5jHvs9cnnBz+rOl74ds9WUPjuusf6y7us/)

### Orgs ideas
![alt text](https://github.com/web3privacy/docs/blob/main/src/content/docs/assets/Orgs%20use-cases%20ideas.png)

### Hackathon use-cases
![alt text](https://github.com/web3privacy/docs/blob/main/src/content/docs/assets/Hackathon%20use-cases%20(ETHDam%20example).png)

### Expert recommendations
![alt text](https://github.com/web3privacy/docs/blob/main/src/content/docs/assets/Expert%20ideas%20(ETHBerlin%20example).png)

## How to contribute

_Data aggregation_
1. **Add use-cases from hackathons**: [DB](https://github.com/web3privacy/web3privacy/blob/main/Market%20overview/Ethereum%20Ecosystem/Hackathon%20projects.md)
2. **Add use-cases from organisations** (protocols, foundations): [here](https://github.com/web3privacy/hackathonusecases/blob/main/src/Organizational%20use-cases.md)

_Front-end_
**Contribute to front-end**: [here](https://github.com/hackyguru/web3privacy-ideas) 

_Update documentation_

**Bonus**:
- generator will help not just hackers, but grant managers & researchers
- match use-cases with funding
- empower devrel efficiency
- bring a second life to unsupported code base
- increase both diversity & efficiency of the new privacy demos
- faster convert non-privacy devs into the market
- standard format for use-cases x privacy (snapshot)

**User flow (future)**
- dev launches the website
- choose filters (chain, domain, lang...) or go random 
- site generates use-cases with useful links (hackathons, git repos)
- dev do DYOR & build use-case

_Team needed_
- curator facilitating the project
- researcher collecting hackathon use-cases & demos - filling the DB
- researcher applying the first simple filters (chain, domain) + how use-case will look after search
- front-end prototyping MVP

Hackathon demos [repo](https://github.com/web3privacy/web3privacy/blob/main/Market%20overview/Ethereum%20Ecosystem/Hackathon%20projects.md)

_Propose as an idea_

1. Think how to make MVP for privacy use-case generator
2. That could use yaml + machine readable data 

a) Explorer examples: 
- data repo https://github.com/web3privacy/explorer-data
- project https://github.com/web3privacy/explorer-data/tree/main/src/projects

b) Jobs SQL example: http://jobs.web3privacy.info

3. Basic MVP will be


a) simple filter like: category (gaming, wallet, auth, dao...) + ecosystem (Ethereum, Secret Network etc)
b) filtered out use-case snapshot (super simple for MVP: name, description, category, github icon+link, web icon + link)

_Some inspiration can be found here_: http://explorer.web3privacy.info
