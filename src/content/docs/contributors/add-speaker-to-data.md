---
title: How to add an event to the web3privacy now website
---

## Preamble

The main project website is [web3privacy.info](https://web3privacy.info) and is auto-deployed via Github Pages leveraging the [Astro framework](https://astro.build/) but the data for the events listed, speaker profiles, W3P members/community partners, research and project is aggregated from our data repository and not the Astro code that runs the main website. 

Therefore to add a speaker to any of our websites you need to edit the code in the Data repository of Web3privacy Now, so that it auto-deploys a json output that is visible at [data.web3privacy.info](https://data.web3privacy.info), from where data and images for speakers are scrapped and presented elsewhere.

For example the main project website uses a web framework called Astro, which scrapes data.web3privacy.info and presents it with all the pretty HTML/CSS/JS elements needed for modern websites. This means that if you update a person's `caption:` field because they changed thier job title this edit will be displayed the same way throughout the whole website where that person is a speaker or otherwise listed. This is the power of Astro but as a result it requires a different approach to editing website contents, the majority of content is contained within the Data repository of Web3Privacy Now

#### Quick-reference:
[https://github.com/web3privacy/data](https://github.com/web3privacy/data)


## Pre-requisites
- Have a Github account to create a fork of this repository[https://github.com/web3privacy/data](https://github.com/web3privacy/data)
- Have the person's information on hand (name, caption information, social media handles)
- Have a picture or image for the person to upload to the database (.png or .img format)


## Step-by-step Guide

### Example code for the guide

```
name: Satoshi Nakamoto
caption: Cypherpunk, Visionary and Creator of [Bitcoin](https://bitcoin.org)
refs:
  email: satoshin@gmx.com
```

### Part 1: Setup
- [ ] Sign in to Github and go to the [Data repository](https://github.com/web3privacy/data)
- [ ] Make a fork of the Data repository, and proceed to make the edits within your fork of the code
- [ ] Gather the data for the new person(s) that you are adding to the database (the only required field is `name` - this can be a pseudonym)
- [ ] For each new person you are adding have one image for them, in either .png or .jpg format, which follows specific naming convention (explanation of this is further down)

### Part 2: Data repository
- [ ] Navigate to the `people` folder within the /data/src/ directory: [https://github.com/web3privacy/data/tree/main/src/people](https://github.com/web3privacy/data/tree/main/src/people)
- [ ] All the people/persons within the Web3Privacy ecosystem (speakers, core-contributors, team, etc) are stored here
- [ ] Each person has a yaml file with their data listed therein and an image in the /_images folder with the same name
- [ ] There is only one required data field for a valid person yaml:
```
- name: 

```
- [ ] the following are optional data fields, which you should try to fill in to make the person profile look nice online
```
- nickname:
- caption: (can include markdown URL links)
- country: (two letter lower-case country code)
- refs: (twitter, linkedin, bsky, github, matrix, email - just the usernames)
- imageUrl: (only to be used if the image is not within the _images folder)
```

- [ ] For the full schema and what each of these data fields are requesting see [data/schema/index.yaml between lines 104 - 142](https://github.com/web3privacy/data/blob/main/schema/index.yaml) - Please note that some data fields such as `id:` and `thumbs` are not meant to listed in the person yaml file.
- [ ] For the `refs` data field

### Part 3: Upload the person image
- [ ] Once you added the new yaml file, navigate to the _images folder within /people: [https://github.com/web3privacy/data/tree/main/src/people/_images](https://github.com/web3privacy/data/tree/main/src/people/_images)
- [ ] Here is where you will be uploading an image for the person using the same name for the image as the yaml file. This is important for the database to assign the right image to the right person, please check the file name is correct prior to uploading your files to your forked code.
- **Using the example code** the satoshi-nakamoto.yaml will have an associated image file named satoshi-nakamoto.png within the /_images folder  
- [ ] If you want to person image to reference some external source, you can use the `imageUrl:` field to paste in the full URL of the image.
- [ ] At this point you should try to run the Github Pages deployment script from you fork using Github Actions to test if nothing is breaking. This leverages the [test.js script of the code](https://github.com/web3privacy/data/blob/main/utils/test.js)and will flag any issues and show you which yaml file has an error in it. Allowing you to fix any error prior to merging your Pull Request with the main branch of the codebase.
- [ ] If all looks good, all new persons added and their respective images, then push the Pull Request to the maintainers.

### Part 4: Refreshing data and synching
- [ ] Once the PR is merged, verify there are no issues within the Github Pages deployment. To do this visit the Actions page and see if any recent Actions have failed (red circle indicates this).
- [ ] Request that the /data maintainer runs the [W3PN data refresh Action](https://github.com/web3privacy/data/actions/workflows/data-refresh.yml)
- [ ] Request that the /data maintainer runs the [sync Action](https://github.com/web3privacy/data/actions/workflows/sync.yml)
- [ ] Check the event listed in visible on data.web3privacy.info and that images and thumbs have been properly generated by scripts

### Tips & Tooling
- [ ] One good practice would be to first copy a person entry and then replacing the relevant information within with the new person data and renaming the yaml file (or use the example satoshi enty in this guide)
- [ ] CAUTION: respect the indentation of the data entries in the yaml files - this is especially relevant for the `refs:` field which has sub-categories which each need to have two spaces outwards from where the `refs:` field is (see above for example)
- [ ] CAUTION: if the `country` data field does not follow the [ISO-3166-1 Alpha-2 standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) the tests will fail - [see events.js within the web codebase for full list of countries](https://github.com/web3privacy/web/blob/main/src/lib/events.js)
- [ ] CAUTION: if the `country` data field is two CAPITALISED letters the tests will fail - **only use lowercase for country codes**
- [ ] CAUTION: data within `refs` data field does not need the http://domain.com/ section, only the handle or username of the person (exception to this is the `email` sub-category)
- [ ] KNOWN BUG: within the `caption` field you can add URL hyperlinks using markdown, but due to an issue with YAML parsing the url cannot contain certain characters such as `-` - this bug has been [reported in the following issue in the repository](https://github.com/web3privacy/data/issues/12)


### Troubleshooting
- Ask in W3PN chats for support or help

### Example of a complete person entry (ficticious person)
```
name: Some Anon
nickname: anon
caption: Chief Privacy Officer at [noneofyourbusiness](https://domain.lol)
country: is
refs:
  twitter: web3privacy
  github: web3privacy
  linkedin: someanon
  bsky: web3privacy
  matrix: matrix.web3privacy.info
  email: nicetryspammers@web3privacy.info
imageUrl: https://upload.wikimedia.org/wikipedia/en/3/34/RickAstleyNeverGonnaGiveYouUp7InchSingleCover.jpg
```


### External resources

[Github Pages Documentation](https://docs.github.com/en/pages)

[Example PR of adding a new speaker to Data repository](https://github.com/web3privacy/data/pull/24)
