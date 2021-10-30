# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# import pyperclip
from os import listdir
from os.path import isfile, join
import fandom
import threading
import concurrent.futures

thread_local = threading.local()


def get_and_write_page(title):
    page = fandom.page(title, False, "newworld", "en")
    page.set_selector(
        selector=["textarea"])
    formatted_title = "_".join(title.split(' '))
    with open('./pages/newworld/en/{title}.source'.format(title=formatted_title), 'w') as f:
        f.write(page.source)


def download_all_pages(pages_titles):
    with concurrent.futures.ThreadPoolExecutor(max_workers=300) as executor:
        executor.map(get_and_write_page, pages_titles)


pages_path = './pages'
pages_files = [f for f in listdir(pages_path) if isfile(join(pages_path, f))]

with open('list1000', 'r') as l:
    pages_titles = set(l.read().split(';'))
    formatted_titles = list()
    for title in pages_titles:
        formatted_titles.append("_".join(title.split(' ')))
    print(len(pages_titles))
    for file in formatted_titles:
        test = pages_titles.intersection(file.replace('.source', ''))
    print(len(test))
    download_all_pages(pages_titles)
