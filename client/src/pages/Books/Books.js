import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    searchArticles: [],
    topic: "",
    start_year: "",
    end_year: ""
  };

  saveArticle = event => {
    const e = event.target;
    const id = e.getAttribute('id');
    const title = e.getAttribute('title');
    const url = e.getAttribute('url');
    const date = e.getAttribute('date');
    const searchArticles = this.state.searchArticles;

    const arr = { id, title, url, date };

    API.saveArticle(arr)
      .then(res => {
        const filteredArray = searchArticles.filter(article => article.id !== id);
        this.setState({ searchArticles: filteredArray });
      })
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
        .then(res => {
          console.log(res.data.response.docs);
          this.setState({ searchArticles: res.data.response.docs });
        })
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
              Topic (required)
              <Input value={this.state.topic} onChange={this.handleInputChange} name="topic" placeholder="Green Energy" />
              Start Year (required)
              <Input value={this.state.start_year} onChange={this.handleInputChange} name="start_year" placeholder="YYYYMMDD" />
              End Year (required)
              <Input value={this.state.end_year} onChange={this.handleInputChange} name="end_year" placeholder="YYYYMMDD" />
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
              {this.state.searchArticles.length ? this.state.searchArticles
                  .slice(0, 5)
                  .map(article => {
                    console.log(article);
                    return (
                      <ListItem
                        key={article._id}
                        id={article._id}
                        title={article.headline.main}
                        url={article.web_url}
                        date={article.pub_date}
                        saveArticle={this.saveArticle}
                      />
                    );
                  }) : <h2>No search results</h2>}
            </List>
          </Col>
        </Row>
      </Container>;
  }
}

export default Articles;
