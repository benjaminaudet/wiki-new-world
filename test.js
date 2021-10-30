const translate = require("deepl");

translate({
  text: `
  {{InfoboxLore
    |title = A Modest Success
    |book = [[:Category:Tales of Brightwood|Tales of Brightwood]]
    |chapter = [[:Category:Havelock's Diary|Havelock's Diary]]
    |page = 6 of 13
    |type = Journal
    |location = [[Brightwood Isle]]
    |previous = [[Our Research Begins]]
    |next = [[Captain Madelaine's Dismissal]]
    |nwdb = 
    |map = 
    |position = 
    }}
    '''A Modest Success''' is page 6 of 13 from the Havelock's Diary chapter of the Tales of Brightwood book in {{New World}}.
    ==Transcript==
    {{Page
    |title = Our Research Begins
    |subtitle = 
    |transcript = I have had a breakthrough, however slight, in no small part to [[Captain Madelaine]] - Maddie. She has taken to capturing the [[Withered]] with a focus I have rarely seen - I suspect it may have to do with some that she has lost, for she will only take enough coin to sustain her, little else. She does not tire, and my cages remain full for my experiments.
    
    My family does not call me to join them for meals, nor for sleep - I sleep in the workshop now. But the alchemy, it works - the [[Watchers]] (the ones willing to still serve as test subjects) report that upon consuming my latest mixture, claim that the [[Corruption]] does not eat at them as it used to, and they retain their strength as they venture north! I have passed along the recipe to the Magistrate, and keep records here as well.
    
    I cannot rest on this success, however - I must continue my research. A half-victory is not enough - the formula only slows the affliction, not cures it. We must drive it out completely! And I will be the one to make it happen.
    
    -[[Archminister Havelock|M. Havelock]], Archminister
    |chapter = Havelock's Diary
    }}
    <!--Categories-->
    [[Category:Lore Documents]]
    [[Category:Tales of Brightwood|Havelock's Diary]]
    [[Category:Havelock's Diary|Page 06 of 13]]
    <!--Interwiki-->
  `,
  target_lang: "FR",
  auth_key: "2c74f195-9304-2b45-b11a-e7ae7dd91166",
  // All optional parameters available in the official documentation can be defined here as well.
})
  .then((result) => {
    console.log(result.data);
  })
  .catch((error) => {
    console.error(error);
  });
