HTTP/1.1 200 OK
Date: Tue, 29 Oct 2024 18:12:46 GMT
Server: Apache/2.4.52 (Ubuntu)
Last-Modified: Fri, 29 Mar 2024 10:29:41 GMT
ETag: "948-614ca1e166f40"
Accept-Ranges: bytes
Content-Length: 2376
Keep-Alive: timeout=5, max=100
Connection: Keep-Alive

#!/usr/bin/env php
<?php

/**
 * This file is part of the Froxlor project.
 * Copyright (c) 2010 the Froxlor Team (see authors).
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, you can also view it online at
 * https://files.froxlor.org/misc/COPYING.txt
 *
 * @copyright  the authors
 * @author     Froxlor team <team@froxlor.org>
 * @license    https://files.froxlor.org/misc/COPYING.txt GPLv2
 */

use Froxlor\Froxlor;
use Symfony\Component\Console\Application;

// validate correct php version
if (version_compare("7.4.0", PHP_VERSION, ">=")) {
	die('Froxlor requires at least php-7.4. Please validate that your php-cli version is suitable.');
}

// ensure that default timezone is set
if (function_exists("date_default_timezone_set") && function_exists("date_default_timezone_get")) {
	@date_default_timezone_set(@date_default_timezone_get());
}

require dirname(__DIR__) . '/vendor/autoload.php';
require dirname(__DIR__) . '/lib/tables.inc.php';

$application = new Application('froxlor-cli', Froxlor::getFullVersion());

// files that are no commands
$fileIgnoreList = [
	// Current non-command files
	'CliCommand.php',
	'index.html',
	'install.functions.php',
];
// directory of commands to include
$cmd_files = glob(Froxlor::getInstallDir() . '/lib/Froxlor/Cli/*.php');

// include and add commands
foreach ($cmd_files as $cmdFile) {
	// check ignore-list
	if (!in_array(basename($cmdFile), $fileIgnoreList)) {
		// include class-file
		require $cmdFile;
		// create class-name including namespace
		$cmdClass = "\\Froxlor\\Cli\\" . substr(basename($cmdFile), 0, -4);
		// check whether it exists
		if (class_exists($cmdClass) && is_subclass_of($cmdClass, '\Symfony\Component\Console\Command\Command')) {
			// add to cli application
			$application->add(new $cmdClass());
		}
	}
}

$application->run();
