# Style Modules - BuddyPress Styling Snippets Library
**BP Style Modules - a test repo to explore the proposed style library for the BuddyPress project**
----------------------------------------------------------------------------------------------

**Test repo dev comments**
This repo explores how the proposed Style Modules might be organized on the BP repo.
The Project proposal was written up and published to BuddyPress's bpdevel site:
(https://bpdevel.wordpress.com/2016/03/30/bp-style-modules-a-proposal/)

This repo contains one module directory and some further dummy examples for show. The ultimate purpose of the repo is to maintain the modules as seen in the repo _not_ to clone the repo or download the repo (unless ones in initial core dev work, in which case by all means do clone the repo to obtain the dir structure and grunt tools) Module authors and users would be submitting and downloading the individual module folders and files. This process as it would be setup and run on github is not 100% decided on at this stage.

**Browsing available Modules**

Would be a case of simply creating  a ul list of modules, links to the module on the repo, displaying brief description, and screenshot.

We can choose to use a new page on bp .org or create a github page for this purpose.

**Loading and activation of Modules**

Loading modules (essentially enqueueing the files) initially will be a matter of the end user installing the module folder in the right place, then copy/pasting the modules example enqueue code block to thier functions file.
_( Originally the idea was to provide a automagic enqueue function that would look for modules and their files and enqueue an array of found files, this was either part of the  BP core functions.php or a standalone file in the MU plugins dir, for my dev purposes I have a simple function checking and building an array of files to enqueue run as a standard plugin.)_

Part of my concern and thoughts behind wanting an automatted approach were two fold:
1/ Ensure the process for running these modules was as dead simple as possible for the end user.
2/ Allow multiple modules to be loaded without having to add a new enueue block for each one, clumsy at best!

-----------------------------------------------------------------------------------------------------

The section below is the first pass at the proposed general repo instructions aimed at both authors and users.
Author guidelines for submitting and formatting etc will be here for reference.

User instructions for downloading and installing a module will be here to help facilitate
usage along with copy/paste file enqueueing examples but the primary user instruction would be carried in the
individual modules readme files along with specific copy/paste enqueueing code block.

-----------------------------------------------------------------------------------------------------



# BP Style Module authoring guidelines & installation instructions

## Authors Guidelines:


###Submitting###
All submisions should be made by creating a ticket on [trac.buddypress] (https://buddypress.trac.wordpress.org/newticket) and selecting `Style Module` as the ticket type.

Upload your folder(files) complete with SC & readme.md

Add a brief decription of your submissions styling purpose e.g _"styles the user message tables..."_

Please add a simple screen capture that provides a quick visual reference to your module styling, (label it style-module.jpg as we will attempt to load this image file on the modules listing page)

A core BP developer  will download your submission and run a basic check for formatting standards and error free code, when two devs have signed off on the submission it will be uploaded to the BuddyPress github repo where it will be available for people to download.

###Updates###

Authors are responsible for maintaining their modules against BP release cycles, ensuring that their module still performs as expected for new BP releases.

###Creating Module files:###

* All Modules must include one of either a .css or .js file
* Modules must also include a readme.txt file (follows the general format of WP plugin readme files for convenience and comformity to a known existing standard.
* Additionally each module should contain a readme.md file this is specifically for github display and allows us to display a neat and simplified module title and description to be displayed for users
* Optionally  please try to include a SC of your styles in action.

_You may use the members list module as a guide for readme formats_

**Grunt task tools**

The repo root does contain a package.json to install grunt modules via npm along with a configured gruntfile.js to load and configure tasks.

Feel free to use thse tools or not the choice is entirely yours.

The gruntfile sets up scss, less, scsslint, rtlcss, and watch tasks.

At the cli running:
$ grunt watch // will start the watch task, configured by default to watch for changes to .scss files in your named dir

$ grunt scsslint // will check your scss file against the yml config file in the repo root (these are BP's default file formatting)

$ grunt rtlcss // will create a right to left mirror file from your css file.

$ grunt commit // is a reg task that will run both linting and rtl tasks one after the other.

If you do use these tools you must configure the top var MODULE_NAME = 'my-cool-styles-module';

This var is used to build or the file paths and file names we need and in the correct directory so is important.

In addition specify what pre-processor type your using scss or less.

The less provision is mainly commented out and the less aspects would need testing but should work.

Naturally if you're using the gruntfile please feel free to re-factor as you feel fit, this is only provided as a convenience.

####readme.txt file###
we'll broadly follow the conventions of use by WordPress plugins for this file; for Modules the important areas are.
* The header details ( initially BP might be using thse but we are adding so that we can at a later date)
* The module description - this is how we'll ensure that users can understans what the module offers ( SC also help here! )
* Installation guide complete with copy/paste code ( following the example provided we need  the module to provide quite detailed steps to installing, copy/paste code using your module name where applicable will help non technical users)

####The style & JS files####

These files will follow the formatting guidelines setout by WP.

**Stylesheets**
Formatting guidelines: [WP Coding Standards - CSS] (https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/)

Your file should pay attention to using the BP id '#buddypress' to ensure your rules are targetted to BP elements only, also they should try and use ancestor elements that represent the component this module is dealing with.

You may work with scss or less however please ensure compiled files are present in the module package along with the source pre-processor file.

rtl versions - you will know whether you need to address rtl layouts (i.e floats left & right) if so please include rtl file version.

**JavaScript**
Formatting guidelines:  [WP Coding Standards - JS] (https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/)

## Module Installation Instructions: ##
In your readme.txt file please include details on how to enqueue your files. Provide a copy and paste example for your particular module enqueued in the manner WP reccommends.
e.g:

		-------------------------------------------------------------------------------
		/*
		* Check & build the required paths to the files
		*/
		function sm_module_path() {
		
		$sm_parts = array();
		// Authors add your modules name
		$module_name = '';
		
		if( file_exists( get_stylesheet_directory() . '/buddypress/') ) :
		 $sm_dir = get_stylesheet_directory_uri() . '/buddypress/style-modules/';
		else: 
		 $sm_dir = get_stylesheet_directory_uri() . '/community/style-modules/';
		endif;

		$sm_parts['sm_dir']       = $sm_dir;
		$sm_parts['path_to_file'] = $sm_dir .  $module_name . '/';
		$sm_parts['module_name']  = $module_name;
		
		return $sm_parts;
		}
		
		function enqueue_members_list_style() {
		 $sm_parts = sm_module_path();
		 $dir  = $sm_parts['path_to_file'];
		 $rtl = ( is_rtl() )? '-rtl' : '';
		 $file = $sm_parts['module_name'];
			wp_enqueue_style( $file . '-styles',  $dir . $file . $rtl . '.css', array('bp-legacy-css'), false, 'screen' );
		}
		function enqueue_members_list_script() {
		 $sm_parts = sm_module_path();
		 $dir  = $sm_parts['path_to_file'];
		 $file = $sm_parts['module_name'];
			wp_enqueue_script( $file . '-script', $dir . $file . '.js', array('jquery'), false, true );
		}
		add_action('bp_enqueue_scripts', 'enqueue_members_list_style', 20);
		add_action('bp_enqueue_scripts', 'enqueue_members_list_script');

		-------------------------------------------------------------------------------

Authors please note that for the moment while we need to provide hardcoded examples for loading  / enqueueing files we can't be sure what naming convention will be used for the BuddyPress folder so need to make comment that users need to check that and possibly change the reference in the path links to suit.
