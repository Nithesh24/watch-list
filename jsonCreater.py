string = """
movies_watched	movies_to_watch	series_watched	series_to_watch	anime_watched	anime_to_watch	manga_watched	manga_to_watch	books_watched	books_to_watch	manhwa_watched	manhwa_to_watch	games_watched	games_to_watch
evil dead	speed	prison break	moon knight	naruto	bleach	chainsaw man	beserk	the alchemist	a wild sheep chase	viral hit	legend of the northern blade	spider-man	miles morals
john wick	matrix	dare devil		hyouka	one piece	tokyo revengers	vagabond	to kill a mocking bird		lookism	nano machine	valorant	uncharted
john wick 2	matrix 2	punisher		kuroko no baske	hunter x hunter	blue lock	vinland saga	1984		solo leveling		sekiro	last of uss
john wick 3	matrix 3			terror no resonance			sun ken rock	the  monk who sold ferrari		magic emperor		elden rings	rainbow 6
spiderman 1				assassination classroom				wings of fire		teenage mercenary		far cry 3	dark souls
spiderman 2				attack on titan				rich dad poor dad		the bully in charge		prince of persia	
spiderman 3				Horimiya				a brief history of time		the archmage returns of 4k years		inside	
amazing spiderman				death note				animal farm		the beginning after the end		battle field 5	
amazing spiderman 2				My Hero Academia						study group			
				classroom of elite						return of the disaster-class hero			
"""


rows = string.split("\n")

temp =  []
for i in rows:
    temp.append(i.split("\t"))

rows = temp
rows.pop()
rows.pop(0)
rows.pop(0)

cat = [
    "movies",
    "series",
    "anime",
    "manga",
    "books",
    "manhwa",
    "games"
]

counter = 0
d = {
    "watched" : [],
    "to_watch" : []
}
json_data = {}
for i in cat:
    watched = []
    to_watch = []
    for j in rows:
        watched.append(j[counter])
    counter += 1
    for j in rows:
        to_watch.append(j[counter])

    d["watched"] = watched
    d["to_watch"] = to_watch
    

    # print(dict)
    json_data[i] = dict(d)

    counter+= 1

print(json_data)  

import json
with open("data.json", "w") as f:
    f.write(json.dumps(json_data))