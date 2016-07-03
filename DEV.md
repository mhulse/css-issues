Always use bundle install
If you need to upgrade a dependency that Bundler is already managing, use bundle update <gem>.
Don't run bundle update unless you want all of your gems to be upgraded.

## Local development

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

---
