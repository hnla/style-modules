#BuddyPress Members List Style Module
![Members rendered as a series of floated box panels](https://github.com/hnla/style-modules/blob/master/members-list-module/members-as-grid-view.jpg "Styling the members lists as box grid.")
## Description:

This module styles your members listings in the members directory and lists in the users profile pages as box panels arranged in a grid style for medium sized devices like tablets and desktops in landscape orientation and at mobile widths stacks the lists vertically.

The module requires a companion script file providing some enhancements to add equal height to elements.

## Installing

To install this module copy it to your child theme. The module needs to live in a directory named `/style-modules/` this directory or folder lives in turn in the child themes buddypress or community directory depending on how you have named your BP directory. You should then have something similar to this structure:

`my-child-theme/buddypress/style-modules/members-list-module/`

To load the required files you will need to add this block of code to your functions.php file in your child theme:
(**copy & paste the code between the dashed lines**)

	-------------------------------------------------------------------------------

	function enqueue_members_list_style() {
				wp_enqueue_style( 'members-list-module-styles',  get_stylesheet_directory_uri() . '/buddypress/style-modules/members-list-module/members-list-module.css', array('bp-legacy-css'), false, 'screen' );
	}
	function enqueue_members_list_script() {
				wp_enqueue_script( 'members-list-module-script', get_stylesheet_directory_uri() . '/buddypress/style-modules/members-list-module/members-list-module.js', array('jquery'), false, true );
	}
	add_action('bp_enqueue_scripts', 'enqueue_members_list_style', 20);
	add_action('bp_enqueue_scripts', 'enqueue_members_list_script');

	-------------------------------------------------------------------------------

If you want to load more than one module then you might find it easier to use the module loader plugin which will look for all modules and load all the files it finds automatically:
{link_to_loader_file}
