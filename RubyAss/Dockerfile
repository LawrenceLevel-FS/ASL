FROM ruby:3.0

RUN bundle config --global frozen 1

WORKDIR /usr/src/rubyapp

COPY . /usr/src/rubyapp/

CMD ["ruby", "main.rb"]


