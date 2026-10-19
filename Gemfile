# Local preview only. GitHub Pages builds the live site with its own copy of
# these gems. The github-pages gem pins Jekyll and every plugin to the exact
# versions GitHub uses, so what you preview is what gets published.
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins

# Needed by `jekyll serve` on Ruby 3+
gem "webrick"

# Link and image checker: docker compose run --rm site bundle exec htmlproofer ./_site
gem "html-proofer", "~> 5.0", group: :test
