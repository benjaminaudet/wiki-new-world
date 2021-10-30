# Fandom Wiki Content Translator
## An engine that translates all the content of a fandom wiki from a reference language to another

![](https://raw.github.com/benjaminaudet/svg/main/projectby.svg?sanitize=true)

### Purposes / Ideas
The idea is born when I was playing New World in French language but when I was looking for items on internet no results. Why ? The French wiki wasn't actively being improved.
So, I said to myself, why don't you make a engine to resolve the problem ?

## Features

- [X] Get all the pages (names) of a fandom wiki (Python)
- [x] Download the source code (the wiki specific language) of the page (Python)
- [] Translate each page name individually, with DeepL, and use this translation to replace in every folder (to avoid contextual translation) (NodeJS)
- [x] Translate each page source code individually, with DeepL, and store the files under pages/<wiki_name>/<lang>/ (NodeJS)
- [] Post each translated articles to the target language wiki through the fandom API. (Python)

## Installation

> For now, the files are a total mess, considerer the source code as a alpha 0.0.1. I'm just trying all blocks of my workflow to check if everything is working well.

You need python 3.5+ at least installed. (personally I use Python 3.9 through Ubuntu WSL)
`git clone git@github.com:benjaminaudet/fandom-wiki-translator.git`
`cd fandom-wiki-translator`
`pip install fandom`
`npm install deepl`

