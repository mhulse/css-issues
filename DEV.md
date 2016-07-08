Always use bundle install
If you need to upgrade a dependency that Bundler is already managing, use bundle update <gem>.
Don't run bundle update unless you want all of your gems to be upgraded.

## Local development

Assuming you’re already setup to do Ruby development (if not, see below) …

Install missing gems:

```bash
$ cd repo/
$ bundle install
```

Or, update gems:

```
$ bundle update
```

Execute jekyll and serve:

```bash
$ bundle exec jekyll serve
# Incremental builds:
$ bundle exec jekyll serve -I
```

View your locally-hosted site at <http://localhost:4000>.

## Ruby setup

Installation instructions can be [found on it’s site](https://rvm.io/), but here’s a quick glimpse:

```bash
$ \curl -L https://get.rvm.io | bash -s stable --ignore-dotfiles
# --ignore-dotfiles = don't add anything to '*rc' / '*profile'.
# If you also need a fresh version of Ruby seperate from the 
# system version you can append --ruby 
# on to the end of this command.

# Is Xcode installed? If not, go to the App Store and download/install it on yoru system.

# Next, make sure you have the Xcode Command Line Developer Tools installed:
$ xcode-select --install

# Update rvm:
$ rvm get stable
# Update rvm Ruby:
$ rvm install ruby --latest && rvm use current
# Upgrade RubyGems:
$ gem update --system
# Update rvm gems:
$ gem update
```

More of my [Ruby notes can be found here](https://github.com/mhulse/mhulse.github.io/wiki/Ruby-tips).
