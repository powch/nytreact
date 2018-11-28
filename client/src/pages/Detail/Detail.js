import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    articles: []
  };
 
  componentDidMount() {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <h1 className='display-4'>Favorites</h1>
        </Jumbotron>
        <Container>
          <List>
            {(this.state.articles.length) 
              ? this.state.articles
                .map(article => (
                  <ListItem
                    key={article._id}
                    id={article._id}
                    title={article.title}
                    url={article.url}
                    date={article.date}
                    deleteArticle={this.deleteArticle}
                    favorite={'true'}
                  />
              )) 
              : <h3>No Favorites Added!</h3>
              
            }
          </List>
        </Container>
      </Wrapper>
    );
  }
}

export default Detail;
