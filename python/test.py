# print("Hello world")
# print("Please type your favorite color:")
# favoriteColor = input()
# print("Your favorite color is, " + favoriteColor)

story = (
    "One day my {} friend and I decided to go to the {} game in {}. " + 
    "We really wanted to see the {} play the {}. " +
    "So, we {} our {} down to the {} and brought some {}s. " +
    "We got into the game and it was a lot of fun. " +
    "We ate some {} {} and drank some {} {}. " +
    "We had a great time! We plan to go ahead next year!"
)

# create a dictionary to lookup word by type 
word_dict = {
    'adjective','greed','abrasive','grubby','rich','harsh','tasty',
    'city name','Davao','Digos','Gensan','Tagum','Panabo','Butuan',
    'noun','people','map','music','dog','toko','ball','bananacue','sago',
    'action verb','run','fall','crawl','scurry','cry','watch','swim','jump','bounce',
    'sports noun','ball','mit','puck','uniform','helmet','scoreboard','player',
    'place','park','desert','forest','store','restaurant','waterfall'
}

def get_word(type, local_dict, randint):
    words = local_dict[type]
    cnt = len(words)-1
    index = randint(0, cnt)
    return local_dict[type].pop(index)

def create_function(copy):
    local_dict = copy.deepcopy(word_dict)
    return story.format(
        get_word('adjective', local_dict),
        get_word('sports noun', local_dict),
        get_word('city name', local_dict),
        get_word('noun', local_dict),
        get_word('noun', local_dict),
        get_word('action verb', local_dict),
        get_word('noun', local_dict),
        get_word('place', local_dict),
        get_word('noun', local_dict),
        get_word('adjective', local_dict),
        get_word('noun', local_dict),
        get_word('adjective', local_dict),
        get_word('noun', local_dict)
    )

print("STORY 1: ")
print(create_function())
print()
print("STORY 2: ")
print(create_function())