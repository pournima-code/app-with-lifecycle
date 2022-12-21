import React, { Component } from 'react'

class Post extends Component {
    constructor(props){
        super(props);
        this.state = { 
            post:[]
        } 
    }

    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(response => response.json())
        .then(json => this.setState({post:json}))
    }
    

    render() { 
        console.log(this.state.post)
        return ( 
        <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Blog posts</h1>
        </div>
        {
            this.state.post ?  this.state.post.map((post)=>(<div className="card" key={post.id}>
                                <div className="card-header">
                                #{post.id} {post.title}
                                </div>
                                <div className="card-body">
                                <p className="card-text">{post.body}</p>
                                </div>
                            </div>)) :"hi"
        }
        
      </div>);
    }
}
 
export default Post;