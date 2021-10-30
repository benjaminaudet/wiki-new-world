import deepl

# Create a Translator object providing your DeepL API authentication key
translator = deepl.Translator("2c74f195-9304-2b45-b11a-e7ae7dd91166")

# Translate text into a target language, in this case, French
result = translator.translate_text("Hello, world!", target_lang="FR")
print(result)  # "Bonjour, le monde !"
