var div = document.createElement('div');
div.style.width = "720px";
div.style.border = "2px solid purple"


var input = document.createElement('input');
input.style.padding = '10px'
input.style.margin = "10px"
input.setAttribute('type', 'text')
input.setAttribute('id', 'data')
input.setAttribute('placeholder', 'Enter user name')
div.append(input);

var br = document.createElement('br')
div.append(br)

var btn = document.createElement('button');
btn.style.padding = '10px';
btn.style.margin = '10px'
btn.innerHTML = "Click Me";
btn.addEventListener('click', foo)
div.append(btn)

async function foo() {
    try {
        var name2 = document.getElementById('data').value
        console.log(name2)
        let res2 = await fetch(`https://api.github.com/users/${name2}`)
        let result2 = await res2.json();
        console.log(result2)

        var name = document.getElementById('data').value
        console.log(name)
        let res = await fetch(`https://api.github.com/users/${name}/repos`)
        let result = await res.json();
        console.log(result)

        for (var i = 0; i < result.length; i++) {
            var div1 = document.createElement('div');
            div1.style.width = "500px";
            div1.style.border = '1px solid purple';
            div.append(div1)


            var p19 = document.createElement('p');
            p19.innerHTML = `Avatar_url: ${result2.avatar_url} <br> <br>
                            Bio: ${result2.bio} <br> <br>
                            Blog: ${result2.blog} <br> <br>
                            Comapny: ${result2.company} <br> <br>
                            Created at: ${result2.created_at} <br> <br> 
                            Email: ${result2.email} <br> <br> 
                            Events_url: ${result2.events_url} <br> <br> 
                            Followers: ${result2.followers} <br> <br> 
                            Followers_url: ${result2.followers_url} <br> <br> 
                            Following: ${result2.following} <br> <br> 
                            Following_url: ${result2.following_url} <br> <br> 
                            Gists_url: ${result2.gists_url} <br> <br> 
                            Gravatar_id: ${result2.gravatar_id} <br> <br> 

                            Hireable:${result2.hireable} <br> <br>
                            HTML_url: ${result2.html_url} <br> <br> 
                            id: ${result2.id} <br> <br> 
                            Location: ${result2.location} <br> <br> 
                            Login: ${result2.login} <br> <br> 

                            Name: ${result2.name} <br> <br> 
                            Node_id: ${result2.node_id} <br> <br> 

                            Oraganization_url: ${result2.organizations_url} <br> <br> 
                            Public_gists: ${result2.public_gists} <br> <br> 
                            Public repos: ${result2.public_repos} <br> <br>

                            Received_events_url: ${result2.received_events_url} <br> <br>
                            Repos_url: ${result2.repos_url} <br> <br>

                            Site Admin: ${result2.site_admin} <br> <br>
                            Starred_url: ${result2.starred_url} <br> <br>
                            Subscriptions_url: ${result2.subscriptions_url} <br> <br>
                            
                            Twitter Username: ${result2.twitter_username} <br> <br>
                            
                            Type: ${result2.type} <br> <br>
                            Updated at: ${result2.updated_at} <br> <br>
                            Url: ${result2.url}`;
            div1.append(p19)

            var div2 = document.createElement('div');
            div2.innerHTML = `Forks_count: ${result[i].forks_count} <br> <br>
                               Stars_count : ${result[i].stargazers_count} `
            div2.style.fontWeight = "bold"
            div1.append(div2)

            var br2 = document.createElement('br')
            div1.append(br2)
            
            var p=document.createElement('p')
            p.innerHTML="Repository's owner Image";
            p.style.fontWeight="bold"
            div1.append(p)

            var image1 = document.createElement("img")
            image1.setAttribute("src", result[i].owner.avatar_url)
            image1.style.width = "190PX"
            image1.style.height = "150px"
            div1.append(image1)

            var br3 = document.createElement('br')
            div1.append(br3)

            var a1 = document.createElement('a');
            a1.setAttribute("href", result[i].owner.repos_url)
            a1.setAttribute('target', '_blank')
            a1.style.fontWeight = 'bold'
            a1.innerHTML = 'REPOSITORY LINK'
            div1.append(a1)

            var br3 = document.createElement('br')
            div1.append(br3)
            var br4 = document.createElement('br')
            div1.append(br4)

        }
    }
    catch (error) {
        console.log(error)
    }
}
document.body.append(div)