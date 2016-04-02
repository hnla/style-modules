# Style Modules - Buddypress styling Library Snippets
**BP Style Modules - a test repo to explore the proposed style library for the BuddyPress project**
----------------------------------------------------------------------------------------------

**Test repo dev comments**
This repo explores how the proposed Style Modules might be organized on the BP repo.
The Project proposal was written up and published to BuddyPress's bpdevel site:
(https://bpdevel.wordpress.com/2016/03/30/bp-style-modules-a-proposal/)

This repo contains one module directory and some further dummy examples for show. The ultimate purpose of the repo is to maintain the modules as seen in the repo _not_ to clone the the repo or download the repo (unless ones in initial core dev work) Module authors and users would be submitting and downloading the individual module folders and files. This process as it would be setup and run on github is not decided on at this stage.

-----------------------------------------------------------------------------------------------
The section below is the first pass and in progress repo instructions for authors and users.
Author guidelines for submitting and formatting etc will be here for reference.
User instructions for downloading and installing a module will be here in detail to help facilitate
loading along with copy/paste file enqueueing examples.

-----------------------------------------------------------------------------------------------

# BP Style Module authoring guidelines & installation instructions

## Authors Guidelines:


###Submitting###
All submisions should be made by creating a ticket on trac.buddypress

Upload your folder(files) complete with SC & readme.md

Add a brief decription of your submissions styling purpose e.g _"styles the user message tables..."_ 

A core BP dev  will download your submission and run a basic check for formatting standards and error free code, when two devs have signed off on the submission it will be uploaded to the BuddyPress repo.

###Updates###

Authors are responsible for maintaining their modules against BP release cycles, ensuring that their module still performs as expected for new BP releases.

###Creating Module files:###

* All Modules must include one of either a .css or .js file
* Modules must also include a readme.txt file (follows the general format of WP plugin readme files for convenience and comformity to a known existing standard.
* Additionally each module should contain a readme.md file this is specifically for github display and allows us to display a neat and simplified module title and description to be displayed for users
* Optionally  please try to include a SC of your styles in action.


####readme.txt file###
we'll broadly follow the conventions of use by WordPress plugins for this file; for Modules the important areas are.
* The header details ( initially BP might be using thse but we are adding so that we can at a later date)
* The module description - this is how we'll ensure that users can understans what the module offers ( SC also help here! )
* Installation guide complete with copy/paste code ( following the example provided we need  the module to provide quite detailed steps to installing, copy/paste code using your module name where applicable will help non technical users)

####The style & JS files####

These files will follow the formatting guidelines setout by WP.

**Stylesheets**
Your file should pay attention to using the BP id '#buddypress' to ensure your rules are targetted to BP elements only, alo they should try and use ancestor elements that represent the component this module is dealing with.

You may work with scss or less hoever please ensure compiled files are present in the module package along with the source pre-processor file.

rtl versions - you will know whether you need to address rtl layouts (i.e floats left & right) if so please include rtl file version.

 
## Module Installation Instructions:
