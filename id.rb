#!/usr/bin/env ruby

# Using this script to create a unique demo folder name.
#
# To use, make this file executable:
# $ chmod u+x id.rb
# … then run it via command line:
# $ ./id.rb

print rand(36**8).to_s(36).downcase
