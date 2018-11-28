import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    searchArticles: [],
    topic: "",
    start_year: "",
    end_year: ""
  };

  saveArticle = event => {
    const title = event.target.title;
    const url = event.target.url;
    const date = event.target.date;
    
    const arr = { title, url, date };

    console.log(arr);

    API.saveArticle(arr);
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.start_year && this.state.end_year) {
      API.searchArticles(this.state.topic, this.state.start_year, this.state.end_year)
        .then(res =>
          this.setState({ searchArticles: res.data.response.docs })
        )
        .catch(err => console.log(err));
    }
  };

  render() {
    return <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search</h1>
            </Jumbotron>
            <form>
              <Input value={this.state.topic} onChange={this.handleInputChange} name="topic" placeholder="Topic (required)" />
              <Input value={this.state.start_year} onChange={this.handleInputChange} name="start_year" placeholder="Start Year (required)" />
              <Input value={this.state.end_year} onChange={this.handleInputChange} name='end_year' placeholder='End Year (required)' />
              <FormBtn disabled={!(this.state.topic && this.state.start_year && this.state.end_year)} onClick={this.handleFormSubmit}>
                Search Articles
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Results</h1>
            </Jumbotron>
            <List>
              {
                this.state.searchArticles.length ? 
                this.state.searchArticles.slice(0, 5).map(article => (
                  <ListItem
                    key={article._id}
                    title={article.headline.main}
                    url={article.web_url}
                    date={article.pub_date}
                    saveArticle={this.saveArticle}
                  />
                )) : 
                <h2>No search results</h2>
              }
            </List>
          </Col>
        </Row>
      </Container>;
  }
}

export default Articles;
