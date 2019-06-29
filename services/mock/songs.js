const SONGS_LIST = [{
    id: 1,
    title: "God's Plan",
    thumbnail: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/15/f1/bf/15f1bf30-54b7-e4a1-1a84-02cdc3b1fc2b/source/512x512bb.jpg",
    album: "Album",
    artist: "Drake ft. Someone",
    duration: "2:18",
    genre: "Pop",
    location: "https://cs1.music2k.com/download/20268539/V3RjbnExRWpPeTg5bnJ2L1pncHpEK0xPNlF3dklpeVYrRTA4OW5RSG5wVlV6Q25KeCs2MGowVnd3UHI1djkySldCOFJnRTBqd1NuTVpNVFNmdElGM0U1VjBCWjR3bktRS2RIaVVKYUNiaUJRNEs3bU5CeDNSeElQSktFcTVDTjA/Drake_Gods_Plan_(music2k.com).mp3"
}, {
    id: 2,
    title: "Bad Guy",
    thumbnail: "https://consequenceofsound.net/wp-content/uploads/2019/03/when-we-all-fall-asleep-new-album-release-stream-billie.jpg?quality=80&w=380&h=380&crop=1",
    album: "Album",
    artist: "Billie Eilish",
    duration: "3:34",
    genre: "Pop",
    location: "https://cs1.music2k.com/download/20412149/V3RjbnExRWpPeTg5bnJ2L1pncHpEK0xPNlF3dklpeVYrRTA4OW5RSG5wWG9PYmtZLzFuTFRWR0tnWStLMlR3UEFwcmF1dXQ5emRyTjROTUphc1pjTUh1VExxVTBDVFlMZlJXcGk0aGVHMGliRWFaMmFvUzJWK3FxRWxSWXhEc2Y/Billie_Eilish_bad_guy_(music2k.com).mp3"
}, {
    id: 3,
    title: "On My Way",
    thumbnail: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0imNPqrdFdOAC70U9gXlqQHaHa%26pid%3DApi&f=1",
    album: "Album",
    artist: "Alan Walker ft. Sabrina",
    duration: "3.13",
    genre: "Pop",
    location: "https://cs1.music2k.com/download/20409728/V3RjbnExRWpPeTg5bnJ2L1pncHpEK0xPNlF3dklpeVYrRTA4OW5RSG5wVWlmQUtrbGs2SkpmRHJrQkhJbDJ1UXRseG53SWswSkptYXRWRG9Ub2JEOGR4Z081eDZpVWx0cVgyUzhyc1k0K08zOE12eE1iWXJiZGtEaGxyVlNLMUU/Alan_Walker_Sabrina_Carpenter_Farruko_On_My_Way_(music2k.com).mp3"
}, {
    id: 4,
    title: "Rewrite the Stars",
    thumbnail: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fradioscoop.hu%2Fadat%2Falbumkepek%2FZac%2520Efron%2520And%2520Zendaya%2520-%2520Rewrite%2520The%2520Stars.jpg%3Fft%3D1516899637&f=1",
    album: "Album",
    artist: "James Arthur ft. Anne Marie",
    duration: "3.38",
    genre: "Pop",
    location: "https://cs1.music2k.com/download/20371739/V3RjbnExRWpPeTg5bnJ2L1pncHpEK0xPNlF3dklpeVYrRTA4OW5RSG5wVzA0cUZvdklIcWRGems0bWo0VDZpbno1QlFWVS9mVmppTTRZNlNZWkRiT0RGbGx3SU5DNWoxaEs4OGZRMUQrTzN3YlZPSERJcmNjNUhHN1ZBR2JOQTQ/James_Arthur_feat_Anne_Marie_Rewrite_The_Stars_(music2k.com).mp3"
}, {
    id: 5,
    title: "Believer",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg",
    album: "Album",
    artist: "Imagine Dragons",
    duration: "3:46",
    location: "https://cs1.music2k.com/download/20207439/V3RjbnExRWpPeTg5bnJ2L1pncHpEK0xPNlF3dklpeVYrRTA4OW5RSG5wV0gvd2QzQlp4S0lVaG16QjE3WlRzeG9hOEE2OEU4Z0k4Zm9xa0I5U0ZCNFZzNEVvY0xWeTFhcDZxbEN3TVZISmVDdmRldFFJcklpc3ZLdmJBRFFmclA/Imagine_Dragons_Believer_(music2k.com).mp3"
}, {
    id: 6,
    title: "Sunflower",
    thumbnail: "https://ssle.ulximg.com/image/750x750/cover/1539879018_90ca2a68e3319b9794eda00a055188dd.jpg/5d22c112a6eb31e4c69129be6f4fcfa0/1539879018_f22ee6817bb9f70cd7135058588b6e32.jpg",
    album: "Album",
    artist: "Post Malone, Swae Lee",
    duration: "2:38",
    genre: "Pop",
    location: "https://cs1.music2k.com/download/20401443/V3RjbnExRWpPeTg5bnJ2L1pncHpEK0xPNlF3dklpeVYrRTA4OW5RSG5wVTVOUHdaU0VaNTVqQ0t2OVpnMysvZmtCVXcxZXRUYTBHYU1pZnB4RFYwRFZNVm5IMVN3QmlhVmFheWY5L29VMzNWUlQzclY2eEFMaEhPK1oyL2NXMjE/Post_Malone_Swae_Lee_Sunflower_(music2k.com).mp3"
}, {
    id: 7,
    title: "I Like Me Better",
    thumbnail: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2Fe3f74a6d7d146e9ea2b4d8a85154ee5a.640x640x1.jpg&f=1",
    album: "Album",
    artist: "Lauv",
    duration: "3:17",
    genre: "Pop",
    location: "https://cs1.music2k.com/download/20224051/V3RjbnExRWpPeTg5bnJ2L1pncHpEK0xPNlF3dklpeVYrRTA4OW5RSG5wVTM2WC9pNTJFamdDK1lCS2ZaNkZFR2ZZeXBtdGNhTTFCcmhoNDJRQWJyMDlhWEpWcm9ocHd1SUFsVStxU1hRL1F2STVRcWpBL21tanRQOGpuU0pMSk4/Lauv_I_Like_Me_Better_(music2k.com).mp3"
}, {
    id: 8,
    title: "I Don't Care",
    thumbnail: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-44s0GHAWNIqx244ubrk5QHaHa%26pid%3DApi&f=1",
    album: "Album",
    artist: "Ed Sheeran ft. Justin Bieber",
    duration: "3:58",
    genre: "Pop",
    location: "https://cs1.music2k.com/download/20424089/V3RjbnExRWpPeTg5bnJ2L1pncHpEK0xPNlF3dklpeVYrRTA4OW5RSG5wVUZqRTVWNS9uUzZDL0JKNndMTForOXlFcUJUcWlNYnBEM1RrRFcyeWRaV3JHOWV4eGVWNm9VSncwT1dJV3IwY3JuY0VqcHY0T0pIOURZcGVUSEs4ZEw/Ed_Sheeran_I_Dont_Care_(music2k.com).mp3"
}];

export default SONGS_LIST;