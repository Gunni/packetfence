#!/usr/bin/perl

use strict;
use warnings;

use lib '/usr/local/pf/lib';
use lib '/usr/local/pf/lib_perl/lib/perl5';

use pf::file_paths;
use Config::IniFiles;

my %ignored = (
    $pf::file_paths::oui_file => 1,
    $pf::file_paths::allowed_device_oui_file => 1,
    $pf::file_paths::allowed_device_types_file => 1,
    $pf::file_paths::oauth_ip_file => 1,
    $pf::file_paths::log_config_file => 1,
);

for my $file (@pf::file_paths::stored_config_files) {
    next if $ignored{$file};
    next unless -f $file;

    my $c = Config::IniFiles->new(-file => $file, -allowempty => 1);
    for my $section ($c->Sections) {
        for my $param ($c->Parameters($section)) {
            if($param =~ /(_file|_path)$/ || $param eq "file" || $param eq "path") {
                print $c->val($section, $param) . "\n";
            }
        }
    }
}

