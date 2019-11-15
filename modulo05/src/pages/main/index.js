import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'

import api from '../../services/api'

import { Container, Form, SubmitButton, List } from './styles'

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    isLoading: false,
  }

  componentDidMount() {
    const repositories = localStorage.getItem('repositories')

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) })
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories))
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault()

    this.setState({ isLoading: true })

    const { newRepo, repositories } = this.state

    const response = await api.get(`/repos/${newRepo}`)

    const data = {
      name: response.data.full_name,
    }

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      isLoading: false,
    })
  }

  render() {
    const { newRepo, repositories, isLoading } = this.state

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton isLoading={isLoading}>
            {isLoading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              {/* encodeURIComponent é uma função do javascript que realiza o encode da barra */}
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    )
  }
}

export default Main