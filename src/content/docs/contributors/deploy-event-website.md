---
title: How to deploy a W3PN events website
---

## Preamble

The purpose of this Guide is to help you deploy a unique website for a W3PN event that is larger than a meetup via Github Pages (example websites: [Summit](https://summit.web3privacy.info/) or [Congress](https://congress.web3privacy.info/)).

The cost for us to deploy a new website is basically zero (aside from contributor time), and requires a little coordination but can be completed in few hours.


## Pre-requisites
- production-ready website code forked from [https://github.com/web3privacy/events_web](https://github.com/web3privacy/events_web)
- have maintainer/owner role within the new project code repository
- access to the domain management portal Porkbun to create DNS records (can be delegated)
- some knowledge of domain management and DNS


## Step-by-step Guide


### Part 1: Github Pages
- [ ] Navigate to the project repository main page (example: [https://github.com/web3privacy/c24bkk](https://github.com/web3privacy/c24bkk))
- [ ] Deploy the project to Github Pages by selecting 'Settings' in the top menu bar
- [ ] Page loads, see the left hand menu bar, under the section 'Code and Automation' select 'Pages'
- [ ] In the main window, under the 'Source' section, ensure 'Deploy from Branch' option is selected in the dropdown menu
- [ ] Underneith it in the 'Branch' section, use the dropdown and select 'main' (next to it the '/root' option will autoselect itself)
- [ ] In this section 'Branch', click on the 'Save' button, the webpage will reload
- [ ] After a few  minutes Github Pages will deploy your code online, go to the Deployments section of your project (Example: [https://github.com/web3privacy/c24bkk/deployments/github-pages](https://github.com/web3privacy/c24bkk/deployments/github-pages))
- [ ] Here you can see the current deployments, their URL, a button to visit the site, and also where the option to Unpublish it is available

### Part 2: Porkbun
- [ ] Login to porkbun
- [ ] hover your mouse over 'web3privacy.info' within the domains list in home dashboard
- [ ] two options should appear under the name, select the 'DNS' one
- [ ] A pop-up appears requesting you create a new DNS record (below it is a list of the current DNS records)
- [ ] Under Type, select 'CNAME - Canonical name record' 
- [ ] Under Host, type the subdomain you want it to point to (example: for c24bkk.web3privacy.info enter 'c24bkk' in this field)
- [ ] Under Answer, type 'web3privacy.github.io'
- [ ] You can leave everything else within this pop-up as it and scroll down, select the big blue 'Add' button
- [ ] scroll to top of the pop-up, a small banner should tell you the record was added (or if an error occured)

### Part 3: Testing
- [ ] Wait 2-5 minutes (really, this can take some time to update)
- [ ] Use a different browser or clear your browser cache and cookies
- [ ] navigate to your project Github Pages URL (example: [https://web3privacy.github.io/c24bkk](https://web3privacy.github.io/c24bkk))
- [ ] If all is working then the domain within your browser bar should change to the subdomain of repository (example: c24bkk.web3privacy.info)


### Troubleshooting

- Your browser will probably show a warning of an 'insecure connection' to the website, this is because the TLS/SSL certificate will be updated automatically but can take 1-2 days for this to happen (no action necessary on your part, just a common 'error' people see)
- If you wish to force a specific subdomain to the project that is not the repository name (example: c24bkk) then you will need to created a file within the main folder of the repository. name this file 'CNAME' all in capitals, and add only one line to the file (example: congress.web3privacy.info) 
- If you have already deployed the website code via Github Pages for testing purposes, consider unpublishing the website via the Deployments tab before following through with the process outlined below. Sometimes conflicts can appear within Github Pages when there are too many concurrent deployments. If problems persist, consider starting from scratch again.
- Ask in W3PN chats for support or help


### External resources

[Porkbun Knowledge Base](https://kb.porkbun.com) 

[Github Pages Documentation](https://docs.github.com/en/pages)

[Github Pages Docs search](https://docs.github.com/en/search?query=custom+domain)

[Github Pages Docs troubleshooting custom domains article](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

[Stackoverflow post](https://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages)


