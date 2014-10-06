# -*- coding: utf-8 -*-
from gdata import youtube as yt
from gdata.youtube import service as yts

from gdata.youtube import service

def comments_generator(client, video_id):
    comment_feed = client.GetYouTubeVideoCommentFeed(video_id=video_id)
    while comment_feed is not None:
        for comment in comment_feed.entry:
             yield comment
        next_link = comment_feed.GetNextLink()
        if next_link is None:
             comment_feed = None
        else:
             comment_feed = client.GetYouTubeVideoCommentFeed(next_link.href)

USERNAME = 'julia.labelle10@gmail.com'
PASSWORD = 'x' #removed for submission

VIDEO_ID1 = 'kHue-HaXXzg' #frozen
let_it_go_f = 'Desktop/comments_let_it_go.txt'

VIDEO_ID2 = 'kffacxfA7G4' #baby
baby_f = 'Desktop/comments_baby.txt'

VIDEO_ID3 = '7PCkvCPvDXk' #all about that bass
all_about_that_bass_f = 'Desktop/comments_all_about_that_bass.txt'

VIDEO_ID4 = '0Gl2QnHNpkA' #as long as you love me
as_long_as_you_love_me_f = 'Desktop/comments_as_long_as_you_love_me.txt'

client = service.YouTubeService()
client.ClientLogin(USERNAME, PASSWORD)


#### LET IT GO
#f = open(let_it_go_f, 'w')

#for comment in comments_generator(client, VIDEO_ID1):
#    author_name = comment.author[0].name.text
#    text = comment.content.text
#    f.write("{}\n".format(text))
#f.close()

#### BABY
#f = open(baby_f, 'w')

#for comment in comments_generator(client, VIDEO_ID2):
#    author_name = comment.author[0].name.text
#    text = comment.content.text
#    f.write("{}\n".format(text)) 
#f.close()   
       
#### ALL ABOUT THAT BASS
f = open(all_about_that_bass_f, 'w')

for comment in comments_generator(client, VIDEO_ID3):
    author_name = comment.author[0].name.text
    text = comment.content.text
    f.write("{}\n".format(text))
f.close()

#### AS LONG AS YOU LOVE ME
#f = open(as_long_as_you_love_me_f, 'w')

#for comment in comments_generator(client, VIDEO_ID4):
#    author_name = comment.author[0].name.text
#    text = comment.content.text
#    f.write("{}\n".format(text)) 
#f.close()         
             
                
                   
                         
#from re import compile
#l=compile("([\w,.'\x92]*\w)").findall(open('youtube_comments.rtf','r').read().lower())
#f_2=open('word_count.rtf','w')
#for word in set(l):
#    print>>f_2, word, '\t', l.count(word)
#f_2.close()
