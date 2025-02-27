---
title: How to add an event to the web3privacy now website
---

## Preamble

The main project website is [web3privacy.info](https://web3privacy.info) and is auto-deployed via Github Pages leveraging the [Astro framework](https://astro.build/) but the data for the events listed, speaker profiles, W3P members/community partners, research and project is aggregated from our data repository and not the Astro code that runs the main website. 

Therefore to add an event you need to edit the code in the Data repository of Web3privacy now, so that it auto-deploys a json output that is visible at [data.web3privacy.info](https://data.web3privacy.info) from which the Events are indexed, where data and images for speakers and the event are scrapped and presented on the main project website. Please take note that within the Data repository all 'speakers' are 'persons' and can be found within the 'people' folder of the code.

**Please advise:** It is essential to distinguish these two repositories and ensure you are not making edits to /web when you are adding a new event:
- /web code repository: [https://github.com/web3privacy/web](https://github.com/web3privacy/web)
- /data code repository: [https://github.com/web3privacy/data](https://github.com/web3privacy/data)

The website is using a web framework called Astro, this means that is does not have 'traditional' HTML/CSS/JS files and structure for a website, we will need to find the correct files to edit within the Data codebase and this change will apply to all the places that content is displayed.

For example, if you update a person's 'caption' because they changed thier job title, then editing this 'caption' within Data will be displayed the same way throughout the whole website where that person is a speaker or is listed. This is the power of Astro but as a result it requires a different approach to editing website contents.

Attention: to add a new event to the Web3privacy website **you do NOT need to make a PR in the [Web codebase](https://github.com/web3privacy/web)**, it all happens primarily **[within the Data codebase](https://github.com/web3privacy/data).**


#### Quick-reference:
[https://github.com/web3privacy/web](https://github.com/web3privacy/web)

[https://github.com/web3privacy/data](https://github.com/web3privacy/data)

[Website Events page](https://web3privacy.info/events/)

[Events section in W3P Docs](https://docs.web3privacy.info/events/)

[naming convention for event 'id'](https://docs.web3privacy.info/events/#naming-conventions)

## Pre-requisites
- Have a Github account to create a fork of this repository: [https://github.com/web3privacy/data](https://github.com/web3privacy/data)
- Have the relevant event information on hand (time, date, city, speakers, etc)
- Have generated images for the event using the gen-img front-end (see Part 3 below)
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
- [ ]  Sign in to Github and go to the [Data repository](https://github.com/web3privacy/data)
- [ ] Make a fork of the Data repository, and proceed to make the edits within your fork of the code
- [ ] Collect the following information for the new event: date, location, lead person(s), registration link, some of the confirmed speakers


### Part 2: Data repository
- [ ] Navigate to the index.yaml file within the /data/src/events directory: [https://github.com/web3privacy/data/blob/main/src/events/index.yaml](https://github.com/web3privacy/data/blob/main/src/events/index.yaml)
- [ ] The events are ordered in this list by year (see the commented code for 2023, 2024, 2025 in the file) so find the relevant section and make additions in that part of the index.yaml
- [ ] The following are required data that is needed for the index.yaml entry:
```
- id: 
- date:
```
- [ ] the following are optional data fields, which you should add to make the website listing look better
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
- [ ] A good practice would be to find an event of the same `type`, copying it's entry in the index.yaml and then replacing the relevant information. For example to list the next Web3Privacy Congress, go to last year's edition and copy that as a template for your entry.
- [ ] Once you added the event to the index.yaml, navigate to the relevant folder (sub-divided by year) within the _images folder of /events: [https://github.com/web3privacy/data/tree/main/src/events/_images](https://github.com/web3privacy/data/tree/main/src/events/_images)
- [ ] Here is where you will be uploading 5 images for the event in the following formats:
  - [x] c24bkk-poster.png (dimensions: 3040 x 4300 pixels)
  - [x] c24bkk-poster-simple.png (dimensions: 3040 x 4296 pixels)
  - [x] c24bkk-square.png (dimensions: 1600 x 1600 pixels)
  - [x] c24bkk-wide.png (dimensions: 2844 x 1600 pixels)
  - [X] c24bkk-wide-square.png (dimensions: 2132 x 1600 pixels)

### Part 3: Refreshing data and synching
- [ ] Once the Pull Request is merged, verify there are no issues within the Github Pages deployment. To do this visit the Actions page and see if any recent Actions have failed (red circle indicates this).
- [ ] Request that the /data maintainer runs the [W3PN data refresh Action](https://github.com/web3privacy/data/actions/workflows/data-refresh.yml)
- [ ] Request that the /data maintainer runs the [sync Action](https://github.com/web3privacy/data/actions/workflows/sync.yml)
- [ ] Check the event listed in visible on data.web3privacy.info and that images and thumbs have been properly generated by scripts
- [ ] Wait 6 hours for the automated scripts within the /web code base to activate and scrape the appropriate data from data.web3privacy.info
- [ ] navigate to the events section of the website and verify all is correct: [https://web3privacy.info/events](https://web3privacy.info/events) 

### Troubleshooting

- Ask in W3PN chats for support or help


### External resources

[Github Pages Documentation](https://docs.github.com/en/pages)

[Astro documentation](https://docs.astro.build/en/getting-started/)

[Example Pull Request adding an event to Data repository](https://github.com/web3privacy/data/pull/5)
