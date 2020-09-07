#! /bin/bash
yarn build && cd dist && echo 'jeffreyyang.me' > CNAME && 
  git init && git add -A && git commit -m "deploy" && git push -f git@github.com:jeffreyyang3/personalWebsite.git master:gh-pages
