---
title: How to add an event to the web3privacy now website
---

## Preamble

The main project website is [web3privacy.info](https://web3privacy.info) and is auto-deployed via Github Pages leveraging the [Astro framework](https://astro.build/) but the data for the  W3PN events listed, the speaker profile pictures and their information is aggregated from our /data repository and not the Astro code that runs the main website. This means that we will need to find the correct files to edit within the /data codebase to make changes that will apply to all the places that content is displayed within the Astro website.

Therefore to add an event you need to edit the code in the /data repository, which will auto-deploys a json output that is visible at [data.web3privacy.info](https://data.web3privacy.info) from which the website indexes our Events and presented on the main project website. Please note that within the /data repository all 'speakers' are 'persons' and can be found within the 'people' folder of the code.

**Important:** It is essential to distinguish these two repositories and ensure you are not making edits to /web when you are adding a new event:
- /web code repository: [https://github.com/web3privacy/web](https://github.com/web3privacy/web)
- /data code repository: [https://github.com/web3privacy/data](https://github.com/web3privacy/data)


#### Quick-reference:
[https://github.com/web3privacy/web](https://github.com/web3privacy/web)

[https://github.com/web3privacy/data](https://github.com/web3privacy/data)

[Website Events page: https://web3privacy.info/events](https://web3privacy.info/events/)

[Docs: Events section: https://docs.web3privacy.info/events](https://docs.web3privacy.info/events/)

[Docs: naming convention for event 'id'](https://docs.web3privacy.info/events/#naming-conventions)

## Pre-requisites
- Have a Github account to create a fork of this repository: [https://github.com/web3privacy/data](https://github.com/web3privacy/data)
- Have the relevant event information on hand (time, date, city, speakers, etc)
- Have generated 5 images for the event (see dimension below)
- Knowledge of our naming convention for event 'id' (how we name events) as [described here](https://docs.web3privacy.info/events/#naming-conventions) - for example: the 2024 congress in Bangkok has an id of `c24bkk`


## Step-by-step Guide

### Example code for the guide

```
- id: c24bkk
  type: congress
  date: "2024-11-11"
  city: Bangkok
  country: th
  place: "[TBA](https://congress.web3privacy.info)"
  place-address: TBA
  confirmed: true
  coincidence: "[DevCon](https://devcon.org)"
  lead: Mykola
  links:
    rsvp: https://lu.ma/w3pn-meetup-devcon7
    web: https://congress.web3privacy.info/
  speakers:
    - ameen-soleimani
    - scott-moore
    - silke-noa
    - kurt-opsahl
    - nick-almond
    - jarrad-hope
    - adrian-brink
    - alan-scott
    - andreas-miroyato
    - ahmed-ghappour
```


### Part 1: Setup
- [ ] Sign in to Github and go to the [/data repository](https://github.com/web3privacy/data)
- [ ] Make a fork of the /data repository, and proceed to make the edits within your fork of the code
- [ ] Collect the following information for the new event: date, location, lead person(s), registration link, a selection of 5-12 confirmed speakers


### Part 2: Data repository
- [ ] Navigate to the index.yaml file within the /data/src/events directory of your fork
- [ ] The events are ordered in this list by year (see the commented code for 2023, 2024, 2025 in the file) so find the relevant section and make additions in that part of the index.yaml
- [ ] The following are **required data fields** that is needed for the index.yaml entry:
```
- id: 
- date:
```
- [ ] the following are **optional data fields** which you should add to make the website listing look better
```
- type:
- confirmed:
- days:
- city:
- country:
- place:
- place-address:
- coincidence:
- coincidenceFull:
- lead:
- helpers:
- links:
- speakers:
- name-extension
- design
```

- [ ] For the full schema and what each of these data fields are requesting see [data/schema/index.yaml between lines 27 - 103](https://github.com/web3privacy/data/blob/main/schema/index.yaml)
- [ ] A good practice would be to find an event of the same `type`, duplicating entry in the index.yaml and then replacing the relevant information from that. For example to list the next edition of the W3PN Congress, go to last year's edition and copy that as a template for your entry.

### Part 3: Adding the event images
- [ ] Once you added the event and made the commit to the index.yaml file, navigate to the /src/_images/ folder
- [ ] The /_images folder is where the website will look for the various images used to show the event
- [ ] Navigate to the correct year of the event (as you see the /_images folder is sub-divided by year) 
- [ ] Here is where you will be uploading 5 images for the event in the following formats:
  - [x] c24bkk-poster.png (dimensions: 3040 x 4300 pixels)
  - [x] c24bkk-poster-simple.png (dimensions: 3040 x 4296 pixels)
  - [x] c24bkk-square.png (dimensions: 1600 x 1600 pixels)
  - [x] c24bkk-wide.png (dimensions: 2844 x 1600 pixels)
  - [X] c24bkk-wide-square.png (dimensions: 2132 x 1600 pixels)
- [ ] In the above list `c24bkk` is used, please make sure you use the same name as that of the `id` of the new event
- [ ] The images should be .png or .jpg format and respect the various dimensions noted above
- [ ] Once you uploaded all the images make the commit to the code.
- [ ] You can now open a Pull Request by clicking on the 'Contribute' button within the main page of your forked repository (hint: `https://github.com/username/data` where 'username' is your Github account username.
- [ ] Once your Pull Request has been submitted, please notify the core team so as to be aware of your request.

### Part 4: Refreshing data and synching
- [ ] Once the Pull Request is merged by the team, the following need to be completed by W3PN maintainers:
- [ ] Request that the /data maintainer runs the [W3PN data refresh Action](https://github.com/web3privacy/data/actions/workflows/data-refresh.yml)
- [ ] Request that the /web maintainer runs the [sync Action](https://github.com/web3privacy/web/actions/workflows/sync.yml)
- [ ] Check that the event you added is listed in visible on data.web3privacy.info and that images and thumbs have been properly generated by scripts can be viewed by clickin on the links
- [ ] If no maintainer responds do not worry, the above actions are set to happen every 12 hours via an automated  scripts (cron setting in sync.yml and data-refresh.yml)
- [ ] Once the above is done, navigate to the events section of the website and verify that all is correct: [https://web3privacy.info/events](https://web3privacy.info/events) 

### Troubleshooting

- Ask in W3PN chats for support or help


[Example Pull Request adding an event to Data repository](https://github.com/web3privacy/data/pull/5)
