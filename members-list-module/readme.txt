/*
* Module readme:
*
* Module Description & Installation Guide (please provide copy/paste enqueue example)
* Changelog / Current version (Optional?)
* Like WP readme please use Markdown formatting if wanting to format further.
*/

=== Style Module Name ===

Contributor:

Stable Tag:

== Description ==


== Installation ==
1. If not already existing create a directory(folder) named:
`style-modules`. Create this folder directly under the BP directory in your theme or child theme; N.B. This fiolder needs to ne named `buddypress' or 'community'.

2. Copy module folder and content (all files) to your 'style-modules' directory.

3. In your functions file you will need to add this block of code (8 lines) to ensure your files are loaded.

Copy and paste the code between the dashed lines.
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

4.

== FAQ ==


== Changelog (optional) ==
