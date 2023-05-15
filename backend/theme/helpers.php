<?php

// Echo out $value in readable format (used for testing)
function td($value = '')
{
	echo '<pre>';
	print_r($value);
	die();
}

function get_post_type_names()
{
	// Get a list of user created custom post types
	$cpt_names = array_values(get_post_types([
		'public'   => true,
		'_builtin' => false
	]));

	// Add posts and pages to list
	array_unshift($cpt_names, 'post', 'page');
	return $cpt_names;
}

// Returns array of keys=post type name, values=post type slug
function get_post_type_data()
{
	$ptNames = get_post_type_names();
	$stuff = [];

	foreach ($ptNames as $ptName) :
		if ($ptName === 'page') {
			$stuff[$ptName] = "";
		} else if ($ptName === 'post') {
			// If post, get the first part of the default wordpress permalink structure
			$stuff[$ptName] = array_shift(array_filter(explode('/', get_option('permalink_structure'))));
		} else {
			// Must be custom post type, get the rewrite slug for it
			$pt_object = get_post_type_object($ptName);
			$stuff[$ptName] = $pt_object->rewrite['slug'];
		}
	endforeach;

	return $stuff;
}

function get_post_type_slugs()
{
	return array_values(array_filter(array_values(get_post_type_data())));
}

function get_custom_post_type_preview_fields($post_type)
{
	$optionsString = trim(get_option($post_type . '_preview_fields'));
	if (!$optionsString) return [];

	// Create an array from the comma separated list
	$values = array_filter(array_map(function ($str) {
		return trim($str);
	}, explode(',', $optionsString)));

	// Parse the prefixed nested values into their own array
	$nested_values = [];

	foreach ($values as $key => $str) {
		$boom = explode('.', $str);

		if (count($boom) > 1) {
			$nested_values[$boom[0]][] = $boom[1];
			unset($values[$key]);
		}
	}

	return array_merge($values, $nested_values);
}
