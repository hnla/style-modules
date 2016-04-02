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

3. In your functions file you will need to add this line to ensure your new module is loaded up

Copy and paste the code between the dashed lines.
-------------------------------------------------

wp_enqueue_style('{module-name}', 'file_path', array(), $version);

-------------------------------------------------

copy this into a section that contains other similar lines to ensure your file is incuded in the function that is passed to the WP enqueue_scripts one.

4.

== FAQ ==


== Changelog (optional) ==
